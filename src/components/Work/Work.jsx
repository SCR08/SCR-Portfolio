import React from 'react';
import Portfolio from './Portfolio';
import './work.css';

const Work = () => {
  return (
    <section className="work section" id="work">
        <h2 className="section__title">Selected Work</h2>
        <span className="section__subtitle">Product engineering and UX projects with real destinations</span>

        <Portfolio />
    </section>
  )
}

export default Work
