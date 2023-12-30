
const connection = require('../dbConfig');
const mysql = require('mysql');
const Reservation = {
    getAll: (callback) => {
        const query = 'SELECT * FROM reservations';
        connection.query(query, callback);
    },

    getById: (reservationId, callback) => {
        const query = 'SELECT * FROM reservations WHERE reservation_id = ?';
        connection.query(query, [reservationId], callback);
    },

    getByPseudo: (reservationPseudo, callback) =>{
        const query = 'SELECT * FROM reservations INNER JOIN utilisateurs ON reservations.user_id = utilisateurs.user_id WHERE utilisateurs.pseudo = ?';
        connection.query(query, [reservationPseudo], callback);
    },

    create: (reservationData, callback) => {
        const { terrain_id, start_time, duration, user_id } = reservationData;
        const query = 'INSERT INTO reservations (terrain_id, start_time, duration, user_id) VALUES (?, ?, ?, ?)';
        connection.query(query, [terrain_id, start_time, duration, user_id], callback);
    },
    
    deleteById: (reservationId, callback) => {
        const query = 'DELETE * FROM reservations WHERE id = ?';
        connection.query(query, [reservationId], callback);
    },

    
};

module.exports = Reservation;
