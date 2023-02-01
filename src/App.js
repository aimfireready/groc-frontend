/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import ItemTable from './ItemTable.js'
import ItemList from './ItemList.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {
  const items = props.items
  return (
    <div className='row'>
      <div className='col'></div>
      <div className='col-9'>
        <ItemTable items={items} />
        {/* <ItemList items={items} /> */}
      </div>
      <div className='col'></div>
    </div>
  )
}
export default App
