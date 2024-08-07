"use client"

import React from "react";
import dynamic from "next/dynamic";
import {Suspense} from 'react';
import ErrorBoundary from "@/app/components/ErrorBoundary";
import Image from "next/image";

const SpinnerFullScreen = dynamic(() => import('./components/FullScreenSpinner'), {
    ssr: true,
})

const ImageSkeleton = dynamic(() => import('./components/ImageSkeleton'), {
    ssr: true,
})

const LoadingSpinner = dynamic(() => import('./components/LoadingSpinner'), {
    ssr: true,
})

const ParagraphSkeleton = dynamic(() => import('./components/ParagraphSkeleton'), {
    ssr: true,
})


const HeroSearch = dynamic(() => import('./components/HeroSearch'), {
    ssr: true,
})
const ImageGrid = dynamic(() => import('./components/ImageGrid'), {
    loading: () => <LoadingSpinner/>, ssr: true
})
const TripsWithPriceSlider = dynamic(() => import('./components/NormalTripsSlider'), {
    loading: () => <ImageSkeleton/>
})


const Navbar = dynamic(() => import('./components/Navbar'), {
    loading: () => <SpinnerFullScreen/>, ssr: true
})


const Footer = dynamic(() => import('./components/Footer'), {ssr: true})
const LogoCloud = dynamic(() => import('./components/LogoCloud'), {
    loading: () => <ParagraphSkeleton/>
})
const TestimonialSlider = dynamic(() => import('./components/TestimonialSlider'), {
    loading: () => <LoadingSpinner/>
})
const BannerSlideShow = dynamic(() => import('./components/BannerSlideShow'), {
    loading: () => <ImageSkeleton/>
})
const TrendingDestinations = dynamic(() => import('./components/TrendingDestinations'), {
    loading: () => <ImageSkeleton/>
})

const files = [
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
        title: 'Italy',
        duration: '5 Days 4 Nights',
        href: '/destination/italy',
        imageSrc:
            'https://images.pexels.com/photos/6774396/pexels-photo-6774396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
]

const domestic_destinations =
    [{
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2FHimachal.jpg?alt=media&token=c33a63a7-95c1-4ae4-936d-df67b5111d3c",
        duration: "",
        title: "Himachal Pradesh",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fgoa.jpg?alt=media&token=8b3b1bd8-5b4c-4762-82c8-15b8e3280df6",
        duration: "",
        title: "Goa",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fkerala.jpg?alt=media&token=1f93f0a6-9d91-41b1-94a7-bd8600abe200",
        duration: "",
        title: "Kerala",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fladdakh.jpg?alt=media&token=1d2f3cdb-01fb-49e2-8544-fefac1306bf6",
        duration: "",
        title: "Ladakh",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2FJammu%20%26%20Kashmir.jpg?alt=media&token=c05c5f29-0016-4667-9034-31fff8bf43bc",
        duration: "",
        title: "Jammu Kashmir",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Frajasthan.jpg?alt=media&token=117aa3f6-7262-4ced-8f8f-94e97c846104",
        duration: "",
        title: "Rajasthan",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Futtarakhand.jpg?alt=media&token=3a99a9b8-42ed-4de3-a876-d84d1c6562a1",
        duration: "",
        title: "Uttrakhand",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fmeghalaya.jpg?alt=media&token=54697ad7-e9d3-42ed-bc17-2cd5a6e67b2f",
        duration: "",
        title: "Meghalaya",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fnorth%20east.jpg?alt=media&token=15a9a16d-99d2-4517-bd1e-1f84a515186b",
        duration: "",
        title: "North East",
        href: "#"
    }, {
        imageSrc: "https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/SlidingGrids%2Fandaman.jpg?alt=media&token=f0bc9633-db20-4041-8bc1-c3789c63d199",
        duration: "",
        title: "Andaman",
        href: "#"
    }];

