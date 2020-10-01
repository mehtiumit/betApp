import React from "react";
import { Link, NavLink } from "react-router-dom";
import classes from "./Homepage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Homepage() {
  return (
    <div className={classes.container}>
      <div className={classes.centerItems}>
        <Link to="/addcoupon" style={{ color: "gray" }}>
          <h1>
            {" "}
            <FontAwesomeIcon icon={["fab", "cc-apple-pay"]} />
            Add Coupon(s)
          </h1>
        </Link>
        <div className={classes.links}>
          <NavLink to="/showcoupon" style={{ color: "gray" }}>
            <h1>
              <FontAwesomeIcon icon={["fab", "github"]} /> Show Coupon(s)
            </h1>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
