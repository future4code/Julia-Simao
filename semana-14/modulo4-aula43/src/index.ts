import express from 'express'
import cors from 'cors'
import { countries } from './data'
import { country } from './types'

const app = express()

app.use(express.json()) //função que transforma o body de string em objeto
app.use(cors()) // coloca uma autorização

//TESTE
app.get(
    "/", 
    (req, res) => { res.send("Olá do express") }
)

//BUSCAR TODOS OS PAÍSES
app.get('/countries', (req, res) => {
    const result = countries.map((country) => ({
        id: country.id,
        country: country.name
    }))
    res
        .status(200)
        .send(result)
})

app.get('countries/search', (req, res) => {

    const { name } = req.query
    
    let result: country[] = countries

    // if(req.query.name === 'name')
    //     result = result.filter(country => country.name.includes(req.query.name as string))
    
    const results = name ? result = result.filter
    (country => country.name.includes(name as string)) 
    : "Não encontrado"

    // if(req.query.capital === 'capital')
    //     result = result.filter(country => country.capital.includes(req.query.capital as string))

    // if(req.query.continent === 'continent')
    //     result = result.filter(country => country.continent.includes(req.query.continent as string))
    console.log(results)
    res
        .send(results)
        .status(200)

})

//BUSCAR POR ID
app.get('/countries/:id', (req, res) => {
    const id = Number(req.params.id)

    const result = countries.find((country) => {
        return country.id === id
    })

    if(result)
        res
        .send(result)
        .status(200)
    else
        res
        .send('Not Found')
        .status(404)
})


app.listen(3007, () => {
    console.log('Servidor Pronto!')
})