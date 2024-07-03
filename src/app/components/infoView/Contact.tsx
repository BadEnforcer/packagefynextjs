import Image from "next/image";

const contactDetails = [
    { name: 'Collaborate', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
    { name: 'Press', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
    // { name: 'Join our team', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
    // { name: 'Say hello', email: 'support@example.com', telephone: '+1 (555) 123-4567' },
]
const locations = [
    { city: 'Los Angeles', address: ['4556 Brendan Ferry', 'Los Angeles, CA 90210'] },
    // { city: 'New York', address: ['886 Walter Streets', 'New York, NY 12345'] },
    // { city: 'Toronto', address: ['7363 Cynthia Pass', 'Toronto, ON N3Y 4H8'] },
    // { city: 'Chicago', address: ['726 Mavis Island', 'Chicago, IL 60601'] },
]
const faqs = [
    {
        id: 1,
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 2,
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        id: 3,
        question: 'What do you call someone with no body and no nose?',
        answer: 'Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    {
        id: 4,
        question: 'Why do you never see elephants hiding in trees?',
        answer:
            "Because they're so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
]

export default function Contact() {
    return (
        <div className="bg-white">
            <header className="relative pb-24 bg-sky-800 sm:pb-32">
                <div className="absolute inset-0 ">
                    <Image
                        className="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/2300582/pexels-photo-2300582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill={true}
                    />
                    <div
                        className="absolute inset-0 bg-gradient-to-l from-neutral-400 to-neutral-700 mix-blend-multiply"
                        aria-hidden="true"
                    />
                </div>

                <div className="relative mt-10 pt-10 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8 ">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Want something more customized?</h1>
                    <p className="mt-6 text-xl text-white max-w-3xl">
                        Mattis amet hendrerit dolor, quisque lorem pharetra. Pellentesque lacus nisi urna, arcu sociis eu. Orci vel
                        lectus nisl eget eget ut consectetur. Sit justo viverra non adipisicing elit distinctio.
                    </p>
                </div>
            </header>

            <div>
                {/* Side-by-side grid */}
                <div className="bg-white">
                    <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="divide-y divide-warm-gray-200">
                            <section className="lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="contact-heading">
                                <h2 id="contact-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                                    Get in touch
                                </h2>
                                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                                    {contactDetails.map((item) => (
                                        <div key={item.name}>
                                            <h3 className="text-lg font-medium text-warm-gray-900">{item.name}</h3>
                                            <dl className="mt-2 text-base text-warm-gray-500">
                                                <div>
                                                    <dt className="sr-only">Email</dt>
                                                    <dd>{item.email}</dd>
                                                </div>
                                                <div className="mt-1">
                                                    <dt className="sr-only">Phone number</dt>
                                                    <dd>{item.telephone}</dd>
                                                </div>
                                            </dl>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            <section className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8" aria-labelledby="location-heading">
                                <h2 id="location-heading" className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl">
                                    Locations
                                </h2>
                                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                                    {locations.map((location) => (
                                        <div key={location.city}>
                                            <h3 className="text-lg font-medium text-warm-gray-900">{location.city}</h3>
                                            <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                                                {location.address.map((line) => (
                                                    <p key={line}>{line}</p>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </div>

                {/* FAQ */}
                <div className="bg-warm-gray-50">
                    <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
                        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                            <div>
                                <h2 className="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
                                <p className="mt-4 text-lg text-warm-gray-500">
                                    Can’t find the answer you’re looking for? Reach out to our{' '}
                                    <a href="#" className="font-medium text-cyan-700 hover:text-cyan-600">
                                        customer support
                                    </a>{' '}
                                    team.
                                </p>
                            </div>
                            <div className="mt-12 lg:mt-0 lg:col-span-2">
                                <dl className="space-y-12">
                                    {faqs.map((faq) => (
                                        <div key={faq.id}>
                                            <dt className="text-lg font-medium text-warm-gray-900">{faq.question}</dt>
                                            <dd className="mt-2 text-base text-warm-gray-500">{faq.answer}</dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
