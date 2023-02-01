import React from "react";
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  return (
    <div className="card mb-3 sm-mb-0" style={{ maxWidth: "17rem" }}>
      <div className="card-body">
        <h5 className="card-title">{blog.title}</h5>
        <p className="card-text">{blog.description}</p>
        <Link to="/" class="card-link">
          <BsFillPencilFill />
        </Link>
        <Link to="/" class="card-link">
          <BsFillTrashFill />
        </Link>
      </div>
    </div>
  );
};

export default Card;
