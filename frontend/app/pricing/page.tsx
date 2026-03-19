"use client";
import React from 'react';
import Navbar from '../../components/Navbar';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <div className="pt-40 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl font-black mb-6">Upgrade your Workflow</h1>
        <p className="text-slate-400 mb-12">Choose the plan that fits your needs.</p>
        
        <div className="p-10 border border-white/10 rounded-3xl bg-[#0f172a]">
            <h2 className="text-3xl font-bold mb-4">Pro Plan Coming Soon!</h2>
            <p className="text-slate-400 mb-8">We are currently in Beta. All features are free for a limited time.</p>
            <Link href="/dashboard">
                <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-full font-bold">Go to Dashboard</button>
            </Link>
        </div>
      </div>
    </div>
  );
}