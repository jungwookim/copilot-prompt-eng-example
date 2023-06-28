/*
Create a members component with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- members should have a name, title and image
- Members are displayed like a grid with 3 columns
 */

import React from 'react';
import { NextPage } from 'next';

export const Members: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold text-gray-800">Members</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-800">John Doe</div>
          <div className="text-lg font-semibold text-gray-800">CEO</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-800">Jane Doe</div>
          <div className="text-lg font-semibold text-gray-800">CTO</div>
        </div>
      </div>
    </div>
  );
}