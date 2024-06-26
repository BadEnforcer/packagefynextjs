"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";




interface SimpleSliderProps {
    heading: string
    entries: ShowcaseEntries[];
    rtl?:boolean

}

const SimpleSlider: React.FC<SimpleSliderProps> = ({heading, entries, rtl}) => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        autoplay: true,
        pauseOnHover: true,
        swipeToSlide: true,
        focusOnSelect: true,
        rtl: rtl || false,
        // useCSS: true,
        responsive: [
            //all
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },

            // sm
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            // md
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            // lg
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            // xl
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }

            }

        ]
    };


    return (
        <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
            <div className="max-w-7xl mx-auto">
                <h2 className={'w-full flex items-center justify-center text-black font-medium text-3xl mt-20 mb-10'}>
                    {heading}
                </h2>
                <Slider {...settings}>
                    {entries.map((entry, i) => {
                        return (
                            <div key={i}>
                                <Showcase entry={entry}/>
                            </div>
                        );
                    })}
                </Slider>
            </div>
            </div>

    );

}


type ShowcaseEntries = {
    title: string
    imageSrc: string
    duration: string
    href: string
}

interface ShowcaseProps {
    entry: ShowcaseEntries
}

const Showcase: React.FC<ShowcaseProps> = ({entry}) => {
    return (
        <div>
        <div
                className="relative ml-2 mr-2 aspect-1 group block rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <Image src={entry.imageSrc} alt={entry.title}
                    fill={true}

                    // width={300}
                       // height={300}

                       className="pointer-events-none group-hover:opacity-75 "/>
                <button type="button" className="absolute inset-0 focus:outline-none">
                    <span className="sr-only  translate-x-5">View details for {entry.title}</span>
                </button>
            </div>
            {/*<div className={'pl-1 rounded-md flex items-center mt-3 mb-2 bg-[#FFCBCB] text-black w-40'}>*/}
            {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"*/}
            {/*         strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">*/}
            {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
            {/*              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>*/}
            {/*    </svg>*/}
            {/*    <p className="flex items-center font-medium text-md truncate pointer-events-none">*/}
            {/*        {entry.duration}*/}
            {/*    </p>*/}
            {/*</div>*/}
            <p className="pl-4 mt-1 block text-sm font-medium text-gray-900 truncate pointer-events-none">{entry.title}</p>
        </div>

    )

}

export default SimpleSlider;