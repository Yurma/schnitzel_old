import React, { Component } from 'react';
import Home from './home/home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    componentWillMount() {
    }

    render() {
    return(
        <div>
            <Home />
        </div>
    );
    }
}

export default App;