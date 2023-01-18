import React from "react"
import ItemTable from './ItemTable.js'
import ItemList from './ItemList.js'
import './App.css';

class App extends React.Component {

  render () {
    return (
    <div className="row">
      <div className="col"></div>
      <div className="col-6">
        <ItemTable items={this.props.items} />
        {/* <ItemList items={this.props.items}/> */}
      </div>
      <div className="col"></div>
    </div>
    )
  }
}
export default App;
