import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="p-4 bg-white shadow flex flex-wrap items-center justify-between">
            <div className="flex items-center flex-shrink-0 text-2xl font-medium font-roboto">
                Simple header
            </div>

            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-biru border-biru hover:text-white hover:border-white"
                    type="button" onClick={toggleMenu}>
                    <span className="sr-only">Toggle Menu</span>
                    <svg className={`h-4 w-4 ${isOpen ? "transform rotate-180" : ""}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Mobile menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>

            <ul className={`lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"} w-full lg:w-auto mt-4 lg:mt-0`}>
                <li>
                    <a href="#" className="text-base text-biru hover:bg-biru hover:text-white rounded px-4 py-3 block">Home</a>
                </li>
                <li>
                    <a href="#" className="text-base text-biru hover:bg-biru hover:text-white rounded px-4 py-3 block">Features</a>
                </li>
                <li>
                    <a href="#" className="text-base text-biru hover:bg-biru hover:text-white rounded px-4 py-3 block">Pricing</a>
                </li>
                <li>
                    <a href="#" className="text-base text-biru hover:bg-biru hover:text-white rounded px-4 py-3 block">FAQs</a>
                </li>
                <li>
                    <a href="#" className="text-base text-biru hover:bg-biru hover:text-white rounded px-4 py-3 block">About</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
