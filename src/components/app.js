import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
  	debugger;
    return (
      <div>
      	<Header />
      	{this.props.children}
      </div>
    );
  }
}
