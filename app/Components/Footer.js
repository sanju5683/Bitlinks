import React from 'react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-purple-700 text-white py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col  justify-between items-center">
        <div className="">
          {/* Logo */}
          <div className="text-2xl font-bold  ">BitLinks</div>

  
        
        </div>

        {/* Copyright Section */}
        <div className="text-center text-sm mt-4">
          © {new Date().getFullYear()} BitLinks. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
