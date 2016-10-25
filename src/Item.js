import React, { Component } from 'react';

import About from './About';
import './Item.css';

class Item extends Component {
  render() {
    return (
      <div className="Item">
			<img src={this.props.src} height="200" width="300" role="presentation"/>
			<About title={this.props.title} content={this.props.description}/>
			<button>{this.props.label}</button>
      </div>
    );
  }
}

export default Item;
