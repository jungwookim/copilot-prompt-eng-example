/*
Create a landing page with the following requirements:
- Use typescript, next.js, react.js
- Use tailwindcss for styling
- Should be responsive (mobile, tablet, desktop)
- Show me the preview of the page
- Use functional components of react and functional programming style
- header should be have a logo and a menu
- menu should have 3 items (Home, About, Contact)
- There are three sections in the page
- First page is about welcome page with a title and a description with background image
- Second page is to describe the my products
- Third page is about members in the company with their name, title and image
 */

import React from 'react';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { Welcome } from '../components/welcome';
import { Products } from '../components/products';
import { Members } from '../components/members';
import { Select1 } from '../components/select1'

export default function Page () {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Welcome />
      <Products />
      <Members />
      <Footer />
      <Select1 />
    </div>
  );
}