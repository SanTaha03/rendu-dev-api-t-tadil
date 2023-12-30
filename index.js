const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const http = require('http');
const connection = require('./dbConfig');
const session = require('express-session');

// Importez les routeurs pour chaque entité
const terrainRouter = require('./routes/terrainRouter');
const reservationRouter = require('./routes/reservationRouter');
const utilisateurRouter = require('./routes/utilisateurRouter');

const app = express();
const port = 3003;

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware pour parser le corps des requêtes
app.use(bodyParser.json());

// Middleware pour la gestion de session
app.use(session({ secret: 'secret-key', resave: false, saveUninitialized: true }));

// Exemple de middleware d'authentification
app.use((req, res, next) => {
    // Votre logique d'authentification ici
    // Par exemple, vérifier si l'utilisateur est authentifié
    // Vous pouvez utiliser req.session ou d'autres méthodes d'authentification

    // Exemple basique : Si la session contient un rôle "admin", considérez l'utilisateur comme authentifié en tant qu'admin
    if (req.session.role === 'admin') {
        req.isAdmin = true;
    } else {
        req.isAdmin = false;
    }

    next();
});

app.post('/login', (req, res) => {
    const { pseudo } = req.body;

    const query = 'SELECT * FROM utilisateurs WHERE pseudo = ?';
    connection.query(query, [pseudo], (err, results) => {
        if (err) {
            res.status(500).json({ message: err.message });
            return;
        }

        if (results.length === 0) {
            res.status(401).json({ message: 'Pseudo incorrect' });
            return;
        }

        const user = results[0];
        req.session.role = user.is_admin === 1 ? 'admin' : 'user';

        res.json({ message: 'Authentification réussie', role: req.session.role });
    });
});


// Gestion de la route racine "/"
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Utilisez les routeurs pour chaque entité
app.use('/terrains', terrainRouter);
app.use('/reservations', reservationRouter);
app.use('/utilisateurs', utilisateurRouter);

// Démarrer le serveur sur le port indiqué
app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});
