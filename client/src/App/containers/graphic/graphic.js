import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  svg,
} from 'recharts';

import './graphic.css';

class Graphic extends PureComponent {
  render() {
    let grafico = [
      {
        name: 'Year 20' + this.props.system_size_data[0],
        pv: this.props.system_size_data[1],
      },
      {
        name: 'Year 20' + this.props.system_size_data[2],
        pv: this.props.system_size_data[3],
      },
      {
        name: 'Year 20' + this.props.system_size_data[4],
        pv: this.props.system_size_data[5],
      },
      {
        name: 'Year 20' + this.props.system_size_data[6],
        pv: this.props.system_size_data[7],
      },
      {
        name: 'Year 20' + this.props.system_size_data[8],
        pv: this.props.system_size_data[9],
      },
    ];
    return (
      <section className="graphic">
        <ResponsiveContainer>
          <LineChart
            width={800}
            height={200}
            data={grafico}
            margin={{
              top: 50,
              right: 30,
              left: 20,
              bottom: 100,
            }}
          >
            <svg fill="#666"></svg>
            <CartesianGrid strokeDasharray="0 3" />
            <XAxis dataKey="name" stroke="#f0f0f0" />
            <YAxis stroke="#f0f0f0" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#42f5f5"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </section>
    );
  }
}

export default Graphic;
