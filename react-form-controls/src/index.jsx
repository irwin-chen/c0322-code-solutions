import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form>
        <label>
          Username<input type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
        </label>
        <label>
          Password<input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
        </label>
        <button onClick = {this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RegistrationForm/>);
