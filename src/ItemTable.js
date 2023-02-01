/* eslint-disable react/prop-types */
import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'

const HeaderRow = (props) => {
  const section = props.section
  return (
    <tr>
      <th colSpan='2'>{section}</th>
    </tr>
  )
}

const ItemRow = (props) => {
  const item = props.item
  return (
    <tr>
      <td>{item.title}</td>
      <td>{item.on_hand_qty}</td>
      <td>{item.target_qty}</td>
      <td>{item.buy_qty}</td>
      <td>{item.updated}</td>
      <td>
        <Button color='primary'>Edit</Button> <Button color='danger'>Delete</Button>{' '}
      </td>
    </tr>
  )
}

const ItemTable = (props) => {
  const items = props.items
  const rows = []
  let lastSection = null

  items.forEach((item) => {
    if (item.section !== lastSection) {
      rows.push(
        <HeaderRow
          section={item.section}
          key={item.section}
        />
      )
    }
    rows.push(
      <ItemRow
        item={item}
        key={item.id}
      />
    )
    lastSection = item.section
  })

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
      <tbody>{rows}</tbody>
    </table>
  )
}

ItemTable.propTypes = {
  data: PropTypes.object
}

export default ItemTable
