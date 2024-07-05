"use client"
import React from "react";
import Slider from "react-slick";
import dynamic from "next/dynamic";

const Testimonial = dynamic(() => import("./Testimonial"));

type Testimonial = {
    imageSrc: string
    name: string
    content: string
    position: string
}


const testimonials: Testimonial[] = [
    {
        name: "Arqam Ahmad",
        position: 'Android Developer',
        imageSrc: "https://images.pexels.com/photos/1680173/pexels-photo-1680173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices"
    },
    {
        name: "Raj Dwivedi",
        position: 'Android Developer',
        imageSrc: "https://images.pexels.com/photos/3029919/pexels-photo-3029919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Felis bibendum ut tristique et egestas quis ipsum suspendisse ultrices."
    },
    {
        name: "Samantha Smith",
        position: 'Graphic Designer',
        imageSrc: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla."
    },
    {
        name: "John Doe",
        position: 'Web Developer',
        imageSrc: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    },
    {
        name: "Emily Johnson",
        position: 'Marketing Specialist',
        imageSrc: "https://images.pexels.com/photos/428339/pexels-photo-428339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
    },
    {
        name: "Michael Brown",
        position: 'Product Manager',
        imageSrc: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
        name: "Jessica Lee",
        position: 'Software Engineer',
        imageSrc: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit."
    },
    {
        name: "Chris Davis",
        position: 'UX Designer',
        imageSrc: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Aliquam erat volutpat. Sed quis velit. Nulla facilisi. Sed molestie convallis nisi, vel venenatis justo porta vitae."
    },
    {
        name: "Olivia Martinez",
        position: 'Data Analyst',
        imageSrc: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "In hac habitasse platea dictumst. Vivamus vestibulum nulla nec ante. Praesent placerat risus quis eros."
    },
    {
        name: "Laura Clark",
        position: 'HR Manager',
        imageSrc: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        content: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin vel ante a orci tempus eleifend ut et magna."
    }
];


const SimpleSlider: React.FC = () => {
    const settings = {
        infinite: true,
        fade: true,
        adaptiveHeight: true,
        speed: 1000,
        autoplaySpeed: 4000,
        autoplay: true,
        pauseOnHover: false,
        swipeToSlide: false,
        focusOnSelect: false,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        slidesToShow: 1,
        useCSS: true,
    };


    return (
        <section id={'testimonials'} className={'w-full '}>
            <Slider {...settings}>
                {testimonials.map((entry, i) => {
                    return (
                        <Testimonial name={entry.name} content={entry.content} position={entry.position}
                                     imageSrc={entry.imageSrc} key={i}/>
                    );
                })}
            </Slider>
        </section>

    );

}


export default SimpleSlider;