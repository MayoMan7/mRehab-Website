import React, { useState } from 'react';

/**
 * Props for the ExpandableText component.
 * @typedef {object} ExpandableTextProps
 * @property {string} title - The main title text always visible.
 * @property {string} content - The additional text content that is revealed when expanded.
 * @property {string} [linkHref] - Optional URL for a link to be displayed with the expanded content.
 * @property {string} [linkText] - Optional text for the link. Required if linkHref is provided.
 */
interface ExpandableTextProps {
  title: string;
  content: string;
  linkHref?: string;
  linkText?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ title, content, linkHref, linkText }) => {
  // State to manage whether the content is expanded or collapsed
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle the expanded state
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    // Main container, adjusted to be flat and wide like the example
    <div className="w-full max-w-4xl mx-auto my-6 p-4">
      {/* Title and Expand/Collapse Indicator */}
      {/* The entire header area is now clickable for expanding/collapsing */}
      <div
        className="flex justify-between items-center cursor-pointer pb-4"
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        aria-controls={`expandable-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
      >
        <h3 className="text-3xl font-normal text-blue-700 leading-tight"> {/* Larger, blue title */}
          {title}
        </h3>
        {/* Plus/Minus icon for expand/collapse, styled like the example */}
        <span className="text-blue-700 text-4xl font-light leading-none pr-2">
          {isExpanded ? '–' : '+'} {/* Minus for open, Plus for closed */}
        </span>
      </div>

      {/* Expandable Content */}
      {isExpanded && (
        <div
          id={`expandable-content-${title.replace(/\s+/g, '-').toLowerCase()}`}
          className="mt-2 text-gray-700 leading-relaxed animate-fade-in pl-1" // Adjusted padding for alignment
        >
          <p>{content}</p>

          {/* Optional Link, styled to mimic "LEARN MORE >" */}
          {linkHref && linkText && (
            <div className="mt-4">
              <a
                href={linkHref}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:text-blue-900 font-bold uppercase text-sm flex items-center" // Bold, uppercase, smaller text
              >
                {linkText}
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          )}
        </div>
      )}

      {/* A subtle border line at the bottom, like in the example */}
      <div className="border-b border-gray-300 mt-6 pt-2"></div> {/* Added a bottom border */}

      {/* Tailwind CSS @layer utilities for fade-in animation */}
      <style>
        {`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
        `}
      </style>
    </div>
  );
};

export default ExpandableText;