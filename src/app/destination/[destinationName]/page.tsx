"use client"

import HeroImage from '@/app/components/infoView/HeroImage'
import Description from "@/app/components/infoView/Description";
import PackageCard from '@/app/components/infoView/PackageCard';
import ContactFormSidebar from "@/app/components/infoView/ContactFormSidebar";
import Contact from "@/app/components/infoView/Contact";
import React from "react";
import Footer from "@/app/components/Footer";
import NewsLetter from "@/app/components/NewsLetter";
import TripCard from "@/app/components/infoView/TripCard";


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
    "Nunc mattis enim ut tellus. Pellentesque eu tincidunt tortor aliquam nulla facilisi. Ornare lectus sit amet est. Et molestie ac feugiat sed lectus vestibulum mattis ullamcorper velit. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc. Etiam sit amet nisl purus in mollis nunc sed. Tristique senectus et netus et malesuada. Suspendisse ultrices gravida dictum fusce ut. Sed elementum tempus egestas sed. Scelerisque purus semper eget duis at. Bibendum enim facilisis gravida neque convallis. Ornare arcu dui vivamus arcu felis. Eget felis eget nunc lobortis. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Tincidunt id aliquet risus feugiat in ante. Praesent semper feugiat nibh sed pulvinar proin. Turpis tincidunt id aliquet risus feugiat.",
    "Arcu cursus euismod quis viverra nibh cras pulvinar mattis nunc. Sed pulvinar proin gravida hendrerit lectus. Mauris ultrices eros in cursus turpis massa tincidunt dui ut. Scelerisque eu ultrices vitae auctor eu augue ut lectus arcu. Libero enim sed faucibus turpis in eu mi bibendum. Cras ornare arcu dui vivamus arcu felis. A arcu cursus vitae congue mauris rhoncus. Eget duis at tellus at urna condimentum. Eros in cursus turpis massa tincidunt. Mattis nunc sed blandit libero volutpat sed cras ornare. Risus at ultrices mi tempus imperdiet nulla malesuada. Urna nec tincidunt praesent semper feugiat nibh sed. Integer quis auctor elit sed vulputate. Rhoncus est pellentesque elit ullamcorper dignissim cras. Justo eget magna fermentum iaculis. Integer quis auctor elit sed vulputate. Commodo odio aenean sed adipiscing. Cursus sit amet dictum sit. Bibendum at varius vel pharetra vel turpis nunc eget.",
    "Massa tincidunt dui ut ornare lectus sit amet est placerat. Mollis nunc sed id semper. Urna nec tincidunt praesent semper feugiat nibh sed. Nisi lacus sed viverra tellus in hac habitasse platea dictumst. Porta lorem mollis aliquam ut porttitor leo a diam. Facilisis gravida neque convallis a cras semper auctor neque vitae. Nulla facilisi nullam vehicula ipsum. Purus sit amet luctus venenatis lectus magna. Interdum velit euismod in pellentesque. Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Auctor urna nunc id cursus metus aliquam eleifend mi. Fermentum posuere urna nec tincidunt praesent semper feugiat. Ac tortor dignissim convallis aenean. Lacinia at quis risus sed vulputate odio ut enim blandit. Lorem sed risus ultricies tristique nulla. At volutpat diam ut venenatis tellus. Sed id semper risus in hendrerit gravida rutrum quisque non. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a.",
    "Sollicitudin tempor id eu nisl nunc mi ipsum faucibus vitae. Cursus metus aliquam eleifend mi in. Sed viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tortor posuere ac ut consequat. Purus non enim praesent elementum facilisis. Porttitor leo a diam sollicitudin tempor id eu nisl. Sed sed risus pretium quam vulputate dignissim suspendisse in. Facilisis sed odio morbi quis commodo odio aenean sed. Id venenatis a condimentum vitae sapien pellentesque. At elementum eu facilisis sed odio morbi. Ac placerat vestibulum lectus mauris ultrices eros. Pellentesque habitant morbi tristique senectus. Volutpat odio facilisis mauris sit amet massa. Sagittis id consectetur purus ut. Odio ut sem nulla pharetra. Nisi vitae suscipit tellus mauris a diam maecenas. Massa tempor nec feugiat nisl pretium fusce id velit ut. Felis imperdiet proin fermentum leo vel. Nibh sit amet commodo nulla facilisi. Sit amet mattis vulputate enim."
]



type SectionProps = {
    params: { destinationName: string }
}



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




