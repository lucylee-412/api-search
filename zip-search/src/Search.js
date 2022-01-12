import React from 'react';

// Zip code validation check
function isZipCode(zip)
{
    return /^\d{5}(-\d{4})?$/.test(zip);
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

export { Search };