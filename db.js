const conn = require('mysql').createConnection({
    host: "localhost:8080",
    user: "root",
    password: "",
    database: "fdn_test"
});

exports.connect = () => {
    return conn;
}
