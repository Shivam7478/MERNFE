import React from "react";
import Swal from "sweetalert2";
import { updateList } from "../../api/api";

const statusChange = (props, status) => {
  console.log("CARD", props.item._id);
  let changedStatus = status ? "false" : "true";
  Swal.fire({
    title: "Are you sure want to change status ?",
    text: "This  will change status of todo item",
    icon: "warning",
    showCancelButton: true
  }).then(async result => {
    if (result.value) {
      try {
        let result = await updateList(props.item._id, {
          status: changedStatus,
          title: props.item.title,
          description: props.item.description
        });
        if (result) {
          Swal.fire({
            title: "Your List Get Updated",
            icon: "success",
            timer: 1000
          });
          props.updateListItem();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
};
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
        {props.item.status ? null : (
          <span onClick={props.onModalShow}>
            <i
              className="fa fa-pencil text-danger pl-3"
              style={{ cursor: "pointer" }}
            />
          </span>
        )}
        <span>
          {props.item.status ? (
            <i
              className="fa fa-check text-success pl-3"
              style={{ cursor: "pointer" }}
            />
          ) : (
            <i
              className="fa fa-clock-o text-danger pl-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                statusChange(props, props.item.status);
              }}
            />
          )}
        </span>
      </div>
    </div>
  );
};

export default Card;
