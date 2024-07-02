import {Transition, TransitionChild} from "@headlessui/react";
import React, {Fragment} from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

type LocationData = {
    name: string;
    bgImage: string;

};



const fetchLocationDataByName = (name: string, locationsData: LocationData[]): LocationData => {
    const queryRes = locationsData.find(location => location.name.toLowerCase() === name.toLowerCase());
    if (queryRes) {
        return queryRes
    } else {
        return {
            name: 'paris',
            bgImage: "https://images.pexels.com/photos/7478450/pexels-photo-7478450.jpeg?cs=srgb&dl=pexels-marcos14-7478450.jpg&fm=jpg&w=5807&h=3871&_gl=1*v3c41f*_ga*MjY2NjIwNzMwLjE3MTgxODMzNTg.*_ga_8JE65Q40S6*MTcxOTg0NzIyMy4xMC4xLjE3MTk4NDcyMzIuMC4wLjA.",
        } as LocationData
    }
};


type SectionProps = {
    params: { destinationName: string }
    locationsData: LocationData[]
}

export default function HeroSection({params, locationsData}: SectionProps) {
    return (
        <section id={'hero'} className={'overflow-hidden'}>
            <Transition as={Fragment} show appear>
                <TransitionChild as={Fragment} enter={'transition-all duration-500'} enterFrom={'opacity-75 scale-150'}
                                 enterTo={'opacity-100 scale-100'}>
                    <div className={'relative h-[50vh] lg:h-[80vh]  w-screen'}>
                        <Image
                            src={fetchLocationDataByName(params.destinationName, locationsData).bgImage}
                            alt="Background"
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
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
                    </div>
                </TransitionChild>
            </Transition>
        </section>
    )
}
