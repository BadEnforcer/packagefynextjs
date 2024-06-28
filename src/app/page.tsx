import HeroSearch from "@/app/components/HeroSearch";
import ImageGrid from "@/app/components/ImageGrid";
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

const content = [
    {
        imageSrc: 'https://images.pexels.com/photos/20411011/pexels-photo-20411011/free-photo-of-cho-da-lat-in-da-lat-city-in-vietnam-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Vietnam',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/16353919/pexels-photo-16353919/free-photo-of-fontanna-di-trevi-in-rome-italy.jpeg?auto=compress&cs=tinysrgb&w=800',
        duration: '5 Days 4 Nights',
        title: 'USA',
        href: '#'
    },

    {
        imageSrc: 'https://images.pexels.com/photos/9252846/pexels-photo-9252846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Malaysia',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/2604792/pexels-photo-2604792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Bali',
        duration: '5 Days 4 Nights',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/1701747/pexels-photo-1701747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Tokyo',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/666734/pexels-photo-666734.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Kashmir',
        href: '#'
    },

    {
        imageSrc: 'https://images.pexels.com/photos/20889591/pexels-photo-20889591/free-photo-of-sanctuary-of-truth.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Thailand',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/17741267/pexels-photo-17741267/free-photo-of-funfair-in-vietnam.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Singapore',
        href: '#'
    },

    {
        imageSrc: 'https://images.pexels.com/photos/3163057/pexels-photo-3163057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Romania',
        href: '#'
    },
    {imageSrc: 'https://images.pexels.com/photos/11807186/pexels-photo-11807186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', duration: '5 Days 4 Nights', title: 'Maldives', href: '#'},
    {
        imageSrc: 'https://images.pexels.com/photos/15194352/pexels-photo-15194352/free-photo-of-people-inside-the-hagia-sophia-grand-mosque.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Turkey',
        href: '#'
    },
    {imageSrc: 'https://images.pexels.com/photos/13017777/pexels-photo-13017777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', duration: '5 Days 4 Nights', title: 'Georgia', href: '#'},
    {
        imageSrc: 'https://images.pexels.com/photos/17906102/pexels-photo-17906102/free-photo-of-cable-car-in-the-bavarian-alps.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Germany',
        href: '#'
    },
    {
        imageSrc: 'https://images.pexels.com/photos/3011823/pexels-photo-3011823.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        duration: '5 Days 4 Nights',
        title: 'Norway',
        href: '#'
    },
]


export default function HomePage() {

    return (
        <div id={'homepage-container'}>
            <HeroSearch/>
            <ImageGrid/>
            <TripsWithPriceSlider heading={'Season Spots'} entries={content}/>
            <TripsWithPriceSlider heading={'International Destinations'} entries={content} rtl={false}/>
        </div>
    )

}