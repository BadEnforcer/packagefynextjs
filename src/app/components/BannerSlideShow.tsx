import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const bannerImages: string[] = [
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-rpnickson-2559941.jpg&fm=jpg&w=1920&h=1280&_gl=1*1s2rhm4*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcyMDI0MDk0MS4yMi4xLjE3MjAyNDA5NjYuMC4wLjA.',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-rpnickson-2559941.jpg&fm=jpg&w=1920&h=1280&_gl=1*1s2rhm4*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcyMDI0MDk0MS4yMi4xLjE3MjAyNDA5NjYuMC4wLjA.',
    'https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?cs=srgb&dl=pexels-rpnickson-2559941.jpg&fm=jpg&w=1920&h=1280&_gl=1*1s2rhm4*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcyMDI0MDk0MS4yMi4xLjE3MjAyNDA5NjYuMC4wLjA.',
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
                            <div key={i} className="flex items-center justify-center h-screen max-h-[25vh] sm:max-h-[26vh] md:max-h-[50vh] lg:max-h-[60vh]">
                                <div className="relative w-full h-full">
                                    <Image
                                        src={image}
                                        alt="Banner"
                                        fill={true}
                                        objectFit="fill"
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
