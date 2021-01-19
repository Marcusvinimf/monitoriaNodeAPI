const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(bodyParser.json())

const routes = require('./rotas');

const port = 8080

routes(app);

app.listen(port, ()=>console.log(`foi mermo!!!`));