import React, { Component } from "react";
import Header from "./Header";
import Main from "./Main";
import Options from "./Options";
import "../App.css";

class App extends Component {

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

  storage = this.getStoredLocally();

  state = {
    optionMode: false,
    countDownSetByUser: this.storage.countdown || 0,
    noteSetByUser: this.storage.note
  }

  // Recives changes from the Options-component
  handleOptionChange = (countDown, note) => {
      this.setState({ countDownSetByUser: countDown, noteSetByUser: note });
      this.storeLocally(countDown, note);
  }

  toggleOptionDisplay = () => {
    this.state.optionMode
    ? this.setState({ optionMode: false })
    : this.setState({ optionMode: true });
  }

  render() {
    return (
      <div className="container">
        <Header
          toggleOptionDisplay={ this.toggleOptionDisplay }
          countDownSetByUser={ this.state.countDownSetByUser }
        />
        <Main
          toggleOptionDisplay={ this.toggleOptionDisplay }
          noteSetByUser={ this.state.noteSetByUser }
          handleOptionChange={ this.handleOptionChange }
        />
        {this.state.optionMode &&
          <Options
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
