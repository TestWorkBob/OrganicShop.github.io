// SampleNextArrow.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const SampleNextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`} // Apply custom-next-arrow class here
      style={{ ...style, display: 'block' }} // Your custom inline styles
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronRight} size="2x" /> {/* Using FontAwesome icon */}
    </div>
  );
};

export default SampleNextArrow;