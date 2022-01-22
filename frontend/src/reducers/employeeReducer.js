
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
    NEW_EMPLOYEE_FAIL,
    UPDATE_EMPLOYEE_REQUEST,
    UPDATE_EMPLOYEE_SUCCESS,
    UPDATE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_FAIL,
    DELETE_EMPLOYEE_REQUEST,
    DELETE_EMPLOYEE_SUCCESS
} from '../constants/employeeConstants'
export const employeesReducer = (state = { employees: [] }, action) => {
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
  export const employeeReducer = (state = {}, action) => {
    switch (action.type) {
      case DELETE_EMPLOYEE_REQUEST:
      case UPDATE_EMPLOYEE_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case DELETE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          isDeleted: action.payload,
        };
  
      case UPDATE_EMPLOYEE_SUCCESS:
        return {
          ...state,
          loading: false,
          isUpdated: action.payload,
        };
      case DELETE_EMPLOYEE_FAIL:
      case UPDATE_EMPLOYEE_FAIL:
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
  