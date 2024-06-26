import React from "react";

const Contact = () => {
    return (
        <section className="text-gray-700 body-font relative bg-opacity-20 bg-yellow-30000">
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="text-5xl lg:text-5xl font-extrabold md:text-md text-yellow-600">
                        Kontak Saya
                    </h1>
                </div>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                        <div className="p-2 w-1/2">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-1/2">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <div>
                                <label
                                    htmlFor="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Pesan
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-gray-100 rounded border border-gray-300 focus:border-blue-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </div>
                        </div>
                        <div className="p-2 w-full">
                            <button className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                                Kirim
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

