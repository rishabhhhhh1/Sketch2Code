"use client";
import React, { useState } from 'react';
import Link from "next/link";
// Removed Navbar import from here to prevent the "double navbar" error
import { 
    ArrowRight, Zap, Code, Layers, Play, Edit3, 
    CheckCircle2, Star, Quote, HelpCircle, 
    MessageSquare, UploadCloud, Cpu, Rocket
} from "lucide-react";
import { TEMPLATES } from "../data/templates"; 

export default function LandingPage() {
  // State for the FAQ section
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
      { q: "What formats can I upload?", a: "You can upload JPG, PNG, or WEBP files. These can be photos of hand-drawn sketches on paper, whiteboard drawings, or screenshots from design tools like Figma." },
      { q: "Does it support responsive design?", a: "Yes! Our AI is trained to output Tailwind CSS classes that naturally adapt to different screen sizes using flexbox and grid layouts." },
      { q: "Do I need to know how to code to use this?", a: "Not at all. You can use our visual editor to tweak the design and simply click 'Download' to get the working HTML file." },
      { q: "Is the generated code production-ready?", a: "Absolutely. The code is clean, semantic HTML5 combined with standard Tailwind CSS utility classes, completely free of bloated inline styles." }
  ];

  return (
    <main className="min-h-screen bg-[#020617] text-white selection:bg-blue-500/30 overflow-hidden font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-grid-white opacity-10 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="z-10 max-w-4xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            AI V2.0 Now Live
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[1.1]">
            Idea to App in <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Seconds.</span>
          </h1>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Stop coding from scratch. Upload a napkin sketch, whiteboard photo, or Figma screenshot. Get clean, production-ready HTML & Tailwind code instantly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
             {/* FIX: Replaced nested button with classes directly on the Link to avoid errors */}
             <Link href="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:scale-105 flex items-center justify-center gap-2">
                Start Building Free <ArrowRight className="w-5 h-5" />
             </Link>
             {/* FIX: Changed to <a> tag for smooth scrolling */}
             <a href="#templates" className="px-10 py-4 rounded-full font-bold text-slate-300 border border-white/10 hover:bg-white/5 transition flex items-center justify-center gap-2 cursor-pointer">
                <Play className="w-4 h-4" /> View Demos
             </a>
          </div>
        </div>
      </section>

      {/* 2. INFINITE SCROLL LOGOS (MARQUEE) */}
      <section className="py-12 border-y border-white/5 bg-[#0a0f1e] overflow-hidden">
        <p className="text-center text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-8">Powering Next-Gen Teams</p>
        <div className="relative flex overflow-hidden group w-full">
            <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                {['GOOGLE', 'VERCEL', 'MICROSOFT', 'OPENAI', 'NETFLIX', 'SPOTIFY', 'STRIPE',
                  'GOOGLE', 'VERCEL', 'MICROSOFT', 'OPENAI', 'NETFLIX', 'SPOTIFY', 'STRIPE'].map((brand, i) => (
                    <span key={i} className="text-xl font-black text-white/20 mx-4">{brand}</span>
                ))}
            </div>
        </div>
      </section>

      {/* 3. NEW: HOW IT WORKS */}
      <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-black mb-4">From Sketch to Deploy</h2>
                  <p className="text-xl text-slate-400 max-w-2xl mx-auto">Three simple steps to transform your development workflow forever.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-12 relative">
                  <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 z-0"></div>

                  <div className="relative z-10 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 bg-[#0a0f1e] border-2 border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-blue-500 transition-colors shadow-xl shadow-blue-900/20">
                          <UploadCloud className="w-10 h-10 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">1. Upload Sketch</h3>
                      <p className="text-slate-400 leading-relaxed">Take a photo of your hand-drawn wireframe or drop a screenshot of an app you like.</p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 bg-[#0a0f1e] border-2 border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-purple-500 transition-colors shadow-xl shadow-purple-900/20">
                          <Cpu className="w-10 h-10 text-purple-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">2. AI Generation</h3>
                      <p className="text-slate-400 leading-relaxed">Our Gemini Vision model analyzes the layout and writes clean, semantic HTML and Tailwind CSS.</p>
                  </div>

                  <div className="relative z-10 flex flex-col items-center text-center group">
                      <div className="w-24 h-24 bg-[#0a0f1e] border-2 border-white/10 rounded-full flex items-center justify-center mb-6 group-hover:border-emerald-500 transition-colors shadow-xl shadow-emerald-900/20">
                          <Rocket className="w-10 h-10 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold mb-3">3. Export & Deploy</h3>
                      <p className="text-slate-400 leading-relaxed">Edit visually in our split-pane workspace, then copy the code or download the file instantly.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* 4. BENTO GRID FEATURES (Kept exactly as requested) */}
      <section className="py-32 px-6 bg-[#0a0f1e] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-4">Why Designers Choose Us</h2>
                <p className="text-slate-400">Everything you need to ship faster.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6">
                <div className="md:col-span-2 md:row-span-2 bg-[#020617]/50 border border-white/10 rounded-3xl p-10 flex flex-col justify-between card-hover-effect group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px] group-hover:bg-blue-600/30 transition-all"></div>
                    <div className="relative z-10">
                        <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 text-white"><Zap className="w-6 h-6"/></div>
                        <h3 className="text-3xl font-bold mb-4">Instant Code Generation</h3>
                        <p className="text-slate-400 leading-relaxed">Turn any visual input into clean code instantly. Our Gemini 1.5 Flash model understands context, spacing, and design systems better than any human developer.</p>
                    </div>
                    <div className="mt-8 h-40 bg-black/40 rounded-xl border border-white/5 flex items-center justify-center text-slate-600 font-mono text-xs">
                        &lt;div class="flex gap-4"&gt;...
                    </div>
                </div>

                <div className="bg-[#020617]/50 border border-white/10 rounded-3xl p-8 card-hover-effect">
                    <div className="w-10 h-10 bg-purple-600/20 text-purple-400 rounded-lg flex items-center justify-center mb-4"><Layers className="w-5 h-5"/></div>
                    <h3 className="text-xl font-bold mb-2">Tailwind Ready</h3>
                    <p className="text-sm text-slate-400">Copy-paste classes that just work.</p>
                </div>

                <div className="bg-[#020617]/50 border border-white/10 rounded-3xl p-8 card-hover-effect">
                    <div className="w-10 h-10 bg-emerald-600/20 text-emerald-400 rounded-lg flex items-center justify-center mb-4"><Code className="w-5 h-5"/></div>
                    <h3 className="text-xl font-bold mb-2">Live Editor</h3>
                    <p className="text-sm text-slate-400">Tweak code in real-time before exporting.</p>
                </div>
            </div>
        </div>
      </section>

      {/* 5. NEW: TESTIMONIALS */}
      <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
              <div className="text-center mb-20">
                  <h2 className="text-4xl md:text-5xl font-black mb-4">Loved by Builders</h2>
                  <p className="text-xl text-slate-400">Join thousands of developers shipping 10x faster.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                  {[
                      { name: "Sarah Jenkins", role: "Frontend Engineer", text: "This tool completely eliminated the 'blank canvas' phase of my projects. I sketch a layout, upload it, and instantly have a working Tailwind structure." },
                      { name: "David Chen", role: "Startup Founder", text: "I don't know how to write CSS, but with Sketch2Code I built my entire MVP landing page just by uploading a screenshot of a site I liked." },
                      { name: "Emily Ross", role: "UI/UX Designer", text: "Finally, a way to hand off designs to developers without them messing up the margins. It generates pixel-perfect code from my Figma exports." }
                  ].map((t, i) => (
                      <div key={i} className="bg-[#0a0f1e] border border-white/10 rounded-3xl p-8 relative">
                          <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-900/30" />
                          <div className="flex text-yellow-500 mb-6">
                              <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                          </div>
                          <p className="text-slate-300 leading-relaxed mb-8 relative z-10">"{t.text}"</p>
                          <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-sm">
                                  {t.name.charAt(0)}
                              </div>
                              <div>
                                  <h4 className="font-bold text-white text-sm">{t.name}</h4>
                                  <p className="text-xs text-slate-500">{t.role}</p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 6. TEMPLATES PREVIEW (Kept exactly as requested) */}
      <section id="templates" className="px-6 py-24 bg-[#0a0f1e] border-y border-white/5">
         <div className="max-w-7xl mx-auto">
             <div className="flex justify-between items-end mb-12">
                <div>
                    <h2 className="text-4xl font-bold mb-2">Start with a Template</h2>
                    <p className="text-slate-400">Don't have a sketch? Use our pro designs.</p>
                </div>
                {/* FIX: Replaced Link with standard <a> tag to ensure proper navigation without errors */}
                <a href="/dashboard" className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1 cursor-pointer">
                    View All <ArrowRight className="w-4 h-4"/>
                </a>
             </div>

             <div className="grid md:grid-cols-3 gap-8">
                {TEMPLATES.slice(0, 3).map((template) => (
                  <div key={template.id} className="group rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all bg-[#020617] shadow-xl">
                    <div className="h-48 overflow-hidden relative">
                       <div className="absolute inset-0 bg-blue-900/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 backdrop-blur-sm">
                          <a href={`/dashboard?template=${template.id}`} className="px-6 py-2 bg-white text-blue-900 font-bold rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-2 cursor-pointer shadow-lg">
                            <Edit3 className="w-4 h-4" /> Customize
                          </a>
                       </div>
                       <img src={template.image} alt={template.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-lg mb-1">{template.name}</h3>
                      <p className="text-xs text-slate-500 mb-6">{template.category}</p>
                      <a href={`/dashboard?template=${template.id}`} className="block w-full py-2 text-center rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold transition-colors cursor-pointer text-slate-300 hover:text-white">Use Template</a>
                    </div>
                  </div>
                ))}
             </div>
         </div>
      </section>

      {/* 7. NEW: FAQ SECTION */}
      <section className="py-32 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-slate-400">Got questions? We've got answers.</p>
          </div>
          
          <div className="space-y-4">
              {faqs.map((faq, i) => (
                  <div key={i} className="border border-white/10 rounded-2xl bg-[#0a0f1e] overflow-hidden">
                      <button 
                          onClick={() => setOpenFaq(openFaq === i ? null : i)}
                          className="w-full text-left p-6 flex justify-between items-center font-bold text-lg hover:text-blue-400 transition-colors"
                      >
                          {faq.q}
                          <span className={`transform transition-transform text-blue-500 ${openFaq === i ? 'rotate-180' : ''}`}>▼</span>
                      </button>
                      {openFaq === i && (
                          <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5">
                              {faq.a}
                          </div>
                      )}
                  </div>
              ))}
          </div>
      </section>

      {/* 8. NEW: BOTTOM CTA */}
      <section className="py-24 px-6 relative">
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900 to-purple-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-grid-white opacity-20"></div>
              <div className="relative z-10">
                  <h2 className="text-4xl md:text-6xl font-black mb-6 text-white tracking-tight">Ready to stop writing boilerplate?</h2>
                  <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">Join Sketch2Code today and turn your ideas into production-ready web apps in seconds.</p>
                  <Link href="/login" className="inline-block bg-white text-blue-900 hover:bg-gray-100 px-10 py-5 rounded-full font-black text-lg transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] hover:scale-105">
                      Start Generating For Free
                  </Link>
                  <p className="mt-6 text-sm text-blue-300 flex justify-center items-center gap-2">
                      <CheckCircle2 className="w-4 h-4" /> No credit card required.
                  </p>
              </div>
          </div>
      </section>

      {/* 9. ENHANCED FOOTER */}
      <footer className="pt-20 pb-10 border-t border-white/10 bg-[#020617] px-6 text-sm">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white shadow-lg">S2</div>
                    <span className="font-bold text-lg tracking-tight text-white">Sketch2Code</span>
                </div>
                <p className="text-slate-400 leading-relaxed mb-6">Empowering designers and developers to ship faster with AI-driven code generation.</p>
            </div>
            
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Product</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><Link href="/dashboard" className="hover:text-white transition-colors">Generator</Link></li>
                    <li><Link href="/dashboard" className="hover:text-white transition-colors">Templates</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Integrations</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Changelog</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Resources</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><Link href="#" className="hover:text-white transition-colors">Documentation</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Tutorials</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Community</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                </ul>
            </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-slate-500">© 2026 Sketch2Code. All rights reserved.</p>
            <div className="flex gap-6 text-slate-400">
                <Link href="#" className="hover:text-white transition-colors"><MessageSquare className="w-5 h-5"/></Link>
                <Link href="#" className="hover:text-white transition-colors"><HelpCircle className="w-5 h-5"/></Link>
            </div>
        </div>
      </footer>
    </main>
  );
}