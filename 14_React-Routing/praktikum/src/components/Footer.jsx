// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white font-bold mb-4">ARSHIA</h3>
          <p>108 Adam Street <br/> New York, NY 535022 <br/> United States </p>
          <p className="mt-4">Phone: +1 5589 55488 55</p>
          <p>Email: info@example.com</p>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Useful Links</h3>
          <ul>
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Services</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Our Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Web Design</a></li>
            <li><a href="#" className="hover:underline">Web Development</a></li>
            <li><a href="#" className="hover:underline">Product Management</a></li>
            <li><a href="#" className="hover:underline">Marketing</a></li>
            <li><a href="#" className="hover:underline">Graphic Design</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-bold mb-4">Our Social Networks</h3>
          <p>Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 mt-8">
        © Copyright Arsha. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
