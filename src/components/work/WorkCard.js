import "./WorkCardStyles.css";

import { NavLink } from "react-router-dom";

export const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt={props.title} />
      <h2 className="project-title"> {props.title} </h2>

      <div className="pro-details">
        <p>{props.text} </p>

        <div className="pro-btns">
          <NavLink to={props.view}  className="btn">
            View
          </NavLink>

          <NavLink to={props.view} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};
