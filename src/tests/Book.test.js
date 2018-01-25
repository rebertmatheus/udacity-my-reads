import React from 'react'
import { shallow } from 'enzyme'
import Book from '../components/Book'

const shelves = [
    { id: 'currentlyReading',
      name: 'Currently Reading'},
      
    { id: 'wantToRead',
      name: 'Want to Read'},
  
    { id: 'read',
      name: 'Read'}  
  ]

  const book = []

describe('<Image />', () => {
    it('shallow renders correctly', () => {
        expect(shallow(
            <Book 
                book={book} 
                changeShelf={true}
                onUpdateBook={()=> {}}
                shelves={shelves}
            />
        ))
    })


})