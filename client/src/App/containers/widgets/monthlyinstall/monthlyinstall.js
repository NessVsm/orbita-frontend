import React, { Component } from 'react';

import './monthlyinstall.css';

class Monthlyinstall extends Component {
  render() {
    return (
      <div className="monthly-install">
        <p id="title">Maior no de instalações</p>
        <p className="monthly-install-info">
          <b>{this.props.monthlytotal[0]}</b> : {this.props.monthlytotal[1]}
        </p>
        <p className="monthly-install-info">
          <b>{this.props.monthlytotal[2]}</b> : {this.props.monthlytotal[3]}
        </p>
        <p className="monthly-install-info">
          <b>{this.props.monthlytotal[4]}</b> : {this.props.monthlytotal[5]}
        </p>
      </div>
    );
  }
}

export default Monthlyinstall;
