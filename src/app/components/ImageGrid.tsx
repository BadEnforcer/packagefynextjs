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

// 14 items
const content: ImageGridProps[] = [
    { src: 'https://images.unsplash.com/photo-1528127269322-539801943592', alt: 'vietnam', title: 'Vietnam', link: '#' },
    { src: 'https://wallpaper.dog/large/20678762.jpg', alt: 'vietnam', title: 'Afghanistan', link: '#' },

    { src: 'https://wallpaper.dog/large/20650728.jpg', alt: 'vietnam', title: 'Malaysia', link: '#' },
    { src: 'https://wallpaper.dog/large/20587969.jpg', alt: 'Bali', title: 'Bali', link: '#' },
    { src: 'https://wallpaper.dog/large/20587968.jpg', alt: 'vietnam', title: 'Tokyo', link: '#' },
    { src: 'https://images.unsplash.com/photo-1567601169793-64703dc5324a', alt: 'vietnam', title: 'Kashmir', link: '#' },

    { src: 'https://wallpaper.dog/large/20562160.jpg', alt: 'vietnam', title: 'Thailand', link: '#' },
    { src: 'https://wallpaper.dog/large/20488125.jpg', alt: 'vietnam', title: 'Singapore', link: '#' },

    { src: 'https://images.unsplash.com/photo-1552055569-b7e1e45d5be8', alt: 'vietnam', title: 'Sri lanka', link: '#' },
    { src: 'https://wallpaper.dog/large/20690673.jpg', alt: 'vietnam', title: 'Maldives', link: '#' },
    { src: 'https://wallpaper.dog/large/20524832.jpg', alt: 'vietnam', title: 'Turkey', link: '#' },
    { src: 'https://wallpaper.dog/large/20581947.jpg', alt: 'vietnam', title: 'Georgia', link: '#' },
    { src: 'https://plus.unsplash.com/premium_photo-1661963369594-9b25cd53be4d', alt: 'vietnam', title: 'Rajasthan', link: '#' },
    { src: 'https://images.unsplash.com/photo-1520338801623-6b88fe32bbf2', alt: 'vietnam', title: 'Norway', link: '#' },
]


