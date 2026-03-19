"use client";
import React from 'react';
import Navbar from '../../components/Navbar';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />
      <div className="pt-40 px-6 max-w-3xl mx-auto">
        <h1 className="text-5xl font-black mb-8">About Sketch2Code</h1>
        <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
                Sketch2Code was born from a simple idea: <strong>Design shouldn't be the bottleneck for development.</strong>
            </p>
            <p>
                We use advanced AI models (Gemini 1.5) to understand visual intent and translate it into semantic, clean code. 
                Whether you are a founder with a napkin sketch or a developer tired of writing CSS boilerplate, we are here to speed you up.
            </p>
            <p>
                Built with Next.js, Python, and ❤️.
            </p>
        </div>
      </div>
    </div>
  );
}