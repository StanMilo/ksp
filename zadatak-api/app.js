var express = require('express');
var app = express();

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zadatak'
});

app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
});

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/auth', function(req, res) {
    var params = req.query;
    var query = `SELECT * from users WHERE username = '${params.username}' AND password = '${params.password}'`;
    connection.query(query, function(err, rows, fields) {
        if (err) {
            console.log('error:', err);
        }
        res.send(rows);
    });
});

app.post('/users-save', function(req, res) {
    var params = req.query;
    var sql = 'INSERT INTO users (username, first_name, last_name, adress, area_code, city, password)';
    sql += `VALUES ('${params.username}', '${params.first_name}', '${params.last_name}', '${params.adress}', '${params.area_code}', '${params.city}', '${params.password}')`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        res.send('Saved ok');
        console.log('1 record inserted');
    });
});

var server = app.listen(4001, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
