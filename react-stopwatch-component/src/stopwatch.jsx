import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    this.setState({ isRunning: !this.state.isRunning });
  }

  tick() {
    let currentTime = this.state.time;
    currentTime++;
    this.setState({ time: currentTime });
  }

  render() {
    let timer;
    if (this.state.isRunning) {
      timer = setInterval(this.tick, 1000);
    } else {
      clearInterval(timer);
    }
    return (
      <div onClick = {this.handleClick} className="container">
        <div className ="text">{this.state.time}</div>
      </div>
    );
  }

}
