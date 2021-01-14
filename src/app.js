const express = require('express');
const app = express();
const port = 8080

const routes = require('./rotas');

routes(app);

app.listen(port, ()=>console.log(`foi mermo!!!`));