import React, { Component } from 'react';
import ShelfSelect from './ShelfSelect'

class Book extends Component {

    render(){
        const {book, changeShelf, onUpdateBook,shelves} = this.props
        
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
                {changeShelf && 
                        <ShelfSelect
                            shelves={shelves}
                            book={book}
                            onUpdateBook={onUpdateBook}
                        />
                }
            </div>
    )}
}

export default Book