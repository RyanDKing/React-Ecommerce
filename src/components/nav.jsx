import React from "react";

const Nav = () => {
  return (
    <div>
      <nav>
        <div className="nav__container">
          <a href="/">
            <img src="" alt="" className="logo" />
          </a>
          <ul className="nav__links">
            <li className="nav__list">
              <a href="/" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__list">
              <a href="/" className="nav__link">
                Books
              </a>
            </li>
            <button className="btn__menu">
              <FontAwesomeIcon font="bars" />
            </button>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
