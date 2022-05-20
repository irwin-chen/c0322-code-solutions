import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
    this.passwordInput = this.passwordInput.bind(this);
  }

  passwordInput(event) {
    this.setState({ password: event.target.value });
  }

  render() {
    let text;
    let emoji;
    const pass = this.state.password;
    if (pass.length === 0) {
      text = 'A password is required.';
      emoji = '❌';
    } else if (pass.length < 8 && pass.length > 0) {
      text = 'Your password is too short.';
      emoji = '❌';
    } else if (!pass.match(/[A-Z]/g) || !pass.match(/[0-9]/g) || !pass.match(/[!@#$%^&*()]/g)) {
      text = 'Your password needs a Capital Letter, Number, and Special Character';
      emoji = '❌';
    } else {
      text = '';
      emoji = '✔️';
    }

    return (
      <form className="container">
        <label className="label">Password</label>
        <input type="password" value={this.state.password} onChange={this.passwordInput}></input>
        <span className="icon">{emoji}</span>
        <p className="invalid-text">{text}</p>
      </form>
    );
  }
}
