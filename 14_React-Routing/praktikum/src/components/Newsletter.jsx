// src/components/Newsletter.jsx
import React from 'react';

const Newsletter = () => {
return (
<section className="bg-gray-100 py-10">
    <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="text-gray-600 mb-6">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
        <form className="flex justify-center">
            <input type="email" placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md border-t border-b border-l border-gray-300 w-full md:w-auto" />
            <button type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-md">Subscribe</button>
        </form>
    </div>
</section>
);
};

export default Newsletter;
