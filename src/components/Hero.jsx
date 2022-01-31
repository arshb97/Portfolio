import React from 'react';
import HeroFooter from '../img/hero.svg';
import Logo from '../img/logo.jpg';
import Memoji from '../img/memoji.png';

const Hero = () => (
    <div className="hero">
        <nav className="navbar grid grid--padded">
            <a href="/" className="navbar__logo">
                <img src={Logo} alt="Arshdeep Logo" className="navbar__logo-img" />
            </a>
        </nav>

        <div className="hero__body">
            <h1 className="hero__title">Web Designer</h1>

            <p className="hero__subtitle">
                I design &amp; build Websites, Mobile apps and Web Apps with a broad focus that includes how the software is deployed and providing operational support while the software is continually functional.
            </p>

            <img src={Memoji} alt="Arshdeep photo" className="hero__memoji" />

            <div className="hero__footer">
                <img
                    src={HeroFooter}
                    className="hero__footer-img"
                    alt="Arshdeep footer"
                />
            </div>
        </div>
    </div>
);

export default React.memo(Hero);
