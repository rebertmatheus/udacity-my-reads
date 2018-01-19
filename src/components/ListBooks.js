import React, { Component } from 'react';
import Book from './Book'
import sortBy from 'sort-by'
import propTypes from 'prop-types'

class ListBooks extends Component {

    static propTypes = {
        books: propTypes.array.isRequired,
        changeShelf: propTypes.bool.isRequired,
        shelves: propTypes.array.isRequired
    }

    render() {
        const {books, changeShelf, onUpdateBook, shelves} = this.props
        
        let showningBooks
        showningBooks = books.sort(sortBy('title'))

        return(
            console.log(showningBooks),
            <ol className="books-grid">
                {showningBooks.map((book) => (
                    <li key={book.id}>
                        <Book 
                            book={book} 
                            changeShelf={changeShelf}
                            onUpdateBook={onUpdateBook}
                            shelves={shelves}
                        />
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks