import React, { Component } from 'react';
import './App.css';

import Navigation from './navigation/navigation';
import Navbar from './components/menus/navbar/navbar';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;
