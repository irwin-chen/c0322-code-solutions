import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ toggleOn: !this.state.toggleOn });
  }

  render() {

    return (
      <div className='container'></div>
    );

  }

}
