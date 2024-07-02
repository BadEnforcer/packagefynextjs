import React from "react";

type DescriptionProps = {
    paragraphs: string[]
}

export default function Description ({paragraphs}: DescriptionProps) {
    return (
        <section id={'description'} className={'h-auto mt-10 mb-10'}>
            <div className="pb-5 border-b border-gray-200">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Description</h3>
            </div>
            <div className={'flex items-center justify-center pt-4'}>
                <div className={'grid gap-y-6 w-full text-xl'}>
                    {paragraphs.map((paragraph, i) => {
                        return (
                            <p key={i}>{paragraph}</p>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}