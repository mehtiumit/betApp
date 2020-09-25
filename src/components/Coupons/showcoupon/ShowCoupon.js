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
            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" >League</th>
                            <th scope="col" >Date</th>
                            <th scope="col" >FirstTeam</th>
                            <th scope="col" >SecondTeam</th>
                            <th scope="col" >Guess</th>
                            <th scope="col" >Rate</th>
                            <th scope="col" >Comment</th>
                            <th scope="col" >Match State</th>
                            <th scope="col" >CouponState</th>
                            <th scope="col" >CouponComment</th>
                            <th scope="col" >CouponRate</th>
                            <th scope="col" >AddedBy</th>
                            <th scope="col" >CouponDate</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            coupon.map(item => (
                                <>
                                    <tr key={item._id}>
                                        {
                                            item.Coupon.map(td => (
                                                <>
                                                    <td>{td.League}</td>
                                                    <td>{td.Date}</td>
                                                    <td>{td.FirstTeam}</td>
                                                    <td>{td.SecondTeam}</td>
                                                    <td>{td.Guess}</td>
                                                    <td>{td.Rate}</td>
                                                    <td>{td.Comment}</td>
                                                    <td>{td.MatchState}</td>

                                                </>
                                            ))
                                        }
                                        <td>{item.CouponState}</td>
                                        <td>{item.CouponComment}</td>
                                        <td>{item.CouponRate}</td>
                                        <td>{item.AddedBy}</td>
                                        <td>{item.CouponDate}</td>
                                    </tr>
                                </>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}


export default ShowCoupon
