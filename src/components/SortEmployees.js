import React, { Component } from "react";


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
            <div className="SortEmployees" style={{margin: "25px auto"}}>
                <select onChange={this.handleChange}>
                    <option>--Sort by--</option>
                    <option value="first">First Name</option>
                    <option value="last">Last Name</option>
                </select>
            </div>
        );
    }
}


export default SortEmployees;