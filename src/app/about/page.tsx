"use client"
import Footer from "@/app/components/Footer";
import React from "react";
import Spinner from "@/app/components/FullScreenSpinner";
import {useRouter} from "next/navigation";
import { LiaBikingSolid } from "react-icons/lia";
import { LuPlane } from "react-icons/lu";
import {IoBriefcaseOutline, IoHeartOutline} from "react-icons/io5";

const About1 = () => {

    const router = useRouter();

    return (
        <React.Suspense fallback={<Spinner />}>
            <>
                <main>
                    <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                        {/*HERO*/}
                        <section>

                            <div
                                className="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
                                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">


                                    <div onClick={() => router.push('/')}  className="mt-5 max-w-xl text-center mx-auto">
                                        <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
                                            Packagefy.com
                                        </h1>
                                    </div>


                                    <div className="mt-5 max-w-3xl text-center mx-auto">
                                        <p className="text-lg text-gray-600"> Find your best Holiday Package.</p>
                                    </div>

                                </div>
                            </div>

                        </section>

                        {/*INTRO*/}
                        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-white">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap items-center justify-between -mx-4">
                                    <div className="w-full px-4 lg:w-6/12">
                                        <div className="flex items-center -mx-3 sm:-mx-4">
                                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                <div className="py-3 sm:py-4">
                                                    {/* You can add an image of your suspension product here */}
                                                    <img
                                                        src={"https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/about%20us%20content%2FGroup%20image%20vertical%202.jpg?alt=media&token=2d4a7604-137d-444d-ad86-b573d6923524"}

                                                        alt="Suspension Product"
                                                        className="w-full rounded-2xl"
                                                    />
                                                </div>
                                                <div className="py-3 sm:py-4">
                                                    {/* You can add a video showcasing your product here */}
                                                    <img
                                                        src="https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/about%20us%20content%2Fimage%203.jpg?alt=media&token=7e3f38bf-d048-4612-b5d0-bb340492e90d"
                                                        className="w-full rounded-2xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                <div className="relative z-10 my-4">
                                                    {/* You can add another image or illustration here */}
                                                    <img
                                                        src="https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/about%20us%20content%2FGroup%20Image%20vertical%201.jpg?alt=media&token=0b1f3278-bda6-4c98-b1da-cd73d8d6042d"
                                                        alt="Illustration"
                                                        className="w-full rounded-2xl"
                                                    />
                                                    {/* Decorative circles */}
                                                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                                            {/* SVG decorative circles */}
                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full px-10  lg:w-1/2 xl:w-5/12">
                                        <div className="mt-10 lg:mt-0">
                                <span className="block mb-4 text-lg font-semibold text-primary">
                                    Welcome to Packagefy
                                </span>
                                            <h2 className="mb-5 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                                                Explore with us!
                                            </h2>
                                            <p className="mb-5 text-base text-body-color ">
                                                Your gateway to unforgettable travel experiences.
                                                At Packagefy, we take pride in being your one-stop solution for all your travel needs. We make travel better and easier for people of India.
                                                Packagefy ideally caters to a diverse range of customers to maximize its market reach and appeal.
                                                This includes:  Leisure Travelers, Business Travelers, Adventure Seekers, Budget-conscious Travelers Offering affordable options, Honeymooners, Educational Student tours.
                                            </p>
                                            {/* Add your content section below */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>


                        {/*Features*/}
                        <section>

                            <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                                <div className="aspect-w-16 aspect-h-7">
                                    <img className="w-full object-cover rounded-xl"
                                         src="https://firebasestorage.googleapis.com/v0/b/packagefy.appspot.com/o/about%20us%20content%2FSlideshow%2FBig%20Group%20image.jpg?alt=media&token=8c8d1321-013c-40de-bbbc-acfe2ab1c8c4"
                                         alt="Image Description"/>
                                </div>


                                <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                                    <div className="lg:col-span-1">
                                        <h2 className="font-bold text-2xl md:text-3xl text-gray-800 ">
                                            We tackle the challenges healthcare faces.
                                        </h2>
                                        <p className="mt-2 md:mt-4 text-gray-500">
                                            Besides partnering with medical institutions and healthcare start-ups, we have
                                            developed pharmaceutical solutions that address common pain points in various
                                            therapeutic areas.
                                        </p>
                                    </div>


                                    <div className="lg:col-span-2">
                                        <div className="grid sm:grid-cols-2 gap-8 md:gap-12">

                                            <div className="flex gap-x-5">
                                                <IoHeartOutline size={90}  />
                                                <div className="grow">
                                                    <h3 className="text-lg font-semibold text-gray-800">
                                                        HoneyMoon Trip
                                                    </h3>
                                                    <p className="mt-1 text-gray-600 ">
                                                        We select our teams with care. Our scientists and researchers are
                                                        the key to groundbreaking discoveries.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-x-5">
                                                <LuPlane size={100}/>
                                                <div className="grow">
                                                    <h3 className="text-lg font-semibold text-gray-800 ">
                                                        Group Departure
                                                    </h3>
                                                    <p className="mt-1 text-gray-600 ">
                                                        From life-saving medications to daily health supplements, TG Pharma
                                                        ensures that essential treatments are within reach for everyone.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-x-5">
                                                <LiaBikingSolid size={100} height={60} width={60} />
                                                <div className="grow">
                                                    <h3 className="text-lg font-semibold text-gray-800">
                                                        Bike Trips
                                                    </h3>
                                                    <p className="mt-1 text-gray-600 ">
                                                        Our comprehensive documentation and extensive clinical studies
                                                        provide everything healthcare professionals need to trust and
                                                        integrate our solutions.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex gap-x-5">
                                                <IoBriefcaseOutline size={100} height={60} width={60} />
                                                <div className="grow">
                                                    <h3 className="text-lg font-semibold text-gray-800 ">
                                                        Corporate trips
                                                    </h3>
                                                    <p className="mt-1 text-gray-600">
                                                        We focus on the right balance between efficacy and patient comfort,
                                                        creating treatments that enhance quality of life.
                                                    </p>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </section>

                        {/*    CTA*/}
                        <section>

                            <div className="bg-white ">
                                <div
                                    className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                                    <h2 className="text-3xl font-extrabold text-black sm:text-4xl">
            <span className="block">
                Don&apos;t believe us yet ?
            </span>
                                        <span className="block text-stone-400">
                See the Packages yourself.
            </span>
                                    </h2>
                                    <div className="lg:mt-0 lg:flex-shrink-0">
                                        <div className=" inline-flex rounded-md shadow">
                                            <button type="button"
                                                    onClick={() => router.push('/')}
                                                    className="py-4 px-6  bg-neutral-600 hover:bg-neutral-700 focus:ring-neutral-500 focus:ring-offset-neutral-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                                Explore!
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </section>




                    </div>
                </main>
                <Footer />

            </>
        </React.Suspense>
    );
};

export default About1;
