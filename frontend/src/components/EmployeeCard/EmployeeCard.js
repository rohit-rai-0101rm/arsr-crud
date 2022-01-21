import React from "react";
import { Link } from "react-router-dom";
import "./EmployeeCard.css";
import { Typography } from "@material-ui/core/";
import { useHistory } from "react-router-dom";
import moment from "moment";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
const EmployeeCard = ({ employee }) => {
  const viewEmployee=(id)=>{
    history.push('/employee/id')
  }
  const history=useHistory()
  const { _id, name, experience, role, createdAt } = employee;
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
            <button                         onClick={() => history.push(`/employee/${_id}`)}
 className="btn1">view</button>
          </div>
          <div>
            <button
                        onClick={() => history.push(`/students/${_id}`)}

             className="btn2">edit
             </button>
          </div>
          <div>
            <button className="btn3">delete</button>
          </div>
        </div>
    </div>
  );
};

export default EmployeeCard;
