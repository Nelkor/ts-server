export const onConnection = (socket) => {
    const onMessage = (data) => {
        socket.send('You say: ' + data);
    };
    socket.on('message', onMessage);
};
