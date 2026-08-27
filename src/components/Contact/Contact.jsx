import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Let's Connect</h2>
      <span className="section__subtitle">Open to remote web implementation and front-end opportunities</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Professional profiles</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className='bx bx-mail-send contact__button-icon'></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">scruzr08@outlook.com</span>
              <a href="mailto:scruzr08@outlook.com" className="contact__button">Send an email<i className="uil uil-angle-right contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className='uil uil-linkedin contact__button-icon'></i>
              <h3 className="contact__card-title">LinkedIn</h3>
              <span className="contact__card-data">sebastian-cruz-r</span>
              <a href="https://www.linkedin.com/in/sebastian-cruz-r/" target="_blank" rel="noopener noreferrer" className="contact__button">View profile<i className="uil uil-angle-right contact__button-icon"></i></a>
            </div>

            <div className="contact__card">
              <i className='uil uil-github-alt contact__button-icon'></i>
              <h3 className="contact__card-title">GitHub</h3>
              <span className="contact__card-data">SCR08</span>
              <a href="https://github.com/SCR08" target="_blank" rel="noopener noreferrer" className="contact__button">View repositories<i className="uil uil-angle-right contact__button-icon"></i></a>
            </div>
          </div>
        </div>

        <div className="contact__content contact__pitch">
          <p className="contact__eyebrow">Available for the right next step</p>
          <h3 className="contact__pitch-title">Need someone who can bridge implementation, front-end quality, and client communication?</h3>
          <p>I am interested in remote roles where I can own web delivery, improve repeatable workflows, and keep growing with React and TypeScript.</p>
          <a href="mailto:scruzr08@outlook.com?subject=Web%20opportunity%20for%20Sebastian%20Cruz" className="button button--flex">Start a conversation</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
