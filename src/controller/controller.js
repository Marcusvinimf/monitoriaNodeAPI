const fetch = require('node-fetch')

class Controller {

    static testeRota(){
        return ((req, res)=> {res.send('<h1 style="color: red">foi, amem</h1>')})
    }

    static marcusRota(){
        return ((req, res)=> {
            fetch('https://api.adviceslip.com/advice')
            .then(dados => dados.json())
            .then(dados => res.send(`id: ${dados.slip.id} <br><br> mensagem: ${dados.slip.advice}`))
        })
    }

    static nadaRota(){
        return ((req, res)=> {res.send('<h1 style="color: red">foi 2</h1>')})
    }

    static postTeste(){
        return (req, res)=>{
            console.log(req.body[1].nome, req.body[1].sobrenome)
            res.send('ta la')
        }
    }

    static postTesteDois(){
        return ((req, res)=> {
            fetch('https://api.adviceslip.com/advice')
            .then(dados => dados.json())
            .then(dados => res.send(`conselho para: ${req.body[0].nome} 
            viver bem com sua namorada ${req.body[1].nome} ${req.body[1].sobrenome} 
            <br><br> mensagem: ${dados.slip.advice}`))
        })
    }
}

module.exports = Controller