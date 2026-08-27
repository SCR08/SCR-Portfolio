import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Sebastian Cruz</h1>

            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>

                <li>
                    <a href="#work" className="footer__link">Selected work</a>
                </li>
            </ul>

            <div className="footer__social">

                <a href="https://www.linkedin.com/in/sebastian-cruz-r/" className="footer__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Sebastian Cruz on LinkedIn">
                    <i className="uil uil-linkedin"></i>
                </a>

                <a href="https://github.com/SCR08" className="footer__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Sebastian Cruz on GitHub">
                    <i className="uil uil-github"></i>
                </a>

                <a href="https://www.behance.net/sebastiancruz18" className="footer__social-icon" target="_blank" rel="noopener noreferrer" aria-label="Sebastian Cruz on Behance">
                    <i className="uil uil-behance"></i>
                </a>
            </div>

            <span className="footer__copy">Web Implementation Specialist & Front-End Developer</span>
        </div>
    </footer>
  )
}

export default Footer
