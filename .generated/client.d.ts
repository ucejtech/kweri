/**
 * Stub: Run `kweri-gen <your-openapi-spec>` to generate your API client.
 * This file is replaced when you run the generator.
 */
export interface ClientConfig {
  baseURL: string
  fetcher?: (options: { method: string; url: string; body?: unknown }) => Promise<Response>
}

export declare class GeneratedClient {
  constructor(config: ClientConfig)
}

export declare function createClient(config: ClientConfig): GeneratedClient
