import React, { Component } from 'react';

import './totalinstall.css';

class TotalInstall extends Component {
  render() {
    return (
      <div className="total-install">
        <p id="title">Número de instalações</p>
        <p id="total-value-title">Valor total</p>
        <p id="total-value-info">{this.props.valueState} </p>
        <p id="total-value-state-title"> Estado</p>
        <p id="total-value-state-info"> {this.props.state} </p>
      </div>
    );
  }
}

export default TotalInstall;
