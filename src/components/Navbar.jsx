"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        // Fixed Outer Container wrapping the floating navbar centered
        <div className="fixed top-4 left-0 right-0 w-full z-50 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <nav className="bg-[#161616]/80 backdrop-blur-md border border-zinc-800/60 text-white rounded-2xl px-6 sm:px-8 transition-all duration-300 shadow-2xl">
                    <div className="flex items-center justify-between h-18">

                        {/* Left: Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className="flex items-center gap-1 font-bold text-2xl tracking-tight">
                                <Image src={Logo} alt='HireLoop Logo' width={130} height={32}/>
                            </Link>
                        </div>

                        {/* Right: Desktop Navigation Menu */}
                        <div className="hidden md:flex items-center gap-8">
                            {/* Primary Links */}
                            <div className="flex items-center gap-6 text-sm font-medium text-zinc-300">
                                <Link href="/browse-jobs" className="hover:text-white transition-colors duration-200">
                                    Browse Jobs
                                </Link>
                                <Link href="/company" className="hover:text-white transition-colors duration-200">
                                    Company
                                </Link>
                                <Link href="/pricing" className="hover:text-white transition-colors duration-200">
                                    Pricing
                                </Link>
                            </div>

                            {/* Divider Line */}
                            <span className="h-5 w-[1px] bg-zinc-600" aria-hidden="true"></span>

                            {/* Auth Buttons */}
                            <div className="flex items-center gap-6 text-sm font-medium">
                                <Link href="/auth/signup" className="text-[#6366f1] hover:text-[#4f46e5] transition-colors duration-200">
                                    Sign In
                                </Link>
                                <Link
                                    href="/get-started"
                                    className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white px-5 py-2.5 rounded-xl shadow-[0_4px_20px_rgba(99,102,241,0.35)] hover:opacity-95 transition-all duration-200 active:scale-98"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="inline-flex items-center justify-center p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 focus:outline-none transition-colors"
                                aria-controls="mobile-menu"
                                aria-expanded={isOpen}
                            >
                                <span className="sr-only">Open main menu</span>
                                {isOpen ? (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                    </div>
                </nav>

                {/* Mobile Menu Dropdown (Appears cleanly below the floating navbar container) */}
                <div
                    className={`md:hidden mt-2 transition-all duration-300 ease-in-out border border-zinc-800/80 bg-[#161616] rounded-2xl ${isOpen ? 'max-h-screen opacity-100 visible p-5' : 'max-h-0 opacity-0 invisible overflow-hidden h-0'
                        }`}
                    id="mobile-menu"
                >
                    <div className="space-y-3 text-base font-medium">
                        <Link href="/browse-jobs" className="block py-2 text-zinc-300 hover:text-white transition-colors">
                            Browse Jobs
                        </Link>
                        <Link href="/company" className="block py-2 text-zinc-300 hover:text-white transition-colors">
                            Company
                        </Link>
                        <Link href="/pricing" className="block py-2 text-zinc-300 hover:text-white transition-colors">
                            Pricing
                        </Link>

                        <div className="pt-4 border-t border-zinc-800 flex flex-col gap-3">
                            <Link href="/auth/signup" className="text-[#6366f1] py-2 text-center hover:text-[#4f46e5] transition-colors">
                                Sign In
                            </Link>
                            <Link
                                href="/get-started"
                                className="bg-gradient-to-r from-[#4f46e5] to-[#6366f1] text-white text-center py-3 rounded-xl shadow-[0_4px_15px_rgba(99,102,241,0.25)]"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;