
/*
Write a header component with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- header should be have a logo and a menu
- menu should have 3 items (Home, About, Contact)
 */

import React from 'react';
import { NextPage } from 'next';

export const Header: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-row justify-between bg-gray-200">
        <div className="flex flex-row">
          <div className="flex flex-row items-center">
            <img src="/logo.svg" className="h-10 w-10" />
          </div>
          <div className="flex flex-row items-center">
            <div className="text-lg font-semibold text-gray-800">My Company</div>
          </div>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <div className="text-lg font-semibold text-gray-800">Home</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-lg font-semibold text-gray-800">About</div>
          </div>
          <div className="flex flex-row items-center">
            <div className="text-lg font-semibold text-gray-800">Contact</div>
          </div>
        </div>
      </div>
    </div>
  );
}