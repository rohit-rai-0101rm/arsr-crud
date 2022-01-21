import{
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    CLEAR_ERRORS
} from '../constants/employeeConstants'
import axios from 'axios'
export const getEmployes =
  () =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_EMPLOYEE_REQUEST });

      let link = `http://localhost:5000/api/v1/employees`;

    

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