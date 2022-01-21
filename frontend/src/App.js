import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import { Header, Loader } from "./components";
import { AddEmployee, AllEmployees, EmployeeDetails, Home, UpdateEmployee } from "./pages";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Home} />
      <Route exact path="/employee/:id" component={EmployeeDetails} />
      <Route exact path="/update/:id" component={UpdateEmployee} />
      <Route exact path="/create/new" component={AddEmployee} />
      <Route exact path="/create/new/f" component={Loader} />
      <Route exact path="/employees" component={AllEmployees} />

      <Route exact path="/contact" component={Loader} />
      <Route exact path="/contact" component={Loader} />
    </Router>
  );
}

export default App;
