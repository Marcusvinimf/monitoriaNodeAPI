const Controller = require('./controller/controller')

module.exports = (app)=> {
    app.get('/teste', Controller.testeRota())

    app.get('/marcus', Controller.marcusRota())

    app.get('/', Controller.nadaRota())
}