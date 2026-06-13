"use client";
import React, { useState } from 'react';

const RecruiterCompany = () => {
    // কোম্পানি অলরেডি রেজিস্টার্ড আছে কি না তা ট্র্যাক করার স্টেট (Default: false)
    const [hasCompany, setHasCompany] = useState(false);

    // Modal open/close state
    const [isOpen, setIsOpen] = useState(false);

    // Form data state
    const [formData, setFormData] = useState({
        companyName: '',
        industry: 'Technology',
        websiteUrl: '',
        location: '',
        employeeCount: '1-10 employees',
        companyLogo: null,
        description: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Registered Company Data:", formData);

        // কোম্পানি সাকসেসফুলি রেজিস্টার্ড হলে স্টেট আপডেট হবে
        setHasCompany(true);
        setIsOpen(false); // মোডাল বন্ধ হবে
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-4 relative font-sans">

            {/* ---------------------------------------------------- */}
            {/* CONDITION 1: যদি কোম্পানি না থাকে (Default View) */}
            {/* ---------------------------------------------------- */}
            {!hasCompany ? (
                /* Screenshot 2026-06-13 170340.png এর UI */
                <div className="text-center max-w-md mx-auto flex flex-col items-center animate-in fade-in duration-300">
                    {/* Illustration Wrapper */}
                    <div className="relative mb-6">
                        <div className="w-40 h-40 bg-[#1e1e1e] border border-zinc-800 rounded-2xl flex flex-col p-4 opacity-60 justify-between shadow-inner">
                            <div className="w-8 h-8 bg-zinc-700 rounded-md"></div>
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-zinc-700 rounded"></div>
                                <div className="w-3/4 h-2 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="w-10 h-10 bg-zinc-800 rounded-full self-end flex items-center justify-center text-xs text-zinc-600">🏢</div>
                        </div>
                        {/* Floating Plus Icon */}
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg font-bold text-lg">
                            🏪⁺
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold mb-3 tracking-wide">Company not registered yet</h1>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        Set up your business profile to start posting high-performance job listings and manage your talent loop.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4 w-full">
                        <button
                            onClick={() => setIsOpen(true)}
                            className="flex-1 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors text-sm"
                        >
                            Register your company
                        </button>
                        <button className="flex-1 bg-[#1e1e1e] border border-zinc-800 text-zinc-300 font-medium py-3 px-6 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
                            View FAQ
                        </button>
                    </div>

                    <p className="text-xs text-zinc-600 mt-16">
                        Need specialized assistance? <span className="underline cursor-pointer hover:text-zinc-400">Contact our enterprise support team.</span>
                    </p>
                </div>
            ) : (
                // ----------------------------------------------------
                // CONDITION 2: কোম্পানি অ্যাড হয়ে গেলে যা দেখাবে
                // ----------------------------------------------------
                <div className="text-center p-8 bg-[#18181b] border border-zinc-800 rounded-xl max-w-xl w-full animate-in zoom-in-95 duration-300">
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center text-2xl mx-auto mb-4">
                        ✓
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{formData.companyName}</h2>
                    <p className="text-zinc-400 text-sm mb-4">📍 {formData.location} | 🏢 {formData.industry}</p>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto mb-6 bg-[#222226] p-4 rounded-lg border border-zinc-800">
                        {formData.description || "No description provided."}
                    </p>
                    <div className="flex justify-center gap-4">
                        <button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md text-sm transition-all">
                            Edit Profile
                        </button>
                        <button
                            onClick={() => setHasCompany(false)}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 px-4 py-2 rounded-md text-sm transition-all"
                        >
                            Reset Demo State
                        </button>
                    </div>
                </div>
            )}


            {/* ---------------------------------------------------- */}
            {/* MODAL VIEW (Screenshot 2026-06-13 170447.png) */}
            {/* ---------------------------------------------------- */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-[#18181b] border border-zinc-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden dynamic-modal animate-in fade-in zoom-in-95 duration-200">

                        {/* Modal Header */}
                        <div className="p-6 border-b border-zinc-800 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-zinc-100">Register New Company</h2>
                                <p className="text-xs text-zinc-400 mt-1">Enter your business details to start hiring on HireLoop.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-zinc-400 hover:text-white transition-colors text-lg"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Modal Form Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">

                            {/* Row 1: Name and Industry */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="e.g. Acme Corp"
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Industry / Category</label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 appearance-none"
                                    >
                                        <option value="Technology">Technology</option>
                                        <option value="Design">Design</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                </div>
                            </div>

                            {/* Row 2: Website and Location */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Website URL</label>
                                    <div className="flex rounded-lg overflow-hidden border border-zinc-800 bg-[#222226]">
                                        <span className="bg-zinc-800 text-zinc-500 px-3 py-2.5 text-xs flex items-center border-r border-zinc-800">https://</span>
                                        <input
                                            type="text"
                                            name="websiteUrl"
                                            value={formData.websiteUrl}
                                            onChange={handleChange}
                                            placeholder="www.company.com"
                                            className="w-full bg-transparent px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Location</label>
                                    <div className="relative">
                                        <span className="absolute left-3 top-3.5 text-zinc-500 text-xs">📍</span>
                                        <input
                                            type="text"
                                            name="location"
                                            value={formData.location}
                                            onChange={handleChange}
                                            placeholder="City, Country"
                                            className="w-full bg-[#222226] border border-zinc-800 rounded-lg pl-8 pr-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Row 3: Employee Count and Logo */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Employee Count Range</label>
                                    <select
                                        name="employeeCount"
                                        value={formData.employeeCount}
                                        onChange={handleChange}
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600"
                                    >
                                        <option value="1-10 employees">1-10 employees</option>
                                        <option value="11-50 employees">11-50 employees</option>
                                        <option value="51-200 employees">51-200 employees</option>
                                        <option value="201+ employees">201+ employees</option>
                                    </select>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Company Logo</label>
                                    <div className="flex items-center gap-3 border border-dashed border-zinc-800 bg-[#222226]/50 rounded-lg p-2.5 cursor-pointer hover:bg-[#222226] transition-colors">
                                        <div className="w-9 h-9 bg-zinc-800 rounded flex items-center justify-center text-zinc-400 text-sm">
                                            📤
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-zinc-300">Upload image</p>
                                            <p className="text-[10px] text-zinc-500">PNG, JPG up to 5MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Row 4: Description */}
                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-300">Brief Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your company's mission and culture..."
                                    className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-zinc-600 resize-none"
                                ></textarea>
                            </div>

                            {/* Modal Footer Buttons */}
                            <div className="flex justify-end items-center gap-3 pt-4 border-t border-zinc-800">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-5 py-2.5 rounded-lg border border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-5 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-zinc-200 transition-colors"
                                >
                                    Register Company
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RecruiterCompany;