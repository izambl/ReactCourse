import React, { Component } from 'react';

export default class TestComponent extends Component {
    constructor(props) {
        super(props);

        console.log('Test component', props);
    }

    render() {
        return <div>ola ke ase { this.props.children }</div>;
    }
}