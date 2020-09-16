import React, { Component } from 'react'
import classes from './AddCoupon.module.css';
import axios from "../../axios/axios"
class AddCoupon extends Component {


    constructor(props) {
        super(props)
        this.handlePost = this.handlePost.bind(this)
    }

    state = {
        couponForm: {
            league: "",
            date: "",
            firstTeam: "",
            secondTeam: "",
            rate: "",
            state: "",
            comment: "",
            guess: ""
        },

    }


    handlePost(e) {

        e.preventDefault();
        axios.post("/postBet", this.state.couponForm)
            .then(res => console.log(res))
            .catch(err => console.log(err))


    }

    changeHandler = (e) => {
        this.setState({ couponForm: { ...this.state.couponForm, [e.target.name]: e.target.value } })
    }

    render() {
        const { league, date, firstTeam, secondTeam, rate, state, comment, guess } = this.state
        return (
            <div>
                <form className={classes.form}>
                    <div className={classes.formElements}>
                        <label>League</label>
                        <input type="text" value={league} name="league" onChange={this.changeHandler}></input>

                    </div>
                    <div className={classes.formElements}>

                        <label>Date</label>
                        <input type="date" value={date} name="date" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>First Team</label>
                        <input type="text" value={firstTeam} name="firstTeam" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>Second Team</label>
                        <input type="text" value={secondTeam} name="secondTeam" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>Rate</label>
                        <input type="text" value={rate} name="rate" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>Guess</label>
                        <input type="text" value={guess} name="guess" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>Comment</label>
                        <input type="text" value={comment} name="comment" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.formElements}>
                        <label>State </label>
                        <input type="text" value={state} name="state" onChange={this.changeHandler}></input>
                    </div>
                    <div className={classes.btn}>
                        <button onClick={
                            (e) => {
                                e.preventDefault();
                                console.log(this.state);
                            }
                        }
                        >CLG</button>
                        <button onClick={
                            this.handlePost
                        }
                        >Add</button>
                    </div>
                </form>
            </div >
        )
    }
}
export default AddCoupon;