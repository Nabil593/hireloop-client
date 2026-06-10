import React from 'react';
import BacgroundImage from '@/assets/globe.png';

const StatSection = () => {
    // Stats cards array for cleaner code management
    const statsData = [
        {
            id: 1,
            value: "50K",
            label: "Active Jobs",
            icon: (
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 .621-.504 1.125-1.125 1.125H4.875c-.621 0-1.125-.504-1.125-1.125v-4.25m16.5 0a2.25 2.25 0 00-1.875-2.217m-12.75 0a2.25 2.25 0 00-1.875 2.217m16.5 0c.241-.04.482-.084.722-.132A1.125 1.125 0 0021 12.872V6.75a1.125 1.125 0 00-1.125-1.125H5.125A1.125 1.125 0 004 6.75v6.122c0 .539.381 1.002.903 1.106a46.46 46.46 0 00.722.132m12.75 0a48.667 48.667 0 00-12.75 0M8.25 9.75h7.5" />
                </svg>
            )
        },
        {
            id: 2,
            value: "12K",
            label: "Companies",
            icon: (
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h18" />
                </svg>
            )
        },
        {
            id: 3,
            value: "2M",
            label: "Job Seekers",
            icon: (
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            )
        },
        {
            id: 4,
            value: "97%",
            label: "Satisfaction Rate",
            icon: (
                <svg className="w-5 h-5 text-zinc-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499c.151-.316.604-.316.754 0l1.98 4.015 4.425.642c.35.051.49.483.236.73L15.66 12.04l.76 4.407c.06.347-.306.613-.616.45L12 14.845l-3.961 2.082c-.31.163-.67-.103-.61-.45l.76-4.407-3.185-3.103c-.246-.24-.106-.673.236-.73l4.425-.641 1.98-4.015z" />
                </svg>
            )
        }
    ];

    return (
        <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

            <div className='absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90'
                style={{ backgroundImage: `url(${BacgroundImage.src})` }}
            />

            {/* Top Typography Header */}
            <div className="max-w-3xl mx-auto text-center mb-16 relative z-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-zinc-300 leading-snug">
                    Assisting over{" "}
                    <span className="text-white font-semibold underline decoration-[#4f46e5] decoration-2 underline-offset-4">
                        15,000 job seekers
                    </span>{" "}
                    <br className="hidden sm:inline" />
                    find their dream positions.
                </h2>
            </div>

            {/* Responsive Stats Cards Grid */}
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {statsData.map((stat) => (
                        <div
                            key={stat.id}
                            className="bg-[#0d0d0d] border border-zinc-900/80 rounded-2xl p-7 flex flex-col justify-between min-h-[190px] shadow-[0_4px_30px_rgba(0,0,0,0.4)] hover:border-zinc-800 transition-all duration-300 group"
                        >
                            {/* Icon Top Row */}
                            <div className="w-9 h-9 rounded-xl bg-zinc-900/50 border border-zinc-800/40 flex items-center justify-center group-hover:bg-zinc-900 transition-colors">
                                {stat.icon}
                            </div>

                            {/* Stat Numbers & Label Bottom Area */}
                            <div className="mt-8 space-y-1">
                                <span className="block text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
                                    {stat.value}
                                </span>
                                <span className="block text-xs md:text-sm text-zinc-500 font-medium tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Ambient Background Radial Blur Effect Layer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-64 bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.06)_0%,transparent_70%)] pointer-events-none" />
        </section>
    );
};

export default StatSection;