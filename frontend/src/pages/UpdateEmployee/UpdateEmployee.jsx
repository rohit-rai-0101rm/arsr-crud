import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import classNames from "classnames";
import {
  clearErrors,
  updateEmployee,
  getEmployeeDetails,
} from "../../actions/employeeActions";
const UpdateEmployee = ({history,match}) => {
  const { register, handleSubmit,  errors,reset } = useForm();

  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, employee } = useSelector((state) => state.employeeDetails);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }




    dispatch(getEmployeeDetails(match.params.id));
  }, [dispatch, match.params.id, error, alert]);
  const{_id,name,role,experience}=employee
  console.log(_id,name,role,experience);
  const onSubmit = (employeeData,e) => {

    reset()
    dispatch(updateEmployee(_id,employeeData))
alert.success("one item updated")
history.push("/employees")
window.location.reload()

   
  };
  return( <div className="App">
  <div className="container py-2">
    <div className="card border-0 shadow w-75 p-3 mx-auto ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name"> Name</label>
          <input
            type="text"
            onChange={(e)=>e.target.value}
            className={classNames("form-control", {
              "is-invalid": errors.fullname,
            })}
            id="name"
            placeholder="Enter Your  Name"
            ref={register({
              required: "this field is required",
              minLength: {
                value: 4,
                message: "must be 4 characters",
              },
            })}
            name="name"
          />
          {errors.name && (
            <div className="invalid-feedback">
              {errors.name.message}
            </div>
          )}
          {errors.name?.type === "minLength" && (
            <div className="invalid-feedback"></div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="role">what is your role</label>
          <input
            type="text"
            onChange={(e)=>e.target.value}

            className={classNames("form-control", {
              "is-invalid": errors.role,
            })}
            id="role"
            placeholder="Enter Your role"
            ref={register({
              required: "this field is required",
              minLength: {
                value: 4,
                message: "must be 4 characters",
              },
            })}
            name="role"
          />
          {errors.role && (
            <div className="invalid-feedback">{errors.role.message}</div>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="experience">Total experience in years</label>
          <input
            type="text"
            onChange={(e)=>e.target.value}

            className={classNames("form-control", {
              "is-invalid": errors.experience,
            })}
            id="experience"
            placeholder="Enter Your experience in years"
            ref={register({
              required: "this field is required",
              minLength: {
                value: 1,
                message: "must be 1 year",
              },
              pattern: {
                message: "please enter your experience in years",
              },
            })}
            name="experience"
          />
          {errors.experience && (
            <div className="invalid-feedback">{errors.experience.message}</div>
          )}
        </div>
        
        <button type="submit" className="btn btn-primary">
          Create New Account
        </button>
      </form>
    </div>
  </div>
</div>
  )};

export default UpdateEmployee;
