import React from 'react';
import SearchBar from './SearchBar';
import youtube from  '../apis/youtube';
import VideoList from './VideoList';


const KEY = 'AIzaSyDtaeGfC-PrrgCrvCv8thmkdd26FAl3VHI';

class App extends  React.Component {
    state = { videos: [] };
    onTermSubmit = (term) => {
        // console.log(term);
        youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: KEY,
                q: term
            }
        }).then((response) => {
            console.log(response);
            this.setState({
                videos: response.data.items
                // selectedVideo: response.data.items[0]
            });
        });
    };

    render() {
        return(
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default App;