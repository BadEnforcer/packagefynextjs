"use client"
import { useRouter } from 'next/navigation'
import { GiCampingTent } from "react-icons/gi";
import { PiHeart } from "react-icons/pi";
import { GiBackpack } from "react-icons/gi";
import { PiAirplaneTiltThin } from "react-icons/pi";
import { PiHandshakeThin } from "react-icons/pi";
import { CiSearch } from "react-icons/ci";
import {IconType} from "react-icons";
import React from "react";
import {Combobox, ComboboxInput, ComboboxOption} from '@headlessui/react'

type CategoryElement = {
    name: string,
    icon: IconType,
    href: string
}

const categories:CategoryElement[] = [
    { name: "Camping", href: "/trips/camping", icon:GiCampingTent },
    { name: "Honeymoon", href: "/trips/honeymoon", icon:PiHeart },
    { name: "Backpacking", href: "/trips/backpacking", icon:GiBackpack },
    { name: "International", href: "/trips/international", icon:PiAirplaneTiltThin },
    { name: "Corporate", href: "/trips/corporate", icon:PiHandshakeThin },
    // { name: "Camping", href: "/camping", icon:GiCampingTent },
    // { name: "Camping", href: "/camping", icon:GiCampingTent },
];

interface visitingLocations {
    id: number,
    name: string,
    url: string,
}

const locations:visitingLocations[] = [
    { id: 1, name: 'New York, USA', url: '/new-york' },
    { id: 2, name: 'Los Angeles, USA', url: '/los-angeles' },
    { id: 3, name: 'London, UK', url: '/london' },
    { id: 4, name: 'Paris, France', url: '/paris' },
    { id: 5, name: 'Tokyo, Japan', url: '/tokyo' },
    { id: 6, name: 'Sydney, Australia', url: '/sydney' },
    { id: 7, name: 'Rio de Janeiro, Brazil', url: '/rio-de-janeiro' },
    { id: 8, name: 'Cape Town, South Africa', url: '/cape-town' },
    { id: 9, name: 'Dubai, UAE', url: '/dubai' },
    { id: 10, name: 'New Delhi, India', url: '/new-delhi' },
    { id: 11, name: 'Rome, Italy', url: '/rome' },
    { id: 12, name: 'Bangkok, Thailand', url: '/bangkok' },
    { id: 13, name: 'Moscow, Russia', url: '/moscow' },
    { id: 14, name: 'Berlin, Germany', url: '/berlin' },
    { id: 15, name: 'Cairo, Egypt', url: '/cairo' },
    { id: 16, name: 'Mexico City, Mexico', url: '/mexico-city' },
    { id: 17, name: 'Toronto, Canada', url: '/toronto' },
    { id: 18, name: 'Singapore', url: '/singapore' },
    { id: 19, name: 'Seoul, South Korea', url: '/seoul' },
    { id: 20, name: 'Barcelona, Spain', url: '/barcelona' },
    { id: 21, name: 'Amsterdam, Netherlands', url: '/amsterdam' },
    { id: 22, name: 'Istanbul, Turkey', url: '/istanbul' },
    { id: 23, name: 'Buenos Aires, Argentina', url: '/buenos-aires' },
    { id: 24, name: 'Mumbai, India', url: '/mumbai' },
    { id: 25, name: 'Hong Kong', url: '/hong-kong' },
    { id: 26, name: 'Venice, Italy', url: '/venice' },
    { id: 27, name: 'San Francisco, USA', url: '/san-francisco' },
    { id: 28, name: 'Athens, Greece', url: '/athens' },
    { id: 29, name: 'Kyoto, Japan', url: '/kyoto' },
    { id: 30, name: 'Cusco, Peru', url: '/cusco' }
    // Add more locations as needed
];


function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function HeroSearch() {
    const router = useRouter();
    const [query, setQuery] = React.useState('')


    const filteredLocations =
        query === ''
            ? []
            : locations.filter((location) => {
                return location.name.toLowerCase().includes(query.toLowerCase())
            }).slice(0, 4) // only gives top 4

    return (

        <section className="relative overflow-hidden">
            <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 md:mb-[150px]">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white pb-12 lg:pb-10">

                        Find your best Holiday Package.

                    </h1>
                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">



                        <Combobox
                            as="div"
                            className={"z-10 bg-white rounded-2xl mx-auto max-w-xl relative"} // Added relative positioning to parent div
                            onChange={(location:visitingLocations) => location?.url ? router.push('/destination'+ location.url) : null}
                        >
                            <div className="relative">
                                <CiSearch
                                    className=" pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                                    aria-hidden="true"
                                />
                                <ComboboxInput
                                    className="h-12 rounded-lg w-full focus-visible:outline-0 border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                                    placeholder="Search..."
                                    onChange={(event) => setQuery(event.target.value)}
                                />
                            </div>

                            {filteredLocations.length > 0 && (
                                <div className="rounded-lg absolute w-full max-h-72 overflow-y-auto bg-white rounded-b-xl shadow-lg border border-gray-200 mt-1">
                                    <div className="py-3 text-sm text-gray-800">
                                        {filteredLocations.map((person) => (
                                            <ComboboxOption
                                                key={person.id}
                                                value={person}
                                                className={({ active }) =>
                                                    classNames(
                                                        ' flex justify-start cursor-default select-none px-4 py-2',
                                                        active && 'bg-indigo-600 text-white'
                                                    )
                                                }
                                            >
                                                {person.name}
                                            </ComboboxOption>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {query !== '' && filteredLocations.length === 0 && (
                                <p className="absolute inset-x-0 top-full p-4 text-sm text-gray-500">No people found.</p>
                            )}
                        </Combobox>



                        <div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
                            <svg className="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor"
                                      strokeWidth="10" strokeLinecap="round"/>
                                <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
                                      stroke="currentColor" strokeWidth="10" strokeLinecap="round"/>
                                <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor"
                                      strokeWidth="10" strokeLinecap="round"/>
                            </svg>
                        </div>
                        <div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
                            <svg className="w-[9rem] h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                    stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                    {/*<div className="mt-10 sm:mt-20 ">*/}
                    {/*    <div className={'hidden lg:block'}>*/}
                    {/*        {categories.map((categories, i) => {*/}
                    {/*            return (*/}
                    {/*                <a*/}
                    {/*                    key={i}*/}
                    {/*                    className={'m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none'}*/}
                    {/*                    href={categories.href}*/}
                    {/*                >*/}
                    {/*                    <categories.icon/>{categories.name}</a>*/}
                    {/*            )*/}
                    {/*        })}*/}
                    {/*    </div>*/}

                    {/*</div>*/}
                </div>
            </div>
        </section>

    )
}