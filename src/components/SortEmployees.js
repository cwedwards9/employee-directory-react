import React, { Component } from "react";
import "./SortEmployee.css";


class SortEmployees extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        if(e.target.value === "first"){
            this.props.sortByFirstName();
        } else if(e.target.value === "last") {
            this.props.sortByLastName();
        } else {
            return;
        }
    }

    render() {
        return (
            <div className="SortEmployees">
                <select onChange={this.handleChange}>
                    <option>--Filter by--</option>
                    <option value="first">First Name</option>
                    <option value="last">Last Name</option>
                </select>
            </div>
        );
    }
}


export default SortEmployees;