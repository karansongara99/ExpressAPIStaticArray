const express = require('express')
const app = express()

const data = ['Karan', 'API', 'MERN', 'Darshan', 'DU', 'MU', 'Rajkot']

app.get('/', (req, res) => {
  res.send(data) //GetAll API Data
})

app.get('/data/:id', (req, res) => {
  res.send(data[req.params.id]) //GEtbyID API
})

app.post('/data/add/:temp', (req, res) => {
  data.push(req.params.temp) // Insert Create API
  res.send(data);
})

app.delete('/data/:id', (req, res) => {
  data.splice(req.params.id, 1)
  res.send(data) // Delete API
})

app.patch('/data/edit/:id/:newValue', (req, res) => {
  data[req.params.id] = req.params.id // Edit APi DATA
  res.send(data);
})

app.listen(3020, () => {
  {
    console.log('Server Staring 3220') //Server Port No
  }
})
