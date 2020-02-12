import React, { Component } from "react";

import arrowDown from "../svg/nav-arrow-down.svg";
import burger from "../svg/menu-scale.svg";

class Header extends Component {
  constructor() {
    super();
    this.dropdown = React.createRef();
    this.handleDropdown = this.handleDropdown.bind(this);
    this.state = {
      dropdown: false
    };
  }

  handleDropdown(e) {
    if (this.state.dropdown === false) {
      e.currentTarget.children[1].style.display = "block";
      e.currentTarget.children[0].className += "--active";
      this.setState({ dropdown: !this.state.dropdown });
    } else {
      e.currentTarget.children[1].style.display = "none";
      e.currentTarget.children[0].className = "header__nav__item__icon";
      this.setState({ dropdown: !this.state.dropdown });
    }
  }

  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <h2>Creatme</h2>
        </div>
        <nav className="header__nav">
          <li
            onClick={e => this.handleDropdown(e)}
            className="header__nav__item"
          >
            Why Creatme?
            <img
              className="header__nav__item__icon"
              src={arrowDown}
              alt="arrow-down"
            />
            <ul ref={this.dropdown} className="header__nav__item__dropdown">
              <li className="header__nav__item__dropdown__item">
                Our Services
              </li>
            </ul>
          </li>
          <li
            onClick={e => this.handleDropdown(e)}
            className="header__nav__item"
          >
            Learn
            <img
              className="header__nav__item__icon"
              src={arrowDown}
              alt="arrow-down"
            />
            <ul className="header__nav__item__dropdown">
              <li className="header__nav__item__dropdown__item">About us</li>
              <li className="header__nav__item__dropdown__item">Opinions</li>
            </ul>
          </li>
          <div className="header__nav__btns">
            <button className="header__nav__btns__btn">Sign In</button>
            <button className="header__nav__btns__btn--primary">Login</button>
          </div>
        </nav>
        <button onClick={this.props.handleMenu} className="header__burger">
          <img className="header__burger__icon" src={burger} alt="burger" />
        </button>
      </header>
    );
  }
}

export default Header;
