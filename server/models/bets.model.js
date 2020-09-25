const mongoose = require('mongoose');

mongoose.set("debug", true);
mongoose.Promise = Promise;

const BetSchema = mongoose.Schema({

    Coupon: [
        {
            League: String,
            Date: String,
            FirstTeam: String,
            SecondTeam: String,
            Guess: String,
            Rate: String,
            Comment: String,
            MatchState: Number
        }
    ],
    CouponState: Number,
    CouponComment: String,
    CouponRate: Number,
    AddedBy: String,
    CouponDate: {
        type: Date,
        default: () => Date.now(),
    },
});
module.exports = mongoose.model("Bets", BetSchema);