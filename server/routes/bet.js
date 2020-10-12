const express = require("express");
const routes = express.Router();
const Bet = require("../controllers/bet");

routes.post("/postBet", Bet.postBet);
routes.get("/getBet", Bet.getBet);
routes.delete("/deleteBet/:id", Bet.deleteBet);
routes.post("/updateBet/:id", Bet.updateBet);
routes.get("/getBetById/:id", Bet.getBetById);

module.exports = routes;
