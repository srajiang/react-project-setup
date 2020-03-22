
import React from 'react';
import Item from './Item';

class ItemIndex extends React.Component {
  
  componentDidMount() {
    // this.props.fetchItems();  
  }

  render() {

    return (
      <>
        <h2>I'm a Item Index</h2>
        <Item />
      </>
    );

  }
}

export default ItemIndex;