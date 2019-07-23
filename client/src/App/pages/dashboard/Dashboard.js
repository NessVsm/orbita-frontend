import React, { Component } from 'react';
import Widgets from '../../containers/widgets/widgets';
import DateMenu from '../../components/menus/datemenu/datemenu';
import TodayDate from './../../components/date/date';
import Graphic from './../../containers/graphic/graphic';
import Userimg from './../../components/userimg/userimg';

import './../dashboard/Dashboard.css';

class SolarPanels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      solar_data: [],
      value_state: '',
      mostexpensive: '',
      mostexpensivezipcode: '',
      monthly_total: [],
      ss_total: [],
    };
  }

  componentDidMount() {
    this.getSolarData();
  }

  getSolarData = () => {
    fetch(
      'http://192.168.0.30:5024/solar_data/' +
        this.props.history.location.state.state_user
    )
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            solar_data: result,
          });
          //OKconsole.log(this.state.solar_data)
          this.getValuePerState(this.state.solar_data);
          this.getMostExpensive(this.state.solar_data);
          this.getInstallMonths(this.state.solar_data);
          this.getSystemSize(this.state.solar_data);
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  };
  getSystemSize = vector => {
    let year = '16';
    let formated_date = '';
    let formated_year = '';
    let count = 0;
    let count_system_size = 0;
    let system_size_total = [];

    for (let i = parseInt(year) - 5; i < parseInt(year); i++) {
      for (let j = 0; j < vector.length; j++) {
        formated_date = vector[j].installation_date.split('/');
        formated_year = formated_date[2];

        if (parseInt(formated_year) === parseInt(i)) {
          count = count + 1;
          count_system_size = count_system_size + vector[j].system_size;
        }
      }
      system_size_total.push(i);
      system_size_total.push(count_system_size);

      count = 0;
      count_system_size = 0;
    }
    this.setState({
      ss_total: system_size_total,
    });
  };

  getValuePerState = vector => {
    let valor = 0;

    if (vector.length > 0) {
      let size = vector.length;

      for (let i = 0; i < size; i++) {
        valor = parseFloat(valor) + parseFloat(vector[i].cost);
      }
    }
    this.setState({
      value_state: valor,
    });

    //OK console.log(this.state.value_state)
  };

  getMostExpensive = vector => {
    let size = vector.length;
    let max_value = -100000;
    let zipcode_max_value;

    for (let i = 0; i < size; i++) {
      if (parseFloat(vector[i].cost) > parseFloat(max_value)) {
        max_value = vector[i].cost;
        zipcode_max_value = vector[i].zipcode;
      }
    }
    this.setState({
      mostexpensive: max_value,
      mostexpensivezipcode: zipcode_max_value,
    });
  };
  getInstallMonths = vector => {
    let year = '16'; //ano aleatório para consulta
    let size = vector.length;
    let month_names = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];
    let monthly_total_value = [];
    let count = 0;
    let formated_date = '';
    let formated_month = '';
    let formated_year = '';
    let top_monthly_values = [];
    let first = 0;
    let second = 0;
    let third = 0;
    let index_first = 0;
    let index_second = 0;
    let index_third = 0;

    for (let i = 1; i < 13; i++) {
      for (let j = 1; j < size; j++) {
        formated_date = vector[j].installation_date.split('/');
        formated_month = formated_date[0];
        formated_year = formated_date[2];

        if (formated_year === year) {
          if (parseInt(formated_month) === parseInt(i)) {
            count = count + 1;
          }
        }
      }
      monthly_total_value.push(count);
      count = 0;
    }

    for (let k = 0; k < monthly_total_value.length; k++) {
      if (monthly_total_value[k] > first) {
        third = second;
        second = first;
        first = monthly_total_value[k];
        index_first = k;
      } else if (monthly_total_value[k] > second) {
        third = second;
        second = monthly_total_value[k];
        index_second = k;
        //console.log(index_second)
      } else if (monthly_total_value[k] > third) third = monthly_total_value[k];
      index_third = k;
    }

    top_monthly_values.push(
      month_names[index_first],
      first,
      month_names[index_second],
      second,
      month_names[index_third],
      third
    );
    this.setState({
      monthly_total: top_monthly_values,
    });
    //console.log(monthly_total_value)
  };

  render() {
    return (
      <section className="dashboard">
        <DateMenu />
        <Userimg />
        <TodayDate />
        <Graphic system_size_data={this.state.ss_total} />
        <Widgets
          monthlytotal={this.state.monthly_total}
          state={this.props.history.location.state.state_user}
          valueState={this.state.value_state}
          mostexpensive={this.state.mostexpensive}
          zipcode={this.state.mostexpensivezipcode}
          monthly_total={this.state.monthly_total}
        />
      </section>
    );
  }
}

export default SolarPanels;
