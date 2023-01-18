import React from "react";

class HeaderRow extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        value: null,
      };
    }

  render() {
    const section = this.props.section;
    return (
      <tr>
        <th colSpan="2">
          {section}
        </th>
      </tr>
    );
  }
}

class ItemRow extends React.Component {
  // calcBuyQty = (onHandInput, targetInput) => {
  //   let buyFloat = targetInput - onHandInput; //type is 'number'
  //   if (buyFloat > 0) {
  //     let buyFloatRoundedUp = Math.ceil(buyFloat);
  //     return parseFloat(buyFloatRoundedUp.toFixed(2));
  //   } else {
  //     return 0;
  //   }
  // }

  render() {
    const item = this.props.item;
    return (
      <tr>
        <td>{item.title}</td>
        <td>{item.on_hand_qty}</td>
        <td>{item.target_qty}</td>
        {/* <td>calcBuyQty({item.target_qty}, {item.on_hand_qty})</td> */}
        <td>99</td>
      </tr>
    );
  }
}

class ItemTable extends React.Component {
  render() {
    const rows = [];
    let lastSection = null;

    this.props.items.forEach((item) => {
      if (item.section !== lastSection) {
        rows.push(
          <HeaderRow
            section={item.section}
            key={item.section} />
        );
      }
      rows.push(
        <ItemRow
          item={item}
          key={item.id} />
      );
      lastSection = item.section;
    });



    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col">Name</th>
            <th className="col">Have</th>
            <th className="col">Need</th>
            <th className="col">Buy</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}



export default ItemTable;