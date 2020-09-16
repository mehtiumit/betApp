
const Bet = require('../models/bets.model');



exports.getBet = ((req, res, next) => {

    Bet.find()
        .then(bet => res.json(bet))
        .catch(err => res.status(400).json('Error:' + err));
});
exports.postBet = ((req, res, next) => {

    let League = req.body.league;
    let Date = req.body.date;
    let FirstTeam = req.body.firstTeam;
    let SecondTeam = req.body.secondTeam;
    let Guess = req.body.guess;
    let Rate = req.body.rate;
    let Commment = req.body.commment;
    let State = req.body.State;
    let CouponState = req.body.couponState;
    let CouponComment = req.body.couponComment;
    let CouponRate = req.body.couponRate;
    let AddedBy = req.body.addedBy;
    let CouponDate = req.body.couponDate;


    console.log("*****************");

    const newCoupon = new Bet({


        Coupon: {
            League: League,
            Date: Date,
            FirstTeam: FirstTeam,
            SecondTeam: SecondTeam,
            Guess: Guess,
            Rate: Rate,
            Commment: Commment,
            State: State,
        },
        CouponState,
        CouponComment,
        CouponRate,
        AddedBy,
        CouponDate,
    })

    console.log("Request body")
    console.log(req.body)

    newCoupon.save()

    return res.json({
        oka: 'oka',
    })

});


