import React, { Component } from 'react';

import './App.css';

import About from './About';
import List from './List';


var title = 'Some Title';
var subheader = 'Lorem impsum';

var items = [
	{
		title: 'Yabadabadooo',
		desc: 'some description',
		label: 'Button',
		src: "https://svn.osgeo.org/geotools/trunk/spike/web/images/background_lower.jpg"
	},
	{
		title: 'Yabadabadooo',
		desc: 'some description',
		label: 'Button',
		src: "https://svn.osgeo.org/geotools/trunk/spike/web/images/background_lower.jpg"
	},
	{
		title: 'Yabadabadooo',
		desc: 'some description',
		label: 'Button',
		src: "https://svn.osgeo.org/geotools/trunk/spike/web/images/background_lower.jpg"
	}
];

class App extends Component {
  render() {
    return (
      <div className="App">
			<About title={title} content={subheader}/>  
			<List items={items}/>
      </div>
    );
  }
}

export default App;
