import{
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    CLEAR_ERRORS
} from '../constants/employeeConstants'
export const employeeReducer = (state = { employees: [] }, action) => {
    switch (action.type) {
      case ALL_EMPLOYEE_REQUEST :
        return {
          loading: true,
          emoloyees: [],
        };
      case ALL_EMPLOYEE_SUCCESS:
        return {
          loading: false,
          employees: action.payload.employees,
          employeeCount: action.payload.employeeCount,
          resultPerPage: action.payload.resultPerPage,
          filteredEmployeesCount: action.payload.filteredEmployeesCount,
        };
  
     
      case ALL_EMPLOYEE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      case CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };