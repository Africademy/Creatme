import React, { Component } from "react";

import user from "../svg/user-circle-alt.svg";
import pinkImg from "../img/about-bg.jpeg";
import network from "../svg/network.svg";
import heart from "../svg/heart-full.svg";
import clock from "../svg/clock.svg";
import cursor from "../svg/cursor-pointer-full.svg";
import arrowright from "../svg/arrow-up.svg";
import pattern from "../svg/pattern.svg";

class About extends Component {
  state = {};
  render() {
    return (
      <main className="about">
        <section className="about__img">
          <img src={pinkImg} className="about__img__picture" alt="flower" />
        </section>
        <section className="about__content">
          <div className="about__content__main">
            <div className="about__content__main__icon">
              <img
                className="about__content__main__icon__pic"
                src={user}
                alt="icon"
              />
            </div>
            <h2 className="about__content__main__text">
              <span className="about__content__main__text__span">About</span>{" "}
              thanks to our proffesional CV builder you won't
              <br /> waste hours on designing and tweaking your CV.
              <br />
              For Support{" "}
              <a
                className="about__content__main__link"
                href="mailto: info@creatme.com"
              >
                info@creatme.com
              </a>
            </h2>
          </div>
          <section className="about__content__possibilities">
            <div className="about__content__possibilities__item">
              <div className="about__content__possibilities__item__icons">
                <div className="about__content__possibilities__item__icons__title-icon">
                  <img
                    className="about__content__possibilities__item__icons__title-icon__main-icon"
                    src={network}
                    alt="choose-icon"
                  />
                </div>
                <div className="about__content__possibilities__item__icons__arrow">
                  <div className="about__content__possibilities__item__icons__arrow__line"></div>
                  <img
                    className="about__content__possibilities__item__icons__arrow__btn-icon"
                    src={arrowright}
                    alt="arrow-right"
                  />
                </div>
              </div>
              <div className="about__content__possibilities__item__text">
                <h3 className="about__content__possibilities__item__text__title">
                  Choose your
                </h3>
                <p className="about__content__possibilities__item__text__description">
                  Sports betting, lottery and <br />
                  bingo playingfor the fun
                </p>
              </div>
            </div>
            <div className="about__content__possibilities__item">
              <div className="about__content__possibilities__item__icons">
                <div className="about__content__possibilities__item__icons__title-icon--red">
                  <img
                    className="about__content__possibilities__item__icons__title-icon__main-icon"
                    src={heart}
                    alt="choose-icon"
                  />
                </div>
                <div className="about__content__possibilities__item__icons__arrow">
                  <div className="about__content__possibilities__item__icons__arrow__line"></div>
                  <img
                    className="about__content__possibilities__item__icons__arrow__btn-icon"
                    src={arrowright}
                    alt="arrow-right"
                  />
                </div>
              </div>
              <div className="about__content__possibilities__item__text">
                <h3 className="about__content__possibilities__item__text__title">
                  Choose your
                </h3>
                <p className="about__content__possibilities__item__text__description">
                  Sports betting, lottery and <br />
                  bingo playingfor the fun
                </p>
              </div>
            </div>
            <div className="about__content__possibilities__item">
              <div className="about__content__possibilities__item__icons">
                <div className="about__content__possibilities__item__icons__title-icon--blue">
                  <img
                    className="about__content__possibilities__item__icons__title-icon__main-icon"
                    src={clock}
                    alt="choose-icon"
                  />
                </div>
                <div className="about__content__possibilities__item__icons__arrow">
                  <div className="about__content__possibilities__item__icons__arrow__line"></div>
                  <img
                    className="about__content__possibilities__item__icons__arrow__btn-icon"
                    src={arrowright}
                    alt="arrow-right"
                  />
                </div>
              </div>
              <div className="about__content__possibilities__item__text">
                <h3 className="about__content__possibilities__item__text__title">
                  Choose your
                </h3>
                <p className="about__content__possibilities__item__text__description">
                  Sports betting, lottery and <br />
                  bingo playingfor the fun
                </p>
              </div>
            </div>
            <div className="about__content__possibilities__item">
              <div className="about__content__possibilities__item__icons">
                <div className="about__content__possibilities__item__icons__title-icon--violet">
                  <img
                    className="about__content__possibilities__item__icons__title-icon__main-icon"
                    src={cursor}
                    alt="choose-icon"
                  />
                </div>
                <div className="about__content__possibilities__item__icons__arrow">
                  <div className="about__content__possibilities__item__icons__arrow__line"></div>
                  <img
                    className="about__content__possibilities__item__icons__arrow__btn-icon"
                    src={arrowright}
                    alt="arrow-right"
                  />
                </div>
              </div>
              <div className="about__content__possibilities__item__text">
                <h3 className="about__content__possibilities__item__text__title">
                  Choose your
                </h3>
                <p className="about__content__possibilities__item__text__description">
                  Sports betting, lottery and <br />
                  bingo playingfor the fun
                </p>
              </div>
            </div>
          </section>
        </section>
        <div className="about__gradient-background">
          <img
            className="about__gradient-background__pattern"
            src={pattern}
            alt="pattern"
          />
        </div>
      </main>
    );
  }
}

export default About;
