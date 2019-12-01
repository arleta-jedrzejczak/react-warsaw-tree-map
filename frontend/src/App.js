import React from 'react';
import { TreeMap } from "./components/treemap.component";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            trees: null,
            isButtonClicked: false,
            firstTreeCoordinates: null
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setFirstTreeCoordinates();
        this.setState({isButtonClicked: true});
    }

    componentDidMount() {
        this.downloadTrees();
    }

    downloadTrees() {
        fetch('http://localhost:4000/test.json')
            .then(resp => resp.json())
            .then(resp => this.setState({trees: resp.result.records}))
            .catch(e => alert(e));
    }

    setFirstTreeCoordinates() {
        const firstTreeCoordinates = {
            lng: this.state.trees[0].x_wgs84,
            lat: this.state.trees[0].y_wgs84
        };
        this.setState({
            firstTreeCoordinates: firstTreeCoordinates
        });
    }

    render() {
        if (!this.state.isButtonClicked) {
            return (
                <div className="App">
                    <button onClick={this.handleClick}>Pokaż mapę</button>
                    <hr/>
                </div>
            );
        } else {
            return (
                <div className="App">
                    <TreeMap zoom={19} center={this.state.firstTreeCoordinates} trees={this.state.trees} />
                </div>
            );
        }
    }
}

export default App;
