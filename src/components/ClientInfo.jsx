import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react';
import '../styles/ClientInfo.css'
import Tavex1 from '../assets/Tavex/Tavex1.jpg'
import Tavex2 from '../assets/Tavex/Tavex2.jpg'
import Tavex3 from '../assets/Tavex/Tavex3.jpg'
import Tavex4 from '../assets/Tavex/Tavex4.jpg'
import Tavex5 from '../assets/Tavex/Tavex5.jpg'

const ClientInfo = () => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number
    });
  }

  return (
    <div className='ClientInfo'>
      <div className="ClientInfo__title">
        <h1>Tavex</h1>
      </div>

      <div className="ClientInfo__info">
        <div className="ClientInfo__gallery">
          <div className="ClientInfo__gallery--first">
            <figure>
              <img src={Tavex1} alt="" onClick={() => openLightboxOnSlide(1)} />
            </figure>
          </div>
          <div className="ClientInfo__gallery--second">
            <figure>
              <img src={Tavex2} alt="" onClick={() => openLightboxOnSlide(2)} />
            </figure>
            <figure>
              <img src={Tavex3} alt="" onClick={() => openLightboxOnSlide(3)} />
            </figure>
            <figure>
              <img src={Tavex4} alt="" onClick={() => openLightboxOnSlide(4)} />
            </figure>
            <figure>
              <img src={Tavex5} alt="" onClick={() => openLightboxOnSlide(5)} />
            </figure>
          </div>
        </div>

        <div className="ClientInfo__data">
          <p><b>Dirección:</b></p>
          <p>C. C. 15, Parque Industrial Puebla 2000, Puebla, Pue.</p>
          <p><b>Teléfono:</b></p>
          <p>248 482 8400</p>
          <p><b>Sitio web:</b></p>
          <p><a href="">https://tavex.com/</a></p>
          <p><b>Redes sociales:</b></p>
          <a href="https://www.facebook.com/Mezclarte-Oficial-101836825310623/" target="_blank">
            <i class="fab fa-facebook-square" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/mezclarte_oficial/" target="_blank">
            <i class="fab fa-instagram" aria-hidden="true"></i>
          </a>
          <a href="https://www.instagram.com/mezclarte_oficial/" target="_blank">
            <i class="fab fa-twitter" aria-hidden="true"></i>
          </a>
        </div>

        <div className="ClientInfo__resume">
          <h2>Acerca de</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat, voluptatibus vero. Placeat tempore illum reprehenderit repellendus, tenetur ab! Fugiat quibusdam quis esse odio obcaecati quae accusantium at suscipit officia hic!
            Eum assumenda qui, a distinctio illo nulla accusamus aspernatur deleniti porro atque quisquam, amet tempora quod, est sint! Velit voluptatibus ab cupiditate distinctio molestiae. Quae earum voluptatem commodi alias placeat.
            Odio, unde magni adipisci illo numquam voluptatem ea fugit cumque! Modi dolores aliquam placeat facere laborum ipsum et, exercitationem ratione architecto deserunt nulla impedit nisi ab omnis corrupti aliquid! Blanditiis.
          </p>
        </div>

        <div className="ClientInfo__map">
          <h2>Mapa</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15083.099947702163!2d-98.1524741!3d19.0736283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xab91eb77d914c724!2sTavex%2C%20Industrial%20Textil%20de%20Puebla!5e0!3m2!1ses-419!2smx!4v1652484991181!5m2!1ses-419!2smx"
            width="1280"
            height="450"
            style={{ border:0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>

      <FsLightbox
        toggler={lightboxController.toggler}
        sources={[
          Tavex1,
          Tavex2,
          Tavex3,
          Tavex4,
          Tavex5
        ]}
        slide={lightboxController.slide}
      />
    </div>
  )
}

export default ClientInfo