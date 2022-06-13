import "./PriceCardStyles.css";

import React from "react";
import { Link } from "react-router-dom";

export const PriceCardList = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3> -Basic-</h3>
          <span className="bar"></span>
          <p className="btc"> $ 100</p>
          <p className=""> - 3 Days - </p>
          <p className=""> - 3 Pages - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3> -Medium-</h3>
          <span className="bar"></span>
          <p className="btc"> $ 200</p>
          <p className=""> - 6 Days - </p>
          <p className=""> - 6 Pages - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3> -Business-</h3>
          <span className="bar"></span>
          <p className="btc"> $ 500</p>
          <p className=""> - 5 Days - </p>
          <p className=""> - 9 Pages - </p>
          <p className=""> - Featured - </p>
          <p className=""> - Responsive Design - </p>

          <Link to="contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};
