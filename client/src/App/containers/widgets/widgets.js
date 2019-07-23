import React, { Component } from 'react';
import TotalInstall from './totalinstall/totalinstall';
import MonthlyInstall from './monthlyinstall/monthlyinstall';
import MostExpensive from './mostexpensive/mostexpensive';

import './widget.css';

class Widgets extends Component {
  render() {
    return (
      <section className="widgets">
        <TotalInstall
          valueState={this.props.valueState}
          state={this.props.state}
        />
        <MostExpensive
          mostexpensive={this.props.mostexpensive}
          zipcode={this.props.zipcode}
        />
        <MonthlyInstall monthlytotal={this.props.monthly_total} />
      </section>
    );
  }
}
export default Widgets;
