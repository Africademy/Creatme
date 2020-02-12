import React, { Component } from "react";
import plus from "../svg/plus.svg";
import { throws } from "assert";

class Feature extends Component {
  state = {};
  render() {
    return (
      <div className="features__content__list__item" key={this.props.key}>
        <div className="features__content__list__item__top-line"></div>
        <div className="features__content__list__item__bottom-line"></div>
        <div className="features__content__list__item__tit">
          <button
            onClick={e => this.props.openFeatures(e)}
            className="features__content__list__item__tit__controller"
          >
            <div className="filter"></div>
            <img
              className="features__content__list__item__tit__controller__icon"
              src={plus}
              alt="icon"
            />
          </button>
          <h4 className="features__content__list__item__tit__details__title">
            {this.props.title}
          </h4>
        </div>
        <div className="features__content__list__item__tit__details">
          <p className="features__content__list__item__tit__details__description">
            {this.props.description}
          </p>
        </div>
      </div>
    );
  }
}

export default Feature;
