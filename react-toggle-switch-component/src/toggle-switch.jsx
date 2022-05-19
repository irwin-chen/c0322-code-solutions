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
    let toggle;
    if (this.state.toggleOn) {
      toggle = 'on';
    } else {
      toggle = 'off';
    }
    return (
      <div className='flex'>
        <div onClick = {this.handleClick} className={`container-${toggle}`}>
          <div className={`button-${toggle}`}></div>
        </div>
        <span className='text'>{toggle}</span>
      </div>
    );

  }

}
