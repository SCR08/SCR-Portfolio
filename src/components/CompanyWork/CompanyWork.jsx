import React, { useState } from 'react';
import CompanyPortfolio from './CompanyPortfolio';
import CaseStudy from '../CaseStudy/CaseStudy';
import ExperienceCards from './ExperienceCards';
import { everbridalWork, freelanceWork } from './Data';
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
          </div>
        )}

        {activeArea === 'freelance' && (
          <div className="work-area__content">
            <div className="work-area__intro">
              <span>Freelance & contract engagements</span>
              <h3>Independent product implementation</h3>
              <p>Selected contract work where public links are limited by client confidentiality.</p>
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
