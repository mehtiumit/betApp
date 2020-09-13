const express = require('express');
const routes = express.Router();
const Bet = require('../controllers/bet');

routes.post("/postBet", Bet.postBet);
routes.get('/getBet', Bet.getBet);


module.exports = routes;