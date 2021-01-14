import React, {Component} from "react";
import Employee from "./Employee";
import SearchEmployee from "./SearchEmployee";
import axios from "axios";
const URL = "https://randomuser.me/api/?nat=US&results=25";

class EmployeeList extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] };
        this.filterList = this.filterList.bind(this);
    }
    componentDidMount() {
        // load data
        axios.get(URL).then(response => {
            this.setState({employees: response.data.results})
            console.log(response.data.results)      
        })
    }

    filterList(input) {
        const employeesFiltered = this.state.employees.filter(employee => {
             return employee.name.first === input || employee.name.first.toLowerCase() === input
        });

        this.setState({employees: employeesFiltered})
    }

    render() {
        const employees = this.state.employees.map(employee => (
            <Employee key={employee.cell} employee={employee}/>
        ))
        return (
            <div className="EmployeeList">
                <SearchEmployee filterList={this.filterList}/>
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
        );
    }
}

export default EmployeeList;