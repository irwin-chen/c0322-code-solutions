import React from 'react';

let count = 0;

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCount: count
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    count++;
    this.setState({ clickCount: count });
  }

  render() {
    let color;
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
