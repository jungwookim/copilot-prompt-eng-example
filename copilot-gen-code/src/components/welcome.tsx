/*
Write a welcome component for landing page with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- First page is about welcome page with a title and a description with background image
- Title should be "Welcome to my company"
- Description should be "We are the best company in the world"
- Use background image from https://images.unsplash.com/photo-1612835362596-5b7bce5b7b0f
 */

import React from 'react';
import { NextPage } from 'next';

export const Welcome: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold text-gray-800">Welcome to my company</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-800">We are the best company in the world</div>
        </div>
      </div>
    </div>
  );
}