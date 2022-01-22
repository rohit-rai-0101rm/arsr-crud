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
  const showMsg=()=>{
    alert.success("one item deleted")
  }
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const history = useHistory();

  const alert = useAlert();
  const { _id, name, experience, role, createdAt } = employee;

  const dispatch = useDispatch();
  console.log(confirmDelete);

  return (
    <div className="employeeCard">
      <Typography variant="h4">{name}</Typography>
      <Typography variant="h6">{role}</Typography>
      <Typography variant="h6">{experience} years of experience</Typography>
      <Typography variant="body2">
        added {moment(createdAt).fromNow()}
      </Typography>

      <div className="actionIcons">
        <div>
          <button
            onClick={() => history.push(`/employee/${_id}`)}
            className="btn1"
          >
            view
          </button>
        </div>
        <div>
          <button
            onClick={() => history.push(`/update/${_id}`)}
            className="btn2"
          >
            edit
          </button>
        </div>
        <div>
          <button
            onClick={() => {
             
                dispatch(deleteEmployee(_id));
showMsg()
                history.push("/employees");
                window.location.reload()
                alert.success("one employee deleted");
              }
            }
            className="btn3"
          >
            delete
          </button>
          {modalOpen && (
            <Modal
              setOpenModal={setModalOpen}
              setConfirmDelete={setConfirmDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;