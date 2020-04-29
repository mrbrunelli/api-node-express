const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('./models/Artigo')
const Artigo = mongoose.model('artigo')

const app = express()

app.use(express.json())

app.use((req, res, next) => {
    console.log('Acessou o Middleware!')
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE")
    app.use(cors())
    next()
})

mongoose.connect('mongodb://localhost/teste', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conexão com o MongoDB realizada com sucesso!')
}).catch((erro) => {
    console.log('Erro ao conectar com o MongoDB!')
})

// Listar todos os artigos cadastrados
app.get('/artigo', (req, res) => {
    Artigo.find({}).then((artigo) => {
        return res.json(artigo)
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: 'Nenhum artigo encontrado!'
        })
    })
})

// Listar artigo por id
app.get('/artigo/:id', (req, res) => {
    Artigo.findOne({ _id: req.params.id }).then((artigo) => {
        return res.json(artigo)
    }).catch((err) => {
        return res.status(400).json({
            error: true,
            message: 'Nenuma mensagem encontrada!'
        })
    })
})

// Cadastrar um artigo
app.post('/artigo', (req, res) => {
    const artigo = Artigo.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Error: Artigo não foi cadastrado com sucesso!"
        })

        // Não preciso retornar o status 200, pois caso dê sucesso ele já faz isso sozinho
        return res.status(200).json({
            error: false,
            message: "Artigo cadastrado com sucesso!"
        })
    })
})

// Atualizar um artigo pela id
app.put('/artigo/:id', (req, res) => {
    const artigo = Artigo.updateOne({ _id: req.params.id }, req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: 'Error: Artigo não foi editado!'
        })

        return res.json({
            error: false,
            message: 'Artigo editado com sucesso!'
        })
    })
})

// Deletar um artigo pela id
app.delete('/artigo/:id', (req, res) => {
    const artigo = Artigo.deleteOne({ _id: req.params.id }, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: 'Error: Artigo não foi deletado!'
        })

        return res.json({
            error: false,
            message: 'Artigo deletado com sucesso!'
        })
    })
})

// Ouvir a aplicação na porta 8080
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/')
})