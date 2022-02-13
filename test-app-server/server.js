const mysql = require('mysql2');
const express = require('express');
const app = express();
const Joi = require('@hapi/joi');
const fs = require('fs');
var cors = require('cors')
const jwt = require('jsonwebtoken');

app.use(express.json());
app.use(cors())

//connection setting to mysql
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'dev@mysql2022',
    database: 'movieapp'
})

//make connection when file initially runs
connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Connected to mysql database successfuly.')
    }
})

require('./routes/get')(app, connection);
require('./routes/post')(app, connection);
require('./routes/auth')(app, fs, jwt);
require('./routes/login')(app, connection);

app.get('/', (req, res) => {
    res.send('Aglet test API')
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`))