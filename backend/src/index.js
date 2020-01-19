    const express = require('express');
    const mongoose  = require('mongoose');
    const cors = require('cors');
    const http = require('http'); 
    const routes = require('./routes');
    const { setupWebsocket } = require('./websocket');

    const app = express();

    const server = http.Server(app);

    setupWebsocket(server);

    mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-jwap5.mongodb.net/week10?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    // pode usar o { origin: 'http://localhost:3000' } para configurar origin
    app.use(cors());
    app.use(express.json());
    app.use(routes);

    // Métodos HTTP: Get, Post, Put, Delete

    // Tipos de parametros:

    // Query Params; request.query (Filtros, ordenação, paginação, ...)
    // Route Params; request.params (identificar recurso na alteração ou remoção)
    // Body; request.body (dados para criação ou alteração de um registro)

    // MongoDB (Não-relacional)

    

    server.listen(3333);
