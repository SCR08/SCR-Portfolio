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

  const handleClick = (e, index) => {
    setItem({name: e.target.textContent});
    setActive(index);
  }

  return (
    <div>
      <div className="portfolio__filters">
        {projectsNav.map((item, index) => {
          return (
            <span onClick={(e) => {handleClick(e, index)}} className={`${active === index ? 'active-portfolio' : ""} portfolio__item`} key={index}>{item.name}
            </span>
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