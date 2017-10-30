import React, { Component } from 'react';
import ReactDOM             from 'react-dom';
import { Route }            from 'react-router-dom';
import { App }              from './app';
import CoursesPage          from './components/pages/courses-pages';

export default (
    <div>
        <Route path="/app" component={ App } />
        <Route path="/cpp" component={ CoursesPage } />
    </div>
);