const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');

const rotaProdutos = require('./routes/produtos');
const routerPedidos = require("./routes/pedidos");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Header",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
        return res.status(200).send({})
    }

    next()
});

app.use('/produtos', rotaProdutos)
app.use('/pedidos', routerPedidos)

app.use((req, res, next) => {
    res.status(404).send({
        error: 'Rota não foi encontrada!',
    })
})

module.exports = app;

