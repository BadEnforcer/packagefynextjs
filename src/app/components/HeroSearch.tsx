"use client"
import {useRouter} from 'next/navigation'
import {CiSearch} from "react-icons/ci";
import React, {useEffect} from "react";
import {Combobox, ComboboxInput, ComboboxOption} from '@headlessui/react'
import {doc, getDoc} from "firebase/firestore";
import firebase from "../../../firebase";
import {toast} from "react-toastify";
import ParagraphSkeleton from "@/app/components/ParagraphSkeleton";


interface searchEntry {
    destinationId: string,
    id: string,
    destinationName: string,

}


interface searchListDocument {
    entries: searchEntry[];
}


function classNames(...classes: (string | boolean)[]) {
    return classes.filter(Boolean).join(' ')
}

export default function HeroSearch() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [locations, setLocations] = React.useState<searchListDocument>()
    const router = useRouter();
    const [query, setQuery] = React.useState('')

    useEffect(() => {
        const docRef = doc(firebase.db, "search", "list");

        try {
            getDoc(docRef).then((docSnapshot) => {
                if (!docSnapshot.exists()) {
                    toast.info("Search is down for maintenance.")
                }

                // if search list exists
                setLocations((docSnapshot.data() as searchListDocument));
                console.log((docSnapshot.data() as searchListDocument))
                setIsLoading(false)

            })

        } catch (err) {
            toast.error("Failed to fetch search items. Server Error")
        }

    }, []);


    // if locations in undefined it will return an empty array.
    const filteredLocations = query === '' ? [] :

        (locations && locations.entries.length > 0) ?

        locations.entries.filter((location) => {
        return location.destinationName.toLowerCase().includes(query.toLowerCase())}).slice(0, 4)

            :

            [] // return empty array if locations is undefined.



    return (

        <section id={'hero-search'} className="relative overflow-hidden">
            <div className="relative z-10 max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24 md:mb-[150px]">
                <div className="text-center">
                    <h1 className="text-4xl sm:text-6xl font-bold text-white pb-12 lg:pb-10">

                        Find your best Holiday Package.

                    </h1>
                    <div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">

                        {isLoading && !locations ? <ParagraphSkeleton />
                        :

                            <>
                                <Combobox
                                    as="div"
                                    className={"z-10 bg-white rounded-2xl mx-auto max-w-xl relative"} // Added relative positioning to parent div
                                    onChange={(location: searchEntry) => location  ? router.push('/destination/' + location.destinationId) : ''}
                                >
                                    <div className="relative">
                                        <CiSearch
                                            className=" pointer-events-none absolute top-3.5 left-4 h-5 w-5 text-gray-400"
                                            aria-hidden="true"
                                        />
                                        <ComboboxInput
                                            disabled={isLoading}
                                            className="h-12 rounded-lg w-full focus-visible:outline-0 border-0 bg-transparent pl-11 pr-4 text-sm text-gray-800 placeholder-gray-400 focus:ring-0"
                                            placeholder="Search..."
                                            onChange={(event) => setQuery(event.target.value ? event.target.value.toLowerCase() : '')}
                                        />
                                    </div>

                                    {filteredLocations.length > 0 && (
                                        <div
                                            className="rounded-lg absolute w-full max-h-72 overflow-y-auto bg-white rounded-b-xl shadow-lg border border-gray-200 mt-1">
                                            <div className="py-3 text-sm text-gray-800">
                                                {filteredLocations.map((location) => (
                                                    <ComboboxOption
                                                        key={location.id}
                                                        value={location}
                                                        className={({focus}) =>
                                                            classNames(
                                                                ' flex justify-start cursor-default select-none px-4 py-2',
                                                                focus && 'bg-indigo-600 text-white'
                                                            )
                                                        }
                                                    >
                                                        {location.destinationName}
                                                    </ComboboxOption>
                                                ))}
                                            </div>
                                        </div>
                                    )}

                                    {query !== '' && filteredLocations.length === 0 && (
                                        <p className="absolute inset-x-0 top-full p-4 text-sm text-white">No Results Found.</p>
                                    )}
                                </Combobox>
                            </>

                        }



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
                            <svg className="w-[9rem] h-auto text-cyan-500" width="347" height="188"
                                 viewBox="0 0 347 188"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
                                    stroke="currentColor" strokeWidth="7" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </section>

    )
}