
import React from 'react';

const TermsPage: React.FC = () => {
    return (
        <div className="bg-background py-16 sm:py-24">
            <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl font-extrabold text-text-main text-center">Terms and Conditions</h1>
                <div className="mt-8 prose prose-invert lg:prose-xl mx-auto text-text-secondary">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>
                    
                    <h2>1. Agreement to Terms</h2>
                    <p>By using this website ("Site"), you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any of these terms, you are prohibited from using or accessing this site.</p>

                    <h2>2. Intellectual Property Rights</h2>
                    <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
                    
                    <h2>3. User Representations</h2>
                    <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms and Conditions; (4) you will not access the Site through automated or non-human means, whether through a bot, script or otherwise.</p>
                    
                    <h2>4. Prohibited Activities</h2>
                    <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                    
                    <h2>5. Governing Law</h2>
                    <p>These terms and conditions are governed by and construed in accordance with the laws of the applicable jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
