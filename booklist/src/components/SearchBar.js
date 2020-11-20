import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
  constructor(){
    super()

    this.state ={
        userInput:''

    }
  }

  render() {

  
  return (
    <div className="search-bar">
        <input id='search'></input>
        <button id='search-button'>search</button>
        <button id='clear-search'>clear search</button>
    </div>
  );
  }
}

export default SearchBar;