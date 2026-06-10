import React from 'react';

const HomeSection = () => {
    return (
        <section className="relative w-full bg-black text-white  flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-50 pb-40">

            {/* Background Ambient Glows */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.12)_0%,transparent_60%)] pointer-events-none" />
            {/* <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-40 bg-[radial-gradient(circle_at_bottom,rgba(99,102,241,0.15)_0%,transparent_70%)] pointer-events-none" /> */}

            {/* Ambient Stars / Dots effect simulation */}
            {/* <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" /> */}

            {/* Inner Content Wrapper */}
            <div className="relative max-w-4xl mx-auto flex flex-col items-center text-center z-10">

                {/* 1. Top Stat Badge / Pill */}
                <div className="relative inline-flex items-center gap-2.5 bg-[#121212]/90 border border-zinc-800/80 rounded-full px-5 py-2.5 shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-sm mb-8 group transition-all duration-300">
                    {/* Subtle Glow Lines on sides */}
                    <span className="absolute -left-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-r from-transparent to-zinc-700" />
                    <span className="absolute -right-8 top-1/2 -translate-y-1/2 w-6 h-[1px] bg-gradient-to-l from-transparent to-zinc-700" />

                    {/* Briefcase Emoji / Icon */}
                    <span className="text-base">💼</span>

                    {/* Stat Text */}
                    <p className="text-xs sm:text-sm font-medium tracking-wide">
                        <span className="text-white font-bold font-mono">50,000+</span>{" "}
                        <span className="text-zinc-500 font-semibold tracking-wider text-[11px] sm:text-xs uppercase">
                            New Jobs This Month
                        </span>
                    </p>
                </div>

                {/* 2. Main Hero Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 max-w-3xl leading-[1.15]">
                    Find Your Dream Job Today
                </h1>

                {/* 3. Subtitle Description */}
                <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-normal max-w-2xl mb-12 leading-relaxed">
                    HireLoop connects top talent with world-class companies. Browse thousands of
                    curated opportunities and land your next role — faster.
                </p>

                {/* 4. Responsive Search Bar Input Container */}
                <div className="w-full max-w-3xl bg-[#111111]/95 border border-zinc-800/80 rounded-2xl md:rounded-full p-2 md:p-2.5 flex flex-col md:flex-row items-center gap-2 md:gap-4 shadow-[0_10px_50px_rgba(0,0,0,0.8)] backdrop-blur-md focus-within:border-zinc-700/80 transition-colors mb-8">

                    {/* Left Field: Job Title */}
                    <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0 md:pl-4 border-b border-zinc-800/60 md:border-b-0 md:flex-1">
                        <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Job title, skill or company"
                            className="w-full bg-transparent text-sm text-white placeholder-zinc-600 focus:outline-none"
                        />
                    </div>

                    {/* Divider for desktop */}
                    <span className="hidden md:block h-6 w-[1px] bg-zinc-800" aria-hidden="true" />

                    {/* Right Field: Location */}
                    <div className="w-full flex items-center gap-3 px-3 py-2 md:py-0 md:flex-1">
                        <svg className="w-5 h-5 text-zinc-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Location or Remote"
                            className="w-full bg-transparent text-sm text-white placeholder-zinc-600 focus:outline-none"
                        />
                    </div>

                    {/* Blue Search Button */}
                    <button
                        type="button"
                        className="w-full md:w-auto bg-[#4f46e5] hover:bg-[#5a52e6] text-white p-3.5 md:p-4 rounded-xl md:rounded-full flex items-center justify-center shrink-0 transition-all duration-200 shadow-[0_4px_20px_rgba(79,70,229,0.4)] active:scale-98"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                {/* 5. Trending Tags */}
                <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
                    <span className="text-zinc-500 font-medium mr-1">Trending Position</span>
                    <button className="bg-[#161616] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-4 py-1.5 rounded-full transition-colors">
                        Product Designer
                    </button>
                    <button className="bg-[#161616] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-4 py-1.5 rounded-full transition-colors">
                        AI Engineering
                    </button>
                    <button className="bg-[#161616] hover:bg-zinc-800 text-zinc-300 border border-zinc-800 px-4 py-1.5 rounded-full transition-colors">
                        Dev-ops Engineer
                    </button>
                </div>

            </div>
        </section>
    );
};

export default HomeSection;