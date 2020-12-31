// require express
const express = require('express')
const app = express()
const port = 3000

// require body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.json({ type: 'application/json' }))

// require data
let Data = require("./api.js")
let data = new Data();

app.get('/', (req, res) => {
    return res.send(data.getAllData())
    
})

app.get('/data/:value', (req, res) => {
    return res.send(data.allready(req.params.value))
    
})

app.get('/:value', function(req, res){
   let finddata = data.finddata(req.params.value)
   res.send({
       message : "In put to find movie success",
       bigoutput : finddata
   })
})

app.post('/', function(req, res){
    if (!req.body.name || req.body.name.trim())
    data.adddata(req.body)
    return res.send({
        message : "add data successful"
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})