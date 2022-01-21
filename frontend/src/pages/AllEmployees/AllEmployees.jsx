import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getEmployes } from "../../actions/employeeActions";
import {  EmployeeCard, Loader, MetaData } from "../../components";
import Pagination from "react-js-pagination";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";

const AllEmployees = ({match}) => {
  const dispatch = useDispatch();

  const alert = useAlert();

  const [currentPage, setCurrentPage] = useState(1);
  


  const {
    employees,
    loading,
    error,
    employeeCount,
    resultPerPage,
    filteredEmployeesCount,
  } = useSelector((state) => state.employees);

  const keyword = match.params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  
  let count = filteredEmployeesCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getEmployes(currentPage));
  }, [dispatch,  currentPage,  alert, error]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="employees -- ECOMMERCE" />
          <h2 className="employeesHeading">employees</h2>

          <div className="employees">
            {employees &&
              employees.map((employee) => (
                <EmployeeCard key={employee._id} employee={employee} />
              ))}
          </div>

          
          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={employeeCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};


export default AllEmployees;
