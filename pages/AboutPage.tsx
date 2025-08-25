
import React from 'react';

const AboutPage: React.FC = () => {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-text-main sm:text-5xl">About AI Host Review Hub</h1>
                    <p className="mt-4 text-xl text-text-secondary">
                        Your trusted source for intelligent, unbiased tech reviews.
                    </p>
                </div>

                <div className="mt-12 text-lg text-text-secondary space-y-6">
                    <p>
                        Welcome to AI Host Review Hub, the intersection of cutting-edge artificial intelligence and in-depth digital service analysis. In a crowded market of web hosting providers, VPNs, and cloud services, making an informed decision can be overwhelming. That's where we come in.
                    </p>
                    <p>
                        Our mission is simple: to provide the most comprehensive, data-driven, and unbiased reviews to help you navigate the complex world of web infrastructure. We leverage proprietary AI algorithms to analyze performance metrics, uptime, customer support feedback, and pricing structures at a scale and depth that manual research simply cannot match.
                    </p>

                    <h2 className="text-3xl font-bold text-text-main pt-8 border-t border-gray-700/50">Our Expertise</h2>
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6 mt-6">
                         <img src="https://picsum.photos/150/150?random=10" alt="Asad Ali Kureshi" className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                        <div>
                             <h3 className="text-2xl font-semibold text-text-main">Asad Ali Kureshi, Founder & Chief Analyst</h3>
                            <p className="mt-2">
                                With over 15 years in the trenches of the web hosting and cybersecurity industry, Asad Ali Kureshi is a recognized expert in network infrastructure and digital privacy. As a certified cloud architect and a passionate advocate for consumer rights online, Asad founded AI Host Review Hub to bring a new level of transparency and accuracy to the review space.
                            </p>
                            <p className="mt-2">
                                His niche expertise lies in performance benchmarking under high-traffic conditions and analyzing the real-world impact of VPN encryption protocols. Asad combines his hands-on experience with a data-first approach, ensuring every article is not just a review, but a deep-dive analysis you can trust.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;