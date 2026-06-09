import { describe, it, expect } from 'bun:test';
import {
  aliasToMethodName,
  pickSuccessCode,
  normalizeEndpoints,
  buildIR,
  SUPPORTED_METHODS
} from './ir.js';

const FIXTURE = new URL('./__fixtures__/sample-spec.json', import.meta.url)
  .pathname;

describe('aliasToMethodName', () => {
  it('strips the http-method prefix and camelCases', () => {
    expect(aliasToMethodName('get_ListUsers')).toBe('listUsers');
    expect(aliasToMethodName('post_CreateUser')).toBe('createUser');
    expect(aliasToMethodName('delete_DeleteUser')).toBe('deleteUser');
  });

  it('handles separators and odd casing', () => {
    expect(aliasToMethodName('get_get-user-by-id')).toBe('getUserById');
    expect(aliasToMethodName('patch_user.profile')).toBe('userProfile');
  });

  it('reduces a bare method-prefix alias to the method word', () => {
    expect(aliasToMethodName('get_')).toBe('get');
  });
});

describe('pickSuccessCode', () => {
  it('picks the lowest 2xx code', () => {
    expect(pickSuccessCode(['200', '400'])).toBe(200);
    expect(pickSuccessCode(['500', '201'])).toBe(201);
    expect(pickSuccessCode(['204'])).toBe(204);
  });

  it('returns null when there is no 2xx', () => {
    expect(pickSuccessCode(['400', '500'])).toBeNull();
    expect(pickSuccessCode(null)).toBeNull();
  });
});

describe('normalizeEndpoints', () => {
  const fakeList = [
    {
      method: 'GET',
      path: '/users',
      meta: { alias: 'get_ListUsers', hasParameters: true, areParametersRequired: false },
      responses: { 200: {} }
    },
    {
      method: 'POST',
      path: '/users',
      meta: { alias: 'post_CreateUser', hasParameters: true, areParametersRequired: true },
      responses: { 201: {} }
    },
    {
      method: 'HEAD',
      path: '/users',
      meta: { alias: 'head_HeadUsers', hasParameters: false, areParametersRequired: false },
      responses: { 200: {} }
    }
  ];

  it('maps GET to the query path and writes to the mutate path', () => {
    const { endpoints } = normalizeEndpoints(fakeList);
    const get = endpoints.find((e) => e.methodName === 'listUsers')!;
    const post = endpoints.find((e) => e.methodName === 'createUser')!;
    expect(get.isQuery).toBe(true);
    expect(post.isQuery).toBe(false);
  });

  it('skips unsupported methods and reports them', () => {
    const { endpoints, skipped } = normalizeEndpoints(fakeList);
    expect(endpoints.map((e) => e.method)).toEqual(['get', 'post']);
    expect(skipped).toEqual(['HEAD /users']);
    expect(SUPPORTED_METHODS.has('head')).toBe(false);
  });

  it('keeps schemaName aligned with the typed-openapi alias', () => {
    const { endpoints } = normalizeEndpoints(fakeList);
    expect(endpoints[0].schemaName).toBe('get_ListUsers');
  });

  it('de-collides duplicate method names deterministically', () => {
    const dupes = [
      { method: 'GET', path: '/a', meta: { alias: 'get_Thing', hasParameters: false, areParametersRequired: false }, responses: { 200: {} } },
      { method: 'GET', path: '/b', meta: { alias: 'get_thing', hasParameters: false, areParametersRequired: false }, responses: { 200: {} } }
    ];
    const { endpoints } = normalizeEndpoints(dupes);
    expect(endpoints.map((e) => e.methodName)).toEqual(['thing', 'thing2']);
  });
});

describe('buildIR (integration with typed-openapi)', () => {
  it('produces normalized endpoints from a real spec', async () => {
    const { endpoints } = await buildIR(FIXTURE);
    const byName = Object.fromEntries(endpoints.map((e) => [e.methodName, e]));

    expect(Object.keys(byName).sort()).toEqual([
      'createUser',
      'deleteUser',
      'getUser',
      'listUsers'
    ]);

    expect(byName.listUsers).toMatchObject({
      method: 'get',
      path: '/users',
      schemaName: 'get_ListUsers',
      isQuery: true,
      hasParameters: true,
      successCode: 200
    });
    expect(byName.createUser).toMatchObject({
      method: 'post',
      isQuery: false,
      successCode: 201
    });
    expect(byName.deleteUser.successCode).toBe(204);
  });
});
