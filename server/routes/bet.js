const express = require("express");
const routes = express.Router();
const Bet = require("../controllers/bet");

routes.post("/postBet", Bet.postBet);
routes.get("/getBet", Bet.getBet);
routes.delete("/deleteBet/:id", Bet.deleteBet);
routes.put("/updateBet/:id", Bet.updateBet);

module.exports = routes;
