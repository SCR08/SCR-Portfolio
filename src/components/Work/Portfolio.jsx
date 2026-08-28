import React from 'react'
import { useState, useEffect } from 'react'
import PortfolioItems from './PortfolioItems'
import { projectsData } from './Data'
import { projectsNav } from './Data'

const Portfolio = () => {
  const [item, setItem] = useState({name: 'All' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    if (item.name === 'All') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category === item.name;
      });
      setProjects(newProjects)
    }
  }, [item]);

  const handleClick = (name, index) => {
    setItem({name});
    setActive(index);
    setVisibleCount(6);
  }

  return (
    <div>
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <button
              type="button"
              onClick={() => handleClick(item.name, index)}
              className={`${active === index ? 'active-portfolio' : ""} portfolio__item`}
              aria-pressed={active === index}
              key={item.name}
            >
              {item.name}
            </button>
            );
        })}
      </div>

      <div className="portfolio__container container grid">
        {projects.slice(0, visibleCount).map((item) => {
          return (
            <PortfolioItems item = {item} key = {item.id} />
          )
        })}
      </div>
      {visibleCount < projects.length && (
        <button className="button" onClick={() => setVisibleCount(visibleCount + 3)}>
          Load More
        </button>
      )}
    </div>
  );
}

export default Portfolio
