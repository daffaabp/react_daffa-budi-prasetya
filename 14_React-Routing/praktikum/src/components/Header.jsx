// src/components/Header.jsx
import React from "react";

const Header = () => {
    return (
        <header className="bg-white shadow-md">
            <nav className="container mx-auto p-4 flex flex-col md:flex-row justify-between items-center">
                <div className="text-lg font-bold">Simple header</div>
                <ul className="flex flex-col md:flex-row md:space-x-4 md:items-center">
                    <li>
                        <a href="#" className="text-blue-500">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            Features
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            Pricing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            FAQs
                        </a>
                    </li>
                    <li>
                        <a href="#" className="hover:text-blue-500">
                            About
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
