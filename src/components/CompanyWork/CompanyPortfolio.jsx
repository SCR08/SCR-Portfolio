import React, { useState, useEffect } from 'react';
import PortfolioItems from '../Work/PortfolioItems';
import { companyProjectsData, companyNav } from './Data';

const CompanyPortfolio = () => {
  const [item, setItem] = useState({ name: 'All' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(companyProjectsData);
    } else {
      const newProjects = companyProjectsData.filter((project) => project.category === item.name);
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <div>
      <div className="portfolio__filters">
        {companyNav.map((item, index) => (
          <span
            onClick={(e) => handleClick(e, index)}
            className={`${active === index ? 'active-work' : ''} portfolio__item`}
            key={index}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="portfolio__container container grid">
        {projects.map((item) => (
          <PortfolioItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default CompanyPortfolio;
