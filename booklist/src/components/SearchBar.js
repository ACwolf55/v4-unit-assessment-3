import React, { Component } from "react";
import "../App.css";

class SearchBar extends Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };

  handleClick = () => {
    console.log(this.state.userInput)
    this.props.filterBooks(this.state.userInput);
  };
  


  render() {
    console.log(this.state)
    return (
      <div className="search-bar">

        <input
                type="text"
                placeholder="search"
                name="search-input"
                onChange={this.handleChange}
              />

        <button id="search-button" onClick={this.handleClick}>
          search
        </button>
        <button id="clear-search" onClick={this.props.reset}>
          clear search
        </button>
      </div>
    );
  }
}

export default SearchBar;
