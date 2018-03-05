import React from 'react'
import { shalow } from 'enzyme'
import ShelfSelect from '../components/ShelfSelect'


describe('<ShelfSelect/>', () => {
    it('shallow renders correctly', () => {
        expect(shalow(<ShelfSelect/>))
    })
})
