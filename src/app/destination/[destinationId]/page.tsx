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



// type SectionProps = {
//     params: { destinationName: string }
// }


type packageShowcaseData = {
    data?: Package[]
    destinationId: string,
}

const PackageShowcase: React.FC<packageShowcaseData> = ({data, destinationId}) => {

    if (!data) return (<></>)

    return (
        <section id={'packages'}>
            {data.map((packageData, index) => {
                return (
                    <div key={index} className={'mt-12'}>
                        <ul role="list" className="space-y-3 mt-10">
                            <PackageCard key={index} destinationId={destinationId} packageInfo={packageData}/>
                        </ul>
                    </div>
                )
            })}
        </section>
    )
}


type Package = {
    id: string
    name: string
    coverImageUrl: string
    coverImageFilename: string,
    originalPrice: number
    discountedPrice: number
    description: string
    duration: string,
    pickupAndDropLocation: string,
    itinerary:
        {
            id: string,
            heading: string,
            description: string,
        }[] | []
    inclusions: string[] | []
    exclusions: string[] | []
}

interface DestinationData {
    id: string,
    name: string,
    description: string,
    coverImageUrl: string,
    fileName: string,
    packages: Package[] | [],
    created: Date,
    modified: Date,
    version: number,
    modificationInfo: {
        createdBy: string,
        lastModifiedBy: string
    }
}



export default function Page({params}: { params: { destinationId: string } }) {

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

                {destinationData?.packages?.length
                    ?
                    <div className="py-6">
                        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                            <div className="lg:col-span-8">
                                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                    <div className="container mx-auto sm:px-6 lg:px-8">
                                        <PackageShowcase destinationId={params.destinationId} data={destinationData?.packages}/>
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
                    :
                    <><ContactFormSidebar/></>
                }





            </div>
            <Contact/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}


