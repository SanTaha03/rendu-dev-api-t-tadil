const connection = require('../dbConfig');

const mysql = require('mysql');

const Utilisateur = {
    getAll: (callback) => {
        const query = 'SELECT * FROM utilisateurs';
        connection.query(query, callback);
    },

    getById: (utilisateurId, callback) => {
        const query = 'SELECT * FROM utilisateurs WHERE user_id = ?';
        connection.query(query, [utilisateurId], callback);
    },

    create: (utilisateurData, callback) => {
        const { pseudo, is_admin  } = utilisateurData;
        const query = 'INSERT INTO utilisateurs (pseudo, is_admin) VALUES (?, ?)';
        connection.query(query, [pseudo, is_admin ], callback);
    },

    deleteById: (utilisateurId, callback) => {
        const query = 'DELETE FROM utilisateurs WHERE user_id = ?';
        connection.query(query, [utilisateurId], callback);
    },

   
};

module.exports = Utilisateur;
