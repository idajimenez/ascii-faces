import React from 'react'
import { Dropdown } from 'semantic-ui-react'
const sortBy = ['Size', 'Price', 'Id'];

const Sort = () => (
  <Dropdown
    button
    className='icon'
    floating
    labeled
    icon='world'
    options={sortBy}
    search
    text='Sort By'
  />
)

export default Sort;