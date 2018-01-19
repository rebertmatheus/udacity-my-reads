import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import ListBooks from './components/ListBooks'
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
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books})
      console.log(this.state.books)
    })
  }

  updateBook = (book, shelf) => {
    if (book.shelf !== shelf) {
      book.shelf = shelf
      this.setState((state) => ({
        books: state.books.filter(book => book.id !== book.id).concat([ book ])
      }))
      BooksAPI.update(book, shelf)
    }
  }
  render() {

    const {books} = this.state
    
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
                      onUpdateBook={this.updateBook}
                      shelves={shelves}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}/>
        <Route path='/addBook' render={({ history }) => (
          <div>
            <h2>Add Book</h2>
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
