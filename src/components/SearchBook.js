import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import ListBooks from './ListBooks'
import propTypes from 'prop-types'

/**
 * Classe de pesquisa de livros.
 */
class SearchBook extends Component {
    
    static propTypes = {
        changeShelf: propTypes.bool.isRequired,
        shelves: propTypes.array.isRequired,
        onUpdateBook: propTypes.func.isRequired,
        onSearchBook: propTypes.func.isRequired
    }

    render() {
        
        const {books, changeShelf, onUpdateBook, shelves, onSearchBook} = this.props

        let count = books.length

        console.log(count)
        return (
        <div className="app">
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Search by title or author"
                            onChange={(event, value) => onSearchBook(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                <h2>Add Book</h2>
                    {count > 0 &&
                        <ListBooks className="books-grid"
                            books={books}
                            changeShelf={changeShelf}
                            onUpdateBook={onUpdateBook}
                            shelves={shelves}
                        />
                    }
                </div>
            </div>
        </div>
    )}
}

export default SearchBook