const ImageGrid: React.FC = () => {
    const router = useRouter();

    return (
        <section>
            <div className={'flex w-full items-center justify-center mt-8 lg:mt-20 lg:mb-10'}>
                <h1 className={'font-bold text-2xl lg:text-4xl'} >Best Trips Across <span className={'text-blue-700'}>The Globe</span></h1>
            </div>


            {/*  md and below  */}
            <div className={'lg:hidden mx-6 mt-10'}>
                <div className={'grid gap-y-6 justify-center'}>
                    {/*Row 1*/}
                    <a className={'relative row-span-1'} href={content[0].link}>
                        <Image src={content[0].src} alt={content[0].alt}
                               height={2000}
                               width={2000}
                               className={'row-span-1 rounded-2xl object-cover'}
                        />
                        <p className={'absolute translate-x-6 -translate-y-16 text-white font-bold text-2xl '}>{content[0].title}</p>
                    </a>

                    {/*Row 2*/}
                    <a className={'relative row-span-1'} href={content[1].link}>
                        <Image src={content[1].src} alt={'image'}
                               height={2000}
                               width={2000}
                               className={'row-span-1 rounded-2xl object-cover'}
                        />
                        <p className={'absolute translate-x-6 -translate-y-16 text-white font-bold text-2xl '}>{content[1].title}</p>
                    </a>


                    {/*Row 3*/}
                    <div className={'relative row-span-1'}>
                        <div className={'grid grid-cols-2 gap-x-6'}>
                            <a className={'relative col-span-1'} href={content[2].link}>

                                <Image src={content[2].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[2].title}</p>

                            </a>
                            <a className={'relative col-span-1'}
                               href={content[3].link}
                            >
                                <Image src={content[3].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[3].title}</p>
                            </a>
                        </div>

                        <div className={'grid grid-cols-2 gap-x-6 pt-4'}>
                            <a className={'relative col-span-1'}
                               href={content[4].link}>
                                <Image src={content[4].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[4].title}</p>
                            </a>
                            <a className={'relative col-span-1'}
                               href={content[5].link}>
                                <Image src={content[5].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[5].title}</p>
                            </a>
                        </div>

                    </div>


                    {/*Row 4*/}
                    <a className={'relative row-span-1'}
                       href={content[6].link}>
                        <Image src={content[6].src} alt={'image'}
                               height={2000}
                               width={2000}
                               className={'row-span-1 rounded-2xl object-cover'}
                        />
                        <p className={'absolute translate-x-6 -translate-y-16 text-white font-bold text-2xl '}>{content[6].title}</p>
                    </a>


                    {/*Row 5*/}
                    <div className={'relative row-span-1'}>
                        <div className={'grid grid-cols-2 gap-x-6'}>
                            <a className={'relative col-span-1'}
                               href={content[7].link}
                            >
                                <Image src={content[7].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[7].title}</p>
                            </a>
                            <a className={'relative col-span-1'}
                               href={content[8].link}>
                                <Image src={content[8].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[8].title}</p>
                            </a>
                        </div>
                        <div className={'grid grid-cols-2 gap-x-6 pt-4'}>
                            <a className={'relative col-span-1'}
                               href={content[9].link}
                            >
                                <Image src={content[9].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[9].title}</p>
                            </a>
                            <a className={'relative col-span-1'}
                               href={content[10].link}
                            >
                                <Image src={content[10].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[10].title}</p>
                            </a>
                        </div>
                    </div>


                    {/*Row 6*/}
                    <div className={'relative h-fit'}>
                        <div className={'grid grid-cols-2 gap-x-6'}>
                            <a className={'relative col-span-1'} href={content[11].link}>
                                <Image src={content[11].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[11].title}</p>
                            </a>
                            <a className={'relative col-span-1'}
                               href={content[12].link}
                            >
                                <Image src={content[12].src} alt={'image'}
                                       height={2000}
                                       width={2000}
                                    // fill={true}
                                       className={'row-span-1 rounded-2xl object-cover'}
                                />
                                <p className={'absolute translate-x-4 -translate-y-10 text-white font-medium text-lg '}>{content[12].title}</p>
                            </a>
                        </div>
                    </div>

                    {/*    last row (big image)*/}
                    <a className={'relative row-span-1'} href={content[13].link}>
                        <Image src={content[13].src} alt={content[0].alt}
                               height={2000}
                               width={2000}
                               className={'row-span-1 rounded-2xl object-cover'}
                        />
                        <p className={'absolute translate-x-6 -translate-y-16 text-white font-bold text-2xl '}>{content[13].title}</p>
                    </a>

                </div>
            </div>

            <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    <div className="grid grid-cols-4 gap-4 p-4">
                        <div
                            className="font-medium group col-span-2 row-span-2 flex items-center justify-start text-white order-1"
                            onClick={() => {router.push(content[0].link)}}
                        >
                            <img src={content[0].src} alt={content[0].alt}
                                 className="relative object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span className={'absolute text-5xl mt-72 ml-[2rem]'}>{content[0].title}</span>
                        </div>


                        <div className="group flex items-center justify-start text-white order-2"
                             onClick={() => {router.push(content[1].link)}}
                        >
                            <img src={content[1].src} alt={content[1].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span className={'absolute font-medium text-xl mt-28 ml-4'}>{content[1].title}</span>
                        </div>


                        <div className="group group flex items-center justify-start text-white order-3"
                             onClick={() => {router.push(content[2].link)}}>
                            <img src={content[2].src} alt={content[2].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span className={'absolute font-medium text-xl mt-28 ml-4'}>{content[2].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-4"
                             onClick={() => {router.push(content[3].link)}}>
                            <img src={content[3].src} alt={content[3].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[3].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-5"
                             onClick={() => {router.push(content[4].link)}}>
                            <img src={content[4].src} alt={content[4].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[4].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-6"
                             onClick={() => {router.push(content[5].link)}}>
                            <img src={content[5].src} alt={content[5].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[5].title}</span>
                        </div>


                        <div className="group flex items-center justify-start text-white order-7"
                             onClick={() => {router.push(content[6].link)}}>
                            <img src={content[6].src} alt={content[6].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[6].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-8"
                             onClick={() => {router.push(content[7].link)}}
                        >
                            <img src={content[7].src} alt={content[7].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[7].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-10"
                             onClick={() => {router.push(content[8].link)}}
                        >
                            <img src={content[8].src} alt={content[8].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[8].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white order-11"
                             onClick={() => {router.push(content[9].link)}}
                        >
                            <img src={content[9].src} alt={content[9].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[9].title}</span>
                        </div>


                        <div className="group flex items-center justify-start text-white order-12"
                             onClick={() => {router.push(content[10].link)}}
                        >
                            <img src={content[10].src} alt={content[10].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[10].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white text-2xl order-13"
                             onClick={() => {router.push(content[11].link)}}
                        >
                            <img src={content[11].src} alt={content[11].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[11].title}</span>
                        </div>


                        <div className=" group flex items-center justify-start text-white text-2xl order-14"
                             onClick={() => {router.push(content[12].link)}}
                        >
                            <img src={content[12].src} alt={content[12].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span
                                className={'absolute font-medium text-xl mt-28 ml-4'}>{content[12].title}</span>
                        </div>


                        <div
                            className="group col-span-2 row-span-2 group flex items-center justify-start text-white order-9"
                            onClick={() => {router.push(content[13].link)}}
                        >
                            <img src={content[13].src} alt={content[13].alt}
                                 className="object-cover w-full h-full rounded-lg group-hover:scale-[99%]"/>
                            <span className={'absolute font-medium text-5xl mt-72 ml-[2rem]'}>{content[13].title}</span>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default ImageGrid;
