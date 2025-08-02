import React from 'react';
import MerchantCard from './MerchantCard';
import { merchantsData } from './Data';

const CompanyPortfolio = () => (
  <div className="portfolio__container container grid">
    {merchantsData.map((merchant) => (
      <MerchantCard key={merchant.id} merchant={merchant} />
    ))}
  </div>
);

export default CompanyPortfolio;
