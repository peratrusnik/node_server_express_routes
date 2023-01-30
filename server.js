const express = require('express')
const lolChampions = require('lol-champions')

const app = express()

app.use(express.static(__dirname + "/frontend"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css"))

app.use(express.urlencoded({ extended: true })) // softer koji cita body //extended: true settings object da nema vraca gresku u konzoli

app.use(express.json()) // u slucaju da stigne json pretvorice i popuniti body u requestu sa json

app.get('/', function (req,res) {
    res.sendFile(__dirname + "/index.html");
})

app.get('/users', function (req, res) {
    console.log(req.query);
    res.redirect("/");
})

app.get('/admin/:name', function (req, res) {
    console.log(req.params);
    res.send({name:req.params.name});
})

app.post('/contact', (req,res) => { 
    console.log(req.body);
    res.redirect('/')
 })

app.get('/data', (req, res) => {
    // momenat ka bazi
     res.send(lolChampions)
})
 



app.listen(3000, () => { 
    console.log('server runninng....');
})

