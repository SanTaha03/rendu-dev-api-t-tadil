const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'eval_api',
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"
});

connection.connect((err) => {
    if (err) {
        console.error("Erreur de connexion : " + err.stack);
        return;
    }
    console.log("Connexion réussie à la bdd !");
});

module.exports = connection;
