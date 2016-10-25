import React, { Component } from 'react';

import './App.css';

import About from './About';
import List from './List';


var title = 'What would you rather?';
var subheader = 'Let\'s play a game! Of the options below, what would you rather do?';

var items = [
	{
		title: 'Jon Snow',
		desc: "The bastard son of Eddard Stark. Raised by his father alongside his true-born half-siblings, he joins the Night's Watch when he nears adulthood.",
		label: 'Kill',
		src: "https://thoughtcatalog.files.wordpress.com/2016/04/jon-snow.jpg"
	},
	{
		title: 'Ramsay Bolton',
		desc: 'The bastard son of Roose Bolton, Lord of the Dreadfort and head of House Bolton, also known as the Bastard of Bolton and the Bastard of the Dreadfort.',
		label: 'Revive',
		src: "http://media.boingboing.net/wp-content/uploads/2015/06/ramsay-snow.jpg"
	},
	{
		title: 'Joffrey Lannister',
		desc: 'Prince Joffrey Baratheon is known to the Seven Kingdoms as the eldest son and heir of King Robert I Baratheon and Queen Cersei Lannister.',
		label: 'Revive',
		src: "https://typeset-beta.imgix.net/rehost/2016/9/13/4adf8a0d-0382-4354-9880-aeed9fea6d30.png"
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
