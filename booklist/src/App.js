import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import BookList from './components/BookList'
import Shelf from './components/Shelf'
import data from './data'
import SearchBar from './components/SearchBar';




class App extends Component {
  constructor(){
    super()

    this.state ={
      books: data,
      shelf:[]
    }
    this.addToShelf = this.addToShelf.bind(this)
    this.clearShelf = this.clearShelf.bind(this)
  }

addToShelf(bookIndex) {
  console.log(bookIndex)
  const shelfCopy = [...this.state.shelf]
  shelfCopy.push(this.state.books[bookIndex].title)
  this.setState({
    shelf:shelfCopy
  })
}

 clearShelf(){
   this.setState({
     shelf:[]
   })
 }

 filterBooks(){}

 reset(){}


  render() {

  
  return (
    <div className="App">
      <Header/>
      <section></section>
      <footer></footer>
      <SearchBar/>
      <main>
         <BookList books={this.state.books} addToShelf={this.addToShelf}/>
         <div id='dividerthing'></div>
         <Shelf shelf={this.state.shelf}/>
      </main>
   </div>
  );
  }
}


export default App;
