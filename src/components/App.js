import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Options from './Options';
import '../App.css';

class App extends Component {

  state = {
    optionMode: false
  }

  testClick = () => {
    console.log('hey')
    this.setState({optionMode: true});
  }

  render() {
    return (
      <div className="container testborder">
        <Header testClick={this.testClick}/>
        <Main />
        {this.state.optionMode && <Options />}
      </div>
    );
  }
}

export default App;
