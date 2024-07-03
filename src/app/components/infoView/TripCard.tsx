import React from "react";

type tripDetails = {
    displayName: string,
    id: string,
    description: string,
    totalDistance: number,
    coverPhoto: string,
}

type tripsShowcaseProps = {
    key: number
    tripInfo: tripDetails
}

export default function TripCard({key, tripInfo}: tripsShowcaseProps) {
    const originalPrice = 10000
    const discountedPrice = 8700

    return (
        <li key={key}
            className="bg-white outline outline-[1px] outline-black/10 hover:ring-1 hover:ring-purple-500 hover:scale-[101%] overflow-hidden rounded-2xl px-2 py-2 sm:px-6 sm:rounded-md">
            <div className="md:hidden bg-white p-4 rounded-lg shadow-lg">
                {/* Image Row */}
                <div className="md:hidden">
                    <img
                        src={tripInfo.coverPhoto}
                        alt={tripInfo.description}
                        className="w-full h-48 object-cover rounded-t-lg"
                    />
                </div>

                {/* Content Row */}
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Image for Medium and Larger Screens */}
                    <div className="hidden md:flex md:w-1/3">
                        <img
                            src={tripInfo.coverPhoto}
                            alt={tripInfo.description}
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className="md:w-2/3 md:ml-4 flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800">{tripInfo.displayName}</h2>
                            <p className="text-gray-600">{tripInfo.description}</p>
                        </div>
                        <div className="mt-4">
                            <p className="text-gray-500 line-through">10000</p>
                            <p className="text-green-500 font-bold">7800</p>
                        </div>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Inquire
                        </button>
                    </div>
                </div>
            </div>


            {/*Desktop*/}
            <div className="hidden md:grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-lg w-full">
                <div className="col-span-2 flex-shrink-0 w-full h-0 pb-[60%] relative">
                    <img
                        src={tripInfo.coverPhoto}
                        alt={tripInfo.description}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                    />
                </div>
                <div className="col-span-3 flex flex-col justify-between">
                    <div>
                        <h2 className="text-xl font-bold text-gray-800">{tripInfo.displayName}</h2>
                    </div>
                    <div className="row-span-2 mt-2">
                        <p className="text-gray-600">{tripInfo.description}</p>
                    </div>
                    <div className="mt-4 grid grid-cols-2 items-center">
                        <div>
                            <p className="text-gray-500 line-through">{originalPrice}</p>
                            <p className="text-green-500 font-bold">{discountedPrice}</p>
                        </div>
                        <div className="flex justify-end">
                            <button className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-500">
                                Inquire
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    )
}

