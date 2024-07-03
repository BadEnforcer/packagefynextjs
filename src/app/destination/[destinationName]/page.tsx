"use client"
import React from "react";

import dynamic from "next/dynamic";
import SpinnerFullScreen from "@/app/components/FullScreenSpinner";
import ParagraphSkeleton from "@/app/components/ParagraphSkeleton";


const HeroImage = dynamic(() => import('@/app/components/infoView/HeroImage'),
    {
        loading: () => <SpinnerFullScreen />,
    }
    )
const Description = dynamic(() => import('@/app/components/infoView/Description'),
    {loading: () => {return <ParagraphSkeleton />}})
const PackageCard = dynamic(() => import('@/app/components/infoView/PackageCard'),
    {
        loading: () => (<ParagraphSkeleton />)

    }
    )
const ContactFormSidebar = dynamic(() => import('@/app/components/infoView/ContactFormSidebar'))
const Contact = dynamic(() => import('@/app/components/infoView/Contact'))
const Footer = dynamic(() => import('@/app/components/Footer'))
const NewsLetter = dynamic(() => import('@/app/components/NewsLetter'), {loading: () => {return <ParagraphSkeleton />}})
const TripCard = dynamic(() => import('@/app/components/infoView/TripCard'),
    {
    loading: () => (<ParagraphSkeleton />)
    }
)


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

const descriptionParagraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit massa enim nec dui. Arcu cursus euismod quis viverra. Euismod nisi porta lorem mollis aliquam ut porttitor leo. Quis vel eros donec ac odio tempor orci dapibus. Ultrices gravida dictum fusce ut. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices. At ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Quisque egestas diam in arcu cursus euismod quis. Pulvinar sapien et ligula ullamcorper malesuada proin libero nunc.",
"Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Cursus metus aliquam eleifend mi in. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor posuere ac ut consequat. Purus non enim praesent elementum facilisis. Porttitor leo a diam sollicitudin tempor id eu nisl. Sed sed risus pretium quam vulputate dignissim suspendisse in. Facilisis sed odio morbi quis commodo odio aenean sed. Id venenatis a condimentum vitae sapien pellentesque. At elementum eu facilisis sed odio morbi. Ac placerat vestibulum lectus mauris ultrices eros. Pellentesque habitant morbi tristique senectus. Volutpat odio facilisis mauris sit amet massa. Sagittis id consectetur purus ut. Odio ut sem nulla pharetra. Nisi vitae suscipit tellus mauris a diam maecenas. Massa tempor nec feugiat nisl pretium fusce id velit ut. Felis imperdiet proin fermentum leo vel. Nibh sit amet commodo nulla facilisi. Sit amet mattis vulputate enim."
]



// type SectionProps = {
//     params: { destinationName: string }
// }



type PackageSection = {
    name: string
    content: PackageDetails[]
}
type PackageDetails = {
    displayName: string,
    id: string,
    description: string,
    totalDistance: number,
    coverPhoto: string,
}
const packages: PackageSection[] = [
    {
        name: "Best sellers",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },
    {
        name : "Friends Special",
        content: [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
        ]
    },
    {
        name: "Honeymoon Special",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },
    {
        name: "Birthday Bash",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },

]

function PackageShowcase() {
    return (
        <section id={'packages'}>
            {packages.map((section, index) => {
                return (
                    <div key={index} className={'mt-12'}>
                        <div className="pb-5 border-b border-gray-200">
                            <h3 className="text-4xl leading-6 font-bold text-gray-900">{section.name}</h3>
                        </div>
                        <ul role="list" className="space-y-3 mt-10">
                            {section.content.map((packageInfo, index) => (
                                <PackageCard key={index} packageInfo={packageInfo}/>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}


type TripSection = {
    name: string
    content: TripDetails[]
}
type TripDetails = {
    displayName: string,
    id: string,
    description: string,
    totalDistance: number,
    coverPhoto: string,
}
const trips: TripSection[] = [
    {
        name: "Best sellers",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/3939470/pexels-photo-3939470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/7393042/pexels-photo-7393042.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
            }
        ]
    },
    {
        name : "Friends Special",
        content: [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/3939470/pexels-photo-3939470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
        ]
    },
    {
        name: "Honeymoon Special",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1926404/pexels-photo-1926404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/947177/pexels-photo-947177.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },
    {
        name: "Birthday Bash",
        content : [
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/1500598/pexels-photo-1500598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            },
            {
                displayName: "Paris basic trip",
                id: '1234',
                description: "Lorem ipsum",
                totalDistance: 100,
                coverPhoto: 'https://images.pexels.com/photos/13351969/pexels-photo-13351969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            }
        ]
    },

]


function TripsShowcase() {
    return (
        <section id={'trips'}>
            {trips.map((section, index) => {
                return (
                    <div key={index} className={'mt-12'}>
                        <div className="pb-5 border-b border-gray-200">
                            <h3 className="text-4xl leading-6 font-bold text-gray-900">{section.name}</h3>
                        </div>
                        <ul role="list" className="space-y-3 mt-10">
                            {section.content.map((tripInfo, index) => (
                                <TripCard key={index} tripInfo={tripInfo}/>
                            ))}
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

const tabs = [
    { name: 'Packages'},
    { name: 'Trips'},
]

export default function Page({params}: { params: { destinationName: string } }) {

    const [currentTab, setCurrentTab] = React.useState(0)

    return (
        <div id={'displayContainer'} className={'w-full h-full'}>
            <HeroImage params={params} locationsData={data}/>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <Description params={params} paragraphs={descriptionParagraphs}/>


                <div className="border-b border-gray-200">
                    <div className="sm:flex sm:items-baseline">
                        {/*<h3 className="text-lg leading-6 font-medium text-gray-900">Issues</h3>*/}
                        <div className="mt-4 sm:mt-0 sm:ml-10">
                            <nav className="-mb-px flex space-x-8">
                                {tabs.map((tab, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentTab(index)}
                                        className={classNames(
                                            currentTab === index
                                                ? 'border-indigo-500 text-indigo-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                                            'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
                                        )}
                                        aria-current={currentTab === index ? 'page' : undefined}
                                    >
                                        {tab.name}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="py-6">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="lg:col-span-8">
                            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="container mx-auto sm:px-6 lg:px-8">
                                    {currentTab === 0 && <PackageShowcase/>}
                                    {currentTab === 1 && <TripsShowcase/>}
                                </div>
                            </div>
                        </div>


                        <div className="hidden lg:block lg:col-span-4">
                            <nav aria-label="Sidebar" className="sticky top-6 divide-y divide-gray-300">
                                <ContactFormSidebar/>
                            </nav>
                        </div>
                    </div>
                </div>


                <Contact/>
                <NewsLetter/>
                <Footer/>

            </div>
        </div>
    )
}


/* This example requires Tailwind CSS v2.0+ */




