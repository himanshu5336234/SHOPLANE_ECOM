import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
export const Cards = (props) => {
  const { id, name, brand, description, price, preview } = props.data;
 
  return (
    <div className="cards">
      <Link to={`/productDetails/product=${id}`}>
        <img src={preview} alt="" />
        <div>
          <h4>{name}</h4>
          <h5 className="gray-text">{brand}</h5>
          <span className="blue-text">Rs {price}</span>
        </div>
      </Link>
    </div>
  );
};
