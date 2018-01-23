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
    console.log('termo: ', value)
    BooksAPI.search(value).then((searchedBooks) => {
      this.setState({searchedBooks})
    })

    console.log('searchedBooks: ', this.state.searchedBooks)
  }

  render() {

    const {books} = this.state
    const {updateBook, onSearchBook, searchedBooks} = this
    
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

/**
 * 
 * 
 *   <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        
 */

export default BooksApp
