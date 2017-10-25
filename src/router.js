import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Route }            from 'react-router-dom';
import { App }              from './app';

export default (
    <div>
        <Route path="/app" component={ App  } />
    </div>
);