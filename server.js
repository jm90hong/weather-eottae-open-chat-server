const http = require('http');
var express = require('express');
const socketIo = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('클라이언트가 연결되었습니다.');
  
    socket.on('message', (data) => {
      console.log('메시지를 받았습니다:', data);
      io.emit('message', data); // 모든 클라이언트에게 메시지를 전송합니다.
    });
  });
  
  server.listen(3000, () => {
    console.log('서버가 3000 포트에서 실행 중입니다.');
  });