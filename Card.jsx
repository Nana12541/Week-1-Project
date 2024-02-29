import React from "react";
import "./Card.css"

export const Card = ({source, link, title, para}) => {
    return (
        <div className="card-div">
            <img className="image1" src={source} width="250" height="250"></img>
            <h1>{title}</h1>
            <h4>{para}</h4>
            <a href={link} className="button">Explore</a>
        </div>
        );
}

export default Card;
