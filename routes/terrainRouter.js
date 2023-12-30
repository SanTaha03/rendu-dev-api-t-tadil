const express = require('express');
const router = express.Router();
const terrainController = require('../controllers/terrainController');

router.get('/', terrainController.getAllTerrains);
router.get('/:id', terrainController.getTerrainById);
router.post('/', terrainController.createTerrain);

// ...

module.exports = router;
