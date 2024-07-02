"use client"

import Navbar from "@/app/components/Navbar";
import React, {Fragment, useCallback, useEffect, useState} from "react";
import {Transition, TransitionChild} from "@headlessui/react";

import {PiShootingStar} from "react-icons/pi";
import {IoMdHeart} from "react-icons/io";
import {IoTicketSharp} from "react-icons/io5";
import {LiaHotelSolid} from "react-icons/lia";
import {IconType} from "react-icons";
import Image from "next/image";
import {GiCheckMark, GiDrop, GiMailbox} from "react-icons/gi";


type LocationHistory = {
    heading: string,
    imageSrc: string,
}

type LocationData = {
    name: string;
    bgImage: string;
    history?: LocationHistory[];

};

const data: LocationData[] = [
    {
        name: "paris",
        bgImage: "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        history: [
            {
                heading: "built in 1959",
                imageSrc: 'https://images.pexels.com/photos/21529786/pexels-photo-21529786/free-photo-of-louvre-museum-in-paris.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },
    {
        name: "new-york",
        bgImage: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
        name: "sydney",
        bgImage: "https://images.pexels.com/photos/785129/pexels-photo-785129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
];


const fetchLocationDataByName = (name: string): LocationData => {
    const queryRes = data.find(location => location.name.toLowerCase() === name.toLowerCase());
    if (queryRes) {
        return queryRes
    } else {
        return {
            name: 'paris',
            bgImage: "https://images.pexels.com/photos/7478450/pexels-photo-7478450.jpeg?cs=srgb&dl=pexels-marcos14-7478450.jpg&fm=jpg&w=5807&h=3871&_gl=1*v3c41f*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcxOTg0NzIyMy4xMC4xLjE3MTk4NDcyMzIuMC4wLjA.",
        } as LocationData
    }
};


const sectionIds: string[] = ['hero', 'description', 'trips'];


export default function Page({params}: { params: { destinationName: string } }) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

    const scrollToSection = useCallback((index: number) => {
        const sectionId = sectionIds[index];
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({behavior: 'smooth'});
            setCurrentSectionIndex(index); // Update current section index
        }
    }, []);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            event.preventDefault(); // Prevent default scroll behavior

            if (event.deltaY > 0) {
                // Scrolling down
                if (currentSectionIndex < sectionIds.length - 1) {
                    setCurrentSectionIndex(currentSectionIndex + 1);
                    scrollToSection(currentSectionIndex + 1);
                }
            } else {
                // Scrolling up
                if (currentSectionIndex > 0) {
                    setCurrentSectionIndex(currentSectionIndex - 1);
                    scrollToSection(currentSectionIndex - 1);
                }
            }
        };

        window.addEventListener('wheel', handleScroll, {passive: false});

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, scrollToSection]);


    return (
        <div id={'displayContainer'} className={'w-full h-full'}>
            <HeroSection params={params} scrollToSection={scrollToSection}/>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/*Description*/}
                <section id={'description'} className={'min-h-screen h-auto pt-12'}>
                    <div className="pb-5 border-b border-gray-200">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Description</h3>
                    </div>
                    <div className={'flex items-center justify-center pt-4'}>
                        <div className={'grid gap-y-6 w-full text-xl'}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae
                                vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac odio nec dolor
                                commodo suscipit. Maecenas ultricies, risus in facilisis dignissim, felis eros fermentum
                                est, at sollicitudin massa metus a enim.</p>
                            <p>Sed ultrices, lorem nec gravida tincidunt, dui risus tempor velit, nec varius magna magna
                                ac orci. Fusce ut justo sed nisl varius fermentum. Aliquam erat volutpat. Morbi
                                bibendum, odio non ullamcorper ultrices, arcu eros lacinia augue, ac laoreet eros lorem
                                in felis.</p>
                            <p>Praesent non bibendum metus. Nam vestibulum, eros non dignissim aliquet, nunc felis
                                elementum justo, nec facilisis felis tortor eget lacus. Ut sit amet massa ac metus
                                vulputate elementum. Ut venenatis, nunc ac hendrerit malesuada, orci ligula facilisis
                                nunc, vel aliquam libero sapien nec odio.</p>
                            <p>Morbi condimentum, mauris non interdum molestie, purus leo viverra arcu, sit amet
                                venenatis est libero id erat. Proin non dui nec lorem dictum placerat. Nulla facilisi.
                                Sed congue, orci nec varius tristique, quam purus efficitur nulla, nec pellentesque
                                justo turpis in enim.</p>

                        </div>
                    </div>
                </section>
            </div>


            {/*Description is visible in full width and some padding*/}


            {/*packages showcase, two columns with form on right side*/}
            <div className="py-6">
                <div className="max-w-4xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-12 lg:gap-8">

                    <main className="lg:col-span-10">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <section id={'trips'} className={'max-h-screen h-screen pt-6'}>
                                <div className="pb-5 border-b border-gray-200">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Trips</h3>
                                </div>
                            </section>
                        </div>

                    </main>


                    <div className="hidden lg:block lg:col-span-3 xl:col-span-2">
                        <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                            {/* Your content */}
                            hidden?
                        </nav>
                    </div>

                    {/*<aside className="hidden xl:block xl:col-span-4">*/}
                    {/*    <div className="sticky top-6 space-y-4">/!* Your content *!/ UWU</div>*/}
                    {/*</aside>*/}
                </div>
            </div>


            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <section id={'description'} className={'max-h-screen h-screen'}>
                    <div className={'flex items-center justify-center'}>Description</div>
                </section>

                <section id={'trips'} className={'max-h-screen h-screen'}>
                    <div className={'flex items-center justify-center'}>Trips</div>
                </section>
            </div>


        </div>
    )
}

