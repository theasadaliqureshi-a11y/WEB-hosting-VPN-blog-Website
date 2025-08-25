
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary border-t border-gray-700/50">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <p className="text-sm text-text-secondary mb-4 sm:mb-0">
            &copy; {new Date().getFullYear()} AI Host Review Hub. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/about" className="text-sm text-text-secondary hover:text-primary transition-colors">About</Link>
            <Link to="/privacy-policy" className="text-sm text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="text-sm text-text-secondary hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
