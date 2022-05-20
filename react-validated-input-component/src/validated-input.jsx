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
    } else {
      text = '';
      emoji = '✔️';
    }
    return (
      <form>
        <label className="label">Password</label>
          <input type="password" value={this.state.password} onChange={this.passwordInput}></input>
          <span>{emoji}</span>
          <p>{text}</p>
      </form>
    );
  }
}
