import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full bg-black text-zinc-400 font-sans border-t border-zinc-900/50">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4">

                    {/* Left Branding Block */}
                    <div className="md:col-span-5 flex flex-col space-y-5">
                        <Link href="/" className="flex items-center gap-1 font-bold text-2xl tracking-tight">
                            <Image src={Logo} alt='HireLoop Logo' width={130} height={32}/>
                        </Link>
                        <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Right Link Categories Grid */}
                    <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        {/* Product Column */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-[#4f46e5] font-medium text-base tracking-wide">Product</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/jobs" className="hover:text-white transition-colors">Job discovery</Link></li>
                                <li><Link href="/worker-ai" className="hover:text-white transition-colors">Worker AI</Link></li>
                                <li><Link href="/companies" className="hover:text-white transition-colors">Companies</Link></li>
                                <li><Link href="/salary" className="hover:text-white transition-colors">Salary data</Link></li>
                            </ul>
                        </div>

                        {/* Navigations Column */}
                        <div className="flex flex-col space-y-4">
                            <h3 className="text-[#4f46e5] font-medium text-base tracking-wide">Navigations</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/help" className="hover:text-white transition-colors">Help center</Link></li>
                                <li><Link href="/library" className="hover:text-white transition-colors">Career library</Link></li>
                                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        {/* Resources Column */}
                        <div className="flex flex-col space-y-4 col-span-2 sm:col-span-1">
                            <h3 className="text-[#4f46e5] font-medium text-base tracking-wide">Resources</h3>
                            <ul className="space-y-3 text-sm text-zinc-400">
                                <li><Link href="/brand" className="hover:text-white transition-colors">Brand Guideline</Link></li>
                                <li><Link href="/news" className="hover:text-white transition-colors">Newsroom</Link></li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Divider Line */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="w-full h-[1px] bg-zinc-900" />
            </div>

            {/* Bottom Copyright & Social Section */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-8">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">

                    {/* Social Media Links */}
                    <div className="flex items-center gap-3">
                        {/* Facebook */}
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#121212] hover:bg-zinc-800 rounded-xl transition-colors text-white">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                            </svg>
                        </a>
                        {/* Pinterest */}
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#4f46e5] rounded-xl text-white shadow-[0_4px_12px_rgba(79,70,229,0.3)]">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.23 2.63 7.85 6.33 9.35-.09-.79-.17-2 .03-2.87l1.18-5s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.14-.83 3.33-.24 1.02.51 1.85 1.52 1.85 1.82 0 3.22-1.92 3.22-4.69 0-2.45-1.76-4.17-4.28-4.17-2.92 0-4.63 2.19-4.63 4.45 0 .88.34 1.83.76 2.33.08.1.1.19.07.29l-.29 1.19c-.05.18-.16.22-.36.13-1.34-.62-2.18-2.58-2.18-4.15 0-3.38 2.46-6.49 7.09-6.49 3.72 0 6.61 2.65 6.61 6.19 0 3.7-2.33 6.67-5.57 6.67-1.09 0-2.11-.56-2.46-1.24l-.67 2.56c-.24.93-.9 2.09-1.34 2.81 1 .31 2.06.48 3.16.48 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                            </svg>
                        </a>
                        {/* LinkedIn */}
                        <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#121212] hover:bg-zinc-800 rounded-xl transition-colors text-white">
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                    </div>

                    {/* Meta Links & Copyright */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-xs text-zinc-500">
                        <span>Copyright 2024 —Programming Hero</span>
                        <div className="hidden sm:block w-[1px] h-3 bg-zinc-800" />
                        <Link href="/terms" className="hover:text-zinc-300 transition-colors">
                            Terms & Policy - Privacy Guideline
                        </Link>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;