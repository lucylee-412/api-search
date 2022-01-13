import React from 'react';
import './index.css';

// Zip code validation check
function isZipCode(zip) {
    return /^\d{5}(-\d{4})?$/.test(zip);
}

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: "",
            cities: [],
            City: "No results",
            State: "",
            errorMessage: "No results",

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (this.state.zipcode === "") {
            alert('Please enter a zip code');
        }

        else if (!isZipCode(this.state.zipcode)) {
            alert(this.state.zipcode + ' is not a zip code');
        }

       

            event.preventDefault();

            fetch(`http://ctp-zip-api.herokuapp.com/zip/${(this.state.zipcode)}`)
                .then(async response => {
                    const data = await response.json();

                    console.log(data)
                    console.log(data[0].LocationText)

                    // check for error response
                    if (!response.ok) {
                        // get error message from body or default to response statusText
                        const error = (data && data.message) || response.statusText;
                        return Promise.reject(error);
                    }

                    return data;
                })
                .then((data) => {
                    this.setState({
                        cities: data,
                        City: data[0].City,
                        State: data[0].State,
                        Lat: data[0].Lat,
                        Long: data[0].Long,
                        EstimatedPopulation: data[0].EstimatedPopulation,
                        TotalWages: data[0].TotalWages
                    });
                })
                .catch(error => {
                    this.setState({ errorMessage: ''});
                    
                });
        
    }

    /*
    componentDidMount() {
        console.log(this.state.zipcode);
    }
    */

    handleChange(event) {
        this.setState({ zipcode: event.target.value });
    }

    render() {
        const { cities } = this.state;

        return (

            <div className='App'>
                <div className='input-base'>
                    <h1>Zip Code Search</h1>
                    <div id='search-field'>
                        <form onSubmit={this.handleSubmit}>
                            <label id="zipcode" name="zipcode">
                                Zip Code:
                                <input
                                    type="text"
                                    value={this.state.zipcode}
                                    placeholder="ex. 11206"
                                    onChange={this.handleChange}
                                />
                            </label>
                            <span></span>
                            <button type="submit" value="Submit">Submit </button>
                        </form>
                    </div>
                </div>

                {cities.map((city) => (
                    <div className='container'>
                        <div>{this.setState.errorMessage}</div>
                        <div className='container-top'>{this.state.City}, {this.state.State}</div>
                        <ul key={city.LocationText}>
                            <li className='label'>State: {city.State}</li>
                            <li className='label'>Location: {city.Lat}, {city.Long}</li>
                            <li className='label'>Population: {city.EstimatedPopulation}</li>
                            <li className='label'>Total Wages: {city.TotalWages}</li>
                        </ul>
                    </div>
                ))}

            </div>

        );
    }
}

export { App };