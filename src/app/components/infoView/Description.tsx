import React from "react";

type DescriptionProps = {
    params: { destinationName: string }
    paragraphs: string[]
}

export default function Description ({params, paragraphs}: DescriptionProps) {
    return (
        <section id={'description'} className={'h-auto mt-10 mb-10'}>
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-3xl leading-6 font-bold text-gray-900">Explore { params.destinationName.slice(0)[0].toUpperCase() + params.destinationName.slice(1)} with Packagefy</h3>
            </div>
            <div className={'flex items-center justify-center pt-4'}>
                <div className={'grid gap-y-6 w-full text-xl '}>
                    {paragraphs.map((paragraph, i) => {
                        return (
                            <p className={'line-clamp-5 lg:line-clamp-none'} key={i}>{paragraph}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}