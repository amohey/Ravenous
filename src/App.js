import React from 'react';
import './App.css';
import './components/BusinessList/BusinessList';
import './components/SearchBar/SearchBar';
import SearchBar from "./components/SearchBar/SearchBar";
import BusinessList from "./components/BusinessList/BusinessList";
import Yelp from './util/yelp';
import Error from './components/Error_Rendering/Error';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            businesses: [],
        };
        this.searchYelp=this.searchYelp.bind(this)
    }

    searchYelp(term, location, sortBy) {

        if (location!==null && location.length<1) {
            location = null;
        }
        if (term!==null && term.length<1) {
            term = null;
        }

        Yelp.search(term, location, sortBy).then(businesses => {
            this.setState({businesses: businesses})
        })
    }

    render() {
        return (
            <div className="App">
                <h1>ravenous</h1>
                <SearchBar searchYelp={this.searchYelp}/>
                <BusinessList businesses={this.state.businesses}/>
                <Error Error={this.state.businesses.message ? JSON.parse(this.state.businesses.message).field  + '\n' + JSON.parse(this.state.businesses.message).description :null}/>
            </div>
        );
    }
}

export default App;
