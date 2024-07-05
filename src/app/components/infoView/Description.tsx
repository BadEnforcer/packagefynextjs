import React from "react";

type DescriptionProps = {
    name: string,
    data: string
}

export default function Description({name, data}: DescriptionProps) {
    return (
        <section id={'description'} className={'h-auto mt-10 mb-10'}>
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-3xl leading-6 font-bold text-gray-900">Explore {name} with Packagefy</h3>
            </div>
            <div className={'flex items-center justify-center pt-4'}>
                <p className={'line-clamp-5 lg:line-clamp-none'}>{data}</p>
            </div>
        </section>
    )
}