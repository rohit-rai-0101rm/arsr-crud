import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { AddEmployee, EmployeeDetails, Home, UpdateEmployee } from "./pages";

function App() {
  return (
    <Router>

      <Route exact path="/" component={Home} />

      <Route exact path="/:id" component={EmployeeDetails} />
      <Route exact path="/update/:id" component={UpdateEmployee} />
      <Route exact path="/create/new" component={AddEmployee} />

    </Router>
  );
}

export default App;
