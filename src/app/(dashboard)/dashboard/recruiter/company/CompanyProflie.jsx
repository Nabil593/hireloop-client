"use client";

import { createCompanies } from '@/lib/actions/companies';
// import { getUserSession } from '@/lib/actions/session';
import React, { useState } from 'react';

const RecruiterCompany = ({ recruiter, recruiterCompany }) => {




    // কোম্পানি ডেটা স্টেট (শুরুতে null থাকবে)
    const [company, setCompany] = useState(recruiterCompany || null);

    // Modal কন্ট্রোল এবং Edit মোড ট্র্যাকিং স্টেট
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    // Form inputs স্টেট (সবসময় একটি অবজেক্ট থাকবে যাতে null এরর না আসে)
    const [formData, setFormData] = useState({
        companyName: '',
        industry: 'Technology',
        websiteUrl: '',
        location: '',
        employeeCount: '1-10 employees',
        companyLogo: null,
        description: ''
    });

    // ইনপুট চেঞ্জ হ্যান্ডলার
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // লোগো আপলোড সিমুলেশন
    const handleLogoUpload = () => {
        setFormData((prev) => ({ ...prev, companyLogo: '🏢' }));
    };

    // ফর্ম সাবমিট
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isEditing && company) {
            // আপডেট করার সময় আগের status ঠিক রাখবে
            setCompany((prev) => ({
                ...prev,
                ...formData
            }));
        } else {
            // নতুন রেজিস্ট্রেশনের সময় ডিফল্ট স্ট্যাটাস হবে 'Pending'
            setCompany({
                ...formData,
                status: 'Pending',
                logoUrl: formData.companyLogo || '🏢'
            });
        }

        setIsOpen(false);
        setIsEditing(false);
        const payload = await createCompanies(formData);

        if (payload.insertedId) {
            alert('Company create successfully!');
        }
    };

    // এডিট বাটন ক্লিক হ্যান্ডলার (এখানে আমরা সেফলি চেক করছি কোম্পানি আছে কিনা)
    const handleEdit = () => {
        if (company) {
            setFormData({
                companyName: company.companyName || '',
                industry: company.industry || 'Technology',
                websiteUrl: company.websiteUrl || '',
                location: company.location || '',
                employeeCount: company.employeeCount || '1-10 employees',
                companyLogo: company.logoUrl || null,
                description: company.description || ''
            });
            setIsEditing(true);
            setIsOpen(true);
        }
    };

    // নতুন কোম্পানি অ্যাড করার সময় ফর্ম ক্লিন করার ফাংশন
    const handleOpenRegister = () => {
        setFormData({
            companyName: '',
            industry: 'Technology',
            websiteUrl: '',
            location: '',
            employeeCount: '1-10 employees',
            companyLogo: null,
            description: '',
            recruiterId: recruiter?.id || null,
        });
        setIsEditing(false);
        setIsOpen(true);
    };

    // স্ট্যাটাস ব্যাজের কালার
    const getStatusStyles = (status) => {
        switch (status) {
            case 'Approved':
                return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
            case 'Rejected':
                return 'bg-rose-500/10 text-rose-400 border-rose-500/20';
            default:
                return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
        }
    };

    return (
        <div className="min-h-screen bg-[#121212] text-white flex flex-col items-center justify-center p-6 relative font-sans">

            {/* ---------------------------------------------------- */}
            {/* ১. কোম্পানি না থাকলে প্রম্পট (Screenshot 2026-06-13 170340.png) */}
            {/* ---------------------------------------------------- */}
            {!company ? (
                <div className="text-center max-w-md mx-auto flex flex-col items-center animate-in fade-in duration-300">
                    <div className="relative mb-6">
                        <div className="w-40 h-40 bg-[#1e1e1e] border border-zinc-800 rounded-2xl flex flex-col p-4 opacity-60 justify-between shadow-inner">
                            <div className="w-8 h-8 bg-zinc-700 rounded-md"></div>
                            <div className="space-y-2">
                                <div className="w-full h-2 bg-zinc-700 rounded"></div>
                                <div className="w-3/4 h-2 bg-zinc-700 rounded"></div>
                            </div>
                            <div className="w-10 h-10 bg-zinc-800 rounded-full self-end flex items-center justify-center text-xs text-zinc-600">🏢</div>
                        </div>
                        <div className="absolute -top-3 -right-3 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-lg font-bold text-lg">
                            🏪⁺
                        </div>
                    </div>

                    <h1 className="text-2xl font-semibold mb-3 tracking-wide">Company not registered yet</h1>
                    <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                        Set up your business profile to start posting high-performance job listings and manage your talent loop.
                    </p>

                    <div className="flex items-center gap-4 w-full">
                        <button
                            onClick={handleOpenRegister}
                            className="flex-1 bg-white text-black font-medium py-3 px-6 rounded-lg hover:bg-zinc-200 transition-colors text-sm"
                        >
                            Register your company
                        </button>
                        <button className="flex-1 bg-[#1e1e1e] border border-zinc-800 text-zinc-300 font-medium py-3 px-6 rounded-lg hover:bg-zinc-800 transition-colors text-sm">
                            View FAQ
                        </button>
                    </div>
                </div>
            ) : (

                // ----------------------------------------------------
                // ২. কোম্পানি রেজিস্টার্ড থাকলে ডিটেইলস ভিউ প্রোফাইল
                // ----------------------------------------------------
                <div className="w-full max-w-3xl bg-[#18181b] border border-zinc-800 rounded-xl p-6 shadow-xl animate-in zoom-in-95 duration-300 space-y-6">

                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-zinc-800">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-zinc-800 rounded-xl border border-zinc-700 flex items-center justify-center text-3xl shadow-inner">
                                {company.logoUrl}
                            </div>
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-2xl font-bold text-zinc-100">{company.companyName}</h2>
                                    <span className={`text-xs px-2.5 py-0.5 rounded-full border font-medium ${getStatusStyles(company.status)}`}>
                                        {company.status}
                                    </span>
                                </div>
                                {company.websiteUrl && (
                                    <a href={`https://${company.websiteUrl}`} target="_blank" rel="noreferrer" className="text-xs text-blue-400 hover:underline block mt-0.5">
                                        {company.websiteUrl}
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center gap-2 self-end sm:self-center">
                            <button
                                onClick={handleEdit}
                                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 rounded-lg text-sm font-medium transition-colors"
                            >
                                ✏️ Edit Profile
                            </button>
                            <button
                                onClick={() => {
                                    const nextStatus = company.status === 'Pending' ? 'Approved' : company.status === 'Approved' ? 'Rejected' : 'Pending';
                                    setCompany(p => p ? { ...p, status: nextStatus } : null);
                                }}
                                className="px-2 py-2 bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-500 rounded hover:text-zinc-400"
                            >
                                ⚙️ Status Mock
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-[#222226]/50 p-4 rounded-xl border border-zinc-800/60">
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Industry / Category</p>
                            <p className="text-sm font-medium text-zinc-200 mt-1">🏢 {company.industry}</p>
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Location</p>
                            <p className="text-sm font-medium text-zinc-200 mt-1">📍 {company.location || 'Not Specified'}</p>
                        </div>
                        <div>
                            <p className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold">Employee Count</p>
                            <p className="text-sm font-medium text-zinc-200 mt-1">👥 {company.employeeCount}</p>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h3 className="text-sm font-semibold text-zinc-400">Brief Description</h3>
                        <p className="text-sm text-zinc-300 leading-relaxed bg-[#222226]/30 p-4 rounded-lg border border-zinc-800/40">
                            {company.description || "No description available for this business profile."}
                        </p>
                    </div>

                    <div className="pt-4 text-right">
                        <button onClick={() => setCompany(null)} className="text-xs text-zinc-600 hover:text-zinc-400 underline">
                            Remove Company (Reset State)
                        </button>
                    </div>
                </div>
            )}


            {/* ---------------------------------------------------- */}
            {/* ৩. মোডাল ফর্ম ভিউ (Screenshot 2026-06-13 170447.png) */}
            {/* ---------------------------------------------------- */}
            {isOpen && (
                <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
                    <div className="bg-[#18181b] border border-zinc-800 w-full max-w-2xl rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">

                        {/* Modal Header */}
                        <div className="p-6 border-b border-zinc-800 flex justify-between items-start">
                            <div>
                                <h2 className="text-xl font-semibold text-zinc-100">
                                    {isEditing ? 'Update Company Information' : 'Register New Company'}
                                </h2>
                                <p className="text-xs text-zinc-400 mt-1">
                                    {isEditing ? 'Modify your current business details below.' : 'Enter your business details to start hiring on HireLoop.'}
                                </p>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-zinc-400 hover:text-white transition-colors text-lg">✕</button>
                        </div>

                        {/* Modal Form Body */}
                        <form onSubmit={handleSubmit} className="p-6 space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Company Name</label>
                                    <input
                                        type="text"
                                        name="companyName"
                                        value={formData.companyName}
                                        onChange={handleChange}
                                        placeholder="e.g. Acme Corp"
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600"
                                        required
                                    />
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Industry / Category</label>
                                    <select
                                        name="industry"
                                        value={formData.industry}
                                        onChange={handleChange}
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600"
                                    >
                                        <option value="Technology">Technology</option>
                                        <option value="Design">Design</option>
                                        <option value="Marketing">Marketing</option>
                                        <option value="Finance">Finance</option>
                                    </select>
                                </div>
                            </div>

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
                                            className="w-full bg-transparent px-3 py-2.5 text-sm text-zinc-200 focus:outline-none"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-1.5">
                                    <label className="text-xs font-medium text-zinc-300">Location</label>
                                    <input
                                        type="text"
                                        name="location"
                                        value={formData.location}
                                        onChange={handleChange}
                                        placeholder="City, Country"
                                        className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600"
                                    />
                                </div>
                            </div>

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
                                    <div onClick={handleLogoUpload} className="flex items-center gap-3 border border-dashed border-zinc-800 bg-[#222226]/50 rounded-lg p-2.5 cursor-pointer hover:bg-[#222226] transition-colors">
                                        <div className="w-9 h-9 bg-zinc-800 rounded flex items-center justify-center text-zinc-400 text-sm">
                                            {formData.companyLogo || '📤'}
                                        </div>
                                        <div>
                                            <p className="text-xs font-medium text-zinc-300">{formData.companyLogo ? 'Logo Selected' : 'Upload image'}</p>
                                            <p className="text-[10px] text-zinc-500">PNG, JPG up to 5MB</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-xs font-medium text-zinc-300">Brief Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="4"
                                    placeholder="Tell us about your company's mission and culture..."
                                    className="w-full bg-[#222226] border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 focus:outline-none focus:border-zinc-600 resize-none"
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
                                    {isEditing ? 'Save Changes' : 'Register Company'}
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