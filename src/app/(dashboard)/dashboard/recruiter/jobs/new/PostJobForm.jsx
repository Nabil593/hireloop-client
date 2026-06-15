"use client";
import React, { useState } from 'react';
import { X, MapPin, ChevronDown, DollarSign } from 'lucide-react';
import { createJob } from '@/lib/actions/job';
import { redirect } from 'next/navigation';

const PostJobForm = ({ company }) => {

    console.log(company)


    // ১. ফর্মের সব ইনপুটের জন্য একটি সিঙ্গেল স্টেট অবজেক্ট
    const [formData, setFormData] = useState({
        jobTitle: '',
        category: '',
        workplaceType: 'remote', // ডিফল্ট ভ্যালু
        location: '',
        salary: '',
        experience: 'entry', // ডিফল্ট ভ্যালু
        description: ''
    });

    // ২. ইনপুট চেঞ্জ হ্যান্ডলার (টাইপ করার সাথে সাথে স্টেট আপডেট হবে)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // ৩. ফর্ম সাবমিট হ্যান্ডলার (কনসোল এবং ডেটাবেজে পাঠানোর লজিক)
    const handleSubmit = async (e) => {
        e.preventDefault(); // পেজ রিফ্রেশ হওয়া বন্ধ করবে

        // ক) কনসোলে ডেটা দেখা যাবে
        console.log("Submitting Job Data:", formData);

        // খ) ডেটাবেজে পাঠানোর অংশ (API Call)
        try {

            const res = await createJob(formData);

            if(res.insertedId) {
                alert('Job published successfully1!');
                redirect('/dashboard/recruiter');
            }

            setFormData({
                jobTitle: '',
                category: '',
                workplaceType: 'remote',
                location: '',
                salary: '',
                experience: 'entry',
                description: ''
            });


        } catch (error) {
            console.error('Error connecting to server/database:', error);
        }
    };

    return (
        <div className="min-h-screen bg-[#0C0C0C] flex items-center justify-center p-4 antialiased selection:bg-neutral-800">
            <div className="w-full max-w-[640px] bg-[#161616] border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">

                {/* Header Section */}
                <div className="px-8 pt-8 pb-6 flex items-center justify-between border-b border-neutral-900/60">
                    <div>
                        <h2 className="text-xl font-semibold text-white tracking-tight">Post a New Job</h2>
                        <p className="text-xs text-neutral-500 mt-1">Enter the position details to start receiving applications on HireLoop.</p>
                    </div>
                    <button type="button" className="p-1.5 text-neutral-500 hover:text-white rounded-lg hover:bg-neutral-900/50 transition-all duration-150">
                        <X size={18} />
                    </button>
                </div>

                {/* Form Content - onSubmit হ্যান্ডলার যুক্ত করা হয়েছে */}
                <form onSubmit={handleSubmit} className="p-8 space-y-6">

                    {/* Row 1: Job Title & Job Category */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Job Title</label>
                            <input
                                type="text"
                                name="jobTitle"
                                value={formData.jobTitle}
                                onChange={handleChange}
                                placeholder="e.g. Senior Software Engineer"
                                required
                                className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg px-4 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 transition-all duration-150"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Job Category</label>
                            <div className="relative">
                                <select
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    required
                                    className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg px-4 text-xs text-neutral-400 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 appearance-none transition-all duration-150 cursor-pointer"
                                >
                                    <option value="">Select Category</option>
                                    <option value="development">Development / Engineering</option>
                                    <option value="design">Design / Creative</option>
                                    <option value="marketing">Marketing / Growth</option>
                                    <option value="management">Product Management</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Row 2: Workplace Type & Location */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Workplace Type</label>
                            <div className="relative">
                                <select
                                    name="workplaceType"
                                    value={formData.workplaceType}
                                    onChange={handleChange}
                                    className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg px-4 text-xs text-neutral-400 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 appearance-none transition-all duration-150 cursor-pointer"
                                >
                                    <option value="remote">Remote</option>
                                    <option value="hybrid">Hybrid</option>
                                    <option value="onsite">On-site</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Location</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    placeholder="City, Country"
                                    required
                                    className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg pl-10 pr-4 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 transition-all duration-150"
                                />
                                <MapPin size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                            </div>
                        </div>
                    </div>

                    {/* Row 3: Salary Range & Experience Level */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Salary Range (Monthly)</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    name="salary"
                                    value={formData.salary}
                                    onChange={handleChange}
                                    placeholder="e.g. $2,000 - $3,500"
                                    required
                                    className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg pl-10 pr-4 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 transition-all duration-150"
                                />
                                <DollarSign size={14} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-600" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-medium text-neutral-300 tracking-wide">Experience Level</label>
                            <div className="relative">
                                <select
                                    name="experience"
                                    value={formData.experience}
                                    onChange={handleChange}
                                    className="w-full h-11 bg-[#222222]/30 border border-neutral-800/80 rounded-lg px-4 text-xs text-neutral-400 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 appearance-none transition-all duration-150 cursor-pointer"
                                >
                                    <option value="entry">Entry Level</option>
                                    <option value="mid">Mid Level</option>
                                    <option value="senior">Senior Level</option>
                                    <option value="lead">Lead / Expert</option>
                                </select>
                                <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none" />
                            </div>
                        </div>
                    </div>

                    {/* Row 4: Job Description Textarea */}
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-neutral-300 tracking-wide">Job Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows={4}
                            placeholder="Describe the roles, responsibilities, and technical requirements..."
                            required
                            className="w-full bg-[#222222]/30 border border-neutral-800/80 rounded-lg p-4 text-xs text-neutral-200 placeholder-neutral-600 focus:outline-none focus:border-neutral-700 focus:bg-[#222222]/50 transition-all duration-150 resize-none leading-relaxed"
                        />
                    </div>

                    {/* Footer Action Buttons Section */}
                    <div className="pt-2 border-t border-neutral-900/80 flex items-center justify-end gap-3">
                        <button
                            type="button"
                            className="h-10 px-5 bg-transparent border border-neutral-800 hover:bg-neutral-900 text-neutral-300 hover:text-white font-medium text-xs rounded-lg transition-all duration-150"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="h-10 px-5 bg-white hover:bg-neutral-200 text-black font-semibold text-xs rounded-lg shadow-sm transition-all duration-150"
                        >
                            Publish Job
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default PostJobForm;