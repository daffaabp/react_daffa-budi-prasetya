import React from "react";

function Hero() {
    return (
        <div className="container-fluid px-10 md:px-8 lg:px-16 xl:px-32 py-10 bg-yellow-50">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="w-full md:w-6/12">
                    <div className="container hero-text mx-auto">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl text-gray-700 font-bold">
                            Persewaan Alat Musik
                        </h2>
                        <h2 className="text-3xl md:text-5xl lg:text-5xl font-bold">
                            Daffa Music Entertainment
                        </h2>
                        <p className="text-md lg:text-lg mt-6">
                            Kami menyediakan alat musik terbaik untuk berbagai
                            acara, mulai dari organ tunggal, sound system,
                            hingga tenda untuk pesta perkawinan dan event
                            lainnya. Lokasi kami berada di Purwokerto, Jawa Tengah.
                        </p>
                        <div className="mt-10">
                            <button className="hover:bg-yellow-700 text-white font-bold py-2 px-5 lg:py-3 lg:px-6 xl:py-4 xl:px-7 w-full md:w-auto border bg-yellow-600 rounded-md">
                                Sewa Sekarang
                            </button>
                        </div>
                    </div>
                </div>
                <div className="hero-image w-full md:w-6/12 py-6 md:py-0">
                    <img
                        className="h-auto max-w-full"
                        src="../../../public/asset/daffa.jpg"
                        alt="image hero"
                    />
                </div>
            </div>
        </div>
    );
}

export default Hero;
