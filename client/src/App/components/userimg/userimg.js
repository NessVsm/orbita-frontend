import React, { Component } from 'react';

import './userimg.css';

class UserImg extends Component {
  render() {
    return (
      <div className="user-img">
        <img
          id="user-profile-img"
          alt="Foto do usuário"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4sIoqp5zbPhH_0XVFwu3jP7-poUCvhUpvhOdJA4XgaW4_gAm"
        />
      </div>
    );
  }
}

export default UserImg;
