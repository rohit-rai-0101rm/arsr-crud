import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { employeesReducer,employeeDetailsReducer,newEmployeeReducer } from "./reducers/employeeReducer";
const reducer = combineReducers({
    employees: employeesReducer,
    employeeDetails:employeeDetailsReducer,
    newEmployee:newEmployeeReducer
    
  });
  
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;
