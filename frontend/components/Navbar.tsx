"use client";
import React from 'react';
import Link from "next/link";
import { useAuth } from "../app/context/AuthContext"; 
import { usePathname } from "next/navigation"; 
import { Sparkles, LogOut, LayoutDashboard } from "lucide-react";

export default function Navbar() {
  const { user, googleSignIn, logOut } = useAuth();
  const pathname = usePathname(); 

  // Hide Navbar on Dashboard so it doesn't overlap
  if (pathname === "/dashboard") return null;

  return (
    <nav className="fixed top-0 w-full z-50 glass border-b-0 border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
            <Sparkles className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Sketch2Code</span>
        </Link>

        {/* Links & Auth */}
        <div className="flex items-center gap-6">
          {user ? (
            <>
              <Link href="/dashboard">
                <button className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </button>
              </Link>
              <button onClick={logOut} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 text-sm font-bold text-white transition-all">
                <LogOut className="w-4 h-4" /> Sign Out
              </button>
            </>
          ) : (
            <div className="flex items-center gap-4">
               <Link href="/login" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">
                 Log In
               </Link>
               <button onClick={googleSignIn} className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)]">
                 Get Started
               </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}