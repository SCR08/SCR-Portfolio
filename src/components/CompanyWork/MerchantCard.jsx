import React from 'react';
import { disclaimer } from './Data';
import placeholder from '../../assets/companies/placeholder.svg';

const MerchantCard = ({ merchant }) => {
  const preview = merchant.image || placeholder;

  return (
    <div className="merchant-card portfolio__card">
      <img
        className="merchant-preview"
        src={preview}
        alt={`${merchant.name} preview`}
      />
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
};

export default MerchantCard;
