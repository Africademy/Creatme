import React, { Component } from "react";
import Header from "./header";
import stairs from "../img/pink-girl.jpeg";
import icon1 from "../img/icon1.jpeg";
import icon2 from "../img/icon2.jpeg";
import icon3 from "../img/icon3.jpeg";
import icon4 from "../img/icon4.jpeg";
import person from "../img/person.jpeg";
import arrowDown from "../svg/arrow-right.svg";

class Hero extends Component {
  render() {
    return (
      <main className="main">
        <section className="hero__image">
          <div className="hero__image__container">
            <img
              className="hero__image__container__img"
              src={stairs}
              alt="pink-stairs"
            />
          </div>
        </section>
        <Header handleMenu={this.props.handleMenu} />
        <main className="hero">
          <section className="hero__text">
            <h1 className="hero__text__main">
              Choose A Template.
              <br />
              Fill In The Blank
            </h1>
            <p className="hero__text__description">
              Download & land the job. Our CV Creator has
              <br /> already helped millions of users make their on
              <br /> designing and tweaking your CV
            </p>
            <div className="hero__text__container">
              <div className="hero__text__container__icons">
                <button className="hero__text__container__icons__icon">
                  <img
                    className="hero__text__container__icons__icon__img"
                    src={icon1}
                    alt="icon1"
                  />
                </button>
                <button className="hero__text__container__icons__icon--2">
                  <img
                    className="hero__text__container__icons__icon__img--2"
                    src={icon2}
                    alt="icon2"
                  />
                </button>
                <button className="hero__text__container__icons__icon--3">
                  <img
                    className="hero__text__container__icons__icon__img--3"
                    src={icon3}
                    alt="icon3"
                  />
                </button>
                <button className="hero__text__container__icons__icon--4">
                  <img
                    className="hero__text__container__icons__icon__img--4"
                    src={icon4}
                    alt="icon4"
                  />
                </button>
              </div>
              <button className="hero__text__container__btn">Create CV</button>
            </div>
            <div className="hero__text__container__person">
              <img
                className="hero__text__container__person__img"
                src={person}
                alt="person"
              />
            </div>
          </section>
          <div className="hero__scroll">
            <div className="hero__scroll__arrow">
              <div className="hero__scroll__arrow__line"></div>
              <img
                className="hero__scroll__arrow__icon"
                src={arrowDown}
                alt="arrow"
              />
            </div>
            <p className="hero__scroll__text">scroll to explore</p>
          </div>
        </main>
      </main>
    );
  }
}

export default Hero;
