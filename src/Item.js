import React, { Component } from 'react';

import About from './About';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
			<img src={this.props.src} height="100" width="250"/>
			<About title={this.props.title} content={this.props.description}/>
			<button>{this.props.label}</button>
      </div>
    );
  }
}

export default Item;
