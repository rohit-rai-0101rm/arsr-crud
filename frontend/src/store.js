import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { employeeReducer } from "./reducers/employeeReducer";
const reducer = combineReducers({
    emoloyees: employeeReducer,
    
  });
  let initialState = {
    employees:{
      employees:[]
    }
  };
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  export default store;
