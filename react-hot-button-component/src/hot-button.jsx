import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let count = this.state.clickCount;
    count++;
    this.setState({ clickCount: count });
  }

  render() {
    let color;
    const count = this.state.clickCount;
    if (count < 3) {
      color = 'purple';
    } else if (count < 6) {
      color = 'indigo';
    } else if (count < 9) {
      color = 'red';
    } else if (count < 12) {
      color = 'orange';
    } else if (count < 15) {
      color = 'yellow';
    } else {
      color = 'white';
    }
    return (
      <button onClick={this.handleClick} className={color}>
        Hot Button
      </button>
    );
  }
}
