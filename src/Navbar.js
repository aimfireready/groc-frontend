/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
// import PropTypes from 'prop-types'
import { Button, ButtonGroup, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap'
import selectStore from './ItemTable'

const Navbar = () => {
  const [ready, setReady] = useState(0)
  const [activeStore, setActiveStore] = useState('Aldi')
  const [isCollapsed, setCollapsed] = useState(false)
  const [stores] = useState([
    { name: 'Aldi', id: 1 },
    { name: 'Kroger', id: 2 },
    { name: 'Walmart', id: 3 }
  ])

  const toggleNavbar = () => {
    setCollapsed(!isCollapsed)
  }

  const StoreList = (props) => {
    return props.stores.map((store) => (
      <NavItem key={store.id}>
        <NavLink
          id={store.name}
          onClick={selectStore}
          // active={store.id === 1}
        >
          {store.name}
        </NavLink>
      </NavItem>
    ))
  }

  const NavButtonGroup = (props) => {
    const [rSelected, setRSelected] = useState(null)

    return props.stores.map((store) => (
      <Button
        key={store.id}
        color='primary'
        outline
        onClick={() => setRSelected(1)}
        active={rSelected === store.id}
      >
        {store.name}
      </Button>
    ))
  }

  return (
    <div className='container-fluid'>
      <NavbarToggler
        onClick={toggleNavbar}
        className='me-2'
      />
      <Collapse
        isOpen={!isCollapsed}
        navbar
      >
        <Nav
          vertical
          fill
          pills
          justified
        >
          <NavButtonGroup stores={stores} />
          {/* <StoreList stores={stores} /> */}
        </Nav>
      </Collapse>
    </div>
  )
}
export default Navbar
