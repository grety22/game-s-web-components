'use client';

import React, { useState } from 'react';

const BtnNormal = ({ label = "Button", ...props }) => {  // Added a default label prop
  const [isHovered, setIsHovered] = useState(false);

  const defaultOuterStyle = { fill: "#0896a6" };
  const defaultInnerStyle = { fill: "#1e2328" };
  const hoverOuterStyle = { fill: "url(#gradientOuter)" };
  const hoverInnerStyle = { fill: "url(#gradientInner)" };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 582 114"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`btn-normal-svg ${isHovered ? 'shadow-cyan-500/50' : ''}`}
      {...props}
    >
      <defs>
        <linearGradient id="gradientOuter" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#35d0ba', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#0896a6', stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="gradientInner" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style={{ stopColor: '#2c3035', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#1e2328', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        d="M526.28 0H.86C.07 0-.31 1 .3 1.52 15.86 14.89 25.74 34.78 25.74 57S15.86 99.11.3 112.48c-.6.52-.23 1.52.57 1.52h525.41l55.47-56.39c.33-.34.33-.88 0-1.22z"
        style={isHovered ? hoverOuterStyle : defaultOuterStyle}
        className="outer hover:shadow-cyan-500/50"
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
        // fontFamily= "EB Garamond" // Add your font here 
        fontWeight={700}
        cursor={isHovered ? "pointer" : "default"}
        className='tracking-[.1em]'
      >
        {label}
      </text>
    </svg>
  );
};

export default BtnNormal;
