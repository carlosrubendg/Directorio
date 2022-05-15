import React from 'react'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer_content">
        <div className="Footer_content__column">
          <figure className="Footer_content__figure">
            <a href>
              <img src="https://i0.wp.com/fashionnews.com.mx/wp-content/uploads/2021/07/fn-fashion-news-logo.png?fit=261%2C212&ssl=1" alt="Logo Mezclarte (footer)" />
            </a>
          </figure>
        </div>
        <div className="Footer_content__column Footer_content__column--menu">
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
              <a href>HABILITACIONES</a>
            </li>
          </ul>
        </div>
        <div className="Footer_content__column Footer_content__column--social">
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
        </div>
      </div>
      <div className="Footer_line">
        <hr />
      </div>
      <div className="Footer_caption">
        <p>Directorio de negocios 2022</p>
      </div>
    </footer>

  )
}

export default Footer