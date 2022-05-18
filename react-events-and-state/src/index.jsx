import React from 'react';
import ReactDOM from 'react-dom/client';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: !this.state.isClicked });
  }

  render() {
    let response;
    if (this.state.isClicked) {
      response = 'Toggle Off';
    } else {
      response = 'Toggle On';
    }
    return (
      <button onClick={this.handleClick}>
        {response}
      </button>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<CustomButton />);
