// SamplePrevArrow.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

const SamplePrevArrow = ({ className, style, onClick }) => {
  // Make sure the 'custom-arrow' and 'custom-prev-arrow' classes are used
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: 'block' }} // Make sure to set display to 'block'
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faChevronLeft} size="lg" /> {/* Add size prop for larger icon */}
    </div>
  );
};

export default SamplePrevArrow;
