
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-[60vh] bg-background text-center px-4">
            <div>
                <h1 className="text-6xl font-extrabold text-primary">404</h1>
                <p className="mt-2 text-3xl font-bold text-text-main">Page Not Found</p>
                <p className="mt-4 text-lg text-text-secondary">
                    Sorry, the page you are looking for does not exist.
                </p>
                <Link
                    to="/"
                    className="mt-8 inline-block bg-primary text-secondary font-bold py-3 px-8 rounded-lg text-lg hover:bg-yellow-300 transition-colors"
                >
                    Go back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
