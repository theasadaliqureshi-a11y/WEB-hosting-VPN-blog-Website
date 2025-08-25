
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
    return (
        <div className="relative bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-text-main sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">AI-Powered Insights on</span>{' '}
                                <span className="block text-primary xl:inline">Hosting & VPNs</span>
                            </h1>
                            <p className="mt-3 text-base text-text-secondary sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Unbiased, data-driven reviews and comparisons to help you choose the best web hosting and VPN services. Cut through the noise with our expert analysis.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/blog"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-secondary bg-primary hover:bg-yellow-300 md:py-4 md:text-lg md:px-10 transition-transform transform hover:scale-105"
                                    >
                                        Explore Articles
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/about"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-secondary hover:bg-gray-700 md:py-4 md:text-lg md:px-10"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                    src="https://picsum.photos/1000/800?random=1"
                    alt="AI and financial technology"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent"></div>
                 <div className="absolute inset-0 bg-background opacity-40"></div>
            </div>
        </div>
    );
};

export default Hero;
