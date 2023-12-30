const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservationController');

router.get('/', reservationController.getAllReservations);
router.get('/user/:pseudo', reservationController.getReservationsByPseudo);
router.post('/', reservationController.createReservation);
router.delete('/:id', reservationController.deleteReservation);

module.exports = router;
