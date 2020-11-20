import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Booklist from './components/Booklist'
import Shelf from './components/Shelf'
import Data from './data'
import SearchBar from './components/SearchBar';




class App extends Component {
  constructor(){
    super()

    this.state ={
      books: Data,
      shelf:[]

    }

function addToShelf(){}

function clearShelf(){}

function filterBooks(){}

function reset(){}

  }

  render() {

  
  return (
    <div className="App">
      <Header/>
      <SearchBar/>
      <main>
         <Booklist books={this.state.books}/>
         <Shelf/>
      </main>
   </div>
  );
  }
}


export default App;
