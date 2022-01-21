import React from "react";
import { Link } from "react-router-dom";
import './EmployeeCard.css'
const EmployeeCard = ({ employee }) => {
  
  const{_id,name,experience,role,createdAt}=employee
  return (
    <Link className="employeeCard" to={`/employee/${_id}`}>
      <p>{name}</p>
      <p>{role}</p>
      <div>
        <span className="employeeCardSpan">
          {" "}
          ({} Reviews)
        </span>
      </div>
      <span>{}</span>
    </Link>
  );
};

export default EmployeeCard;