
import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-text-main text-center">Privacy Policy</h1>
                <div className="mt-8 prose prose-invert lg:prose-xl mx-auto text-text-secondary">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2>1. Introduction</h2>
                    <p>Welcome to AI Host Review Hub. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>

                    <h2>2. Information We Collect</h2>
                    <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                    <ul>
                        <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site.</li>
                        <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                    </ul>

                    <h2>3. Use of Your Information</h2>
                    <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to create and manage your account, email you regarding your account or order, and enable user-to-user communications.</p>
                    
                    <h2>4. Affiliate Disclosure</h2>
                    <p>This site contains affiliate links. This means that we may earn a commission if you click on a link and make a purchase from our partners. This comes at no additional cost to you and helps support our work in providing high-quality, unbiased reviews. Our editorial content is not influenced by affiliate partnerships.</p>

                    <h2>5. Contact Us</h2>
                    <p>If you have questions or comments about this Privacy Policy, please contact us at: theasadalikureshi@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
