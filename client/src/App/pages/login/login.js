import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      message: '',
      name_user: '',
      username: '',
      state_user: '',
      zipcode_user: '',
      email_user: '',
      password_user: '',
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    this.setState({ message: '' });
    if (!this.state.email || !this.state.password) {
      this.setState({
        message: 'Email e senha são obrigatórios',
        logged: false,
      });
      return;
    } else {
      axios
        .post('http://192.168.0.30:5024/login', this.state)
        .then(response => {
          this.setState({
            registered: true,
            name_user: response.data[0].name,
            username: response.data[0].username,
            state_user: response.data[0].state,
            zipcode_user: response.data[0].zipcode,
            email_user: response.data[0].email,
            password_user: response.data[0].password,
            email: response.data[0].email,
          });
        })
        .catch(error => {
          this.setState({
            message: 'A senha e o e-mail não conferem',
            registered: false,
          });
          return;
        });
    }
  };
  render() {
    const { email, password, message } = this.state;

    if (this.state.registered) {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: {
              name: this.state.name_user,
              username: this.state.username,
              state_user: this.state.state_user,
              zipcode_user: this.state.zipcode_user,
              email_user: this.state.email_user,
              password_user: this.state.password_user,
              email: this.state.email,
            },
          }}
        ></Redirect>
      );
    } else {
      return (
        <section className="login">
          <h1>Login</h1>

          <form onSubmit={this.submitHandler}>
            <div className="inner-wrap">
              <div>{message}</div>
              <div className="section">
                <span>1</span>Email
              </div>
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.changeHandler}
              />
              <div className="section">
                <span>2</span>Senha
              </div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandler}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      );
    }
  }
}

export default Login;
