
const router = require('express').Router();
const Bet = require('../models/bets.model');



exports.getBet = ((req, res, next) => {

    Bet.find()
        .then(bet => res.json(bet))
        .catch(err => res.status(400).json('Error:' + err));
});
exports.postBet = ((req, res, next) => {
    let League = req.body.League;
    let Date = req.body.Date;
    let FirstTeam = req.body.FirstTeam;
    let SecondTeam = req.body.SecondTeam;
    let Guess = req.body.Guess;
    let Rate = req.body.Rate;
    let Commment = req.body.Commment;
    let State = req.body.State;
    let CouponState = req.body.CouponState;
    let CouponComment = req.body.CouponComment;
    let CouponRate = req.body.CouponRate;
    let AddedBy = req.body.AddedBy;
    let CouponDate = req.body.CouponDate;

    let arr = [];
    arr.push({
        League,
        Date,
        FirstTeam,
        SecondTeam,
        Guess,
        Rate,
        Commment,
        State,

    })

    console.log(arr);
    const newCoupon = new Bet({
        Coupon: arr,
        CouponState,
        CouponComment,
        CouponRate,
        AddedBy,
        CouponDate,
    })

    newCoupon.save()
        .then(() => res.json('Bet Added!'))
        .catch(() => res.status(400).json('Error:' + err));
    return res.json({
        oka: 'oka'
    });

});

