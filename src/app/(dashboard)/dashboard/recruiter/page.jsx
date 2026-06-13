"use client";
import { authClient } from '@/lib/auth-client';
import React from 'react';
import {
    FileText,
    Users,
    Zap,
    CheckCircle2,
    Plus
} from 'lucide-react';
import StatCard from '@/components/deshboard/StatCard';

const RecruiterHomePage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="text-neutral-400 font-medium animate-pulse text-sm">Loading dashboard...</div>
            </div>
        );
    }

    // Mock statistics and lists data matched with your pixel-perfect UI
    const stats = [
        { id: 1, title: 'Total Job Posts', value: '48', icon: FileText },
        { id: 2, title: 'Total Applicants', value: '1,284', icon: Users },
        { id: 3, title: 'Active Jobs', value: '18', icon: Zap },
        { id: 4, title: 'Jobs Closed', value: '32', icon: CheckCircle2 },
    ];

    const recentApplications = [
        { id: 1, name: 'Julianne Moore', role: 'Senior Product Designer', date: 'Oct 24, 2023', exp: '6 years', status: 'Interviewing', statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
        { id: 2, name: 'Robert Downey', role: 'Backend Engineer', date: 'Oct 23, 2023', exp: '4 years', status: 'New', statusColor: 'text-neutral-300 bg-neutral-800 border-neutral-700' },
        { id: 3, name: 'Emma Stone', role: 'Marketing Lead', date: 'Oct 22, 2023', exp: '8 years', status: 'Reviewing', statusColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
        { id: 4, name: 'Chris Pratt', role: 'Product Manager', date: 'Oct 21, 2023', exp: '5 years', status: 'Rejected', statusColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
    ];

    const topCompanies = [
        { id: 1, name: 'Google Inc.', meta: 'Technology • Mountain View', activeJobs: 24, logoLetter: 'G', logoBg: 'bg-blue-600/20 text-blue-400' },
        { id: 2, name: 'Meta Platforms', meta: 'Social Media • Menlo Park', activeJobs: 18, logoLetter: 'M', logoBg: 'bg-indigo-600/20 text-indigo-400' },
        { id: 3, name: 'Stripe', meta: 'Fintech • San Francisco', activeJobs: 12, logoLetter: 'S', logoBg: 'bg-purple-600/20 text-purple-400' },
        { id: 4, name: 'Tesla', meta: 'Automotive • Austin', activeJobs: 31, logoLetter: 'T', logoBg: 'bg-rose-600/20 text-rose-400' },
    ];

    return (
        <div className="space-y-10 text-white font-sans max-w-[1400px] mx-auto pb-16 relative">

            {/* Header Section */}
            <div>
                <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-100">
                    Welcome back, <span className="text-white">{user?.name || "Recruiter"}</span>
                </h1>
            </div>

            {/* 1. Top Statistics Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 p-6 bg-[#0C0C0C]">
                {stats.map((stat) => (
                    <StatCard
                        key={stat.id}
                        title={stat.title}
                        value={stat.value}
                        icon={stat.icon}
                    />
                ))}
            </div>

            {/* 2. Content Layout split into Tables & Lists */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Recent Applications Column (Takes 2 fractions on Desktop) */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium tracking-tight text-neutral-200">Recent Applications</h2>
                        <button className="text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">View all</button>
                    </div>

                    <div className="bg-[#161616] border border-neutral-900 rounded-xl overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="border-b border-neutral-900 text-neutral-500 text-[11px] font-medium uppercase tracking-wider">
                                        <th className="py-4 px-6">Candidate Name</th>
                                        <th className="py-4 px-3">Role</th>
                                        <th className="py-4 px-3">Date Applied</th>
                                        <th className="py-4 px-3">Experience</th>
                                        <th className="py-4 px-6 text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-900/60 text-xs">
                                    {recentApplications.map((candidate) => (
                                        <tr key={candidate.id} className="hover:bg-neutral-900/20 transition-colors group">
                                            <td className="py-4 px-6 font-medium text-neutral-200 flex items-center gap-3">
                                                <div className="w-7 h-7 rounded-full bg-neutral-800 border border-neutral-700/50 flex-shrink-0" />
                                                <span className="group-hover:text-white transition-colors">{candidate.name}</span>
                                            </td>
                                            <td className="py-4 px-3 text-neutral-400">{candidate.role}</td>
                                            <td className="py-4 px-3 text-neutral-500">{candidate.date}</td>
                                            <td className="py-4 px-3 text-neutral-400">{candidate.exp}</td>
                                            <td className="py-4 px-6 text-right">
                                                <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium border ${candidate.statusColor}`}>
                                                    {candidate.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* My Top Companies Column */}
                <div className="space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-medium tracking-tight text-neutral-200">My Top Companies</h2>
                        <button className="text-xs font-medium text-neutral-500 hover:text-neutral-300 transition-colors">View all</button>
                    </div>

                    <div className="bg-[#161616] border border-neutral-900 rounded-xl p-5 space-y-4">
                        <div className="divide-y divide-neutral-900/60">
                            {topCompanies.map((company) => (
                                <div key={company.id} className="flex items-center justify-between py-3.5 first:pt-0 last:pb-0 group">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-sm ${company.logoBg} border border-neutral-800/30`}>
                                            {company.logoLetter}
                                        </div>
                                        <div>
                                            <h4 className="text-xs font-semibold text-neutral-200 group-hover:text-white transition-colors">{company.name}</h4>
                                            <p className="text-[10px] text-neutral-500 mt-0.5">{company.meta}</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs font-bold text-neutral-200">{company.activeJobs}</p>
                                        <p className="text-[9px] text-neutral-500 font-medium uppercase tracking-wider mt-0.5">Active Jobs</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className="w-full h-10 mt-2 bg-neutral-900 border border-neutral-800/80 hover:bg-neutral-800/60 text-neutral-300 hover:text-white font-medium text-xs rounded-lg transition-all duration-150">
                            View All Companies
                        </button>
                    </div>
                </div>

            </div>

            {/* 3. Floating Action Button (+) */}
            <button className="fixed bottom-6 right-6 md:bottom-8 md:right-8 w-12 h-12 bg-white hover:bg-neutral-200 text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-all duration-200 z-30 focus:outline-none">
                <Plus size={22} strokeWidth={2.5} />
            </button>

        </div>
    );
};

export default RecruiterHomePage;