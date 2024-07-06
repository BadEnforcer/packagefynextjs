import DOMPurify from 'dompurify';

type ItineraryProps = {
    itinerary: {
        id: string,
        heading: string,
        description: string,
    }[]
}



export default function Itinerary({itinerary}: ItineraryProps) {

    const createMarkup = (htmlContent:string) => {
        return { __html: DOMPurify.sanitize(htmlContent) };
    };

    return (
        <div>
            <div className="pb-5 border-b border-gray-200 mb-8">
                <h3 className="leading-6 font-bold text-2xl text-gray-900">Itinerary</h3>
            </div>
            <ul role="list" className="space-y-3">
                {itinerary.map((section, i) => (
                    <li key={i} className="shadow hover:outline hover:outline-[1px] hover:outline-indigo-500 hover:scale-[101%] overflow-hidden rounded-2xl px-6 py-4">
                        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 flex items-center justify-center">
                            <h3 className="text-md leading-6 font-bold lg:text-2xl text-black">{section.heading}</h3>
                        </div>

                        {/*    content   */}
                        <div className={'list-disc pt-3 text-sm'} dangerouslySetInnerHTML={createMarkup(section.description)}/>

                    </li>
                ))}
            </ul>
        </div>

    )
}
