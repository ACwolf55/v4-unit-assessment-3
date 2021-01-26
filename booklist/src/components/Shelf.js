import React, { Component } from 'react';
import '../App.css';

class Shelf extends Component {
  constructor() {
    super()

    this.state = {
      mappedTitles: []

    }
  }

  render() {
  
    let shelfMap = this.props.shelf.map((el, index) => {
     return <p>{el}</p>
    })

    return (
      <div className="Shelf">
        <h3>Your Shelf</h3>
        <button>Clear Shelf</button>
        <div id='shelflist'>
          {shelfMap}
        </div>

      </div>
    );
  }
}



export default Shelf
