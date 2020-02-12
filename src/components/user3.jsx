import React, { Component } from "react";
import hand from "../svg/hand-icon.png";
import starActive from "../svg/star-full.svg";
import starGrey from "../svg/star-full-grey.svg";
import userImg from "../img/user3.jpeg";

class User2 extends Component {
  state = {};
  render() {
    return (
      <div className="opinions__main__user-rate__user--3">
        <div className="opinions__main__user-rate__user__rate">
          <div className="opinions__main__user-rate__user__rate__bar">
            <img
              className="opinions__main__user-rate__user__rate__bar__hello"
              src={hand}
              alt="hello-icon"
            />
            <img
              className="opinions__main__user-rate__user__rate__bar__star"
              src={starActive}
              alt="star-icon"
            />
            <img
              className="opinions__main__user-rate__user__rate__bar__star"
              src={starActive}
              alt="star-icon"
            />
            <img
              className="opinions__main__user-rate__user__rate__bar__star"
              src={starActive}
              alt="star-icon"
            />
            <img
              className="opinions__main__user-rate__user__rate__bar__star"
              src={starGrey}
              alt="star-icon"
            />
            <img
              className="opinions__main__user-rate__user__rate__bar__star"
              src={starGrey}
              alt="star-icon"
            />
          </div>
          <div className="opinions__main__user-rate__user__rate__circle"></div>
          <div className="opinions__main__user-rate__user__rate__dot"></div>
        </div>
        <div className="opinions__main__user-rate__user__profile--3">
          <img
            className="opinions__main__user-rate__user__profile__img"
            src={userImg}
            alt="user"
          />
        </div>
      </div>
    );
  }
}

export default User2;
