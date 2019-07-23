import React, { Component } from 'react';

import './date.css';

class TodayDate extends Component {
  state = {
    date: '',
  };

  componentDidMount() {
    this.getDate();
  }

  getDate = () => {
    var options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    var date = new Date().toLocaleString('pt-BR', options);
    this.setState({ date });
  };
  render() {
    return (
      <section className="today-date">
        <p> {this.state.date}</p>
      </section>
    );
  }
}

export default TodayDate;
