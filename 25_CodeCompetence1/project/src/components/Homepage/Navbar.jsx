import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="bg-yellow-500 sticky top-0 mb-3">
            <div className="container mx-auto px-2 py-5 flex justify-between items-center">
                <a
                    onClick={() => navigate("/")}
                    className="flex items-center font-bold cursor-pointer"
                >
                    <span className="ml-2 text-2xl text-white">
                        <i className="fi fi-br-mockup"></i>Daffa Music
                        Entertainment
                    </span>
                </a>
                <ul className="flex space-x-8 text-white items-center">
                    <li>
                        <a
                            onClick={() => navigate("/about")}
                            className="hover:text-gray-800 cursor-pointer"
                        >
                            Tentang Kami
                        </a>
                    </li>
                    <li>
                        <a href="#price" className="hover:text-gray-800">
                            Harga
                        </a>
                    </li>
                    <li>
                        <a href="#services" className="hover:text-gray-800">
                            Layanan
                        </a>
                    </li>
                    <li>
                        <button className="hover:bg-yellow-600 text-white font-bold py-2 px-4 border border-white rounded-xl">
                            Login
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
