import React, {Component} from "react";


class SearchEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(evt) {
        evt.preventDefault();
        this.props.filterList(this.state.input);
        this.setState({input: ""});
    }

    handleChange(evt) {
        evt.preventDefault();
        this.setState({
            [evt.target.name] : evt.target.value
        });
    }
    
    render() {
        return (
            <div className="SearchEmployee">
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChange}
                        placeholder="Find an employee by last name..."
                        style={{width: "300px"}}
                    />
                    <button>Search</button>
                </form>
            </div>
        );
    }
}

export default SearchEmployee;