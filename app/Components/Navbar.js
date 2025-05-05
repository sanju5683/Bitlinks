"use client";
import React, { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-purple-700 p-4 text-white shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img width={22} src="/link.png" alt="" />
          <div className="logo text-2xl cursor-pointer font-bold">BitLinks</div>
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-lg items-center">
          <Link href="/">
            <li className="hover:text-purple-300 cursor-pointer font-medium">Home</li>
          </Link>
          <Link href="/about">
            <li className="hover:text-purple-300 cursor-pointer font-medium">About</li>
          </Link>
          <Link href="/shorten">
            <li className="hover:text-purple-300 cursor-pointer font-medium">Shorten</li>
          </Link>
          <Link href="/contact">
            <li className="hover:text-purple-300 cursor-pointer font-medium">Contact Us</li>
          </Link>
          <li className="flex space-x-4">
            <Link href="/shorten">
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/sanju5683">
              <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-1 px-4 rounded shadow">
                Github
              </button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={` absolute right-0 transition-all duration-300 ease-in-out transform ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {isMenuOpen && (
          <ul className="flex flex-col mt-4 space-y-4 md:hidden  py-5 bg-purple-500 w-40 shadow-lg">
            <Link className="self-center" href="/">
              <li className="hover:text-purple-300 cursor-pointer font-medium">Home</li>
            </Link>
            <Link className="self-center" href="/about">
              <li className="hover:text-purple-300 cursor-pointer font-medium">About</li>
            </Link>
            <Link className="self-center" href="/shorten">
              <li className="hover:text-purple-300 cursor-pointer font-medium">Shorten</li>
            </Link>
            <Link className="self-center" href="/contact">
              <li className="hover:text-purple-300 cursor-pointer font-medium">Contact Us</li>
            </Link>
            <li className="flex flex-col space-y-4 items-center self-center">
              <Link href="/shorten">
                <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-4 rounded shadow">
                  Try Now
                </button>
              </Link>
              <Link href="https://github.com/sanju5683">
                <button className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-1 px-4 rounded shadow">
                  Github
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
