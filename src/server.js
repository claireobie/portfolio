const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const Sequelize = require('sequelize')
const epilogue = require('epilogue')
const bcrypt = require('bcrypt')
const path = require('path')
const PORT = process.env.PORT || 8081

let app = express()
app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors())
app.use(bodyParser.json())

app.listen(PORT, () => { console.log(`listening to port ${PORT}`)})
