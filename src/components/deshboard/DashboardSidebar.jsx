"use client";
import React, { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    LayoutGrid,
    Building2,
    Briefcase,
    Layers,
    Settings,
    Menu,
    X
} from 'lucide-react';
import Image from 'next/image';

const DashboardSidebar = () => {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    // Mock User Data
    const user = {
        name: "Alex Sterling",
        role: "Recruiter",
        avatar: "", // আপনার ইমেজ সোর্স ফাঁকা থাকলে নিচের ফলব্যাক কন্টেন্ট কাজ করবে
        isPremium: true
    };

    // Sidebar navigation routes
    const navigationLinks = [
        { name: 'Dashboard', href: '/dashboard', icon: LayoutGrid },
        { name: 'My Company', href: '/dashboard/recruiter/company', icon: Building2 },
        { name: 'Manage Jobs', href: '/dashboard/manage-jobs', icon: Briefcase },
        { name: 'Applications', href: '/dashboard/applications', icon: Layers },
        { name: 'Settings', href: '/dashboard/settings', icon: Settings },
    ];

    return (
        <>
            {/* ১. মোবাইল স্ক্রিনের জন্য টপ বার ট্রিগার */}
            <div className="lg:hidden fixed top-0 left-0 w-full h-14 bg-[#0C0C0C] border-b border-neutral-900/60 flex items-center px-4 z-40">
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-2 text-neutral-400 hover:text-white transition-colors focus:outline-none"
                >
                    <Menu size={22} />
                </button>
                <span className="ml-2 font-bold text-sm tracking-tight text-white">HireLoop</span>
            </div>

            {/* ২. ডেক্সটপ স্ক্রিনের জন্য ফিক্সড সাইডবার */}
            <aside className="hidden lg:block w-[260px] h-screen sticky top-0 left-0 flex-shrink-0 bg-[#0C0C0C] text-neutral-400 flex flex-col border-r border-neutral-900/60 font-sans select-none">
                {/* Logo */}
                <div className="px-7 pt-9 pb-8">
                    <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                        HireLoop<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></span>
                    </h1>
                </div>

                {/* Profile */}
                <div className="px-7 mb-8">
                    <div className="flex items-center gap-3">
                        <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center">
                            {user.avatar ? (
                                <Image src={user.avatar} alt={user.name} fill className="object-cover grayscale-[10%]" />
                            ) : (
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">No Img</div>
                            )}
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-neutral-200 tracking-wide leading-tight">{user.name}</h3>
                            <p className="text-[11px] text-neutral-500 mt-0.5 font-normal">{user.role}</p>
                        </div>
                    </div>
                    {user.isPremium && (
                        <div className="mt-3 inline-flex items-center px-2 py-0.5 rounded border border-neutral-800 bg-neutral-900/40">
                            <span className="text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">PREMIUM ACCOUNT</span>
                        </div>
                    )}
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 space-y-[4px]">
                    {navigationLinks.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative flex items-center gap-3.5 h-12 px-7 text-xs font-medium transition-all duration-150 outline-none ${
                                    isActive ? 'bg-[#1C1C1C]/60 text-white font-semibold' : 'text-neutral-500 hover:text-neutral-200 hover:bg-[#121212]/30'
                                }`}
                            >
                                <Icon size={17} strokeWidth={isActive ? 2 : 1.75} className={`transition-colors duration-150 ${isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}`} />
                                <span className="tracking-wide">{item.name}</span>
                                {isActive && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-white rounded-l-sm" />}
                            </Link>
                        );
                    })}
                </nav>
            </aside>

            {/* ৩. মোবাইল ডিভাইসের জন্য পপ-আপ স্লাইডিং ড্রয়ার */}
            <div className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${isOpen ? 'visible' : 'invisible'}`}>
                {/* ব্যাকড্রপ শ্যাডো */}
                <div className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
                
                {/* স্লাইডিং মেনু বডি */}
                <div className={`absolute inset-y-0 left-0 w-[260px] bg-[#0C0C0C] text-neutral-400 flex flex-col border-r border-neutral-900/60 font-sans transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="px-7 pt-6 pb-8 flex items-center justify-between">
                        <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-1">
                            HireLoop<span className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2"></span>
                        </h1>
                        <button onClick={() => setIsOpen(false)} className="p-1 text-neutral-500 hover:text-white transition-colors">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="px-7 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-neutral-800 bg-neutral-900 flex items-center justify-center">
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-400">No Img</div>
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-neutral-200 tracking-wide leading-tight">{user.name}</h3>
                                <p className="text-[11px] text-neutral-500 mt-0.5 font-normal">{user.role}</p>
                            </div>
                        </div>
                    </div>

                    <nav className="flex-1 space-y-[4px]">
                        {navigationLinks.map((item) => {
                            const isActive = pathname === item.href;
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`group relative flex items-center gap-3.5 h-12 px-7 text-xs font-medium transition-all duration-150 ${
                                        isActive ? 'bg-[#1C1C1C]/60 text-white font-semibold' : 'text-neutral-500 hover:text-neutral-200 hover:bg-[#121212]/30'
                                    }`}
                                >
                                    <Icon size={17} strokeWidth={isActive ? 2 : 1.75} className={`transition-colors duration-150 ${isActive ? 'text-white' : 'text-neutral-600 group-hover:text-neutral-400'}`} />
                                    <span className="tracking-wide">{item.name}</span>
                                    {isActive && <div className="absolute right-0 top-0 bottom-0 w-[3px] bg-white rounded-l-sm" />}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default DashboardSidebar;