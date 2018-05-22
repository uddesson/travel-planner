import React, { Component } from 'react';
import Header from './Header';
import Main from './Main';
import Options from './Options';
import '../App.css';

class App extends Component {

  state = {
    optionMode: false,
    countDownSetByUser: '',
  }

  toggleOptionDisplay = () => {
    this.state.optionMode ? this.setState({optionMode: false}) : this.setState({optionMode: true});
  }

  handleChange = (newCountDownDate) => {
    this.setState({countDownSetByUser: newCountDownDate });
  }

  render() {
    return (
      <div className="container testborder">
        <Header toggleOptionDisplay={this.toggleOptionDisplay} countDownSetByUser={this.state.countDownSetByUser}/>
        <Main />
        {this.state.optionMode && <Options handleChange={this.handleChange}/>}
      </div>
    );
  }
}

export default App;
