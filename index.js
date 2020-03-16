const express = require('express');
const app = express();
const path = require('path');
const PORT = 4000;

const db = require('./db');
const views = path.join(__dirname, '/');

app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('body-parser').json());

app.get('/api', (req, res) => {
    db.connect().query('select * from store', (error, rows, fields) => {
        if (error) {
            console.log(error)
        }
        else {
            res.json({
                status: 'success',
                data: rows
            });
            res.end();
        }
    });
});

app.get('/apivot', (req, res) => {
    db.connect().query(`select firstname, lastname, email, sum(case when (item = 'Barang1') then quantity else 0 end) as Barang1, sum(case when (item = 'Barang2') then quantity else 0 end) as Barang2, sum(case when (item = 'Barang3') then quantity else 0 end) as Barang3, sum(case when (item = 'Barang4') then quantity else 0 end) as Barang4, sum(case when (item = 'Barang5') then quantity else 0 end) as Barang5, sum(case when (item = 'Barang6') then quantity else 0 end) as Barang6, sum(case when (item = 'Barang7') then quantity else 0 end) as Barang7, sum(case when (item = 'Barang8') then quantity else 0 end) as Barang8, sum(case when (item = 'Barang9') then quantity else 0 end) as Barang9, sum(case when (item = 'Barang10') then quantity else 0 end) as Barang10 FROM store group by email`, (error, rows, fields) => {
        if (error) {
            console.log(error)
        }
        else {
            res.json({
                status: 'success',
                data: rows
            });
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

module.exports = app;
