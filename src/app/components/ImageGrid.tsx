"use client"

import React from "react";
import Image from "next/image";
import {useRouter} from "next/navigation";

interface ImageGridProps {
    src: string;
    alt: string;
    title: string;
    link: string;
}

// 18 items
const content: ImageGridProps[] = [
    {src: 'https://images.unsplash.com/photo-1528127269322-539801943592', alt: 'vietnam', title: 'Vietnam', link: '#'},
    {src: 'https://wallpaper.dog/large/20678762.jpg', alt: 'vietnam', title: 'Afghanistan', link: '#'},

    {src: 'https://wallpaper.dog/large/20650728.jpg', alt: 'vietnam', title: 'Malaysia', link: '#'},
    {src: 'https://wallpaper.dog/large/20587969.jpg', alt: 'Bali', title: 'Bali', link: '#'},
    {src: 'https://wallpaper.dog/large/20587968.jpg', alt: 'vietnam', title: 'Tokyo', link: '#'},
    {src: 'https://images.unsplash.com/photo-1567601169793-64703dc5324a', alt: 'vietnam', title: 'Kashmir', link: '#'},

    {src: 'https://wallpaper.dog/large/20562160.jpg', alt: 'vietnam', title: 'Thailand', link: '#'},
    {src: 'https://wallpaper.dog/large/20488125.jpg', alt: 'vietnam', title: 'Singapore', link: '#'},

    {src: 'https://images.unsplash.com/photo-1552055569-b7e1e45d5be8', alt: 'vietnam', title: 'Sri lanka', link: '#'},
    {src: 'https://wallpaper.dog/large/20690673.jpg', alt: 'vietnam', title: 'Maldives', link: '#'},
    {src: 'https://wallpaper.dog/large/20524832.jpg', alt: 'vietnam', title: 'Turkey', link: '#'},
    {src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#'},
    {src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#'},
    {src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#'},
    {src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#'},
    {src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#'},
    {
        src: 'https://plus.unsplash.com/premium_photo-1661963369594-9b25cd53be4d',
        alt: 'vietnam',
        title: 'Rajasthan',
        link: '#'
    },
    {src: 'https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2', alt: 'vietnam', title: 'Norway', link: '#'},
]


const ImageGrid: React.FC = () => {
    const router = useRouter();

    return (
        <section id={'showcase-grid'} className={'max-w-7xl mx-auto'}>
            <div className={'flex w-full items-center justify-center mt-8 lg:mt-14 lg:mb-10'}>
                <h1 className={'font-bold text-2xl lg:text-4xl'}>Best Trips Across <span className={'text-[#008DDA]'}>The Globe</span>
                </h1>
            </div>


            {/*  md and below ONLY RENDERS 14 ITEMS  */}
            <div className="lg:hidden mx-6 mt-10">
                <div className="grid gap-6">
                    {content.slice(0, 14).slice(0, -4).map((item, index) => (
                        // Render all items except the last 4
                        <a key={index} className="relative row-span-1" href={item.link}>
                            <Image src={item.src} alt={item.alt} width={2000} height={2000}
                                   layout="responsive" className="rounded-2xl object-cover"/>
                            <p className="absolute left-8 bottom-6 text-white font-bold text-2xl">{item.title}</p>
                        </a>
                    ))}
                </div>
            </div>

            {/*DESKTOP AND ABOVE*/}
            <div className="hidden lg:block px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
                    {
                        content.slice(0, 18).map((item, index) => {
                            let isDoubleSize = index === 0 || index === 6; // First and seventh items are double-sized.
                            let additionalClasses = "";
                            let wrapperStyle = {};
                            if (index === 0) {
                                additionalClasses = "col-span-3 sm:col-span-2 row-span-2";
                                wrapperStyle = {maxWidth: '100%', aspectRatio: '16 / 10'}; // Adjust for big image
                            } else if (index === 6) {
                                additionalClasses = "col-span-3 sm:col-span-2 row-span-2 sm:row-start-3";
                                wrapperStyle = {maxWidth: '100%', aspectRatio: '16 / 10'}; // Adjust for big image
                            } else {
                                wrapperStyle = {maxWidth: '100%', aspectRatio: '16 / 9'}; // Adjust for small image
                            }
                            return (
                                <div
                                    key={index}
                                    className={`group flex items-center justify-center text-white relative ${additionalClasses}`}
                                    onClick={() => router.push(item.link)}
                                >
                                    <div style={wrapperStyle} className="w-full h-full relative">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-lg group-hover:scale-[99%]"
                                        />
                                    </div>
                                    <span
                                        className={`absolute bottom-2 left-4 ${isDoubleSize ? "text-3xl mb-2 font-medium font-sans" : "font-medium font-sans text-lg"}`}
                                    >
              {item.title}
            </span>
                                </div>
                            );
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default ImageGrid;
