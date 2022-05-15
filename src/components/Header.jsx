import React from 'react'
import '../styles/Header.css'

const Header = () => {
  return (
    <header>
      <div className="HeaderTop">
        <div className="HeaderTop__content">
          <nav className="HeaderTop__menu">
            <ul>
              <li>
                <a href="https://fashionnews.com.mx" target="_blank">FN FASHION NEWS</a>
              </li>
              <li>
                <a href="http://mezclarte.fashionnews.com.mx/" target="_blank">MEZCLARTE</a>
              </li>
            </ul>
          </nav>
          <nav className="HeaderTop__social">
            <ul>
              <li>
                <a href="https://www.facebook.com/Mezclarte-Oficial-101836825310623/" target="_blank">
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/mezclarte_oficial/" target="_blank">
                  <i className="fab fa-instagram" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="HeaderMid">
        <div className="HeaderMid__content">
          <div className="HeaderMid__logo">
            <figure>
              <a href="/">
                <img src="https://i0.wp.com/fashionnews.com.mx/wp-content/uploads/2021/07/fn-fashion-news-logo.png?fit=261%2C212&ssl=1" alt="Logo Mezclarte" />
              </a>
            </figure>
          </div>
          <div className="HeaderMid__add_banner">
            <figure>
              <a href="https://sapica.com/" target="_blank">
                <img src="https://i0.wp.com/fashionnews.com.mx/wp-content/uploads/2022/02/FN930x120px.gif?fit=930%2C120&ssl=1" alt="Sapica add banner" />
              </a>
            </figure>
          </div>
        </div>
      </div>
      <div className="HeaderBot">
        <div className="HeaderBot__content">
          <nav className="HeaderBot__menu">
            <ul>
              <li>
                <a href="/">INICIO</a>
              </li>
              <li>
                <a href="#">ROPA</a>
              </li>
              <li>
                <a href="#">CALZADO</a>
              </li>
              <li>
                <a href="#">HABILITACIONES</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header