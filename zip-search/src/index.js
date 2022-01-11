import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Zip code validation check
function isZipCode(str)
{
    return /^\d{5}(-\d{4})?$/.test(str);
}

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if (!isZipCode(this.state.value)) {
            alert(this.state.value + ' is not a zip code.');
        }

        alert('A zip code was submitted: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Zip Code:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

// ========================================

ReactDOM.render(
    <Search />,
    document.getElementById('root')
);