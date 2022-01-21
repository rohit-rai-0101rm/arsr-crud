import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";


import { clearErrors, getEmployes } from "../../actions/employeeActions";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { EmployeeCard, Loader, MetaData } from "../../components";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, employees } = useSelector((state) => state.employees);
console.log(employees);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getEmployes());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to CRUD APP</p>
            <h1>FIND EMPLOYEES BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>

          <h2 className="homeHeading">EMPLOYEE LIST</h2>

          <div className="container" id="container">
            {employees &&
              employees.map((employee) => (
                <EmployeeCard key={employee._id} employee={employee} />
              ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;