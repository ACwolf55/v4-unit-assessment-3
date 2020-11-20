
import React, { Component } from 'react';
import '../App.css';

class Booklist extends Component {
  constructor(){
    super()

    this.state ={

    }
// const mappedBooks = this.props.map(function(this.props,index)  this.props[index].img this.props[index].title this.props[index].author )

  }

  render() {
    //  const mappedBooks = this.state.props.map((element)=> {
    //      return <Booklist book={element} key={element.id}/>
    //  })
    // console.log(props.Booklist)
    return (
        <div className="Booklist">
            <div id='book'>Books: </div>
        </div>
      );
    }
}
export default Booklist
