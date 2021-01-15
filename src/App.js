import React, {Component} from "react";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <EmployeeList />
      </div>
    );
  }
}

export default App;
