'use client';

import React, { useState } from 'react';

const BtnNormal = ({ label = "Button", ...props }) => {
  const [isHovered, setIsHovered] = useState(false);

  // Define defaultOuterStyle to use a gradient
  const defaultOuterStyle = { fill: "url(#defaultGradientOuter)" };
  const defaultInnerStyle = { fill: "#1e2328" };
  const hoverOuterStyle = { fill: "url(#gradientOuter)" };
  const hoverInnerStyle = { fill: "url(#gradientInner)" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 582 114"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`btn-normal-svg ${isHovered ? 'drop-shadow-xl' : ''}`}
      {...props}
    >
      <defs>
        {/* Default gradient for the outer path */}
        <linearGradient id="defaultGradientOuter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#026F8F', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0593A7', stopOpacity: 1 }} />
        </linearGradient>
        {/* Hover gradient for the outer path */}
        <linearGradient id="gradientOuter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#0AC2B5', stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: '#1EA2C0', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#91EDE5', stopOpacity: 1 }} />
        </linearGradient>
        {/* Gradient for the inner path */}
        <linearGradient id="gradientInner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#113A4E', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1A2A34', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M526.28 0H.86C.07 0-.31 1 .3 1.52 15.86 14.89 25.74 34.78 25.74 57S15.86 99.11.3 112.48c-.6.52-.23 1.52.57 1.52h525.41l55.47-56.39c.33-.34.33-.88 0-1.22z"
        style={isHovered ? hoverOuterStyle : defaultOuterStyle}
        className="outer"
      />
      <path
        d="m522.28 5.88-509.52.25c3.9 4.35 19.5 22.75 19.59 50.89.08 28.22-15.5 46.75-19.37 51.11l509.3-.25 52.96-50.36z"
        style={isHovered ? hoverInnerStyle : defaultInnerStyle}
        className="inner"
      />
      <text
        x="50%"
        y="50%"
        dy=".3em"
        textAnchor="middle"
        fill={isHovered ? "#fff" : "#A3C7C7"}
        fontSize="48"
        fontWeight={700}
        cursor={isHovered ? "pointer" : "default"}
        className='tracking-[.1em]'
      >
        {label}
      </text>
    </svg>
  );
};

export default BtnNormal