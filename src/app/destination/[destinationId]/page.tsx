"use client"
import React, {useEffect} from "react";

import dynamic from "next/dynamic";
import SpinnerFullScreen from "@/app/components/FullScreenSpinner";
import ParagraphSkeleton from "@/app/components/ParagraphSkeleton";
import {doc, getDoc} from "firebase/firestore";
import firebase from "../../../../firebase";
import {toast} from "react-toastify";
import {useRouter} from "next/navigation";


const HeroImage = dynamic(() => import('@/app/components/infoView/HeroImage'),
    {
        loading: () => <SpinnerFullScreen/>,
    }
)
const Description = dynamic(() => import('@/app/components/infoView/Description'),
    {
        loading: () => {
            return <ParagraphSkeleton/>
        }
    })
const PackageCard = dynamic(() => import('@/app/components/infoView/PackageCard'),
    {
        loading: () => (<ParagraphSkeleton/>)

    }
)
const ContactFormSidebar = dynamic(() => import('@/app/components/infoView/ContactFormSidebar'))
const Contact = dynamic(() => import('@/app/components/infoView/Contact'))
const Footer = dynamic(() => import('@/app/components/Footer'))
const NewsLetter = dynamic(() => import('@/app/components/NewsLetter'), {
    loading: () => {
        return <ParagraphSkeleton/>
    }
})
const TripCard = dynamic(() => import('@/app/components/infoView/TripCard'),
    {
        loading: () => (<ParagraphSkeleton/>)
    }
)


// type SectionProps = {
//     params: { destinationName: string }
// }


type packageShowcaseData = {
    data: Package[]
}

const PackageShowcase: React.FC<packageShowcaseData> = ({data}) => {
    return (
        <section id={'packages'}>
            {data.map((packageData, index) => {
                return (
                    <div key={index} className={'mt-12'}>
                        <ul role="list" className="space-y-3 mt-10">
                            <PackageCard key={index} packageInfo={packageData}/>
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}


const TripsShowcase: React.FC<packageShowcaseData> = ({data}) => {
    return (
        <section id={'trips'}>
            {data.map((trip, index) => {
                return (
                    <div key={index} className={'mt-12'}>
                        <ul role="list" className="space-y-3 mt-10">
                            <TripCard key={index} tripInfo={trip}/>
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


type Package = {
    id: string
    name: string
    coverImageUrl: string
    originalPrice: string
    discountedPrice: string
    description: string
    itinerary:
        {
            heading: string,
            description: string,
        }[]
    inclusions: string[]
    Exclusions: string[]
}

type Trip = {
    id: string
    name: string
    coverImageUrl: string
    originalPrice: string
    discountedPrice: string
    description: string
    itinerary:
        {
            heading: string,
            description: string,
        }[]

    inclusions: string[]
    Exclusions: string[]
}


type DestinationData = {
    id: string,
    name: string,
    description: string,
    coverImageUrl: string,
    packages?: Package[],
    trips?: Trip[]
}


const tabs = [
    {name: 'Packages'},
    {name: 'Trips'},
]

export default function Page({params}: { params: { destinationId: string } }) {

    const [currentTab, setCurrentTab] = React.useState(0);
    const [destinationData, setDestinationData] = React.useState<DestinationData>()
    const [loading, setLoading] = React.useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchDestinationData = async () => {
            const docRef = doc(firebase.db, "destinations", params.destinationId);
            try {
                const docSnap = await getDoc(docRef);
                if (!docSnap.exists()) {
                    console.log('document does not exist')
                    // router.push('/404');
                    return;
                }

                setDestinationData(docSnap.data() as DestinationData);
            } catch (err) {
                toast.error('Server Error. CODE 500');
            } finally {
                setLoading(false);
            }
        };

        fetchDestinationData().then(r => {
        });
    }, [params.destinationId, router]);

    if (loading) {
        return <SpinnerFullScreen/>;
    }

    return (
        <div id={'displayContainer'} className={'w-full h-full'}>
            <HeroImage name={destinationData?.name as string} coverImageUrl={destinationData?.coverImageUrl as string}/>

            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
                <Description name={destinationData?.name as string} data={destinationData?.description as string}/>


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
                                    {currentTab === 0 ?

                                        (destinationData?.packages?.length) ? // since length is 0, it is false
                                            <PackageShowcase data={destinationData.packages}/>

                                            : <>We have no packages right now</>

                                        : <></>}

                                    {currentTab === 1 ?

                                        (destinationData?.trips?.length) ? // since length is 0, it is false
                                            <TripsShowcase data={destinationData.trips}/>

                                            : <>We have no Trips right now.</>

                                        : <></>}

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




