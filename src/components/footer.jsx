import React, { Component } from "react";
import footer from "../img/footer.jpeg";
import pin from "../svg/placeholder.svg";

class Footer extends Component {
  state = {};
  render() {
    return (
      <main className="footer">
        <section className="footer__image">
          <div className="footer__image__overlay"></div>
          <img className="footer__image__img" src={footer} alt="footer" />
        </section>
        <section className="footer__content">
          <section className="footer__content__summary">
            <div className="footer__content__summary__lists">
              <div className="footer__content__summary__lists__list">
                <p>About</p>
                <ul>
                  <li>
                    <a href="">Who We Are</a>
                  </li>
                  <li>
                    <a href="">Terms And Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </div>
              <div className="footer__content__summary__lists__list">
                <p>Contact</p>
                <ul>
                  <li>
                    <a href="">Who We Are</a>
                  </li>
                  <li>
                    <a href="">Terms And Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Contact Us</a>
                  </li>
                  <li>
                    <a href="">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              <a href="tel: +48 (22) 208 61 11">+48 (22) 208 61 11</a>
            </p>
          </section>
          <section className="footer__content__contact">
            <div className="footer__content__contact__title">
              <div className="footer__content__contact__title__location">
                <img
                  className="footer__content__contact__title__location__icon"
                  src={pin}
                  alt="pin"
                />
                <h5 className="footer__content__contact__title__location__name">
                  Warsaw, Poland
                </h5>
              </div>
              <p className="footer__content__contact__title__text">
                With Creatme,
                <br /> we've seen 30% revenue growth
              </p>
              <input
                className="footer__content__contact__title__input"
                type="text"
                placeholder="Your message..."
              />
            </div>
          </section>
        </section>
      </main>
    );
  }
}

export default Footer;