const backgroundImage: string = 'https://images.pexels.com/photos/2674064/pexels-photo-2674064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
const backgroundBlurImage: string = 'data:image/jpeg;base64,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oOlK50oOlK50oOlK50oN0rFKK3SsUoN0050oOlSsUqDdK50oOlSsUordK50oN0rFSg3SsVKDdKxUoOlSsVNA6VKxpNA6VKxUoN0rFSit0rnTSDdK500DdK50oN0rGk0DpSuejQN0rnSiumiuejQOlTTnSg6aNMU0Dporno0iulK56NA6UrnVoOlNOdKDpVrno0K6UrnSg6Va50oOlK51aDdWudKDpSsUoOlK50oOlK50oOlK51aDdGKA60rnStPB0pXOrQbpWKUVurXOlB0pXOlB0pXOlBulYpQbpWKUG6VipQdKVzpQdKVzpRXSpWKUG6VipQdKlYpQbpXOmgdKlY0mhXSpWKlB0qVilBupWKlQdKlYqUHSpWKmgdKlY0mhXTSac9Ggb0ac9Ggb0ac9JpB00ac9JoV0ppz0UHTSac9GgdNGnPSaFddJpz0aB0pXPRpB00ac9GgddGnLRoV10VzpoHSrpy0aB10ac9FB00tcqtFdKVzq0HSlc9GgdaVz0UHSlc9FB1pXOlB0pXOrQbq1zpQdKVzpQdKOdAdqVzpW3O6UrnSg6UrnSg6UrnSg6UrnSiulK50oOlK50oOlK50oOlK56NA6UrnSg3SsVKDpo050orpSudSoOlK50oOlSsaTQOlSsVKK6UrnU0DpSuek0DppKxpNA6VNMaTSK3o056NA3o056TQOmk0xpNA6aTTno0K6aTTnpNIOmjTnpNA66TTnpNCuuk056TSUddGnLRoquujTlpNFI66NOWjRSOujTlo0lV20actGikddGnLRopHbRpy0aKsddLpy0aKR10actLopHXRpz0aWkddFctLopHXRXLS6KR00tctGiq66NOeig6aXTlVoOmiudKUdNGnOlB00OdAd6VzpXo5XSlc6UHSlc6UHSlc6UHSlc6UHSlc6UHSlc6VFbpWKUG6VipQdKVzpQdKVzpQdKlY0UG6VzpRW9GmKlBulYqUHSlc6VBupWNJoV0qaYqUHTSac9Ggb0ac9JoV00mmNJpBvRpz0mhXTSac9GijppNOek0lHTSac9JpKrrpNOek0VY66TTlpNJSOujTltNppY7aTTltNppY7aNOOjZojto046NGljto04aXRojtpdOGjSaWO+jTjo0aI76NOOjS6I76NOOjRojvo046XRojto046XS0jto05aNFWO2jTlo0Ujto05aNF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';


export default function HomePage() {

    return (
        <ErrorBoundary>
            <Suspense fallback={<SpinnerFullScreen/>}>
                <section id={'Hero Section'} className={'relative overflow-hidden'}>
                    <Image src={backgroundImage} alt={'Background Image'} fill={true}
                           className={'absolute bg-no-repeat bg-center -z-10'} placeholder={'blur'} priority
                           fetchPriority={'high'} blurDataURL={backgroundBlurImage} loading={'eager'} quality={100}
                           objectFit={'cover'}/>
                    <div className="absolute inset-0 bg-black opacity-30"></div>

                    <Navbar/>
                    <HeroSearch/>
                </section>
                <section>
                    <ImageGrid/>
                    <TrendingDestinations/>
                    <BannerSlideShow/>

                    <TripsWithPriceSlider heading1={'Best of'} heading2={"Indian"} heading3={"Heartland"}
                                          entries={domestic_destinations}/>
                    <TripsWithPriceSlider heading1={'Must visit'} heading2={'International'} heading3={"Destinations"}
                                          entries={files} rtl={false}/>
                </section>

                <TestimonialSlider/>

                <LogoCloud/>
                {/*<NewsLetter marginT={20}/>*/}
                <Footer/>
            </Suspense>
        </ErrorBoundary>
    )
}