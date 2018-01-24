import React, { Component } from 'react';

// const App = (props) => {

//         return (
//             <div className="App">
//                 <h1>{props.text}</h1>
//             </div>
//         );
// }



class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            text: 'My name is Alex',
            hasLoaded: false,
            componentDidMount: true
        };


    };

    handleInputChange(value) {
        this.setState({
            input: value
        });
    }

    hasLoaded() {
        this.setState({
            hasLoaded: !this.state.hasLoaded
        });
    }

     componentDidMount() {
        this.setState({
            hasLoaded: true
        });
        console.log(this.state.componentDidMount)

    }

    render() {
        if (this.state.hasLoaded === true) {
            return (
                <React.Fragment>
                    <h1>{this.props.text + ' ' + this.state.text}</h1>
                    <div className="form-group">

                        <input
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="3"
                            placeholder="What's on your mind?"

                            onChange={(event) => { this.handleInputChange(event.target.value) }} />
                    </div>
                    <button
                        onClick={() => this.hasLoaded()}
                    >Click Me</button>
                </React.Fragment>

            );
        }

        else {
            return (
                <div>
                    <h1>'Loading...'</h1>
                    <button
                        onClick={() => this.hasLoaded()}
                    >Click Me</button>
                </div>
            )
        }
    }



}

export default App