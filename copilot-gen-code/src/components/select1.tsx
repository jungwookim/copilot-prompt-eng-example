"use client"
/*
Create a select menu using react
- Use typescript, react, mui
- Use functional style
*/

import React from 'react';
import { NextPage } from 'next';
import { Select, MenuItem } from '@material-ui/core';

export const Select1: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center">
        <Select>
          <MenuItem value="1">1</MenuItem>
          <MenuItem value="2">2</MenuItem>
        </Select>
      </div>
    </div>
  );
}
