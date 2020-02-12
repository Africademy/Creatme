import React, { Component } from "react";
import Quote from "../svg/ic_format_quote_48px.svg";
import User from "./user";
import User2 from "./user2";
import User3 from "./user3";
import User4 from "./user4";
import User5 from "./user5";

class Opinions extends Component {
  render() {
    return (
      <main className="opinions">
        <section className="opinions__main">
          <section className="opinions__main__text">
            <h3 className="opinions__main__text__title">Excellent</h3>
            <p className="opinions__main__text__description">
              Do it in minutes with our online CV Maker and Cover Letter
              <br />
              Creator. Get 70% more interviews. More than 5 million users
              <br /> have already found the job they deserve with us
            </p>
            <button className="opinions__main__text__btn">
              Comment Detail
            </button>
            <div className="opinions__main__quote">
              <img
                className="opinions__main__quote__icon"
                src={Quote}
                alt="quote"
              />
            </div>
          </section>
          <section className="opinions__main__user-rate">
            <User />
            <User2 />
            <User3 />
            <User4 />
            <User5 />
          </section>
        </section>
      </main>
    );
  }
}

export default Opinions;
