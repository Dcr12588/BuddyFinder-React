require('dotenv').config()
const express = require('express')
const cors = require('cors')

const { SERVER_PORT } = process.env 
const { sequelize } = require('./util/database')

const app = express()

app.use(express.json())
app.use(cors())

//---This will reset and reseed your db ===>{force: true}---//
// sequelize.sync()
// .then(() => {
    app.listen(SERVER_PORT, console.log(`We are live in Soul Society ${SERVER_PORT}!`))
// })
// .catch(err => console.log(err))