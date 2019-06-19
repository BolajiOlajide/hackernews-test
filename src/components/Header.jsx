import React from 'react';

// assets
import y18Logo from '../assets/y18.gif';


function Header() {
  return (
    <nav className="hacker_nav">
      <section className="navigation">
        <img src={y18Logo} alt="y-combinator logo" />

        <section className="nav__details">
          <span className="nav__header">Hacker News</span>&nbsp;

          <section className="nav__links">
            <a href="/">new | </a>
            <a href="/">past | </a>
            <a href="/">comments | </a>
            <a href="/">ask | </a>
            <a href="/">show | </a>
            <a href="/">jobs | </a>
            <a href="/">submit </a>
          </section>
        </section>

      </section>

      <section className="auth">
        <a href="/">login</a>
      </section>
    </nav>
  )
}

export default Header;
