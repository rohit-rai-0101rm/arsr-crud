import React, { Fragment, useEffect, useState } from "react";
import { EmployeeCard, Loader, MetaData } from "../../components";
import './EmployeeDetails.css'
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
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title={`${employee.name} -- EMPLOYEE`} />
          <div className="employeeDetails">
            <div>
              <EmployeeCard employee={employee} />
            </div>
          </div>

        </Fragment>
      )
      }
    </Fragment>
  )
}




export default EmployeeDetails;