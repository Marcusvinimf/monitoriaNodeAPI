const fetch = require('node-fetch')

class Controller {

    static testeRota(){
        return ((req, res)=> {res.send('<h1 style="color: red">foi, amem</h1>')})
    }

    static marcusRota(){
        return ((req, res)=> {res.send('<h1 style="color: red">foi 1</h1>')})
    }

    static nadaRota(){
        return ((req, res)=> {res.send('<h1 style="color: red">foi 2</h1>')})
    }
}

module.exports = Controller