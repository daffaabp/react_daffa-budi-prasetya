import React from "react";

const About = () => {
    return (
        <div className="h-full lg:h-screen flex justify-center items-center px-10 md:px-24 xl:px-56 bg-yellow-100">
            <div className="container py-10">
                <div className="title">
                    <h1 className="text-5xl lg:text-4xl font-extrabold text-yellow-600 opacity-30">
                        Siapa Itu
                    </h1>
                    <h3 className="text-5xl font-bold">
                        Daffa Music Entertainment
                    </h3>
                </div>
                <div className="text-about flex flex-col md:flex-row justify-between items-center xl:mt-8">
                    <div className="deskripsi-about w-full md:w-6/12 mt-5">
                        <p>
                            Daffa Music Entertainment adalah sebuah website yang
                            melayani penyewaan alat musik seperti organ tunggal,
                            tenda, sound system, dan lain-lain untuk berbagai
                            event. Kami siap melayani kebutuhan pesta
                            perkawinan, acara perusahaan, dan berbagai event
                            lainnya.
                        </p>
                        <p>
                            Kami menyediakan alat musik berkualitas tinggi
                            dengan harga yang kompetitif, serta pelayanan yang
                            profesional untuk memastikan acara Anda berjalan
                            lancar dan sukses.
                        </p>
                        <button className="hover:bg-yellow-700 text-white font-bold mt-6 md:mt-10 py-2 px-4 border bg-yellow-600 rounded-xl block mx-auto md:mx-0">
                            Sewa Sekarang
                        </button>
                    </div>
                    <div className="img-about md:ml-8 mt-8 md:mt-0">
                        <img
                            src="../../../public/asset/daffa2.jpg"
                            alt="about us"
                            className="w-[400px] h-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
