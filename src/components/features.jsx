import React, { Component } from "react";
import green from "../img/footer.jpeg";

import settings from "../svg/settings.svg";
import minimalBuld from "../img/minimal-pink.jpeg";
import Feature from "./feature";
import profile from "../img/minimal-port.jpeg";
import featureData from "../data/features";

class Features extends Component {
  constructor() {
    super();
    this.state = {
      opened: false,
      color: "#000000"
    };
    this.openFeatures = this.openFeatures.bind(this);
  }

  openFeatures(e) {
    this.setState({ opened: true });
    const item = e.currentTarget.parentNode.parentNode;
    const icon = e.currentTarget.children[1];
    const title = e.currentTarget.parentNode.children[1];
    if (this.state.opened === true) {
      item.className = "features__content__list__item";
      e.currentTarget.className =
        "features__content__list__item__tit__controller";
      icon.className = "features__content__list__item__tit__controller__icon";
      title.className = "features__content__list__item__tit__details__title";
      this.setState({ opened: !this.state.opened });
    } else {
      item.className += "--active";
      e.currentTarget.className += "--active";
      icon.className += "--active";
      title.className += "--active";
    }
  }
  render() {
    return (
      <main className="features">
        <section className="features__media">
          <div className="features__media__theme">
            <div className="features__media__theme__picture">
              <div className="features__media__theme__picture__img">
                <img
                  src={profile}
                  alt="girl"
                  className="features__media__theme__picture__img__image"
                />
              </div>
              <div className="features__media__theme__picture__border"></div>
            </div>
            <div className="features__media__theme__container">
              <img
                className="features__media__theme__container__img"
                src={minimalBuld}
                alt="building"
              />
            </div>
            <form className="features__media__theme__form">
              <h4 className="features__media__theme__form__title">
                CV Theme Name
              </h4>
              <input
                className="features__media__theme__form__input--first"
                type="text"
                placeholder="Create CV Maker"
              />
              <input
                className="features__media__theme__form__input"
                type="text"
                placeholder="CV Theme"
              />
              <input
                className="features__media__theme__form__input"
                type="text"
                placeholder="User Managament"
              />
              <button className="features__media__theme__form__btn">
                Create CV
              </button>
            </form>
          </div>
          <div className="features__media__main-image">
            <img
              className="features__media__main-image__img"
              src={green}
              alt="pic"
            />
          </div>
        </section>
        <section className="features__content">
          <section className="features__content__title">
            <div className="features__content__title__container">
              <img
                className="features__content__title__container__icon"
                src={settings}
                alt="settings-icon"
              />
            </div>
            <h3 className="features__content__title__title">
              CV Making Features
            </h3>
          </section>
          <section className="features__content__list">
            {featureData.map(feature => {
              return (
                <Feature
                  title={feature.title}
                  description={feature.description}
                  key={feature.key}
                  opened={this.state.opened}
                  openFeatures={this.openFeatures}
                />
              );
            })}
          </section>
        </section>
      </main>
    );
  }
}

export default Features;
