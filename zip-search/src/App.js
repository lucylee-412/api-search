import React from 'react';
import {Search} from "./Search";
import {GetRequest} from "./GetRequest";

class App extends React.Component {
    render() {
        return (
            <div>
                <Search />
                <GetRequest />
            </div>
        );
    }
}

export { App };