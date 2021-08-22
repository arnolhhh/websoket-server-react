// Server Model: Contiene todo el servidor de express + socket.io configurado
const Server = require('./models/server');

// Paquete para leer y establecer las variables de entorno
 require('dotenv').config();


// Inicializar la instancia del server
const server = new Server();

// Ejecutar el server
server.execute();

/*
const express=require('express');
const app = require('express')();
const server = require('http').createServer(app);

const io = require('socket.io')(server);

app.use(express.static(__dirname + '/public'));

io.on('connection', (socket)  => { 
    socket.emit('mensaje-benvenida','bienvenido servidor');
    console.log('cliente conectado');

    
    socket.on('mensage-cliente', ( data )=>{
        console.log(data);
    });

    socket.on('mensage-to-server', ( data )=>{
        console.log(data);
        io.emit('mensage-from-server',data);
    });
    
 });


server.listen(8080,()=>{console.log('server corriendo :8080');});
*/