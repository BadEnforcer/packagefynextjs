"use client"

import HeroImage from '@/app/components/infoView/HeroImage'
import Description from "@/app/components/infoView/Description";
import TripCard from '@/app/components/infoView/TripCard';
import ContactFormSidebar from "@/app/components/infoView/ContactFormSidebar";

import React from "react";


type LocationData = {
    name: string;
    bgImage: string;

};

const data: LocationData[] = [
    {
        name: "paris",
        bgImage: "https://images.pexels.com/photos/2695680/pexels-photo-2695680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
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

const descriptionParagraphs: string[] = [
    'Sed ultrices, lorem nec gravida tincidunt, dui risus tempor velit, nec varius magna magna\n' +
    '    ac orci. Fusce ut justo sed nisl varius fermentum. Aliquam erat volutpat. Morbi\n' +
    '    bibendum, odio non ullamcorper ultrices, arcu eros lacinia augue, ac laoreet eros lorem\n' +
    '    in felis.',
    'Sed ultrices, lorem nec gravida tincidunt, dui risus tempor velit, nec varius magna magna\n' +
    '    ac orci. Fusce ut justo sed nisl varius fermentum. Aliquam erat volutpat. Morbi\n' +
    '    bibendum, odio non ullamcorper ultrices, arcu eros lacinia augue, ac laoreet eros lorem\n' +
    '    in felis.',
    'Sed ultrices, lorem nec gravida tincidunt, dui risus tempor velit, nec varius magna magna\n' +
    '    ac orci. Fusce ut justo sed nisl varius fermentum. Aliquam erat volutpat. Morbi\n' +
    '    bibendum, odio non ullamcorper ultrices, arcu eros lacinia augue, ac laoreet eros lorem\n' +
    '    in felis.',
    'Sed ultrices, lorem nec gravida tincidunt, dui risus tempor velit, nec varius magna magna\n' +
    '    ac orci. Fusce ut justo sed nisl varius fermentum. Aliquam erat volutpat. Morbi\n' +
    '    bibendum, odio non ullamcorper ultrices, arcu eros lacinia augue, ac laoreet eros lorem\n' +
    '    in felis.'
]



type SectionProps = {
    params: { destinationName: string }
}


export default function Page({params}: { params: { destinationName: string } }) {

    return (
        <div id={'displayContainer'} className={'w-full h-full'}>
            <HeroImage params={params} locationsData={data}/>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <Description paragraphs={descriptionParagraphs}/>

                <div className="py-6">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <main className="lg:col-span-8">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="container mx-auto sm:px-6 lg:px-8">
                                    <TripsShowcase params={params}/>
                                </div>
                            </div>
                        </main>


                        <div className="hidden lg:block lg:col-span-4">
                            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                                {/* Your content */}
                                <ContactFormSidebar/>
                            </nav>
                        </div>
                    </div>
                </div>

            </div>


            {/*packages showcase, two columns with form on right side*/}


        </div>
    )
}


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
        coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
        displayName: "Paris basic trip",
        id: '1234',
        description: "Lorem ipsum",
        totalDistance: 100,
        coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
]

function TripsShowcase({params}: SectionProps) {
    return (
        <section id={'trips'} className={'pt-6'}>
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Best
                    seller {params.destinationName.toUpperCase()}</h3>
            </div>
            <ul role="list" className="space-y-3 mt-10">
                {trips.map((trip, index) => (
                    <TripCard key={index} params={params} tripInfo={trip} />
                ))}
            </ul>
        </section>
    )
}

