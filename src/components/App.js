import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Options from "./Options";
import "../App.css";

class App extends Component {

  /* Countdown and note are set in Options, but stored in App
  to then be sent down to other components that display the values */
  storeLocally = (countdown, note) => {
    let storage = {
      countdown,
      note
    }
    localStorage.setItem("storage", JSON.stringify(storage))
  }

  getStoredLocally = () => {
    let stored = localStorage.getItem("storage");

    if (stored === null){
        return [];
    } else {
        return JSON.parse(stored);
    }
  }

  /* Will contain our locally stored object,
  with values that we now can apply to App's state */
  storage = this.getStoredLocally();

  state = {
    optionMode: false,
    countDownSetByUser: this.storage.countdown || 0,
    noteSetByUser: this.storage.note
  }

  toggleOptionMode = () => {
    this.state.optionMode
    ? this.setState({ optionMode: false })
    : this.setState({ optionMode: true });
  }

  // This is where we recive and handle changes from the Options-component
  handleOptionChange = (countDownSetByUser, noteSetByUser) => {
      this.setState({ countDownSetByUser, noteSetByUser });
      this.storeLocally(countDownSetByUser, noteSetByUser);
  }

  render() {
    return (
      <div className="container">
        <Header
          toggleOptionMode={ this.toggleOptionMode }
          countDownSetByUser={ this.state.countDownSetByUser }
        />
        <Main
          toggleOptionMode={ this.toggleOptionMode }
          optionMode={ this.state.optionMode }
          noteSetByUser={ this.state.noteSetByUser }
          handleOptionChange={ this.handleOptionChange }
        />
        {this.state.optionMode &&
          <Options //Appears at bottom of the page when toggled
            handleOptionChange={ this.handleOptionChange }
            noteSetByUser={ this.state.noteSetByUser }
            countDownSetByUser={ this.state.countDownSetByUser }
          />
        }
      </div>
    );
  }
}

export default App;
