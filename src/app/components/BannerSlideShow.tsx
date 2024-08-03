import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const bannerImages: string[] = [
    'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/banners%2FDubai.png?alt=media&token=f105e607-ee4e-4a07-b013-30826f3a94ab',
    'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/banners%2FMaldives.png?alt=media&token=790fa951-4161-433c-8d41-511572e6fc92',
    'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/banners%2FThiland.png?alt=media&token=0329fb88-1101-4803-a22d-41b1162fc877',
    'https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/banners%2FVietnam.png?alt=media&token=2b769003-cc34-4224-bbac-7148c4f328c7',
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
        <div className="mb-10 lg:my-16">
            <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 ">
                    <Slider {...settings}>
                        {bannerImages.map((image, i) => (
                            <div key={i} className="flex items-center justify-center h-screen max-h-[25vh] sm:max-h-[26vh] md:max-h-[50vh] lg:max-h-[60vh]">
                                <div className="relative flex items-center justify-center w-full h-full">
                                    <Image
                                        src={image}
                                        alt="Banner"
                                        // fill={true}
                                        objectFit={'cover'}
                                        height={1920}
                                        width={1200}
                                        objectPosition="center"
                                        className="pointer-events-none group-hover:opacity-75"
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
        </div>
    );
}
