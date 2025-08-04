import React, { useState } from 'react';
import MerchantCard from './MerchantCard';
import { merchantsData } from './Data';

const ITEMS_PER_PAGE = 6;

const CompanyPortfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(merchantsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentMerchants = merchantsData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <>
      <div className="portfolio__container container grid">
        {currentMerchants.map((merchant) => (
          <MerchantCard key={merchant.id} merchant={merchant} />
        ))}
      </div>
      <div className="portfolio__pagination">
        <button
          className="portfolio__item"
          onClick={handlePrev}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="portfolio__page-indicator">
          {currentPage} / {totalPages}
        </span>
        <button
          className="portfolio__item"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default CompanyPortfolio;
