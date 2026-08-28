import React from 'react';

const ExperienceCards = ({ items }) => (
  <div className="experience-grid grid">
    {items.map((item) => (
      <article className="experience-card" key={item.id}>
        <span className="experience-card__metric">{item.metric}</span>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <ul className="experience-card__tags" aria-label={`${item.title} tools and methods`}>
          {item.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {item.note && <small className="experience-card__note">{item.note}</small>}
      </article>
    ))}
  </div>
);

export default ExperienceCards;
