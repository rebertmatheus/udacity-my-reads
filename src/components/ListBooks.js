import React, { Component } from 'react';
import Book from './Book'
import sortBy from 'sort-by'

class ListBooks extends Component {

    render() {
        const {books} = this.props
        
        let showningBooks
        showningBooks = books.sort(sortBy('title'))

        return(
            console.log(showningBooks),
            <ol className="books-grid">
                {showningBooks.map((book) => (
                    <li key={book.id}>
                        <Book 
                            book={book} 
                            changeShelf={true}
                        />
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListBooks