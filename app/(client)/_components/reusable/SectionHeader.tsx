'use client';

import React from 'react';

interface SectionHeaderProps {
  heading: string;
  subheading: string;
  buttonText?: string;
  textColor?: string;    // e.g. 'text-white'
  borderColor?: string;  // e.g. 'border-white', 'border-red-500'
}

export default function SectionHeader({
  heading,
  subheading,
  buttonText,
  textColor = 'text-white',
  borderColor = 'border-white',
}: SectionHeaderProps) {
  return (
    <div className={`text-center ${textColor}`}>
      <h2
        className="font-medium text-5xl mb-2 font-[Playfair_Display]"
         
      >
        {heading}
      </h2>
      <p className="max-w-[722px] mx-auto text-2xl mt-4">{subheading}</p>
      {buttonText && (
        <button
          className={`text-xl rounded-full py-3.5 px-5 mt-6 cursor-pointer border ${borderColor} ${textColor}`}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
