import React from "react";

const Card = props => {
  return (
    <div className="card m-3" style={{ backgroundColor: "#ffc0cb94" }}>
      <div className="card-body">
        <h4 className="card-title">{props.item.title}</h4>

        <p className="card-text">{props.item.description}</p>

        <span onClick={props.onDeleteUser}>
          <i
            className="fa fa-trash text-danger"
            style={{ cursor: "pointer" }}
          />
        </span>
        <span onClick={props.onModalShow}>
          <i
            className="fa fa-pencil text-danger pl-3"
            style={{ cursor: "pointer" }}
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
