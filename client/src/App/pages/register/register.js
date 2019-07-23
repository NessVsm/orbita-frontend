import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './register.css';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      username: '',
      state: '',
      zipcode: '',
      email: '',
      password: '',
      registered: false,
    };
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value, message: '' });
  };
  submitHandler = e => {
    e.preventDefault();
    this.setState({ message: '' });

    if (
      !this.state.name ||
      !this.state.email ||
      !this.state.password ||
      !this.state.username ||
      !this.state.state ||
      !this.state.zipcode
    ) {
      this.setState({
        message: 'Todos os campos são de preenchimento obrigatório',
        registered: false,
      });
      return;
    } else {
      axios
        .post('http://192.168.0.30:5024/users', this.state)
        .then(response => {
          this.setState({ registered: true });
        })
        .catch(error => {
          this.setState({
            message: 'O email cadastrado já existe',
            registered: false,
          });
          return;
        });
    }
  };
  render() {
    const {
      name,
      username,
      state,
      zipcode,
      email,
      password,
      message,
    } = this.state;
    if (this.state.registered) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: {
              email: this.state.email,
            },
          }}
        ></Redirect>
      );
    } else {
      return (
        <section className="register-page">
          <div className="register-info">
            <div className="register-welcome-text">
              <p>Bem-vindos!</p>
            </div>
            <img
              alt="icon-register-page"
              id="colorful-icon-register"
              src="https://cdn3.iconfinder.com/data/icons/creative-development/512/color_design_colorful_graphic_flat_icon-512.png"
            />
          </div>
          <div className="register">
            <h1> Registre-se </h1>
            <form onSubmit={this.submitHandler}>
              <div className="inner-wrap">
                <div>{message}</div>
                <div className="section">
                  <span>1</span>Nome
                </div>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.changeHandler}
                />
                <div className="section">
                  <span>3</span>Estado
                </div>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={this.changeHandler}
                />
                <div className="section">
                  <span>4</span>CEP
                </div>
                <input
                  type="text"
                  name="zipcode"
                  value={zipcode}
                  onChange={this.changeHandler}
                />
                <div className="section">
                  <span>2</span>Usuário
                </div>
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={this.changeHandler}
                />
                <div className="section">
                  <span>5</span>Email
                </div>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.changeHandler}
                />
                <div className="section">
                  <span>6</span>Senha
                </div>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.changeHandler}
                />
                <button type="submit" className="btn-submit">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </section>
      );
    }
  }
}

export default Register;
