import React, {Component} from "react";
import "./Header.css";

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>Employee Directory</h1>
                <p>Welcome to the employee directory!</p>
            </div>
        );
    }
}

export default Header;