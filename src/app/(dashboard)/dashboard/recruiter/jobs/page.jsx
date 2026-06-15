import { getJobs } from '@/lib/api/jobs';
import React from 'react';
import JobsListTable from '@/components/deshboard/JobsListTable';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';

export const revalidate = 0;
export const dynamic = 'force-dynamic';

const RecruiterJobs = async () => {
    // ১. প্রথমে লগইন থাকা কোম্পানির ডাটা আনা হচ্ছে
    const companyData = await getLoggedInRecruiterCompany();

    console.log("Company API Response:", companyData);

    // 💡 ট্র্যাপ ফিক্স: যদি রেসপন্সটি একটি অ্যারে হয়, তবে তার প্রথম এলিমেন্টটি নেবো
    const company = Array.isArray(companyData) ? companyData[0] : companyData;

    // সেফটি চেক: যদি কোনো কোম্পানিই না পাওয়া যায়
    if (!company || !company._id) {
        return (
            <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center text-white">
                <p className="text-sm text-neutral-500">No company profile found. Please create one first.</p>
            </div>
        );
    }

    // ২. সঠিক কোম্পানির আইডি পাস করে জবের ডাটা আনা হচ্ছে
    const jobs = await getJobs(company._id) || [];

    console.log("Fetched Jobs for Table:", jobs);

    return (
        <div className="min-h-screen bg-[#0C0C0C] p-6 sm:p-8 antialiased selection:bg-neutral-800 text-white">
            <div className="max-w-6xl mx-auto space-y-6">

                {/* Header Area */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-5 border-b border-neutral-900">
                    <div>
                        <h2 className="text-xl font-semibold tracking-tight">Manage Current Jobs</h2>
                        <p className="text-xs text-neutral-500 mt-1">
                            Monitor, update details, or change the status of your active job posts.
                        </p>
                    </div>
                    <div className="bg-[#161616] border border-neutral-900 rounded-lg px-4 py-2 text-xs">
                        Total Openings: <span className="font-semibold text-white ml-1">{Array.isArray(jobs) ? jobs.length : 0}</span>
                    </div>
                </div>

                {/* Jobs Management List/Table */}
                {!Array.isArray(jobs) || jobs.length === 0 ? (
                    <div className="bg-[#161616] border border-neutral-900 rounded-xl p-12 text-center">
                        <p className="text-sm text-neutral-500">No jobs posted yet.</p>
                    </div>
                ) : (
                    <JobsListTable Jobs={jobs} />
                )}

            </div>
        </div>
    );
};

export default RecruiterJobs;