import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="fixed w-full z-50 backdrop-blur-md bg-black/50 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0">
                        <span className="text-2xl font-bold text-gray-100">
                            FLUX<span className="text-blue-500">TX</span>
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            <Link to="/" className="text-gray-300 hover:text-blue-500 px-3 py-2 transition-all">
                                Home
                            </Link>
                            <Link to="/services" className="text-gray-300 hover:text-blue-500 px-3 py-2 transition-all">
                                Services
                            </Link>
                            <Link to="/about" className="text-gray-300 hover:text-blue-500 px-3 py-2 transition-all">
                                About
                            </Link>
                            <Link to="/contact" className="text-gray-300 hover:text-blue-500 px-3 py-2 transition-all">
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-blue-500 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/" onClick={closeMenu} className="text-gray-300 hover:text-blue-500 block px-3 py-2">
                                Home
                            </Link>
                            <Link to="/services" onClick={closeMenu} className="text-gray-300 hover:text-blue-500 block px-3 py-2">
                                Services
                            </Link>
                            <Link to="/about" onClick={closeMenu} className="text-gray-300 hover:text-blue-500 block px-3 py-2">
                                About
                            </Link>
                            <Link to="/contact" onClick={closeMenu} className="text-gray-300 hover:text-blue-500 block px-3 py-2">
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