type SectionProps = {
    params: { destinationName: string }
    scrollToSection: (sectionId: number) => void;
}


interface IconShowcase {
    icon: IconType;
    text: string;
}

const IconData: IconShowcase[] = [
    {icon: PiShootingStar, text: "5 Star Services"},
    // {icon: IoMdHeart, text: "Loved by 1000+ Customers"},
    {icon: IoTicketSharp, text: "Easy Booking"},
    {icon: LiaHotelSolid, text: "5 Star Hotels"},
]

function HeroSection({params, scrollToSection}: SectionProps) {
    return (
        <section id={'hero'} className={'overflow-hidden'}>
            <Transition as={Fragment} show appear>
                <TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-75 scale-150'}
                                 enterTo={'opacity-100 scale-100'}>
                    <div className={'relative h-[50vh] lg:h-[80vh]  w-screen'}>
                        <Image
                            src={fetchLocationDataByName(params.destinationName).bgImage}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            quality={100}
                            priority // Optional: prioritize loading the image
                        />
                        <div className="absolute inset-0 bg-black opacity-25 z-20"></div>
                        <div className="relative z-30"><Navbar/></div>


                        {/* Heading */}
                        <TransitionChild as={Fragment} enter={'transition-all duration-300'}
                                         enterFrom={'opacity-0 scale-50 text-white'} enterTo={'opacity-100 scale-100'}
                                         leave={'transition-all duration-300'} leaveFrom={'opacity-100 scale-100'}
                                         leaveTo={'opacity-100 scale-75'}>

                            <div className="flex items-center  justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">

                                <div className={'grid grid-rows-2 z-30   absolute top-[30%] lg:top-[14%]'}>


                                    <h1 className="flex w-full items-center justify-center text-[11vw] lg:text-[9vw] font-zasque text-white ">
                                        {params.destinationName.toUpperCase()}
                                    </h1>
                                    <h1 className="flex w-full items-center justify-center relative bottom-[63%]  text-[2vw] font-zasque text-white ">
                                        The City of Love
                                    </h1>


                                </div>


                            </div>

                        </TransitionChild>


                        {/*<TransitionChild as={Fragment} enter={'transition-all duration-300'}*/}
                        {/*                 enterFrom={'opacity-0 scale-50 text-white'} enterTo={'opacity-100 scale-100'}*/}
                        {/*                 leave={'transition-all duration-300'} leaveFrom={'opacity-100 scale-100'}*/}
                        {/*                 leaveTo={'opacity-100 scale-75'}>*/}


                        {/*    <div className={'max-w-7xl flex items-center justify-center mx-auto px-4 sm:px-6  lg:px-8'}>*/}
                        {/*    <div*/}
                        {/*            className="absolute top-[44%] sm:top-[25%] md:top-[60%] lg:top-[40%] w-full flex items-center justify-center z-30 max-w-7xl mx-auto">*/}
                        {/*            <h1 className="text-[4vw] lg:text-[2vw] font-zasque text-white ">*/}
                        {/*                The City of Love*/}
                        {/*            </h1>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}

                        {/*</TransitionChild>*/}

                        {/*<TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-75 scale-150'} enterTo={'opacity-100 scale-100'}>*/}
                        {/*<div className="container-content absolute align-middle bottom-[10%] lg:bottom-[12%] mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-center z-30" >*/}
                        {/*    <div className={'grid grid-cols-3 gap-x-8 bg-[rgba(255, 255, 255, 0.18)] rounded-2xl shadow-2xl backdrop-blur p-2 lg:p-8'}>*/}
                        {/*        {IconData.map((Item, i) => {*/}
                        {/*            return (*/}
                        {/*                <div key={i} className={'col-span-1 '}>*/}
                        {/*                    <div className={'grid w-full items-center justify-center grid-rows-2'}>*/}
                        {/*                        <div className={'row-span-1 w-full flex items-center justify-center text-white'}>*/}
                        {/*                            <Item.icon className={'w-6 h-6 lg:w-9 lg:h-9'} />*/}
                        {/*                        </div>*/}
                        {/*                        <div className={'row-span-1 text-white text-xs lg:text-lg'}>{Item.text}</div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            )*/}
                        {/*        })}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*</TransitionChild>*/}


                    </div>

                    {/*</Image>*/}
                </TransitionChild>
            </Transition>
        </section>
    )
}


// bg-[rgba(255, 255, 255, 0.18)] rounded-2xl shadow-2xl backdrop-blur

/* This example requires Tailwind CSS v2.0+ */
const items = [
    {id: 1},
    // More items...
]

type tripDetails = {
    displayName: string,
    id: string,
    description: string,
    totalDistance: number,
    coverPhoto: string,
}

const trips: tripDetails[] = [
    {
        displayName: "Paris basic trip",
        id: '1234',
        description: "Lorem ipsum",
        totalDistance: 100,
        coverPhoto: 'https://images.pexels.com/photos/1391291/pexels-photo-1391291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]


function TripsShowcase() {
    return (
        <section className={'pt-6'}>
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Trips</h3>
            </div>
            <ul role="list" className="space-y-3">
                {trips.map((trip, index) => (
                    <li key={index} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
                        {trip.displayName}
                    </li>
                ))}
            </ul>
        </section>

    )
}

