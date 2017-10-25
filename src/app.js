import React, { Component }             from 'react';
import ReactDOM                         from 'react-dom';

import SearchBar   from './components/search-bar';
import VideoList   from './components/video-list';
import VideoDetail from './components/video-detail';

import YTSearch from 'youtube-api-search';
import _                                from 'lodash';

const API_KEY = 'AIzaSyB_H4M1y4o6rpS4MCG-fl3CBC1O8ab5GsQ';

export class App extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('costa rica cascadas');
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term}, videos => {
            this.setState({
                videos:        videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar
                     onSearchTermChange={ videoSearch } />
                <VideoDetail
                    video={ this.state.selectedVideo } />
                <VideoList
                    onVideoSelect={ this.selectVideo }
                    videos={ this.state.videos } />
            </div>
        );
    }

    selectVideo = selectedVideo => { this.setState({selectedVideo}) };
}