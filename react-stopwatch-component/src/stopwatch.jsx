import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isRunning: false,
      timer: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.tick = this.tick.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    const toggleState = !this.state.isRunning;
    this.setState({ isRunning: toggleState });
    let timer;
    if (toggleState) {
      timer = setInterval(this.tick, 1000);
      this.setState({ timer: timer });
    } else {
      clearInterval(this.state.timer);
    }
  }

  reset() {
    if (!this.state.isRunning) {
      this.setState({ time: 0 });
    }
  }

  tick() {
    let currentTime = this.state.time;
    currentTime++;
    this.setState({ time: currentTime });
  }

  render() {
    let text;
    if (this.state.isRunning) {
      text = '⏸';
    } else {
      text = '▶';
    }
    return (
      <div className="flex">
        <div className="container" onClick={this.reset}>
          <div className="text">{this.state.time}</div>
        </div>
        <div className="button" onClick={this.handleClick}>{text}</div>
      </div>
    );
  }

}
