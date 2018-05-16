import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="testborder">
        { /*** DRAFT: ****
          <Header /> Contains: title, time
              <Info/> Contains: temperature, currency, counter
          <Dropdown /> Contains: options for updating currency or counter - one at a time
          <Body /> Contains: Note and other
        */}

        <Header />
        <Body />
      </div>
    );
  }
}

export default App;
