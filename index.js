const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

const db = require('./db');
const views = path.join(__dirname, '/');

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

app.get('/api', (req, res) => {
    db.connect().query('SELECT * FROM store', (error, rows, fields) => {
        if (error) {
            console.log(error)
        }
        else {
            res.json(rows);
            res.end();
        }
    });
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(views + '/index.html'));
});

db.connect().connect(err => {
    if (err) throw err;
    console.log('database connected!');
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    });
});
