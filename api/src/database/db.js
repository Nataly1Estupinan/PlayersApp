require('dotenv').config()

'use strict';
const mongoose = require('mongoose');

const DB_URI = process.env.MONGODB_URI;



module.exports = () => {
    const connect = () => {
        mongoose.connect(
            DB_URI,
            {
                keepAlive: true,
                useNewUrlParser: true,
                useUnifiedTopology: true
            },
            (err) => {
                if(err){
                    console.log('DB: Error')
                }else{
                    console.log('Connection success')
                }
                // require('../conection')
            }

        )
    }
    connect();
    
}

