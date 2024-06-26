"use client"
import React from "react";
import Slider from "react-slick";
import Image from "next/image";


/**
 * Splits an array into parts of specified size.
 * @param array - The array to be split.
 * @param partSize - The size of each part.
 * @returns An array of arrays, where each inner array is a part of the original array.
 */
function splitArrayIntoEqualSizedParts<T>(array: T[], partSize: number): T[][] {
    const result: T[][] = [];
    const numParts = Math.ceil(array.length / partSize);

    for (let i = 0; i < numParts; i++) {
        const start = i * partSize;
        const end = start + partSize;
        result.push(array.slice(start, end));
    }

    console.log(result)

    return result;
} // always a multiple of 6



interface SimpleSliderProps {
    heading: string
    entries: ShowcaseEntries[]

}

const SimpleSlider: React.FC<SimpleSliderProps> = ({heading, entries}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className={'mb-20'}>

            {/*    sm    */}
            <div className={'md:hidden'}>
                <h2 className={'w-full flex items-center justify-center text-black font-medium text-3xl mt-20 mb-10'}>
                    {heading}
                </h2>
                <Slider {...settings}>
                    {splitArrayIntoEqualSizedParts(entries, 2).map((sectionEntries, i) => {
                        return (
                            <div key={i}>
                                <Showcase entries={sectionEntries}/>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            {/*    md    */}
            <div className={'hidden md:block lg:hidden'}>
                <h2 className={'w-full flex items-center justify-center text-black font-medium text-3xl mt-20 mb-10'}>
                    {heading}
                </h2>
                <Slider {...settings}>
                    {splitArrayIntoEqualSizedParts(entries, 3).map((sectionEntries, i) => {
                        return (
                            <div key={i}>
                                <Showcase entries={sectionEntries}/>
                            </div>
                        );
                    })}
                </Slider>
            </div>

            {/*    lg & above    */}
            <div className={'hidden lg:block'}>
                <h2 className={'w-full flex items-center justify-center text-black font-medium text-3xl mt-20 mb-10'}>
                    {heading}
                </h2>
                <Slider {...settings}>
                    {splitArrayIntoEqualSizedParts(entries, 6).map((sectionEntries, i) => {
                        return (
                            <div key={i}>
                                <Showcase entries={sectionEntries}/>
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
    entries: ShowcaseEntries[]
}

const Showcase: React.FC<ShowcaseProps> = ({entries}) => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <ul role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8  sm:gap-x-6 md:grid-cols-3 lg:grid-cols-6">
                    {entries.map((entry, index) => (
                        <li key={index} className="relative">
                            <div
                                className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                <Image src={entry.imageSrc} alt={entry.title}
                                     className="object-cover pointer-events-none group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only  translate-x-5">View details for {entry.title}</span>
                                </button>
                            </div>

                            <div className={'pl-1 rounded-md flex items-center mt-3 mb-2 bg-[#FFCBCB] text-black w-40'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5} stroke="currentColor" className="size-5 mr-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                                </svg>
                                <p className="flex items-center font-medium text-md truncate pointer-events-none">
                                    {entry.duration}
                                </p>
                            </div>
                            <p className="mt-1 block text-sm font-medium text-gray-900 truncate pointer-events-none">{entry.title}</p>
                            {/*<p className="block text-sm font-medium text-gray-500 pointer-events-none">{entry.size}</p>*/}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SimpleSlider;