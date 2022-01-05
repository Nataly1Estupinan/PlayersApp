const express = require('express')
const IndexRoutes = require('./routes/routes')
const initDb = require('./database/db')
const morgan = require('morgan')
const cors = require('cors')

// Conection MongoDB
require('./database/db')

// Init express
const app = express()

//Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());
app.use(IndexRoutes)
app.use(express.urlencoded({extended: false}))

// Setting
const port = process.env.PORT || 3000 
app.set('port', port)

// Init server
app.listen(app.get('port'), error => {
    if (error) {
        console.error('Server failed to start')
    } else {
        console.log('Server started on port:' + port)
    }
})

initDb();
module.exports = app






