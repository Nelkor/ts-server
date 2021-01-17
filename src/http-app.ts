import { IncomingMessage, ServerResponse } from 'http'

export const onRequest = (
  req: IncomingMessage,
  res: ServerResponse,
): void => {
  res.write('Hi there')
  res.end()
}
