import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './datemenu.css';

class DateMenu extends Component {
  render() {
    return (
      <section className="date-menu">
        <Navbar bg="light" variant="light" id="datemenu-navbar">
          <Nav className="mr-auto">
            <Nav.Link>Dia</Nav.Link>
            <Nav.Link>Semana</Nav.Link>
            <Nav.Link>Mês</Nav.Link>
            <Nav.Link className="nav-link active">Ano</Nav.Link>
          </Nav>
        </Navbar>
      </section>
    );
  }
}

export default DateMenu;
