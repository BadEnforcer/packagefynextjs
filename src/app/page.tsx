import HeroSearch from "@/app/components/HeroSearch";
import ImageGridDisclosure from "@/app/components/ImageGridDisclosure";
import TripsWithPriceSlider from "@/app/components/TripsWithPriceSlider";
import React from "react";



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



export default function HomePage() {

    return (
        <div id={'homepage-container'}>
            <HeroSearch />
            <ImageGridDisclosure />
            <TripsWithPriceSlider heading={'Season Spots'} entries={files}/>
            <TripsWithPriceSlider heading={'International Destinations'} entries={files} rtl={false}/>
        </div>
    )

}