
import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-text-main sm:text-5xl">Contact Us</h1>
                    <p className="mt-4 text-xl text-text-secondary">
                        We'd love to hear from you. Whether you have a question, feedback, or a partnership inquiry, please get in touch.
                    </p>
                </div>

                <div className="mt-12 text-center bg-secondary rounded-lg p-8">
                    <h2 className="text-2xl font-bold text-text-main">Get in Touch via Email</h2>
                    <p className="mt-4 text-lg text-text-secondary">
                        For all inquiries, please send an email to our primary contact address. We aim to respond within 24-48 hours.
                    </p>
                    <a 
                        href="mailto:theasadalikureshi@gmail.com"
                        className="mt-6 inline-block bg-primary text-secondary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors"
                    >
                        theasadalikureshi@gmail.com
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
