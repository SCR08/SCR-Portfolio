import React from 'react';
import CompanyPortfolio from './CompanyPortfolio';
import '../Work/work.css';

const CompanyWork = () => {
  return (
    <section className="work section" id="company-work">
      <h2 className="section__title">Professional Work</h2>
      <span className="section__subtitle">Company projects</span>

      <CompanyPortfolio />
    </section>
  );
};

export default CompanyWork;
