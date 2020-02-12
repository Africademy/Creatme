import React, { Component } from "react";
import noise from "../svg/noise.svg";
import minBuilding from "../img/minmail.jpeg";
import pinkFemale from "../img/pink-female.jpeg";

import edit from "../svg/edit.svg";
import pages from "../svg/multiple-pages.svg";
import page from "../svg/page-flip.svg";
import more from "../svg/more-horiz.svg";

class Weaponise extends Component {
  render() {
    return (
      <main className="weaponise">
        <section className="weaponise__content">
          <div className="weaponise__content__icon">
            <img
              className="weaponise__content__icon__icon"
              src={noise}
              alt="weaponise-icon"
            />
          </div>
          <h3 className="weaponise__content__title">Weaponise Your CV</h3>
          <p className="weaponise__content__description">
            Our CV Creator has already helped millions of users make their CVs
            fast and land their dream jobs. Thank to our professional CV Builder
            you won't waste hours on designing and tweaking your CV in a text
            editor.
          </p>
          <button className="weaponise__content__btn">Detail</button>
        </section>
        <section className="weaponise__media">
          <div className="weaponise__media__options">
            <img
              className="weaponise__media__options__item"
              src={edit}
              alt="edit"
            />
            <img
              className="weaponise__media__options__item"
              src={pages}
              alt="edit"
            />
            <img
              className="weaponise__media__options__item"
              src={page}
              alt="edit"
            />
            <img
              className="weaponise__media__options__item"
              src={more}
              alt="edit"
            />
          </div>
          <div className="weaponise__media__female-image">
            <img
              className="weaponise__media__female-image__img"
              src={pinkFemale}
              alt="female"
            />
          </div>
          <div className="weaponise__media__main-image">
            <img
              className="weaponise__media__main-image__img"
              src={minBuilding}
              alt="minimalism"
            />
          </div>
        </section>
      </main>
    );
  }
}

export default Weaponise;
