import React, { Component } from 'react';

import './mostexpensive.css';

class MontExpensive extends Component {
  render() {
    return (
      <div className="most-expensive">
        <p id="title">Maior custo</p>
        <p id="most-expensive-zipcode-title">CEP</p>
        <p id="most-expensive-zipcode-info"> {this.props.zipcode} </p>
        <p id="most-expensive-value-title"> Custo</p>
        <p id="most-expensive-value-info"> {this.props.mostexpensive} </p>
      </div>
    );
  }
}

export default MontExpensive;
