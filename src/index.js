import React                            from 'react';
import ReactDOM                         from 'react-dom';
// import { Provider }                     from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter }                from 'react-router-dom';
import YTSearch                         from 'youtube-api-search';
import _                                from 'lodash';

//import reducers from './reducers';

import Router from './router';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    (
        <BrowserRouter>
            { Router }
        </BrowserRouter>
    )
    , document.getElementById('app')
);
