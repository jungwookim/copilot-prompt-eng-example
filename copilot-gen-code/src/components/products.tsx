/*
Create a product component with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- Second page is to describe the my products
- Product Data example are below
- [
  {
    "title": "Product 1",
    "description": "This is product 1",
    "image": "https://images.unsplash.com/photo-1612835362596-5b7bce5b7b0f"
  },
  ...
]
- Products should display like photo gallery
 */

import React from 'react';
import { NextPage } from 'next';

export const Products: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-semibold text-gray-800">Products</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-2xl font-semibold text-gray-800">This is product 1</div>
        </div>
      </div>
    </div>
  );
}