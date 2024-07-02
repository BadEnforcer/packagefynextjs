import Image from "next/image";
import React from "react";

type tripDetails = {
    displayName: string,
    id: string,
    description: string,
    totalDistance: number,
    coverPhoto: string,
}

type tripsShowcaseProps = {
    params: { destinationName: string }
    key: number
    tripInfo: tripDetails
}

export default function TripsShowcase({params, key, tripInfo}: tripsShowcaseProps) {
    return (
        <li key={key}
            className="bg-white outline outline-[1px] outline-black/10 hover:ring-1 hover:ring-purple-500 hover:scale-[101%] overflow-hidden rounded-2xl px-2 py-2 sm:px-6 sm:rounded-md">
            <div className={'hidden lg:block grid grid-cols-6 gap-x-6 py-4'}>
                <div
                    className={'flex items-center justify-center relative col-span-2 w-full '}>
                    <Image src={tripInfo.coverPhoto} alt={'cover-photo'} className={'rounded-lg'}
                           fill={true} objectFit={'cover'}/>
                </div>
                <div className={'col-span-4'}>
                    <div className={'grid grid-rows-6'}>
                        <div className={'row-span-1 font-bold text-3xl '}>The French experience
                            package
                        </div>
                        <div className={'row-span-2 bg-blue-400'}>
                            {tripInfo.description}
                        </div>
                        <div className={'row-span-1 bg-green-400'}>Something</div>
                        <div className={'row-span-1 bg-red-400'}>important</div>
                    </div>
                </div>
            </div>
            <div className={'lg:hidden'}>
                <Image src={tripInfo.coverPhoto} alt={'cover-photo'} className={' rounded-lg aspect-w-1 w-full h-full'}
                       fill={false} height={200} width={200} objectFit={'cover'}/>
                <div
                    className={'flex items-center justify-center relative row-span-1 row-start-1 w-full'}>

                </div>
                <div className={'col-span-4'}>
                    <div className={'grid grid-rows-1'}>
                        <div className={'row-span-1 font-bold text-2xl justify-evenly content-evenly py-2  '}>The French experience
                            package
                        </div>
                        <div className={'row-span-1'}>
                            {tripInfo.description}
                        </div>
                        <div className={'row-span-1'}>

                        </div>
                    </div>
                </div>
                <div className={'flex w-full items-center justify-end pt-4 pb-2'}>
                    <button className={'w-full border rounded-xl p-2 font-medium text-white bg-neutral-700  hover:bg-pink-600 hover:outline hover:outline-pink-700/50 '} >Send inquiry</button>
                </div>
            </div>
        </li>

    )
}

