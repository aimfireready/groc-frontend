import {React} from "react"

function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.title}</li>;
}

function ItemList(props) {
	const sortedItems = [].concat(props.items)
  .sort((a, b) => a.section > b.section ? 1 : -1)
	console.info(sortedItems);

  const listItems = sortedItems.map((item) =>
    <li>
		<ListItem
			title={item.title}
			key={item.id} />
		</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

export default ItemList
