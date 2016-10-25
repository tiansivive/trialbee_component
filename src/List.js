import React, { Component } from 'react';

import Item from './Item';
import './List.css';


class List extends Component {
	render() {
	  
		var listItems = this.props.items.map(function(item, ind) {
			return <Item key={ind} src={item.src} title={item.title} description={item.desc} label={item.label} />
		});

		return (
			<ul className="List">
				{listItems}
			</ul>
		);
  	}
}

export default List;
