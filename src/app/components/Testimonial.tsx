import Image from "next/image";
import React from "react";
import {TestimonialData} from "@/app/_utility/types";



export default function Testimonial({imageSrc, name, content, authorPosition}: TestimonialData) {
    return (
        <div className="bg-white pt-8 lg:py-24">
            <div className={'pb-16 flex w-full items-center justify-center mt-8 lg:mt-20 lg:mb-10'}>
                <h1 className={'font-bold text-2xl lg:text-4xl '}>Testimonials</h1>
            </div>
            <div className="pb-16 #bg-indigo-600 testimonial-bg lg:pb-0 lg:z-10 lg:relative">
                <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8">
                    <div className="relative lg:-my-8">
                        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden"/>
                        <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full">
                            <div
                                className="aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full">
                                <Image
                                    className="object-cover rounded-2xl lg:h-full"
                                    src={
                                        imageSrc
                                            ? imageSrc
                                            : "https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                                    }
                                    alt="Testimonial"
                                    fill={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 lg:m-0 lg:col-span-2 lg:pl-8">
                        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none">
                            <blockquote>
                                <div>
                                    <svg
                                        className="h-12 w-12 text-white opacity"
                                        fill="white"
                                        viewBox="0 0 32 32"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"/>
                                    </svg>
                                    <p className="mt-6 md:text-2xl lg:text-2xl font-medium text-white">
                                        {content}
                                    </p>
                                </div>
                                <footer className="mt-6">
                                    <p className="text-base font-medium text-white">{name}</p>
                                    <p className="text-base font-medium text-indigo-100">{authorPosition}</p>
                                </footer>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
