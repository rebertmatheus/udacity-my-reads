import React, { Component } from 'react';

class Book extends Component {

    state = {
        shelf: ''
    }

    componentDidMount() {
        this.setState({shelf: this.props.book.shelf})
    }
    render(){
        const {book, changeShelf, onUpdatedBook} = this.props
        const {shelf} = this.state
        
        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div>
                    {changeShelf && 
                        <div className="book-shelf-changer">
                            <select onChange={() => onUpdatedBook(book,shelf)}>
                            <option value="none" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                            </select>
                        </div>
                    }
                    </div>
                    <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
            </div>
    )}
}

export default Book