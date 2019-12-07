const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

global.mta = require('./api/models/linesModel');
const routes = require('./api/routes/linesRoutes');

mongoose.Promise = global.Promise;
mongoose.connect(
    'mongodb+srv://user123:user123@mta-cil4h.mongodb.net/test?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    () => console.log('Connected to DB')
);

const port = 5000;
const server = express();

server.use(cors());
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

routes(server);
server.listen(port);

server.use((req, res) => {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

console.log(`Server running at port ${port}`);