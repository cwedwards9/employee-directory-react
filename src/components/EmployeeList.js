import React, {Component} from "react";
import Employee from "./Employee";
import SearchEmployee from "./SearchEmployee";
import SortEmployees from "./SortEmployees";
import axios from "axios";
import "./EmployeeList.css";
// URL has a header to fix CORS error
const urlWithProxy = "https://cors-anywhere.herokuapp.com/https://randomuser.me/api/?nat=US&results=25";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [], isLoaded: false };
        this.filterList = this.filterList.bind(this);
        this.sortByFirstName = this.sortByFirstName.bind(this);
        this.sortByLastName = this.sortByLastName.bind(this);
    }
    componentDidMount() {
        // load data, update state, set isLoaded to be true
        axios.get(urlWithProxy).then(response => {
            this.setState({employees: response.data.results, isLoaded: true})      
        });
    }

    filterList(input) {
        const employeesFiltered = this.state.employees.filter(employee => {
             return employee.name.last.toLowerCase() === input.toLowerCase();
        });

        this.setState({employees: employeesFiltered})
    }

    sortByFirstName() {
        const employeesSorted = this.state.employees.sort((a, b) => {
            let nameA = a.name.first.toLowerCase();
            let nameB = b.name.first.toLowerCase();
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        });

        this.setState({employees: employeesSorted});
    }

    sortByLastName() {
        const employeesSorted = this.state.employees.sort((a, b) => {
            let nameA = a.name.last.toLowerCase();
            let nameB = b.name.last.toLowerCase();
            if(nameA < nameB) {
                return -1;
            }
            if(nameA > nameB) {
                return 1;
            }
            return 0;
        });

        this.setState({employees: employeesSorted});
    }

    render() {
        const employees = this.state.employees.map(employee => (
            <Employee key={employee.cell} employee={employee}/>
        ));
        
        // Conditionally render data if the API has returned data, otherwise render loading animation
        return (
            <div>
                {this.state.isLoaded ? (
                    <div className="EmployeeList">
                        <SearchEmployee filterList={this.filterList} />
                        <SortEmployees sortByFirstName={this.sortByFirstName} sortByLastName={this.sortByLastName} />
                        
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">Profile Photo</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scopr="col">Phone</th>
                                    <th scope="col">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {employees}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="loader"></div>
                ) }
                
            </div>
        );
    }
}

export default EmployeeList;