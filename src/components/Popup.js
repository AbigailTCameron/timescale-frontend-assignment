import React from "react";
import "./Popup.css";
import CancelPresentationIcon from "@material-ui/icons/CancelPresentation";

function Popup({
  src,
  alt,
  title,
  date,
  overview,
  average,
  vote__count,
  ...props
}) {
  return (
    <div className="popup__box">
      <h1>{title}</h1>

      <div className="popup__row">
        <img className="poster" src={src} alt={alt} />

        <div className="details">
          <div className="box">
            <h2>Release Date: </h2>
            <h2>{date}</h2>
          </div>

          <h3>{overview}</h3>

          <div className="votes">
            <h2>{average}</h2>
            <h2>/10</h2>
            <h2>({vote__count}) total votes</h2>
          </div>
        </div>
      </div>

      <div className="close__icon">
        <CancelPresentationIcon onClick={props.handleClose} />
      </div>
    </div>
  );
}

export default Popup;
