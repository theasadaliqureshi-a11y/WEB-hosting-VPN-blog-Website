import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavLinks: React.FC<{className?: string}> = ({ className }) => {
    const linkStyle = "px-3 py-2 rounded-md text-sm font-medium text-text-secondary hover:text-primary transition-colors";
    const activeLinkStyle = "text-primary bg-secondary";

    return (
        <div className={className}>
            <NavLink to="/" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Home</NavLink>
            <NavLink to="/blog" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Blog</NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>About Us</NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? `${linkStyle} ${activeLinkStyle}` : linkStyle}>Contact Us</NavLink>
        </div>
    );
};

const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const mobileLinkStyle = "block px-3 py-2 rounded-md text-base font-medium text-text-secondary hover:text-primary hover:bg-secondary transition-colors";
    const activeMobileLinkStyle = "text-primary bg-secondary";

    return (
        <nav className="bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <NavLink to="/" className="flex-shrink-0">
                            <div className="flex items-center space-x-2">
                                <svg className="h-8 w-8 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                                </svg>
                                <span className="text-xl font-bold text-text-main">AI Host Hub</span>
                            </div>
                        </NavLink>
                    </div>
                    <div className="hidden md:block">
                        <NavLinks className="ml-10 flex items-baseline space-x-4" />
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-secondary inline-flex items-center justify-center p-2 rounded-md text-text-secondary hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <NavLink to="/" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>Home</NavLink>
                        <NavLink to="/blog" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>Blog</NavLink>
                        <NavLink to="/about" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>About Us</NavLink>
                        <NavLink to="/contact" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>Contact Us</NavLink>
                    </div>
                    <div className="pt-4 pb-3 border-t border-gray-700">
                        <div className="px-2 space-y-1">
                            <NavLink to="/privacy-policy" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>Privacy Policy</NavLink>
                            <NavLink to="/terms-and-conditions" onClick={() => setIsOpen(false)} className={({ isActive }) => isActive ? `${mobileLinkStyle} ${activeMobileLinkStyle}` : mobileLinkStyle}>Terms & Conditions</NavLink>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;