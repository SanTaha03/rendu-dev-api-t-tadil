const connection = require('../dbConfig');

const Reservation = require('../models/reservationModel');

const reservationController = {
    getAllReservations: async (req, res) => {
        // Logique pour récupérer toutes les réservations

        const query = 'SELECT * FROM reservations';

        connection.query(query, (err, results) => {
            if(err){
                res.status(500).json({message: err.message});
                return;
            }
            res.json(results);
        });
    },
    getReservationsByPseudo: async (req, res) => {
        const reservationPseudo = req.params.pseudo;
        const query = 'SELECT * FROM reservations INNER JOIN utilisateurs ON reservations.user_id = utilisateurs.user_id WHERE utilisateurs.pseudo = ?';
    
        connection.query(query, [reservationPseudo], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }
    
            if (results.length === 0) {
                res.json({ message: 'Aucune réservation trouvée avec le pseudo : ' + reservationPseudo });
            } else {
                res.json(results);
            }
        });
    },
    

    
    createReservation: async (req, res) => {
        // Logique pour créer une réservation
        // Vérifier si la réservation est dans les plages horaires autorisées (du lundi au samedi, de 10h à 22h)

        const { status_reservation, start_time, duration, terrain_id, user_id} = req.body;

        const reservationDate = new Date(start_time);
        const dayOfWeek = reservationDate.getDay(); // 0 = dimanche, 1 = lundi, ..., 6 = samedi
        const hours = reservationDate.getHours();

        if (dayOfWeek < 1 || dayOfWeek > 6 || hours < 10 || hours >= 22) {
            return res.status(400).json({ message: 'Les réservations sont autorisées du lundi au samedi, de 10h à 22h.' });
        }

        const query = 'INSERT INTO reservations (status_reservation, start_time, duration, terrain_id, user_id) VALUES (?, ?, ?, ?, ?)';

        connection.query(query, [status_reservation, start_time, duration, terrain_id, user_id], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }

            const newReservationId = results.insertId;
            res.status(201).json({ message: 'Réservation créée avec succès', id: newReservationId });
        });
    },
    
    deleteReservation: async (req, res) => {
        // Logique pour supprimer une réservation par ID
        const reservationId = req.params.id;
        const query = 'DELETE FROM reservations WHERE reservation_id = ?';

        connection.query(query, [reservationId], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }else if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Réservation non trouvée' });
                return;
            }else{
                res.json({ message: 'Réservation supprimée avec succès' });

            }
               

            
        });
    },
    
};

module.exports = reservationController;
