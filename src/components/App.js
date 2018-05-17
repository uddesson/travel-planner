import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="container testborder">
        { /*** DRAFT: ****
          <Header /> Contains: title, time
              <Info/> Contains: temperature, currency, counter
          <Dropdown /> Contains: options for updating currency or counter - one at a time
          <Main /> Contains: Note and other
        */}

        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
