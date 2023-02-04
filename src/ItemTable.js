/* eslint-disable multiline-ternary */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Button } from 'reactstrap'
import { ClockLoader } from 'react-spinners'

// const HeaderRow = (props) => {
//   const section = props.section
//   return (
//     <tr>
//       <th
//         colSpan='6'
//         className='table-primary'
//       >
//         {section}
//       </th>
//     </tr>
//   )
// }

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
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.on_hand_qty}</td>
      <td>{item.target_qty}</td>
      <td>{item.buy_qty}</td>
      <td>{item.updated}</td>
      <td>
        <Button
          color='primary'
          size='sm'
          id={item.id}
        >
          Edit
        </Button>{' '}
        {/* <Button
          color='danger'
          size='sm'
        >
          Delete
        </Button>{' '} */}
        {/* 2023-01-31 Maybe move the delete button to a modal since it ought to be rarely used */}
      </td>
    </tr>
  )
}

// const TbodyData = (props) => {
//   return props.items.map((item) => (
//     <ItemRow
//       item={item}
//       key={item.id}
//     />
//   ))
// }

const ItemTable = () => {
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
          items.map((item) => (
            <ItemRow
              item={item}
              key={item.id}
            />
            // eslint-disable-next-line indent
          ))
        )}
      </tbody>
    </table>
  )
}

export default ItemTable
