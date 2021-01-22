export type RequestPayload = {
  // headers
  // params
  body: Buffer | null
}

export type RequestHandler = (payload: RequestPayload) => void

export type Route = {
  method: 'GET' | 'POST'
  path: string[]
  fn: RequestHandler
}
