import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
import SearchBook from './components/SearchBook'
import './App.css'

const shelves = [
  { id: 'currentlyReading',
    name: 'Currently Reading'},
    
  { id: 'wantToRead',
    name: 'Want to Read'},

  { id: 'read',
    name: 'Read'}
]

class BooksApp extends Component {

  state = {
    books: [],
    searchedBooks:[]
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
      this.setState((state) => ({
        books: state.books.filter((b) => (b.id !== book.id)).concat([book])
      }))
    })
  }

  onSearchBook = (value) => {
    BooksAPI.search(value).then((searchedBooks) => {
      this.setState({searchedBooks})
      if(searchedBooks.length > 0) {
        this.state.books.map((book) => (
          this.setState((state) => ({
            searchedBooks: state.searchedBooks.filter((b) => (b.id !== book.id)).concat([book])
          }))
        ))
      }
    })
  }

  render() {

    const {books, searchedBooks} = this.state
    const {updateBook, onSearchBook} = this
    
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-content">
              {shelves.map((shelf) => (
                <div key={shelf.id} className="bookshelf">
                  <h2 className="bookshelf-title">{shelf.name}</h2>
                  <div className="bookshelf-books">
                    <ListBooks 
                      books={books.filter((book) => book.shelf ===shelf.id)}
                      changeShelf={true}
                      onUpdateBook={updateBook}
                      shelves={shelves}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div  className="open-search">
              <Link to='/search'/>
            </div>
          </div>
        )}/>
        <Route path='/search' render={({ history }) => (
          <div>
            <SearchBook
              onSearchBook={onSearchBook}
              books={searchedBooks}
              changeShelf={true}
              onUpdateBook={updateBook}
              shelves={shelves}
            />
          </div>
        )}/>
      </div>
    )
  }
}

export default BooksApp
