"use client";
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const SignInPage = () => {
    const router = useRouter();
    // পাসওয়ার্ড ভিজিবিলিটি ট্রগল করার জন্য স্টেট
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const handleSignIn = async (data) => {
        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email,
            password: password,
            // সফলভাবে লগইন হলে ইউজারকে কোন পেজে নিবেন সেটা এখানে সেট করতে পারেন (যেমন: ড্যাশবোর্ড বা হোমপেজ)
            // callbackURL: "/dashboard", 
        });

        if (error) {
            toast.error(error.message);
        } else {
            toast.success("Logged in successfully!");
            router.push("/"); // আপনার হোম বা ড্যাশবোর্ড রুটে রিডাইরেক্ট করুন
        }
    };

    return (
        <div className="py-30 bg-[#030303] text-gray-200 flex items-center justify-center relative overflow-hidden font-sans selection:bg-indigo-500 selection:text-white min-h-screen">
            {/* Top Gradient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-gradient-to-b from-indigo-900/20 to-transparent blur-[120px] pointer-events-none" />

            {/* Bottom Globe-like Glow */}
            <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-950/15 rounded-full blur-[160px] pointer-events-none border-t border-indigo-500/10" />

            <div className="w-full max-w-[440px] mx-4 z-10">
                {/* Logo & Header */}
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-semibold tracking-tight text-white mb-1">
                        Welcome back
                    </h2>
                    <p className="text-xs text-gray-500">
                        Welcome back! Please enter your details.
                    </p>
                </div>

                {/* Card Container */}
                <div className="bg-[#0A0A0A]/80 backdrop-blur-md border border-neutral-900 rounded-xl p-8 shadow-2xl shadow-black/50">

                    {/* Form Layout */}
                    <form onSubmit={handleSubmit(handleSignIn)} className="space-y-4">
                        <div>
                            <label className="block text-[11px] font-medium text-neutral-400 mb-1.5 tracking-wide uppercase">
                                Email Address
                            </label>
                            <input
                                type="email"
                                placeholder="name@domain.com"
                                {...register("email", { required: "Email field is required" })}
                                className="w-full bg-[#121212] border border-neutral-900 focus:border-indigo-500/50 text-sm text-white h-11 px-4 rounded-lg outline-none transition-all placeholder:text-neutral-700 focus:ring-1 focus:ring-indigo-500/20"
                                required
                            />
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-1.5">
                                <label className="block text-[11px] font-medium text-neutral-400 tracking-wide uppercase">
                                    Password
                                </label>
                                <a href="#forgot" className="text-[11px] text-neutral-500 hover:text-indigo-400 transition-colors">
                                    Forgot password?
                                </a>
                            </div>

                            {/* Wrapper container for absolute button alignment */}
                            <div className="relative flex items-center">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    {...register("password", { required: "Password field is required" })}
                                    className="w-full bg-[#121212] border border-neutral-900 focus:border-indigo-500/50 text-sm text-white h-11 pl-4 pr-11 rounded-lg outline-none transition-all placeholder:text-neutral-700 focus:ring-1 focus:ring-indigo-500/20"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 p-1 rounded text-neutral-500 hover:text-neutral-300 focus:outline-none transition-colors"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        /* Eye Off Icon */
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M9.88 9.88a3 3 0 1 0 4.24 4.24" />
                                            <path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" />
                                            <path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" />
                                            <line x1="2" x2="22" y1="2" y2="22" />
                                        </svg>
                                    ) : (
                                        /* Eye Icon */
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                            <circle cx="12" cy="12" r="3" />
                                        </svg>
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-xs font-semibold text-white h-11 rounded-lg transition-all duration-200 shadow-lg shadow-indigo-600/10 mt-4 active:scale-[0.99]"
                        >
                            Sign In
                        </button>
                    </form>

                    <div className="flex items-center my-6">
                        <div className="flex-1 border-t border-neutral-900"></div>
                        <span className="px-3 text-[10px] uppercase tracking-widest text-neutral-600">or continue with</span>
                        <div className="flex-1 border-t border-neutral-900"></div>
                    </div>

                    {/* Social Authentication */}
                    <button type="button" className="w-full flex items-center justify-center gap-2.5 bg-[#121212] hover:bg-[#161616] border border-neutral-800 hover:border-neutral-700 text-xs font-medium text-white h-11 px-4 rounded-lg transition-all duration-200 active:scale-[0.99]">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                                fill="#4285F4"
                            />
                            <path
                                fill="currentColor"
                                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                                fill="#34A853"
                            />
                            <path
                                fill="currentColor"
                                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                                fill="#FBBC05"
                            />
                            <path
                                fill="currentColor"
                                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                                fill="#EA4335"
                            />
                        </svg>
                        Sign in with Google
                    </button>
                </div>

                {/* Footer Link */}
                <p className="text-center text-xs text-neutral-500 mt-6">
                    Don't have an account?{' '}
                    <a href="/signup" className="text-white hover:text-indigo-400 font-medium transition-colors">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignInPage;