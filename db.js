const conn = require('mysql').createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "fdn_test"
});

exports.connect = () => {
    return conn;
}
