"use client"

import Navbar from "@/app/components/Navbar";
import React, { Fragment, useEffect, useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

import { PiShootingStar } from "react-icons/pi";
import { IoMdHeart } from "react-icons/io";
import { IoTicketSharp } from "react-icons/io5";
import { LiaHotelSolid } from "react-icons/lia";
import {IconType} from "react-icons";
import Image from "next/image";


type LocationData = {
    name: string,
    bgImage: string,
}

const data: LocationData[] = [
    {   name: 'paris',
        bgImage: "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

    {   name: 'new-york',
        bgImage: "https://images.pexels.com/photos/40142/new-york-skyline-manhattan-hudson-40142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },


    {   name: 'sydney',
        bgImage: "https://images.pexels.com/photos/785129/pexels-photo-785129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    },

]


const fetchLocationDataByName = (name: string): LocationData => {
    const queryRes = data.find(location => location.name.toLowerCase() === name.toLowerCase());
    if (queryRes) {
        return queryRes
    } else {
        return {   name: 'paris',
            bgImage: "https://images.pexels.com/photos/7478450/pexels-photo-7478450.jpeg?cs=srgb&dl=pexels-marcos14-7478450.jpg&fm=jpg&w=5807&h=3871&_gl=1*v3c41f*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcxOTg0NzIyMy4xMC4xLjE3MTk4NDcyMzIuMC4wLjA.",
        } as LocationData
    }
};



const sectionIds: string[] = ['hero', 'description', 'trips'];


export default function Page({ params }: { params: { destinationName: string } }) {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

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

        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex]);

    const scrollToSection = (index: number) => {
        const sectionId = sectionIds[index];
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
            setCurrentSectionIndex(index); // Update current section index
        }
    };

    return (
        <div id={'displayContainer'} className={'w-full h-full'}>
            <HeroSection params={params} scrollToSection={scrollToSection}  />

            <section id={'description'} className={'max-h-screen h-screen'}>
                <div className={'flex items-center justify-center'}>Description</div>
            </section>

            <section id={'trips'} className={'max-h-screen h-screen'}>
                <div className={'flex items-center justify-center'}>Trips</div>
            </section>

        </div>
    )
}

type SectionProps = {
    params: { destinationName: string }
    scrollToSection : (sectionId: number) => void;
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

function HeroSection ({params, scrollToSection} : SectionProps) {
    return (
        <section id={'hero'} className={'overflow-hidden'}>
            <Transition as={Fragment} show appear>
                <TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-75 scale-150'} enterTo={'opacity-100 scale-100'}>
                    <div className={'relative h-screen w-screen'}>
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

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                                <div className="absolute top-[30%] lg:top-[14%] w-full flex items-center justify-center z-30 max-w-7xl mx-auto">
                                    <h1 className="text-[14vw] lg:text-[9vw] font-zasque text-white ">
                                        {params.destinationName.toUpperCase()}
                                    </h1>
                                </div>
                            </div>

                        </TransitionChild>


                        <TransitionChild as={Fragment} enter={'transition-all duration-300'}
                                         enterFrom={'opacity-0 scale-50 text-white'} enterTo={'opacity-100 scale-100'}
                                         leave={'transition-all duration-300'} leaveFrom={'opacity-100 scale-100'}
                                         leaveTo={'opacity-100 scale-75'}>


                            <div className={'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
                                <div
                                    className="absolute top-[40%] lg:top-[34%] pr-4 w-full flex items-center justify-center z-30 max-w-7xl mx-auto">
                                    <h1 className="text-[4vw] lg:text-[2vw] font-zasque text-white ">
                                        The City of Love
                                    </h1>
                                </div>
                            </div>

                        </TransitionChild>

                        <TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-75 scale-150'} enterTo={'opacity-100 scale-100'}>
                        <div className="container-content absolute align-middle bottom-[10%] lg:bottom-[12%] mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-center z-30" >
                            <div className={'grid grid-cols-3 gap-x-8 bg-[rgba(255, 255, 255, 0.18)] rounded-2xl shadow-2xl backdrop-blur p-2 lg:p-8'}>
                                {IconData.map((Item, i) => {
                                    return (
                                        <div key={i} className={'col-span-1 '}>
                                            <div className={'grid w-full items-center justify-center grid-rows-2'}>
                                                <div className={'row-span-1 w-full flex items-center justify-center text-white'}>
                                                    <Item.icon className={'w-6 h-6 lg:w-9 lg:h-9'} />
                                                </div>
                                                <div className={'row-span-1 text-white text-xs lg:text-lg'}>{Item.text}</div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        </TransitionChild>


                    </div>

                    {/*</Image>*/}
                </TransitionChild>
            </Transition>
        </section>
    )
}


// /* From https://css.glass */
// background: rgba(255, 255, 255, 0.18);
// border-radius: 16px;
// box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
// backdrop-filter: blur(3.4px);
// -webkit-backdrop-filter: blur(3.4px);


// bg-[rgba(255, 255, 255, 0.18)] rounded-2xl shadow-2xl backdrop-blur