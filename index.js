const express = require('express');
const app = express();
const PORT = 4000;

const db = require('./db');

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

db.connect().connect(err => {
    if (err) throw err;
    console.log('database connected!');
    app.listen(PORT, () => {
        console.log(`server is running on port: ${PORT}`);
    });
});
