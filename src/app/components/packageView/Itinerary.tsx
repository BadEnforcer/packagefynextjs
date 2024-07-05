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
                    <li key={i} className="bg-white shadow overflow-hidden rounded-2xl px-6 py-4">
                        <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">{section.heading}</h3>
                        </div>

                        {/*    content   */}
                        <div className={'list-disc'} dangerouslySetInnerHTML={createMarkup(section.description)}/>

                    </li>
                ))}
            </ul>
        </div>

    )
}
