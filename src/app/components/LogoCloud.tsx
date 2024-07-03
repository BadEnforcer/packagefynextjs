/* This example requires Tailwind CSS v2.0+ */
export default function LogoCloud() {
    return (
        <div className="bg-indigo-70 bg-white">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                <h2 className="flex items-center justify-center text-3xl font-extrabold text-black">Recognitions and <span className={'text-indigo-600'}>&nbsp;Collaborations</span> </h2>
                <div className="flow-root mt-8 lg:mt-10">
                        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                                         alt="Tuple"/>
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12"
                                         src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12"
                                         src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                         alt="StaticKit"/>
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                        alt="Transistor"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                        alt="Workcation"
                                    />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

