import React from 'react';
import CompanyPortfolio from './CompanyPortfolio';
import '../Work/work.css';

const CompanyWork = () => {
  return (
    <section className="work section" id="company-work">
      <h2 className="section__title">Client Implementations</h2>
      <span className="section__subtitle">Selected live sites from a portfolio of 40+ migrations and redesigns</span>


          <CompanyPortfolio />


    </section>
  );
};

export default CompanyWork;
