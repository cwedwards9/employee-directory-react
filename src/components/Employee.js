import React, {Component} from "react";

class Employee extends Component {
    render() {
        const { name, email, phone, picture } = this.props.employee;
        return (
            <tr>
                <th scope="row"><img src={picture.thumbnail} alt={`${name.first} ${name.last}`}/></th>
                <td>{name.first}</td>
                <td>{name.last}</td>
                <td>{phone}</td>
                <td>{email}</td>
            </tr>
        );
    }
}

export default Employee;