import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

function ArticleCard(props) {
  return (
    <Link to={props.link} className="card">
      <img src={props.image} alt={props.title} className="card-image" />
      <h2 className="card-title">{props.title}</h2>
    </Link>
  );
}

export default ArticleCard;
