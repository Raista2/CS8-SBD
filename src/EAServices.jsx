import React from 'react'

function EAServices() {
    return (
        <section id="experience" className="w-full py-10 md:py-16 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* EA Play Section */}
                <div className="mb-12 md:mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 order-2 md:order-1">
                            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left">EA Play</h2>
                            <p className="text-base md:text-lg text-gray-300 text-center md:text-left">
                                Get more from your favorite games with EA Play. Members get instant access to a collection of EA's best titles,
                                exclusive in-game challenges and rewards, special member-only content, and early trials of select new games.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                                <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-colors text-sm md:text-base">
                                    Join Now
                                </button>
                                <button className="bg-transparent border border-white hover:bg-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-colors text-sm md:text-base">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 mt-6 md:mt-0 order-1 md:order-2">
                            <div className="bg-gray-800 rounded-lg p-4 md:p-6 shadow-xl transform hover:scale-105 transition-transform duration-300">
                                <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-blue-400">EA Play Benefits</h3>
                                <ul className="space-y-2 md:space-y-3">
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm md:text-base">Unlimited access to a collection of EA's best games</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm md:text-base">10% discount on EA digital purchases</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm md:text-base">Early access trials for new releases</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-5 w-5 md:h-6 md:w-6 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-sm md:text-base">Exclusive in-game rewards and content</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-b border-gray-700 my-10 md:my-16"></div>

                {/* EA App Section */}
                <div>
                    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
                        <div className="w-full md:w-1/2 mt-6 md:mt-0 order-2 md:order-1">
                            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-xl">
                                <div className="p-4 md:p-6">
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">Download the EA App</h3>
                                    <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6">
                                        Your new place to play. Fast downloads, less waiting, more playing.
                                        The EA app is the best place to play our games.
                                    </p>
                                    <button className="bg-green-600 hover:bg-green-700 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-colors w-full text-sm md:text-base">
                                        Download Now
                                    </button>
                                </div>
                                <div className="bg-gray-900 px-4 py-3 md:px-6 md:py-4">
                                    <p className="text-xs md:text-sm text-gray-400">Compatible with Windows 10 and 11</p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 space-y-4 md:space-y-6 order-1 md:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-center md:text-right">EA App</h2>
                            <p className="text-base md:text-lg text-gray-300 text-center md:text-right">
                                The EA app for Windows is our fastest and lightest PC client to date.
                                With the new streamlined design, you'll easily find the games and content you're looking for and discover
                                new favorites along the way.
                            </p>
                            <div className="flex flex-wrap justify-center md:justify-end gap-4">
                                <button className="bg-transparent border border-white hover:bg-gray-800 px-4 py-2 md:px-6 md:py-3 rounded-md font-semibold transition-colors text-sm md:text-base">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EAServices