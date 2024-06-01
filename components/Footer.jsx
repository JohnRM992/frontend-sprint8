import React from 'react';

function Footer() {
    return (
        <footer>
            <div className="icono">
                <i className="fab fa-facebook-square"></i>
                <i className="fab fa-google-plus-square"></i>
                <i className="fab fa-whatsapp-square"></i>
            </div>

            <div className="containerFooter">
                <div className="seccion">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>Direccion: Gral. Alvear N°244</p>
                    <p>San Salvador de Jujuy</p>
                </div>
                <div className="seccion">
                    <i className="fas fa-clock"></i>
                    <p>Horarios de Atención</p>
                    <p>Lunes a Viernes 8 a 12:30 Hs. y 18 a 21:30 Hs.</p>
                </div>
                <div className="seccion">
                    <i className="fas fa-headset"></i>
                    <p>Atención al Cliente: 0810-667-8392</p>
                    <p>consultas@invictusHardStore.com.ar</p>
                    <p>Lunes a viernes de 8 a 18hs.</p>
                </div>
            </div>

            <p className="copyright">Copyright © 1991-2024 Invictus Hard Store S.R.L.</p>
        </footer>
    );
}

export default Footer;
