/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import ItemTable from './ItemTable.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StoreSwitcher from './StoreSwitcher'
import EditModal from './EditModal'

const App = () => {
  // const items = props.items
  const [ready, setReady] = useState(0)
  const [activeStore, setActiveStore] = useState({ id: 0, name: 'Aldi' })
  const [stores, setStores] = useState([
    { name: 'Aldi', id: 0 },
    { name: 'Kroger', id: 1 },
    { name: 'Walmart', id: 2 }
  ])
  const [selectedItem, setSelectedItem] = useState({})
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = (item) => {
    setIsModalOpen(!isModalOpen)
  }

  const onStoreChange = (newStore) => {
    alert('Switched store to: ' + newStore.name)
  }

  const onItemNameChange = (newItemName) => {
    alert('Updated item name to: ' + newItemName)
  }

  const onHaveChange = (newItemHaveQty) => {
    alert('Updated item on-hand quantity to: ' + newItemHaveQty)
  }

  const onTargetQtyChange = (newItemTargetQty) => {
    alert('Updated item target quantity to: ' + newItemTargetQty)
  }

  useEffect(() => {
    document.title = 'Groc Stock'
  }, [])
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8'>
          <div className='row'>
            <div className='col-1'>
              <StoreSwitcher
                activeStore={activeStore}
                stores={stores}
                onStoreChange={onStoreChange}
                mr-4
              />
            </div>
            <div className='col-8'>
              <ItemTable
                showModal={showModal}
                setSelectedItem={setSelectedItem}
              />
              <EditModal
                item={selectedItem}
                isModalOpen={isModalOpen}
                showModal={showModal}
                onItemNameChange={onItemNameChange}
                onHaveChange={onHaveChange}
                onTargetQtyChange={onTargetQtyChange}
              />
            </div>
            <div className='col-2'></div>
          </div>
          <div className='col'></div>
        </div>
      </div>
    </div>
  )
}
export default App
