import { Value } from '@sinclair/typebox/value'
import type { Endpoint } from '../contract/index.js'
import { ValidationError, type Fetcher } from '../types/index.js'

export class ApiClient {
  constructor(
    private baseURL: string,
    private fetcher: Fetcher
  ) {}

  async execute<T extends Endpoint>(endpoint: T, params: Record<string, any>): Promise<any> {
    const validationResult = Value.Check(endpoint.params, params)
    if (!validationResult) {
      const errors = Array.from(Value.Errors(endpoint.params, params))
        .map(err => ({ path: err.path, message: err.message }))
      throw new ValidationError(
        `Invalid parameters for ${endpoint.method} ${endpoint.path}`,
        errors
      )
    }

    const url = this.buildUrl(endpoint.path, params)
    const body = params.body

    const response = await this.fetcher({
      method: endpoint.method,
      url,
      body
    })

    return response
  }

  private buildUrl(path: string, params: Record<string, any>): string {
    let url = `${this.baseURL}${path}`

    const pathParamRegex = /\{([^}]+)\}/g
    url = url.replace(pathParamRegex, (match, paramName) => {
      const value = params[paramName]
      if (value === undefined) {
        throw new Error(`Missing required path parameter: ${paramName}`)
      }
      return encodeURIComponent(String(value))
    })

    const queryParams: Record<string, any> = {}
    for (const [key, value] of Object.entries(params)) {
      if (!path.includes(`{${key}}`) && key !== 'body' && value !== undefined) {
        queryParams[key] = value
      }
    }

    const queryKeys = Object.keys(queryParams)
    if (queryKeys.length > 0) {
      const queryString = queryKeys
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(String(queryParams[key]))}`)
        .join('&')
      url += `?${queryString}`
    }

    return url
  }
}
