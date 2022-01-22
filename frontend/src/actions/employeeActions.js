import{
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    CLEAR_ERRORS,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL,
    NEW_EMPLOYEE_SUCCESS,
    NEW_EMPLOYEE_FAIL,
    NEW_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL
} from '../constants/employeeConstants'
import axios from 'axios'
export const getEmployes =
  ( keyword="",currentPage=1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_EMPLOYEE_REQUEST });

      let link = `http://localhost:5000/api/v1/employees?keyword=${keyword}&page=${currentPage}`;

    

      const { data } = await axios.get(link);

      dispatch({
        type: ALL_EMPLOYEE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_EMPLOYEE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  export const getEmployeeDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: EMPLOYEE_DETAILS_REQUEST });
  
      const { data } = await axios.get(`http://localhost:5000/api/v1/employees/${id}`);
  
      dispatch({
        type: EMPLOYEE_DETAILS_SUCCESS,
        payload: data.employee,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const createEmployee = (employeeData) => async (dispatch) => {
    try {
      dispatch({ type: NEW_EMPLOYEE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.post(
        `http://localhost:5000/api/v1/new`,
        employeeData,
        config
      );
  
      dispatch({
        type: NEW_EMPLOYEE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: NEW_EMPLOYEE_FAIL,
        payload: error.response.data.message,
      });
    }
  };
  export const updateEmployee = (id, employeeData) => async (dispatch) => {
    try {
      dispatch({ type: UPDATE_EMPLOYEE_REQUEST });
  
      const config = {
        headers: { "Content-Type": "application/json" },
      };
  
      const { data } = await axios.put(
        `http://localhost:5000/api/v1/employee/edit/${id}`,
        employeeData,
        config
      );
  
      dispatch({
        type: UPDATE_EMPLOYEE_SUCCESS,
        payload: data.success,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_EMPLOYEE_FAIL,
        payload: error.response.data.message,
      });
    }
  };