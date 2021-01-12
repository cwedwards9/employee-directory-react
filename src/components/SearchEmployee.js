import React, {Component} from "react";


class SearchEmployee extends Component {
    render() {
        return (
            <div className="SearchEmployee">
                <form>
                    <input placeholder="Find an employee..."/>
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchEmployee;