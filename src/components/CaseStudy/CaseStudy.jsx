import React from 'react';
import './caseStudy.css';

const CaseStudy = () => {
  return (
    <div className="case-study" id="nmg-case-study">
      <div className="case-study__container container">
        <p className="case-study__eyebrow">Featured case study</p>
        <div className="case-study__heading grid">
          <div>
            <h2 className="case-study__title">Turning 40+ website migrations into a repeatable delivery program</h2>
          </div>
          <p className="case-study__lead">
            A portfolio-wide implementation effort for independent retail businesses, completed with migration, design, and account teams on a proprietary CMS.
          </p>
        </div>

        <div className="case-study__metrics grid" aria-label="Case study outcomes">
          <div><strong>40+</strong><span>sites migrated and redesigned</span></div>
          <div><strong>10-60</strong><span>pages per client website</span></div>
          <div><strong>30%</strong><span>average Lighthouse improvement</span></div>
        </div>

        <div className="case-study__body grid">
          <article>
            <span>01</span>
            <h3>The challenge</h3>
            <p>Each client brought different catalogs, brand requirements, content quality, and device-level issues. The work needed to move quickly without sacrificing accessibility, SEO, or consistency.</p>
          </article>
          <article>
            <span>02</span>
            <h3>My contribution</h3>
            <p>I rebuilt page structures, applied responsive patterns, improved front-end performance, and coordinated with migration, design, and Client Account Management teams to resolve implementation blockers.</p>
          </article>
          <article>
            <span>03</span>
            <h3>The approach</h3>
            <p>I used reusable Bootstrap and Material UI patterns, TypeScript and GitHub workflows, WCAG-minded checks, and Lighthouse feedback to make quality repeatable across different site sizes.</p>
          </article>
          <article>
            <span>04</span>
            <h3>The outcome</h3>
            <p>More than 40 client sites launched with improved mobile usability, accessibility, and load performance. Lighthouse performance scores improved by 30% on average across migrated websites.</p>
          </article>
        </div>

        <p className="case-study__note">Client names and internal process details are intentionally limited. Work was completed as part of the NMG team.</p>
      </div>
    </div>
  );
};

export default CaseStudy;
