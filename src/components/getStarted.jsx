import React, { Component } from "react";
import google from "../svg/google.png";

class GetStarted extends Component {
  state = {};

  render() {
    return (
      <main className="start">
        <section className="start__main">
          <div className="start__main__container">
            <div className="start__main__container__item">
              <div className="start__main__container__item__dot"></div>
              <div className="start__main__container__item__content">
                <h4 className="start__main__container__item__content__title">
                  Urgent Care
                </h4>
                <p className="start__main__container__item__content__description">
                  Online CV Maker and Cover
                </p>
              </div>
            </div>

            <div className="start__main__container__item">
              <div className="start__main__container__item__dot--red"></div>
              <div className="start__main__container__item__content">
                <h4 className="start__main__container__item__content__title">
                  Urgent Care
                </h4>
                <p className="start__main__container__item__content__description">
                  Online CV Maker and Cover
                </p>
              </div>
            </div>

            <div className="start__main__container__item">
              <div className="start__main__container__item__dot--violet"></div>
              <div className="start__main__container__item__content">
                <h4 className="start__main__container__item__content__title">
                  Urgent Care
                </h4>
                <p className="start__main__container__item__content__description">
                  Online CV Maker and Cover
                </p>
              </div>
            </div>
          </div>
          <section className="start__main__slider">
            <h4 className="start__main__slider__head">Ready To Get Started</h4>
          </section>
          <section className="start__main__btns">
            <button className="start__main__btns__btn">
              <img
                className="start__main__btns__btn__img"
                src={google}
                alt="google"
              />
              Start Now Google
            </button>
            <button className="start__main__btns__btn--filled">Preview</button>
          </section>
        </section>
      </main>
    );
  }
}

export default GetStarted;
