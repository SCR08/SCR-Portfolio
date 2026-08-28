import React from 'react'

const PortfolioItems = ({item}) => {
  return (
    <article className="portfolio__card" key={item.id}>
      <img src={item.image} alt={`Preview of ${item.title}`} className="portfolio__img" loading="lazy" />
      <span className="portfolio__category">{item.category}</span>
      <h3 className="portfolio__title">{item.title}</h3>
      <p className="portfolio__description">{item.description}</p>
      <ul className="portfolio__tags" aria-label={`${item.title} technologies and methods`}>
        {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="portfolio__actions">
        {item.links.map((link) => (
          <a
            href={link.url}
            className={`portfolio__button ${link.primary ? 'portfolio__button--primary' : ''}`}
            target="_blank"
            rel="noopener noreferrer"
            key={link.label}
          >
            {link.label} <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
          </a>
        ))}
      </div>
    </article>
  )
}

export default PortfolioItems
