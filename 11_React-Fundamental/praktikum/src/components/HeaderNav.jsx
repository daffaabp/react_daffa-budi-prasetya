// HeaderNav.jsx
import React from 'react';

const HeaderNav = () => {
  return (
    <nav className="p-4 bg-white shadow md:flex md:item0center md:justify-between">
      <span className="text-2xl font-medium font-roboto">Simple header</span>

      <ul className="md:flex md:items-center">
        <li className="mx-2">
          <a href="#" className="text-base bg-biru rounded text-white duration-500 px-4 py-3">Home</a>
        </li>
        <li className="mx-2">
          <a href="#"
            className="text-biru text-base hover:bg-biru hover:text-white rounded duration-500 px-4 py-3">Features</a>
        </li>
        <li className="mx-2">
          <a href="#"
            className="text-biru text-base hover:bg-biru hover:text-white rounded duration-500 px-4 py-3">Pricing</a>
        </li>
        <li className="mx-2">
          <a href="#" className="text-biru text-base hover:bg-biru hover:text-white rounded duration-500 px-4 py-3">FAQs</a>
        </li>
        <li className="mx-2">
          <a href="#" className="text-biru text-base hover:bg-biru hover:text-white rounded duration-500 px-4 py-3">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
