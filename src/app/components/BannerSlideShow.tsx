import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const bannerImages: string[] = [
    'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1306791/pexels-photo-1306791.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    'https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]

export default function BannerSlideShow() {
    const settings = {
        centerMode: false,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        autoplaySpeed: 5000,
        autoplay: true,
        pauseOnHover: false,
        swipeToSlide: true,
        arrows: true,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 1,


    };

    return (
        <div className="my-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <Slider {...settings}>
                        {bannerImages.map((image, i) => (
                            <div key={i} className="flex items-center justify-center h-screen max-h-[75vh]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={image}
                                        alt="Banner"
                                        layout="fill"
                                        objectFit="cover"
                                        objectPosition="center"
                                        className="pointer-events-none group-hover:opacity-75"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}
