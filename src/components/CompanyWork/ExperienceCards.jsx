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
        {item.link && (
          <a
            className="experience-card__link"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${item.linkLabel} for ${item.title} (opens in a new tab)`}
          >
            {item.linkLabel}
            <span aria-hidden="true">&nbsp;&#8599;</span>
          </a>
        )}
        {item.note && <small className="experience-card__note">{item.note}</small>}
      </article>
    ))}
  </div>
);

export default ExperienceCards;
