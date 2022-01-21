import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { employeeReducer } from "./reducers/employeeReducer";
const reducer = combineReducers({
    employees: employeeReducer,
    
  });
  
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;
