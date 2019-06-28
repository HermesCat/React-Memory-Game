import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card image-holder">
      <img className="card-image" src={props.image} />
      <div className="overlay" />
    </div>
  );
}

export default FriendCard;
