import Image from "next/image";
import React from "react";
import {Package} from "@/app/_utility/types";

import { LuBedDouble } from "react-icons/lu";
import { PiTaxi } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { PiMapTrifoldLight } from "react-icons/pi";
import Link from "next/link";

type tripsShowcaseProps = {
    key: number
    packageInfo: Package,
    destinationId:string,
}


export default function PackageCard({key, packageInfo, destinationId}: tripsShowcaseProps) {

    return (
        <li key={key}
            className="bg-white outline outline-[1px] outline-black/10 hover:ring-1 hover:ring-purple-500 hover:scale-[101%] overflow-hidden rounded-2xl px-2 py-2 sm:px-6 sm:rounded-md">

            {/*// TODO : CHANGE BUTTON COLOR*/}
            {/*mobile*/}
            <div className="md:hidden bg-white p-4 rounded-lg shadow-lg">
                {/* Image Row */}
                <div className="relative md:hidden">
                    <Link href={`${destinationId}/package/${packageInfo.id}`}>
                        <div className={'h-48'}>
                            <Image
                                src={packageInfo.coverImageUrl}
                                alt={packageInfo.description}
                                className="w-full h-48 object-cover rounded-t-lg"
                                placeholder={'blur'}
                                blurDataURL={packageInfo.coverImageBase64}
                                // height={200}
                                // width={200}

                                fill={true}
                            />
                        </div>
                    </Link>


                </div>

                {/* Content Row */}
                <div className="flex flex-col md:flex-row justify-between">
                    {/*ONCLICK FUNCTION*/}
                    <div className="md:w-2/3 md:ml-4 flex flex-col justify-between">
                        <div>
                            <p className="pt-1 flex items-center justify-center text-gray-600 text-sm">{packageInfo.duration.toUpperCase()}
                            </p>
                            <h2 className="flex items-center justify-center text-lg font-bold text-neutral-700 pt-1">{packageInfo.name}</h2>

                        </div>
                        <div className="mt-4">
                            <p>
                                <span
                                    className="text-black text-2xl font-bold pr-1">₹ {packageInfo.discountedPrice}</span>
                                <span
                                    className="text-gray-500 font-medium text-lg line-through">₹ {packageInfo.originalPrice} </span>
                                <span
                                    className="ml-1 text-neutral-700 font-sans text-sm ">Per person</span>
                            </p>

                        </div>
                        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                            Inquire
                        </button>
                    </div>
                </div>
            </div>

            {/*Desktop*/}
            <div className="hidden md:grid grid-cols-5 gap-4 bg-white p-4 rounded-lg shadow-lg w-full">
                <Link href={`${destinationId}/package/${packageInfo.id}`} className="relative overflow-hidden  col-span-2 flex-shrink-0 w-full  xl:pb-[60%]">
                    <Image
                        src={packageInfo.coverImageUrl}
                        alt={packageInfo.description}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                        fill={true}
                        objectFit="cover"
                        placeholder={'blur'}
                        blurDataURL={packageInfo.coverImageBase64}
                    />
                </Link>
                <div className="col-span-3 flex flex-col justify-between">
                    <Link href={`${destinationId}/package/${packageInfo.id}`} className={''} >
                        <h3 className="text-sm text-gray-800">{packageInfo.duration}</h3>
                        <h1 className="text-2xl font-bold pt-2 text-black">{packageInfo.name}</h1>
                    </Link>
                    <Link href={`${destinationId}/package/${packageInfo.id}`} className="row-span-2 mt-2 ">
                        <div className={'grid grid-cols-2'}>
                            <div className={'flex items-center justify-start gap-x-2 md:scale-75 md:mr-14 xl:scale-90'}>
                                <div className={'grid grid-rows-2'}>
                                    <div className={'flex items-center justify-center'}><LuBedDouble size={32}/></div>
                                    <div className={'flex items-center justify-center h-6'} >Stay</div>
                                </div>
                                <div className={'grid grid-rows-2'}>
                                    <div className={'flex items-center justify-center'}><PiTaxi size={32}/></div>
                                    <div className={'flex items-center justify-center h-6'} >Travel</div>
                                </div>
                                <div className={'grid grid-rows-2'}>
                                    <div className={'flex items-center justify-center'}><GiHotMeal size={32}/></div>
                                    <div className={'flex items-center justify-center h-6'} >Meal</div>
                                </div>
                                <div className={'grid grid-rows-2'}>
                                    <div className={'flex items-center justify-center'} ><PiMapTrifoldLight size={32}/></div>
                                    <div className={'flex items-center justify-center h-6'} >Explore</div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </Link>
                    <div className="mt-4 grid grid-cols-2 items-center ">
                        <div>
                            <p>
                                <span
                                    className="text-black text-2xl font-bold pr-1">₹ {packageInfo.discountedPrice}</span>
                                <span
                                    className="text-gray-500 font-medium text-lg line-through">₹ {packageInfo.originalPrice} </span>
                                <br/>
                                <span
                                    className="ml-1  text-neutral-700 font-sans text-sm ">Per person</span>
                            </p>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-indigo-600 font-medium rounded-xl text-white py-2 px-4  hover:bg-indigo-500">
                                Send Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </li>

    )
}

