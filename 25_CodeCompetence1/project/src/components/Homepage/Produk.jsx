import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Produk = () => {
    // Data dummy untuk gambar alat musik
    const images = [
        { id: 1, url: "../../../public/asset/piano.jpg" },
        { id: 2, url: "../../../public/asset/gitar.jpg" },
        { id: 3, url: "../../../public/asset/drum.jpg" },
        { id: 4, url: "../../../public/asset/saxophone.jpg" },
    ];

    return (
        <section
            className="px-10 md:px-24 xl:px-56 py-32 sm:h-full bg-yellow-50"
            id="price"
        >
            <h1 className="text-5xl lg:text-4xl text-center font-extrabold text-yellow-600 opacity-30">
                Produk Saya
            </h1>
            <div className="container mx-auto mt-8">
                <Carousel
                    showArrows={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={5000}
                    className="overflow-hidden rounded-lg"
                >
                    {images.map((image) => (
                        <div key={image.id}>
                            <img
                                src={image.url}
                                alt={`Carousel Item ${image.id}`}
                                className="w-[700px] h-[400px]"
                            />
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Produk;
