import React from "react";

const Footer = () => {
    return (
        <footer className="bg-yellow-100">
            <div className="w-full py-6 lg:py-8 px-10">
                <div className="md:flex md:justify-center">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 font-bold uppercase ">
                                Pemilik
                            </h2>
                            <ul className="text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Daffa Budi Prasetya
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold uppercase">Legal</h2>
                            <ul className="text-gray-500">
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className="hover:underline">
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 font-bold uppercase">Alamat</h2>
                            <p className="text-gray-500">
                                Purwokerto, Jawa Tengah, Indonesia
                            </p>
                            <p className="text-gray-500">+62 81225011283</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
