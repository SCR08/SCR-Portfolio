import React from 'react';
import { disclaimer } from './Data';

const MerchantCard = ({ merchant }) => (
  <div className="merchant-card portfolio__card">
    <a
      href={merchant.url}
      className="merchant-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {merchant.name}
    </a>
    <p className="merchant-disclaimer">
      <small>
        <em>{disclaimer}</em>
      </small>
    </p>
  </div>
);

export default MerchantCard;
