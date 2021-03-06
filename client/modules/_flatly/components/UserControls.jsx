import React from 'react';

export default class extends React.Component {

  getLoggedin() {
    const {user} = this.props;
    return (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle"
            data-toggle="dropdown">{user.profile.name} <span className="caret"></span></a>
          <ul className="dropdown-menu" role="menu">
            <li><a href="/vendors/profile">Профиль</a></li>
            <li><a href="/logout">Выйти</a></li>
          </ul>
        </li>
      </ul>
    );
  }

  getGuest() {
    return (
      <ul className="nav navbar-nav navbar-right">
        <li><a href="/login">Вход</a></li>
      </ul>
    );
  }

  render() {
    const {loggedIn} = this.props;
    return loggedIn ? this.getLoggedin() : this.getGuest();
  }
}
