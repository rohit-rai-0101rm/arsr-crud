import{
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    CLEAR_ERRORS,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    EMPLOYEE_DETAILS_FAIL
} from '../constants/employeeConstants'
import axios from 'axios'
export const getEmployes =
  ( currentPage) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_EMPLOYEE_REQUEST });

      let link = `http://localhost:5000/api/v1/employees?page=${currentPage}`;

    

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
  