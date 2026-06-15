"use client";
import React, { useState, useEffect } from 'react';
import { Eye, Edit3, Trash2, MapPin, DollarSign } from 'lucide-react';
import { useRouter } from 'next/navigation';

const JobsListTable = ({ Jobs}) => {
    console.log(initialJobs)
    const router = useRouter();

    // সেফটি গার্ড: নিশ্চিত হয়ে নেওয়া হচ্ছে ইনিশিয়াল ডাটা যেন সবসময় অ্যারে হয়
    const [jobs, setJobs] = useState(() => Array.isArray(initialJobs) ? initialJobs : []);

    // সার্ভার থেকে নতুন ডাটা আসলে স্টেট সিঙ্ক করা
    useEffect(() => {
        if (Array.isArray(initialJobs)) {
            setJobs(initialJobs);
        }
    }, [initialJobs]);

    const handleView = (jobId) => {
        if (jobId) router.push(`/jobs/${jobId}`);
    };

    const handleUpdate = (jobId) => {
        if (jobId) router.push(`/dashboard/recruiter/edit-job/${jobId}`);
    };

    const handleDelete = async (jobId) => {
        if (!jobId) return;
        if (confirm("Are you sure you want to delete this job post?")) {
            try {
                setJobs(prevJobs => prevJobs.filter(job => job && (job._id || job.id) !== jobId));
                alert("Job deleted successfully!");
            } catch (error) {
                console.error("Failed to delete job:", error);
            }
        }
    };

    // ১. প্রথম সেফটি গার্ড: যদি স্টেট খালি থাকে বা অ্যারে না হয়, তবে পুরো টেবিল রেন্ডার না করে সুন্দর মেসেজ দেখাবে
    if (!jobs || jobs.length === 0) {
        return (
            <div className="bg-[#161616] border border-neutral-900 rounded-xl p-12 text-center">
                <p className="text-sm text-neutral-500">No active jobs found in component state.</p>
            </div>
        );
    }

    return (
        <div className="w-full bg-[#161616] border border-neutral-900 rounded-xl overflow-hidden shadow-xl">
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="border-b border-neutral-900 bg-neutral-950/40">
                            <th className="p-4 text-xs font-semibold text-neutral-400 tracking-wider">Job Details</th>
                            <th className="p-4 text-xs font-semibold text-neutral-400 tracking-wider">Type & Location</th>
                            <th className="p-4 text-xs font-semibold text-neutral-400 tracking-wider">Salary (Monthly)</th>
                            <th className="p-4 text-xs font-semibold text-neutral-400 tracking-wider text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-900/60">
                        {jobs.map((job, index) => {
                            // ২. রানটাইম ক্র্যাশ গার্ড: কোনো জব অবজেক্ট যদি ফাঁকা বা ডিফেক্টিভ হয়, তবে কোড ক্র্যাশ না করে স্কিপ করবে
                            if (!job) return null;

                            const currentJobId = job._id || job.id || `fallback-id-${index}`;

                            return (
                                <tr key={currentJobId} className="hover:bg-neutral-900/20 transition-all duration-150">

                                    {/* Job Title & Category */}
                                    <td className="p-4">
                                        <div className="space-y-1">
                                            <h4 className="text-xs font-medium text-white hover:text-neutral-300 transition-colors cursor-pointer">
                                                {job.jobTitle || job.title || "Untitled Position"}
                                            </h4>
                                            <span className="inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-neutral-400">
                                                {job.category || "General"}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Workplace Type & Location */}
                                    <td className="p-4">
                                        <div className="space-y-1 text-xs text-neutral-400">
                                            <div className="flex items-center gap-1.5">
                                                <span className="capitalize text-white font-medium text-[11px] px-1.5 py-0.5 rounded bg-neutral-800/60">
                                                    {job.workplaceType || job.jobType || "Full-time"}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] text-neutral-500">
                                                <MapPin size={12} />
                                                {job.location || "Remote"}
                                            </div>
                                        </div>
                                    </td>

                                    {/* Salary Range */}
                                    <td className="p-4">
                                        <div className="flex items-center text-xs text-neutral-300 font-mono">
                                            <DollarSign size={13} className="text-neutral-500" />
                                            <span>{job.salary || "Negotiable"}</span>
                                        </div>
                                    </td>

                                    {/* Quick Action Buttons */}
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2">
                                            <button
                                                onClick={() => handleView(currentJobId)}
                                                title="View Details"
                                                className="p-2 text-neutral-400 hover:text-white bg-[#222222]/30 hover:bg-[#222222]/80 border border-neutral-800/80 rounded-lg transition-all"
                                            >
                                                <Eye size={14} />
                                            </button>

                                            <button
                                                onClick={() => handleUpdate(currentJobId)}
                                                title="Edit Job"
                                                className="p-2 text-neutral-400 hover:text-amber-400 bg-[#222222]/30 hover:bg-amber-500/10 border border-neutral-800/80 rounded-lg transition-all"
                                            >
                                                <Edit3 size={14} />
                                            </button>

                                            <button
                                                onClick={() => handleDelete(currentJobId)}
                                                title="Delete Job"
                                                className="p-2 text-neutral-500 hover:text-red-400 bg-[#222222]/30 hover:bg-red-500/10 border border-neutral-800/80 rounded-lg transition-all"
                                            >
                                                <Trash2 size={14} />
                                            </button>
                                        </div>
                                    </td>

                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default JobsListTable;