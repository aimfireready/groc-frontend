/* eslint-disable space-before-function-paren */
import { React } from 'react'

const ItemList = (items) => {
  const sortedItems = [].concat(items).sort((a, b) => (a.section > b.section ? 1 : -1))
  console.info(sortedItems)

  const listItems = sortedItems.map((item, index) => <li key={index}>{item.title}</li>)
  return <ul>{listItems}</ul>
}

export default ItemList
