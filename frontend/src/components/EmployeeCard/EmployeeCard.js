import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./EmployeeCard.css";
import { Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Modal from "../Modal/Modal";
import moment from "moment";
import { deleteEmployee } from "../../actions/employeeActions";
const EmployeeCard = ({ employee }) => {
  const history = useHistory();

  const alert = useAlert();
  const { _id, name, experience, role, createdAt } = employee;

  const dispatch = useDispatch();
  const handleDelete=(id)=>{
    dispatch(deleteEmployee(id));
    history.push("/employees");
    alert.success("one employee deleted");

    window.location.reload()

  }

  return (
    <div className="employeeCard">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h6">{role}</Typography>
      <Typography variant="h6">{experience} years of experience</Typography>
      <Typography variant="body2">
        added {moment(createdAt).fromNow()}
      </Typography>

      <div className="actionIcons">
        
          <button
            onClick={() => history.push(`/employee/${_id}`)}
            className="btn1"
          >
            view
          </button>
        
        
          <button
            onClick={() => history.push(`/update/${_id}`)}
            className="btn2"
          >
            edit
          </button>

      
          <button
            onClick={handleDelete(_id) }
            className="btn3"
          >
            delete
          </button>
         
        </div>
      </div>
  );
};

export default EmployeeCard;