export type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export interface FetcherOptions {
  method: string
  url: string
  body?: any
}

export type Fetcher = (options: FetcherOptions) => Promise<Response>

export class ValidationError extends Error {
  errors: Array<{ path: string; message: string }>
  
  constructor(message: string, errors: Array<{ path: string; message: string }>) {
    super(message)
    this.name = 'ValidationError'
    this.errors = errors
  }
}
