import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

import './navbar.css';

class Menu extends Component {
  render() {
    if (window.location.pathname === '/dashboard') {
      return (
        <section className="menu">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
              <img
                id="colorful-icon"
                alt="Icone"
                src="https://cdn3.iconfinder.com/data/icons/creative-development/512/color_design_colorful_graphic_flat_icon-512.png"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link>Meu consumo</Nav.Link>
                <Nav.Link>Minha área</Nav.Link>
                <Nav.Link>Perfil</Nav.Link>
                <Nav.Link>Dados Pessoais</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </section>
      );
    } else {
      return (
        <section className="menu">
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand>
              <img
                id="colorful-icon"
                alt="Icone"
                src="https://cdn3.iconfinder.com/data/icons/creative-development/512/color_design_colorful_graphic_flat_icon-512.png"
              />
            </Navbar.Brand>
          </Navbar>
        </section>
      );
    }
  }
}

export default Menu;
