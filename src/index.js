import React    from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

const API_KEY = 'AIzaSyB_H4M1y4o6rpS4MCG-fl3CBC1O8ab5GsQ';

YTSearch({
    key: API_KEY,
    term: 'rick & morty'
}, function(data) { console.log(data);});

const App = () => {
    return <div><SearchBar /></div>;
};

ReactDOM.render(<App />, document.querySelector('.container'));