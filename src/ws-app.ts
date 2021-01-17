import WebSocket from 'ws'

export const onConnection = (socket: WebSocket): void => {
  const onMessage = (data: WebSocket.Data) => {
    socket.send('You say: ' + data)
  }

  socket.on('message', onMessage)
}
