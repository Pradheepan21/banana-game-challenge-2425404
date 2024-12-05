// File: footer.jsx

import React from 'react';
import { GiBananaBunch } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="bg-yellow-400 text-yellow-900 py-4 w-full shadow-inner">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4">
        {/* Logo and Tagline */}
        <div className="flex items-center space-x-2">
          <GiBananaBunch className="text-3xl text-yellow-700" />
          <h2 className="text-2xl font-bold">Banana Game Challenge</h2>
        </div>
        <p className="text-center font-medium">
          Join the banana madness! 🍌 Collect and climb the leaderboard!
        </p>

    
      </div>
    </footer>
  );
};

export default Footer;
