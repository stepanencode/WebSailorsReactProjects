import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends  React.Component {
    onSearchSubmit(term) {
        axios.get(
            'https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID 3effb0fb53d8423ef4980ae8301ca4362e6523dc9d6a56c980f23fc0debccd79'
                }
            }
        )
            .then((response) => {
            console.log(response.data.results);
        });
    }

    render() {
        return(
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}

export default App;