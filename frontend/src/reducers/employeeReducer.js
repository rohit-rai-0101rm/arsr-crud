import{
    ALL_EMPLOYEE_REQUEST,
    ALL_EMPLOYEE_SUCCESS,
    ALL_EMPLOYEE_FAIL,
    CLEAR_ERRORS,
    EMPLOYEE_DETAILS_FAIL,
    EMPLOYEE_DETAILS_REQUEST,
    EMPLOYEE_DETAILS_SUCCESS,
    NEW_EMPLOYEE_REQUEST,
    NEW_EMPLOYEE_SUCCESS,
    NEW_EMPLOYEE_FAIL
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
  export const employeeDetailsReducer = (state = { employee: {} }, action) => {
    switch (action.type) {
      case EMPLOYEE_DETAILS_REQUEST:
        return {
          loading: true,
          ...state,
        };
      case EMPLOYEE_DETAILS_SUCCESS:
        return {
          loading: false,
          employee: action.payload,
        };
      case EMPLOYEE_DETAILS_FAIL:
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
  export const newEmployeeReducer = (state = { employee: {} }, action) => {
    switch (action.type) {
      case NEW_EMPLOYEE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case NEW_EMPLOYEE_SUCCESS:
        return {
          loading: false,
          success: action.payload.success,
          product: action.payload.product,
        };
      case NEW_EMPLOYEE_FAIL:
        return {
          ...state,
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