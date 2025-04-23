import React from 'react'
import EALogo from './assets/ea-electronic-arts-seeklogo.png'
import TwitterIcon from './assets/x.svg'
import InstagramIcon from './assets/instagram.svg'
import YoutubeIcon from './assets/youtube.svg'

function AboutUs() {
    return (
        <section id="about" className="w-full py-20 bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">About Electronic Arts</h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Electronic Arts is a global leader in digital interactive entertainment.
                        We develop and deliver games, content and online services for Internet-connected consoles, mobile devices and personal computers.
                    </p>
                </div>

                {/* Company Overview */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={EALogo}
                            alt="Electronic Arts Logo"
                            className="w-64 h-64 object-contain hover:scale-110 transition-transform duration-300"
                        />
                    </div>
                    <div className="w-full md:w-1/2 space-y-6">
                        <h3 className="text-3xl font-bold">Our Mission</h3>
                        <p className="text-lg text-gray-300">
                            To inspire the world to play. We create amazing experiences for players all over the world.
                            Our games are designed to bring people together, inspire their creativity, and push them to new heights.
                        </p>
                        <p className="text-lg text-gray-300">
                            Electronic Arts has been a pioneer in interactive entertainment since our founding in 1982.
                            Today, we are one of the world's leading publishers of games on console platforms, PC and mobile.
                        </p>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-20">
                    <h3 className="text-3xl font-bold text-center mb-10">Our Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                            <div className="bg-blue-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto group-hover:animate-pulse">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-center mb-3 text-blue-400">Creativity</h4>
                            <p className="text-gray-300 text-center">
                                We push creative boundaries and deliver innovative, high-quality games that surprise and delight our players.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                            <div className="bg-green-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-center mb-3 text-green-400">Passion</h4>
                            <p className="text-gray-300 text-center">
                                We are united by our passion for games and are committed to creating experiences that help players connect, compete and share the joy of playing.
                            </p>
                        </div>
                        <div className="bg-gray-700 p-8 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 transform">
                            <div className="bg-purple-600 w-16 h-16 flex items-center justify-center rounded-full mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold text-center mb-3 text-purple-400">Innovation</h4>
                            <p className="text-gray-300 text-center">
                                We embrace new technologies and ideas to keep pushing the boundaries of what's possible in gaming and interactive entertainment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Global Presence */}
                <div className="mb-16">
                    <h3 className="text-3xl font-bold text-center mb-10">Global Presence</h3>
                    <div className="bg-gray-700 p-8 rounded-lg hover:bg-gray-600 transition-colors duration-300">
                        <p className="text-lg text-gray-300 text-center mb-8">
                            With studios and offices around the world, EA employs approximately 12,900 people in more than 22 countries.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
                            <div className="text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-3xl font-bold text-blue-400 mb-2">25+</div>
                                <div className="text-gray-300">Studios Worldwide</div>
                            </div>
                            <div className="text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-3xl font-bold text-blue-400 mb-2">450M+</div>
                                <div className="text-gray-300">Registered Players</div>
                            </div>
                            <div className="text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-3xl font-bold text-blue-400 mb-2">40+</div>
                                <div className="text-gray-300">Years of Innovation</div>
                            </div>
                            <div className="text-center hover:-translate-y-2 transition-transform duration-300">
                                <div className="text-3xl font-bold text-blue-400 mb-2">300+</div>
                                <div className="text-gray-300">Game Titles</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Join Us CTA */}
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-6">Join the EA Community</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        <a href="https://x.com/EA" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 text-white hover:scale-105">
                            <img src={TwitterIcon} alt="Twitter" className="w-5 h-5" />
                            X
                        </a>
                        <a href="https://www.instagram.com/ea?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 text-white hover:scale-105">
                            <img src={InstagramIcon} alt="Instagram" className="w-5 h-5" />
                            Instagram
                        </a>
                        <a href="https://youtube.com/@electronicarts?si=msMtGLHHkGwpcCZe" className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-md font-semibold transition-all duration-300 flex items-center gap-2 text-white hover:scale-105">
                            <img src={YoutubeIcon} alt="YouTube" className="w-5 h-5 bg-white p-0.5 rounded-sm" />
                            YouTube
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs