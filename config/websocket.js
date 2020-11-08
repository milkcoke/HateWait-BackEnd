// webSocket Initialize
const webSocket = require('ws');

module.exports = function(server) {
    //webSocket Server Create!
    const webSocketServer = new webSocket.Server(server);

    // Register Event
    webSocketServer.on('connection', (socketClient, request)=>{
        const clientIp = request.connection.remoteAddress;
        console.log(`${clientIp} 클라이언트 접속 요청 !`);

        socketClient.on('message', requestMessage=>{
            console.log('클라이언트로 부터 받은 메시지 : ', requestMessage);
        })
        socketClient.on('error', error=>{
            console.error(error, '클라이언트 연결 중 오류');
        })
        socketClient.on('close', ()=>{
            console.log('socket closed');
            console.log(`${clientIp} 클라이언트 연결 종료`);
        });
    });
}

