import React, { Component } from 'react';

class SearchBar extends Component
{
    constructor(props) {
        super(props);
        this.state = { term: 'Hello React!' };
    }

    render() {
        return (
            <div>
                <label>Search
                    <input
                        value={ this.state.term }
                        onChange={ this.onInputChange } />
                </label>
                <button onClick={ this.goAlert }>
                    Value: { this.state.term }
                </button>
            </div>
        );
    }

    goAlert = () => {
        alert(this.state.term);
    }

    onInputChange = (event) => {
        this.setState({
            term: event.target.value
        });

        console.log(event.target.value);
    }
}

export default SearchBar;