import React from 'react'
// import React, { useState } from 'react'
import { Button, ButtonGroup } from 'reactstrap'
import PropTypes from 'prop-types'
// import EditModal from './EditModal'

const StoreSwitcher = ({ stores, activeStore, onStoreChange }) => {
  // const [selectedItem] = useState(false)

  // const toggleMenu = () => setIsOpen(!isOpen)

  const handleStoreChange = (store) => {
    onStoreChange(store)
    // setIsOpen(false)
  }

  return (
    <div className='store-switcher'>
      <ButtonGroup
        className='store-switcher__menu'
        vertical
      >
        {stores.map((store) => (
          <Button
            key={store.id}
            color={store.name === activeStore.name ? 'primary' : 'secondary'}
            className={`store-switcher__menu-item${store.name === activeStore.name ? ' active' : ''}`}
            onClick={() => handleStoreChange(store)}
          >
            {store.name}
          </Button>
        ))}
      </ButtonGroup>
      {/* <EditModal item={selectedItem} /> */}
    </div>
  )
}

StoreSwitcher.propTypes = {
  stores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
  activeStore: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired,
  onStoreChange: PropTypes.func.isRequired
}

export default StoreSwitcher
