import React from 'react'

const PortfolioItems = ({item}) => {
  return (
    <a
      href={item.url}
      className="portfolio__card"
      target={item.external ? "_blank" : undefined}
      rel={item.external ? "noopener noreferrer" : undefined}
      aria-label={`${item.linkLabel}: ${item.title}`}
      key={item.id}
    >
      <img src={item.image} alt={`Preview of ${item.title}`} className="portfolio__img" loading="lazy" />
      <span className="portfolio__category">{item.category}</span>
      <h3 className="portfolio__title">{item.title}</h3>
      <p className="portfolio__description">{item.description}</p>
      <ul className="portfolio__tags" aria-label={`${item.title} technologies and methods`}>
        {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
      </ul>
      <div className="portfolio__button">
        {item.linkLabel} <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
      </div>
    </a>
  )
}

export default PortfolioItems
