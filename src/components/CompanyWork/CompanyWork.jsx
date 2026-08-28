import React, { useState } from 'react';
import CompanyPortfolio from './CompanyPortfolio';
import CaseStudy from '../CaseStudy/CaseStudy';
import ExperienceCards from './ExperienceCards';
import { everbridalPlatforms, everbridalWork, freelanceWork } from './Data';
import './companyWork.css';

const workAreas = [
  { id: 'nmg', label: 'NMG Migrations' },
  { id: 'everbridal', label: 'Everbridal' },
  { id: 'freelance', label: 'Freelance' }
];

const CompanyWork = () => {
  const [activeArea, setActiveArea] = useState('nmg');

  return (
    <section className="professional-work section" id="my-work">
      <h2 className="section__title">My Work</h2>
      <span className="section__subtitle">Professional work organized by role and engagement</span>

      <div className="work-area__tabs container" role="tablist" aria-label="Professional work areas">
        {workAreas.map((area) => (
          <button
            type="button"
            role="tab"
            id={`work-tab-${area.id}`}
            aria-selected={activeArea === area.id}
            aria-controls={`work-panel-${area.id}`}
            className={`work-area__tab ${activeArea === area.id ? 'work-area__tab--active' : ''}`}
            onClick={() => setActiveArea(area.id)}
            key={area.id}
          >
            {area.label}
          </button>
        ))}
      </div>

      <div
        className="work-area__panel container"
        id={`work-panel-${activeArea}`}
        role="tabpanel"
        aria-labelledby={`work-tab-${activeArea}`}
        tabIndex="0"
      >
        {activeArea === 'nmg' && (
          <div className="work-area__content">
            <div className="work-area__intro">
              <span>NMG Nationwide Marketing Group</span>
              <h3>Website migrations at portfolio scale</h3>
              <p>Full-time implementation work across 40+ independent retail websites, combining CMS migration, responsive redesign, accessibility, SEO, performance, and cross-functional delivery.</p>
            </div>
            <CaseStudy />
            <div className="work-area__portfolio-heading">
              <h3>Selected live implementations</h3>
              <p>A representative set of public client launches. Each site was delivered as part of the NMG team.</p>
            </div>
            <CompanyPortfolio />
          </div>
        )}

        {activeArea === 'everbridal' && (
          <div className="work-area__content">
            <div className="work-area__intro">
              <span>Everbridal - Contractor</span>
              <h3>Lead-generation systems and multi-platform web delivery</h3>
              <p>Client-facing implementation work presented by capability because individual client names and account details are confidential.</p>
            </div>
            <ExperienceCards items={everbridalWork} />
            <div className="platform-ecosystem" aria-labelledby="everbridal-platforms-title">
              <div className="platform-ecosystem__heading">
                <span>Platform experience</span>
                <h3 id="everbridal-platforms-title">A broad client website ecosystem</h3>
              </div>
              <div className="platform-ecosystem__grid">
                {everbridalPlatforms.map((group) => (
                  <article className="platform-ecosystem__group" key={group.id}>
                    <h4>{group.title}</h4>
                    <p>{group.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeArea === 'freelance' && (
          <div className="work-area__content">
            <div className="work-area__intro">
              <span>Freelance & contract engagements</span>
              <h3>Independent web and product delivery</h3>
              <p>Selected client engagements spanning custom website design, front-end development, and cross-platform product implementation.</p>
            </div>
            <ExperienceCards items={freelanceWork} />
            <div className="work-area__cta">
              <p>Have a web implementation, CMS migration, or front-end project in mind?</p>
              <a className="button" href="mailto:scruzr08@outlook.com">Discuss a project</a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CompanyWork;
