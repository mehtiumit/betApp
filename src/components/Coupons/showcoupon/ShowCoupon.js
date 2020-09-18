import React, { useState, useEffect } from 'react'
import axios from "../../../axios/axios"


const ShowCoupon = props => {

    const [coupon, setCoupon] = useState([]);

    useEffect(() => {
        async function fetchData() {
            await axios.get("/getBet")
                .then(res => {

                    setCoupon(res.data);
                    console.log(res)
                });
        }
        fetchData();
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>League</th>
                        <th>Date</th>
                        <th>FirstTeam</th>
                        <th>SecondTeam</th>
                        <th>Guess</th>
                        <th>Rate</th>
                        <th>Commment</th>
                        <th>State</th>
                        <th>CouponState</th>
                        <th>CouponComment</th>
                        <th>CouponRate</th>
                        <th>AddedBy</th>
                        <th>CouponDate</th>
                    </tr>
                </thead>
            </table>

        </div>
    )
}


export default ShowCoupon
