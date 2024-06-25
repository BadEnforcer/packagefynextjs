"use client"
import React from "react";
import Slider from "react-slick";


export default function SimpleSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div className={'mb-20'}>
            <h2 className={'w-full flex items-center justify-center text-black font-medium text-3xl mt-20 mb-10'}>Slideable Elements</h2>
        <Slider {...settings}>
            <div>
                <Grid />
            </div>
            <div>
                <Grid />
            </div>
            <div>
                <Grid />
            </div>
            <div>
                <Grid />
            </div>
            <div>
                <Grid />
            </div>
            <div>
                <Grid />
            </div>
        </Slider>
        </div>
    );
}


const files = [
    {
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },{
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },{
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },{
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },{
        title: 'IMG_4985.HEIC',
        size: '3.9 MB',
        source:
            'https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80',
    },
    // More files...
]

// /* This example requires Tailwind CSS v2.0+ */
// export default function Example() {
//     return (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
//             <div className="max-w-3xl mx-auto">{/* Content goes here */}</div>
//         </div>
//     )
// }


function Grid() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <ul role="list"
                    className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 xl:gap-x-8">
                    {files.map((file) => (
                        <li key={file.source} className="relative">
                            <div
                                className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                                <img src={file.source} alt=""
                                     className="object-cover pointer-events-none group-hover:opacity-75"/>
                                <button type="button" className="absolute inset-0 focus:outline-none">
                                    <span className="sr-only">View details for {file.title}</span>
                                </button>
                            </div>
                            <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">{file.title}</p>
                            <p className="block text-sm font-medium text-gray-500 pointer-events-none">{file.size}</p>
                        </li>
                    ))}
                </ul>
                {/* Content goes here */}</div>

        </div>
    )
}
