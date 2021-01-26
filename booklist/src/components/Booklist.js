
import React from 'react'
import Book from './Book'

const BookList = (props) => {

  const mappedBooks = props.books.map((element,index)=> {
    return (
    <Book key={element.id} book={element} title={element.title} author={element.author} img={element.img}
     shelfPush={props.addToShelf} index={index}
    />
    )
  })

  return <div className="booklist">{mappedBooks}</div>
}




export default BookList
