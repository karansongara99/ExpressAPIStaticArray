const bodyParser = require('body-parser')

const express = require('express')
const app = express()

app.use(bodyParser.json())

app.listen(3500,()=>{
    console.log("Server is running on port 3500")
})