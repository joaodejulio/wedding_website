const express = require('express');
const server = express();
const MessageRoutes = require('./routes/MessageRoutes');
const ImageRoutes = require('./routes/ImageRoutes');
const UserRoutes = require('./routes/UserRoutes');
const ProductRoutes = require('./routes/ProductRoutes');

server.use(express.json());

server.use('/message', MessageRoutes);

server.use('/image', ImageRoutes);

server.use('/user', UserRoutes);

server.use('/product', ProductRoutes);


server.listen(3000, ()=>{
    console.log('API online');
});