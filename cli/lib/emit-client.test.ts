import { describe, it, expect } from 'bun:test';
import { emitMethod, emitClient } from './emit-client.js';

const query = {
  method: 'get',
  path: '/users/{id}',
  schemaName: 'get_GetUser',
  methodName: 'getUser',
  hasParameters: true,
  parametersRequired: true,
  isQuery: true,
  successCode: 200
};

const mutation = {
  method: 'post',
  path: '/users',
  schemaName: 'post_CreateUser',
  methodName: 'createUser',
  hasParameters: true,
  parametersRequired: true,
  isQuery: false,
  successCode: 201
};

describe('emitMethod', () => {
  it('routes GETs through kweri.query', () => {
    const out = emitMethod(query);
    expect(out).toContain("this.kweri.query(__endpoint('GET', '/users/{id}')");
    expect(out).toContain("Static<typeof get_GetUser>['parameters']");
    expect(out).toContain("Static<typeof get_GetUser>['responses'][200]");
  });

  it('routes writes through kweri.mutate', () => {
    const out = emitMethod(mutation);
    expect(out).toContain("this.kweri.mutate(__endpoint('POST', '/users')");
    expect(out).toContain("['responses'][201]");
  });

  it('omits the params argument when the endpoint has none', () => {
    const out = emitMethod({ ...query, hasParameters: false, methodName: 'ping' });
    expect(out).toContain('async ping(): Promise<');
    expect(out).toContain(', {})');
  });

  it('defaults optional params to {} and omits the default when required', () => {
    const optional = emitMethod({ ...query, parametersRequired: false });
    expect(optional).toContain('= {} as ');
    const required = emitMethod(query);
    expect(required).not.toContain('= {} as ');
  });

  it('returns unknown when there is no success code', () => {
    const out = emitMethod({ ...query, successCode: null });
    expect(out).toContain('Promise<unknown>');
  });
});

describe('emitClient', () => {
  it('emits a GeneratedClient + createClient that never calls fetch directly', () => {
    const out = emitClient([query, mutation]);
    expect(out).toContain('export class GeneratedClient');
    expect(out).toContain('constructor(kweri: Kweri)')
    // Parameter properties emit runtime code — banned under erasableSyntaxOnly.
    expect(out).not.toContain('private kweri: Kweri)');
    expect(out).toContain('export function createClient(kweri: Kweri)');
    // The whole point: no raw fetch in the generated client.
    expect(out).not.toContain('fetch(');
    expect(out).toMatchSnapshot();
  });
});
