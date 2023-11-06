const http = require('http');
var express = require('express');
const socketIo = require('socket.io');
const cors = require('cors');
const PORT=3000;

const app = express();
const server = http.createServer(app);
const io = socketIo(server,{
  cors:{
    origin:'*',
    method:['GET','POST']
  }
});


io.on('connection', (socket) => {
    console.log('server has started!');
  
    socket.on('join',(data)=>{
      console.log(`${socket.id} 가 ${data} room 에 입장`);
      socket.join(data);
    });


    socket.on('message', (data) => {
      console.log('reicevied', data);
      io.emit('message', data); // send all client
    });
});
  

server.listen(PORT, () => {
  console.log(`server is running at ${PORT} port`);
});