import React, { Component } from 'react';

import './About.css';

class About extends Component {


  render() {
    return (
      <div className="About">
			<h1>{this.props.title}</h1>
			<p>{this.props.content}</p>
      </div>
    );
  }
}

export default About;
