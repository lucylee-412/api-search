import React from 'react';

class GetRequest extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zipcode: "",
            totalReactPackages: null,
            errorMessage: null
        };
    }

    componentDidMount() {


        // GET request using fetch with error handling
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${(this.zipcode)}`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }

                this.setState({ totalReactPackages: data.total })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div>
                {errorMessage}
            </div>
        );
    }
}

export { GetRequest };