const dotenv = require('dotenv');
const express = require('express');

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => res.json({message : "Welcome to my app"}))

app.get('/about', (request, response) => {
    return response.json({
        message : "This is about us",
        data : {
            name : "Sept Cohort Practice",
            date : Date.now(), 
            student : ['Dan, Lumid']


        }
    })
})

//console.log(process.env.PORT, process.env.DB_NAME)
