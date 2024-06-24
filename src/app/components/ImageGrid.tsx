import React from "react";
import Image from "next/image";


interface DisplayEntity {
    displayName: string,
    href: string,
    imageSrc: string,
    alt?: string,
}

interface ImageGridProps {
    type: "recommended" | "domestic" | "international";
}

const recommendGridContent  = {
    col1: [
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
    ] as DisplayEntity[],
    col2: [
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
    ] as DisplayEntity[],
    col3: [
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
    ] as DisplayEntity[],
    col4: [
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
        {imageSrc : 'https://wallpaper.dog/large/10936480.jpg', href: '/testing', displayName: 'Vietnam', alt: 'Vietnam'},
    ] as DisplayEntity[]




}


export default function TopDestinationsGrid({type}:ImageGridProps) {

    if (type === "recommended") {
        return (
            <div id={'topDestinations'} className={'container mx-auto px-6 lg:px-20 mb-10'}>
                <div className={'flex w-full font-medium text-4xl items-center justify-center p-10'}><h1>Best
                    Destinations
                    across The Globe</h1></div>
                <div className={'grid grid-cols-2  lg:grid-cols-5 gap-x-6 lg:gap-x-4 gap-y-6'}>
                    {/*COLUMN 1 */}
                    <div className={'grid col-span-2  lg:col-span-2'}>
                        <div className={'grid grid-rows-4 gap-y-6'}>
                            {recommendGridContent.col1.map((item, i) => {
                                return (
                                    <div key={i} className={'row-span-2'}>
                                        <Image
                                            className={'rounded-2xl hover:scale-105 border-[1px] shadow-md hover:ring-2 hover:ring-red-200 shadow-neutral-400 border-neutral-700'}
                                            src={item.imageSrc}
                                            alt={item.alt || item.displayName}
                                            width={400}
                                            height={400}
                                        />
                                        <span
                                            className={'absolute z-10 -translate-y-12 translate-x-6 text-white font-medium text-3xl'}>{item.displayName}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*COLUMN 2*/}
                    <div className={'col-span-1'}>
                        <div className={'grid grid-rows-4 gap-y-6'}>
                            {recommendGridContent.col2.map((item, i) => {
                                return (
                                    <div key={i} className={'row-span-1'}>
                                        <Image
                                            className={'rounded-2xl hover:scale-105'}
                                            src={item.imageSrc}
                                            alt={item.alt || item.displayName}
                                            width={200}
                                            height={200}
                                        />
                                        <span
                                            className={'absolute z-10 -translate-y-10 translate-x-4 text-white font-sans font-medium text-xl'}>{item.displayName}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*COLUMN 3*/}
                    <div className={'col-span-1'}>
                        <div className={'grid grid-rows-4 gap-y-6'}>
                            {recommendGridContent.col3.map((item, i) => {
                                return (
                                    <div key={i} className={'row-span-1'}>
                                        <Image
                                            className={'rounded-2xl hover:scale-105'}
                                            src={item.imageSrc}
                                            alt={item.alt || item.displayName}
                                            width={200}
                                            height={200}
                                        />
                                        <span
                                            className={'absolute z-10 -translate-y-10 translate-x-4 text-white font-sans font-medium text-xl'}>{item.displayName}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    {/*COLUMN */}
                    <div className={'col-span-2 lg:col-span-1'}>
                        <div className={'grid grid-rows-4 gap-y-6'}>
                            {recommendGridContent.col4.map((item, i) => {
                                return (
                                    <div key={i} className={`row-span-1 ${i == 1 ? 'col-span-1' : ''}`}>
                                        <Image
                                            className={'rounded-2xl hover:scale-105'}
                                            src={item.imageSrc}
                                            alt={item.alt || item.displayName}
                                            width={200}
                                            height={200}
                                        />
                                        <span
                                            className={'absolute z-10 -translate-y-10 translate-x-4 text-white font-sans font-medium text-xl'}>{item.displayName}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </div>
        )
    }
    else {
        return (
            <div>
                IMAGE GRID TYPE IS UNKNOWN.
            </div>
        )
    }

}