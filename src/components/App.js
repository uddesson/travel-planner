import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../App.css';

class App extends Component {
  testClick(){
    console.log('hey')
  }

  render() {
    return (
      <div className="container testborder">
        <Header testClick={this.testClick}/>
        <Main />
      </div>
    );
  }
}

export default App;
