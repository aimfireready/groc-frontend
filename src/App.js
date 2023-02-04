/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import ItemTable from './ItemTable.js'
import Navbar from './Navbar.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = (props) => {
  const items = props.items

  useEffect(() => {
    document.title = 'Groc Stock'
  }, [])
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col'>
          <Navbar />
        </div>
        <div className='col-9'>
          <ItemTable items={items} />
        </div>
        <div className='col'></div>
      </div>
    </div>
  )
}
export default App
