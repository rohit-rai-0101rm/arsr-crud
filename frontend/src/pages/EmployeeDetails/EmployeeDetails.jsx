import React, { Fragment, useEffect, useState } from "react";
import {  Loader, MetaData } from "../../components";

import { useSelector, useDispatch } from "react-redux";
import {
  clearErrors,
  getEmployeeDetails,
 
} from "../../actions/employeeActions";
import { useAlert } from "react-alert";


const EmployeeDetails = ({ match }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { employee, loading, error } = useSelector(
    (state) => state.employeeDetails
  );
console.log(employee) 

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

   

    
    dispatch(getEmployeeDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);

  return (
    <Fragment>
      <div>
        <p>{employee?.name}</p>
        <p>{employee?.createdAt}</p>

      </div>
      </Fragment>
  )
}
    
     


export default EmployeeDetails;