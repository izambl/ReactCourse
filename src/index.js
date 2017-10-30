import React                            from 'react';
import ReactDOM                         from 'react-dom';
import { Provider }                     from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

import { BrowserRouter }                from 'react-router-dom';

import configureStore from './store/configure-store';

//import reducers from './reducers';

import Router from './router';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

const store = configureStore();

ReactDOM.render(
    (
        <Provider store={ store }>
            <BrowserRouter>
                { Router }
            </BrowserRouter>
        </Provider>
    )
    , document.getElementById('app')
);
