"use client"

import Navbar from "@/app/components/Navbar";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { Transition, TransitionChild } from "@headlessui/react";

const data = {
    bgImage: "https://images.pexels.com/photos/2706653/pexels-photo-2706653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const sectionIds: string[] = ['hero', 'description', 'trips'];
// Add more section IDs as per your layout

export default function Page({ params }: { params: { destinationName: string } }) {
    const ref1 = useRef<HTMLDivElement>(null);
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
            <section id={'hero'} ref={ref1} className={'overflow-hidden'}>
                <Transition as={Fragment} show={true} appear>
                    <TransitionChild
                        as={Fragment}
                        enter={'transition-all duration-500'}
                        enterFrom={'opacity-50 scale-150'}
                        enterTo={'opacity-100 scale-100'}
                    >
                        <div id={'hero-with-nav-bg'} className={'relative w-screen h-screen'}
                             style={{
                                 backgroundImage: `url(${data.bgImage})`,
                                 backgroundRepeat: 'no-repeat',
                                 backgroundSize: "cover",
                                 backgroundAttachment: "fixed"
                             }}>
                            <div className="relative z-30">
                                <Navbar/>
                            </div>
                            <div className="absolute inset-0 bg-black opacity-10 z-20"></div>

                            {/* Heading */}
                            <TransitionChild
                                as={Fragment}
                                enter={'transition-all duration-300'}
                                enterFrom={'opacity-0 scale-50 text-white'}
                                enterTo={'opacity-100 scale-100'}
                                leave={'transition-all duration-300'}
                                leaveFrom={'opacity-100 scale-100'}
                                leaveTo={'opacity-100 scale-75'}
                            >
                                <div
                                    className="container-content mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-center z-30">
                                    <h1 className="text-[12vw] font-bold text-white ">
                                        {params.destinationName.toUpperCase()}
                                    </h1>
                                </div>
                            </TransitionChild>

                            {/* Description */}
                            <TransitionChild
                                as={Fragment}
                                enter={'transition-all duration-300'}
                                enterFrom={'opacity-0 scale-50 text-white'}
                                enterTo={'opacity-100 scale-100'}
                                leave={'transition-all duration-300'}
                                leaveFrom={'opacity-100 scale-100'}
                                leaveTo={'opacity-100 scale-75'}
                            >
                                <div
                                    className="container-content absolute bottom-28 text-white mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-center z-30 ">
                                    <p className={'content-evenly justify-evenly place-content-evenly'}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel bibendum
                                        risus,
                                        vitae malesuada ex. Cras eu urna lectus. Donec posuere magna interdum rhoncus
                                        porta.
                                        Phasellus vulputate ligula a nunc rhoncus, sit amet faucibus ex feugiat. Integer
                                        a
                                        enim ac massa laoreet gravida. Nulla at blandit lacus, sit amet vestibulum
                                        magna.
                                        Ut ut ultricies lectus, sed accumsan lectus. Nullam vitae nisi sit amet justo
                                        pellentesque tincidunt sit amet at lectus. Mauris scelerisque auctor
                                        pellentesque.
                                        Quisque ac nulla facilisis, dapibus lacus in, fringilla mi. Fusce euismod
                                        viverra
                                        quam, a accumsan elit.
                                    </p>
                                </div>
                            </TransitionChild>

                            {/* Explore button */}
                            <TransitionChild
                                as={Fragment}
                                enter={'transition-all duration-300'}
                                enterFrom={'opacity-0 scale-50 text-white'}
                                enterTo={'opacity-100 scale-100'}
                                leave={'transition-all duration-300'}
                                leaveFrom={'opacity-100 scale-100'}
                                leaveTo={'opacity-100 scale-75'}
                            >
                                <div
                                    className="container-content absolute bottom-6 text-white mx-auto px-4 sm:px-6 lg:px-8 flex w-full items-center justify-center z-30 animate-bounce ">
                                    <a className={'flex items-center justify-center'}
                                       onClick={() => scrollToSection(1)}>
                                        <div className={'flex items-center justify-center'}>
                                            <p className={'text-white text-xl pr-2'}>View exiting offers</p>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                 strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round"
                                                      d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"/>
                                            </svg>
                                            <div
                                                className="absolute h-8 w-64 bg-black opacity-40 rounded-3xl -z-30"></div>
                                        </div>
                                    </a>
                                </div>
                            </TransitionChild>
                        </div>
                    </TransitionChild>
                </Transition>
            </section>

            <section id={'description'} className={'max-h-screen h-screen'}>
                <div className={'flex items-center justify-center'}>Description</div>
            </section>

            <section id={'trips'} className={'max-h-screen h-screen'}>
                <div className={'flex items-center justify-center'}>Trips</div>
            </section>

        </div>
    )
}
