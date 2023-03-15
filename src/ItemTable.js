/* eslint-disable multiline-ternary */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { ClockLoader } from 'react-spinners'
import PropTypes from 'prop-types'

const calcDaysAgo = (inputDate) => {
  /* Expects inputDate in standard string format 2019-12-21 23:05:59 */
  /* OK: console.log("calcDaysAgo() input = " + inputDate); */
  if (!inputDate || inputDate == null) {
    console.log('inputDate is invalid.')
    return 'Invalid date'
  } else {
    const dateParam = inputDate.split(/[\s-:]/)
    dateParam[1] = (parseInt(dateParam[1], 10) - 1).toString()
    const itemDate = new Date(...dateParam)
    /* TEST SAM: The next line adds 3 hours to show DH DB's PST as FF EST: */
    /* itemDate.setTime(itemDate.getTime() + 3 * 60 * 60 * 1000); */
    const itemTimeString = itemDate.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    }) /* Returns '7:30 PM' */
    const today = new Date()
    const daysAgoInteger = Math.round(Math.abs((itemDate.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)))
    if (daysAgoInteger > 1) {
      return daysAgoInteger + ' days ago'
    } else {
      if (daysAgoInteger === 1) {
        return 'Yesterday at ' + itemTimeString
      } else if (daysAgoInteger === 0) {
        return 'Today at ' + itemTimeString
      }
    }
  }
}

const selectStore = async (e) => {
  const BASE_URL = 'https://sheet.best/api/sheets/2e4d58b8-427d-42f8-90d1-9f8f5393ad11/tabs/'
  const [items, setItems] = useState([])
  const store = e.target.id
  // TODO: fetch list for target store and update ItemTable
  await fetch(BASE_URL + store)
    .then((response) => response.json())
    .then((result) => {
      setItems(result)
    })
    .catch((e) => {
      console.error(e)
    })
}

const ItemRow = (props) => {
  const item = props.item
  const showModal = props.showModal
  const [selectedItem, setSelectedItem] = [props.selectedItem, props.setSelectedItem]

  const loadModal = (item) => {
    console.info('Loading modal...')
    setSelectedItem(item)
    console.info('Set item to: ' + item.name)
    showModal()
  }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.have_qty}</td>
      <td>{item.target_qty}</td>
      <td>{item.buy_qty}</td>
      <td>{item.updated}</td>
      <td>
        <Button
          color='primary'
          size='sm'
          id={item.id}
          onClick={() => loadModal(item)}
        >
          Edit
        </Button>{' '}
      </td>
    </tr>
  )
}

const ItemTable = (props) => {
  const showModal = props.showModal
  const setSelectedItem = props.setSelectedItem

  const BASE_URL = 'https://sheet.best/api/sheets/2e4d58b8-427d-42f8-90d1-9f8f5393ad11/tabs/'
  const [ready, setReady] = useState(0)
  const [items, setItems] = useState([])
  const [activeStore, setActiveStore] = useState('Aldi')

  useEffect(() => {
    const fetchData = async () => {
      setReady(false)
      await fetch(BASE_URL + activeStore)
        .then((response) => response.json())
        .then((result) => {
          setItems(result)
          setReady(true)
        })
        .catch((e) => {
          console.error(e)
          setReady(true)
        })
    }
    fetchData()
  }, [])

  return (
    <table className='table table-striped'>
      <thead>
        <tr>
          <th className='col'>Name</th>
          <th className='col'>Have</th>
          <th className='col'>Need</th>
          <th className='col'>Buy</th>
          <th className='col'>Updated</th>
          <th className='col'>Actions</th>
        </tr>
      </thead>
      <tbody>
        {items === null ? (
          <ClockLoader />
        ) : (
          // TODO: Finish the ClockLoader
          items.map((item) => (
            <ItemRow
              key={item.id}
              item={item}
              showModal={showModal}
              setSelectedItem={setSelectedItem}
            />
            // eslint-disable-next-line indent
          ))
        )}
      </tbody>
    </table>
  )
}
ItemTable.propTypes = {
  items: PropTypes.node,
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string
    })
  ),
  showModal: PropTypes.func.isRequired
}

ItemRow.propTypes = {
  item: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      have_qty: PropTypes.number,
      target_qty: PropTypes.number,
      buy_qty: PropTypes.number,
      updated: PropTypes.string
    })
  ).isRequired,
  showModal: PropTypes.func
}

export default ItemTable
