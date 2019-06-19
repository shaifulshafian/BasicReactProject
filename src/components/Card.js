import React from "react";
//import logo from './logo.svg';
import "../Card.css";

const Card = ({ id, name, username, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="robots" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
