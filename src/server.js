import { createServer } from 'http';
import { Server } from 'ws';
import { onRequest } from './http-app';
import { onConnection } from './ws-app';
export const listen = (port) => {
    const server = createServer(onRequest);
    const wsServer = new Server({ server });
    wsServer.on('connection', onConnection);
    server.listen(port);
    console.log(`Started at ${port} port`);
};
