import React from "react";
import "./App.scss";
import "./css/responsive.scss";

import Hero from "./components/hero";
import About from "./components/about";
import Weaponise from "./components/weaponise";
import Features from "./components/features";
import Opinions from "./components/opinions";
import GetStarted from "./components/getStarted";
import Footer from "./components/footer";

import dropdown from "./svg/nav-arrow-down.svg";

class App extends React.Component {
  constructor() {
    super();
    this.menu = React.createRef();
    this.handleMenu = this.handleMenu.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
    this.state = {
      burgerOpen: false,
      dropdown: false
    };
  }
  handleMenu() {
    if (this.state.burgerOpen === false) {
      this.menu.current.className += "--active";
      this.setState({ burgerOpen: !this.state.burgerOpen });
    } else {
      this.menu.current.className = "burger-menu";
      this.setState({ burgerOpen: !this.state.burgerOpen });
    }
  }
  handleDropdown(e) {
    if (this.state.dropdown === false) {
    }
    e.currentTarget.parentNode.children[1].className += "--active";
  }
  render() {
    return (
      <div className="App">
        <section ref={this.menu} className="burger-menu">
          <nav className="burger-menu__nav">
            <li className="burger-menu__nav__item">
              <button
                onClick={e => this.handleDropdown(e)}
                className="burger-menu__nav__item__btn"
              >
                Why Creatme?{" "}
                <img
                  src={dropdown}
                  alt="dropdown"
                  className="burger-menu__nav__item__btn__icon"
                />
              </button>
              <ul className="burger-menu__nav__item__dropdown">
                <li className="burger-menu__nav__item__dropdown__item">
                  <button className="burger-menu__nav__item__dropdown__item__btn">
                    Our Services
                  </button>
                </li>
                <li className="burger-menu__nav__item__dropdown__item">
                  <button className="burger-menu__nav__item__dropdown__item__btn">
                    Opinions
                  </button>
                </li>
              </ul>
            </li>
            <li className="burger-menu__nav__item">
              <button className="burger-menu__nav__item__btn">
                Learn
                <img
                  src={dropdown}
                  alt="dropdown"
                  className="burger-menu__nav__item__btn__icon"
                />
              </button>
              <ul className="burger-menu__nav__item__dropdown">
                <li className="burger-menu__nav__item__dropdown__item">
                  <button className="burger-menu__nav__item__dropdown__item__btn">
                    About us
                  </button>
                </li>
                <li className="burger-menu__nav__item__dropdown__item">
                  <button className="burger-menu__nav__item__dropdown__item__btn">
                    Clients
                  </button>
                </li>
              </ul>
            </li>
          </nav>
        </section>
        <Hero handleMenu={this.handleMenu} />
        <About />
        <Weaponise />
        <Features />
        <Opinions />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}

export default App;
