import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Options from './Options';
import '../App.css';

class App extends Component {

  storeLocally = (countdown, note) => {
    let storage = {
      countdown,
      note
    }

    localStorage.setItem('storage', JSON.stringify(storage))
  }

  getStoredLocally = () => {
    let stored = localStorage.getItem('storage');

    if (stored === null){
        return [];
    } else {
        return JSON.parse(stored);
    }
  }

  storage = this.getStoredLocally();

  state = {
    optionMode: false,
    countDownSetByUser: this.storage.countdown,
    noteSetByUser: this.storage.note
  }

  handleChange = (countDown, note) => {
    // Reset old values with new ones in state
    this.setState({countDownSetByUser: countDown, noteSetByUser: note});

    /* Store them locally - next time user loads page
    the state will instead be set to the localStorage */
    this.storeLocally(countDown, note);
  }

  toggleOptionDisplay = () => {
    this.state.optionMode ? this.setState({optionMode: false}) : this.setState({optionMode: true});
  }

  render() {
    return (
      <div className="container">
        <Header
          toggleOptionDisplay={this.toggleOptionDisplay}
          countDownSetByUser={this.state.countDownSetByUser}
        />
        <Main
          toggleOptionDisplay={this.toggleOptionDisplay}
          noteSetByUser={this.state.noteSetByUser}
          handleChange={this.handleChange}
        />
        {this.state.optionMode && <Options handleChange={this.handleChange}/>}
      </div>
    );
  }
}

export default App;
