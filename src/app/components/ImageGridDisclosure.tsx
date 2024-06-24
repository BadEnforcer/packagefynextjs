import { Disclosure as HeadlessDisclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import React from 'react';

import ImageGrid from './ImageGrid';

type PanelInfo = {
    name: string;
    type: "recommended" | "domestic" | "international";
}


const DisclosurePanelsInfo: PanelInfo[] = [
    { name: 'Popular locations across the globe', type: 'recommended' },
    { name: 'Best Destinations In India', type: 'recommended' },
    { name: 'Most visited destinations across the globe', type: 'recommended' },
];



export default function CustomDisclosure() {
    return (
        <div>
            {/*Large display only*/}
            <div className="hidden lg:block">
                {DisclosurePanelsInfo.map((_, i) => {
                    return (
                        <div key={i} className={'pt-10'}>
                            <ImageGrid type={'recommended'} />
                        </div>
                    )
                })}
            </div>

            {/*Mobile only*/}
            <div className="lg:hidden">
                {DisclosurePanelsInfo.map((section, i) => (
                    <HeadlessDisclosure as="div" key={i} className="pt-6" defaultOpen={i === 0}>
                        <div key={i} className="">
                            <DisclosureButton className="flex w-full pl-3 pr-2 items-center justify-between">
                                <span>{section.name}</span>
                                <ChevronDownIcon className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
                            </DisclosureButton>
                            <DisclosurePanel transition className="">
                                <ImageGrid type={'recommended'} />
                            </DisclosurePanel>
                        </div>
                    </HeadlessDisclosure>
                ))}
            </div>
        </div>
    );
}
