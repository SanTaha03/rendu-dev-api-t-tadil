const connection = require('../dbConfig');
const Utilisateur = require('../models/utilisateurModel');

const utilisateurController = {
    getAllUtilisateurs: async (req, res) => {
        // Logique pour récupérer tous les utilisateurs
        const query = 'SELECT * FROM utilisateurs';

        connection.query(query, (err, results) => {
            if(err){
                res.status(500).json({message: err.message});
                return;
            }
            res.json(results);
        });
    },
    createUtilisateur: async (req, res) => {
        // Logique pour créer un utilisateur
        const { pseudo, is_admin  } = req.body;
        const query = 'INSERT INTO utilisateurs (pseudo, is_admin) VALUES (?, ?)';

        connection.query(query, [pseudo, is_admin], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }

            const newUtilisateurId = results.insertId;
            res.status(201).json({ message: 'Utilisateur créé avec succès', id: newUtilisateurId });
        });
    },
    deleteUtilisateur: async (req, res) => {
        // Logique pour supprimer un utilisateur par ID
        const utilisateurId = req.params.id;
        const query = 'DELETE FROM utilisateurs WHERE id = ?';

        connection.query(query, [utilisateurId], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }

            if (results.affectedRows === 0) {
                res.status(404).json({ message: 'Utilisateur non trouvé' });
                return;
            }

            res.json({ message: 'Utilisateur supprimé avec succès' });
        });
    },
   
};

module.exports = utilisateurController;
