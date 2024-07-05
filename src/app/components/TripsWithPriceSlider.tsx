"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";


type ShowcaseEntries = {
    title: string
    imageSrc: string
    duration: string
    href: string
}


interface SimpleSliderProps {
    heading: string
    entries: ShowcaseEntries[];
    rtl?: boolean

}

function LeftArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const {className, style, onClick} = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
             stroke="currentColor" className={`size-6 ${className}`}
             style={{...style, display: "block", color: 'black'}}
             onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
        </svg>
    )
}

function RightArrow(props: { className?: any; style?: any; onClick?: any; }) {
    const {className, style, onClick} = props;

    return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className={`size-6 ${className}`}
                 style={{...style, display: "block", color: 'black'}}
                 onClick={onClick}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"/>
    </svg>)


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
        arrows: true,
        dots: false,
        nextArrow: <RightArrow/>,
        prevArrow: <LeftArrow/>,
        // lazyLoad: true,
        // useCSS: true,
        responsive: [
            //all
            {
                breakpoint: 0,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },

            // sm
            {
                breakpoint: 636,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            // md
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            // lg
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            // xl
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 2400,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                }

            }

        ]
    };


    return (
        <section>
            <div className={'flex w-full items-center justify-center mt-8 lg:mt-20 lg:mb-10'}>
                <h1 className={'font-bold text-2xl lg:text-4xl '}>Top <span
                    className={'text-blue-700'}>{heading}</span></h1>
            </div>
            <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
                <div className="max-w-7xl mx-auto">
                    <Slider {...settings}>
                        {entries.map((entry, i) => {
                            return (
                                <div className={'mt-1'} key={i}>
                                    <div
                                        className="relative ml-2 mr-2 aspect-1 group block rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                        <Image src={entry.imageSrc} alt={entry.title}
                                               fill={true}
                                               content={'contain'}
                                               placeholder={'blur'}
                                               blurDataURL={'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII='}
                                            // width={300}
                                            // height={300}
                                               className="pointer-events-none group-hover:opacity-75 "/>
                                        <button type="button" className="absolute inset-0 focus:outline-none">
                                            <span
                                                className="sr-only  translate-x-5">View details for {entry.title}</span>
                                        </button>
                                    </div>
                                    <p className="pl-4 mt-1 block text-sm font-medium text-gray-900 truncate pointer-events-none">{entry.title}</p>

                                </div>
                            );
                        })}
                    </Slider>
                </div>
            </div>

        </section>


    );

}


export default SimpleSlider;