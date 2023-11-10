import React from 'react';

function GradientLoading() {
  return (
    <div className="gradient-loader">
      <svg className="loading-svg" width="100" height="100" viewBox="0 0 100 100">
        <path
          d="M10 10 H 90 V 90 H 10 L 10 10"
          fill="none"
          stroke="#3498db"
          strokeWidth="4"
          strokeLinecap="round"
        >
          <animate
            attributeName="stroke-dasharray"
            values="0 1000;1000 1000;1000 0"
            dur="3s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}

export default GradientLoading;
