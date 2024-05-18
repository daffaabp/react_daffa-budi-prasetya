// src/components/Hero.jsx
import React from 'react';
import heroImage from '../assets/hero-img.png'; // Pastikan kamu mengganti dengan path yang benar untuk gambar kamu

const Hero = () => {
return (
<section className="bg-blue-800 text-white py-20">
    <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl font-bold mb-4">Better Solutions For Your Business</h1>
            <p className="text-xl mb-6">We are a team of talented designers making websites with Bootstrap</p>
            <div className="flex space-x-4">
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded md:w-auto w-full">Get
                    Started</button>
                <button
                    className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 text-white font-bold py-2 px-4 rounded md:w-auto w-full">Watch
                    Video</button>
            </div>
        </div>
        <div className="md:w-1/2">
            <img src={heroImage} alt="Hero" className="md:w-full w-auto" />
        </div>
    </div>
</section>
);
};

export default Hero;
