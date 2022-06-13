import "./AboutContentStyles.css";
import React from "react";
import { Link } from "react-router-dom";

import React1 from "../../assets/react1.jpg"
import React2 from "../../assets/react2.webp"

export const AboutContent = () => {


    return(
        <div className="about">
            <div className="left">
                <h1>Whi Am I ?</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} className="img" alt="true"/>
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} className="img" alt="true"/>
                    </div>
                </div>
            </div>
        </div>
    )



}