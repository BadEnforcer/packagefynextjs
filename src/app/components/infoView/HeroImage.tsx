import {Transition, TransitionChild} from "@headlessui/react";
import React, {Fragment} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import ('../Navbar'))







type SectionProps = {
    name: string,
    coverImageUrl: string
}

export default function HeroSection({name, coverImageUrl}: SectionProps) {
    return (
        <section id={'hero'} className={'overflow-hidden'}>
            <Transition as={Fragment} show appear>
                <div className={'relative h-[50vh] lg:h-[80vh] w-screen'}>

                    <TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-100 scale-150'}
                                         enterTo={'opacity-100 scale-100'}>
                        <Image
                            src={coverImageUrl}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                            priority // Optional: prioritize loading the image
                        />
                </TransitionChild>
                    <TransitionChild as={Fragment} enter={'transition-all delay-500 duration-100'} enterFrom={'opacity-0'} enterTo={'opacity-100'}>
                        <div className="absolute inset-0 bg-black opacity-25 z-20"></div>
                    </TransitionChild>
                        <div className="relative z-30"><Navbar/></div>
                        {/* Heading */}

                            <div className="flex items-center  justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                                <div className={'z-30 absolute top-[45%] lg:top-[30%]'}>
                                    <TransitionChild as={Fragment} enter={'transition-all duration-1000'}
                                                     enterFrom={'opacity-0 scale-120 text-white'} enterTo={'opacity-100 scale-100'}
                                                     leave={'transition-all duration-300'} leaveFrom={'opacity-100 scale-100'}
                                                     leaveTo={'opacity-100 scale-75'}>
                                    <h1 className="flex w-full items-center justify-center text-[11vw] lg:text-[9vw] font-zasque text-white ">
                                        {name}
                                    </h1>
                                    </TransitionChild>
                                </div>
                            </div>

                    </div>
            </Transition>
        </section>
    )
}
