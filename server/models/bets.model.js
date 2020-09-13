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
            Commment: String,
            State: Number
        }
    ],
    CouponState: Number,
    CouponComment: String,
    CouponRate: Number,
    AddedBy: String,
    CouponDate: String,
});
module.exports = mongoose.model("Bets", BetSchema);