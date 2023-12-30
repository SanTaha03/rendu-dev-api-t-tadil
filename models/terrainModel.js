const connection = require('../dbConfig');

const mysql = require('mysql');

const Terrain = {
    getAll: (callback) => {
        const query = 'SELECT * FROM terrains';
        connection.query(query, callback);
    },

    getById: (terrainId, callback) => {
        const query = 'SELECT * FROM terrains WHERE id = ?';
        connection.query(query, [terrainId], callback);
    },

    create: (terrainData, callback) => {
        const { terrain_name /* autres champs du terrain */ } = terrainData;
        const query = 'INSERT INTO terrains (terrain_name /* autres champs */) VALUES (?)';
        connection.query(query, [terrain_name /* autres valeurs */], callback);
    },

   
};

module.exports = Terrain;
