const Controller = require('./controller/controller')

module.exports = (app)=> {
    app.get('/teste', Controller.testeRota())

    app.get('/marcus', Controller.marcusRota())

    app.get('/', Controller.nadaRota())

    app.post('/teste', (req, res)=>{
        console.log(req.body[1].nome, req.body[1].sobrenome)
        res.send('ta la')
    })
}