import React from 'react';
import Logo from '../img/logo_white.png';

const Footer = () => {
    const renderQuote = () => {
        const quotes = [
            "Hard work beats talent when talent doesn't work hard.",
            "The one who practises more in the field, bleeds less in war",
            'Belive you can and you are halfway there.',
            'Be very careful about what you think. Your thoughts run your life.'
        ];

        return quotes[Math.floor(Math.random() * quotes.length)];
    };

    const renderSocials = () => {
        const socials = [
            { name: 'Github', icon: 'ti-github', url: 'https://github.com/arshb97' },
            {
                name: 'Facebook',
                icon: 'ti-facebook',
                url: 'https://www.facebook.com/rock.on.98871174'
            },
            {
                name: 'Instagram',
                icon: 'ti-instagram',
                url: 'https://www.instagram.com/arsh_bhullar97/'
            },
            {
                name: 'LinkedIn',
                icon: 'ti-linkedin',
                url: 'https://www.linkedin.com/in/arshdeep-singh-bhullar-138132128'
            },
            { name: 'Twitter', icon: 'ti-twitter', url: 'https://twitter.com/arshdeepbhullar' }
        ];
        return socials.map(social => (
            <a
                target="_blank"
                href={social.url}
                key={social.icon}
                title={social.name}
                rel="noopener noreferrer"
                className="footer__social-btn">
                <i className={`${social.icon} footer__social-icon`} />
            </a>
        ));
    };

    return (
        <footer className="footer">
            <img src={Logo} alt="Arshdeep Logo" className="footer__logo" />
            <p className="footer__quote">{renderQuote()}</p>
            <div className="footer__social">{renderSocials()}</div>
        </footer>
    );
};

export default Footer;
