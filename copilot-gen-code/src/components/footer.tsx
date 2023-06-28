/*
Create a footer component with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- footer should have company name, address, contact number and email
 */

import React from 'react';
import { NextPage } from 'next';

export const Footer: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold text-gray-800">My Company</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-gray-800">123 Main Street, New York, NY 10030</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-gray-800">+1 123 456 7890</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-xl font-semibold text-gray-800">
            <a href="mailto:myemail@example.com" />
          </div>
        </div>
      </div>
    </div>
  );
}
