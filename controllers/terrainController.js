const connection = require('../dbConfig');

const Terrain = require('../models/terrainModel');

const terrainController = {
    getAllTerrains: async (req, res) => {
        // Logique pour récupérer tous les terrains
        const query = 'SELECT * FROM terrains';

        connection.query(query, (err, results) => {
            if(err){
                res.status(500).json({message: err.message});
                return;
            }
            res.json(results);
        });
    },
    getTerrainById: async (req, res) => {
        // Logique pour récupérer un terrain par ID
        const terrainId = req.params.id;
        const query = 'SELECT * FROM terrains WHERE id = ?';

        connection.query(query, [terrainId], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }

            if (results.length === 0) {
                res.status(404).json({ message: 'Terrain non trouvé' });
                return;
            }

            res.json(results[0]); // En supposant que l'ID est unique, donc on prend le premier résultat
        });
    },
    createTerrain: async (req, res) => {
        // Logique pour créer un terrain
        const { terrain_name, /* autres champs du terrain */ } = req.body;
        const query = 'INSERT INTO terrains (terrain_name, /* autres champs */) VALUES (?, /* autres valeurs */)';

        connection.query(query, [terrain_name /* autres valeurs */], (err, results) => {
            if (err) {
                res.status(500).json({ message: err.message });
                return;
            }

            const newTerrainId = results.insertId;
            res.status(201).json({ message: 'Terrain créé avec succès', id: newTerrainId });
        });
    },
    // ...
};

module.exports = terrainController;
