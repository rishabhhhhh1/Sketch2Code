export const TEMPLATES = [
  // --- LANDING PAGES & STARTUPS ---
  {
    id: "landing-saas-ultimate",
    name: "AI SaaS Enterprise",
    description: "Ultra-high density SaaS framework: Nav, Hero, Logo Cloud, Features, Video Placeholder, Stats, Pricing, FAQ, and Footer.",
    category: "Landing",
    image: "https://placehold.co/600x400/0f172a/FFF?text=AI+Enterprise+Full",
    code: `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&display=swap" rel="stylesheet"><style>body{font-family:'Inter',sans-serif;scroll-behavior:smooth;} .theme-text{color:#2563eb;} .theme-bg{background-color:#2563eb;} .theme-border{border-color:#2563eb;} .theme-bg-soft{background-color:rgba(37,99,235,0.1);}</style></head><body class="bg-[#020617] text-white">
    <nav class="flex justify-between items-center px-10 py-6 border-b border-white/5 sticky top-0 bg-[#020617]/90 backdrop-blur-xl z-50">
        <div class="text-2xl font-black italic tracking-tighter theme-text underline decoration-white/20">NEXUS.AI</div>
        <div class="hidden md:flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400"><a>Product</a><a>Solutions</a><a>Testimonials</a><a>Pricing</a><a>Docs</a></div>
        <button class="theme-bg text-white px-6 py-2.5 rounded-full font-bold text-xs uppercase transition hover:opacity-80 shadow-[0_0_20px_rgba(37,99,235,0.3)]">Get Started</button>
    </nav>
    <header class="pt-32 pb-20 text-center px-6 relative overflow-hidden">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent -z-10"></div>
        <div class="inline-block px-4 py-1.5 mb-6 rounded-full theme-bg-soft border theme-border theme-text text-[10px] font-black uppercase tracking-widest animate-pulse italic">Quantum Engine v2.0 is Live</div>
        <h1 class="text-7xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">Automate <br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400">Everything.</span></h1>
        <p class="text-slate-400 text-xl max-w-3xl mx-auto mb-12 font-light leading-relaxed italic">NexusAI isn't just a tool—it's your new digital workforce. Deploy complex neural architectures and automated sales funnels with a single natural language prompt.</p>
        <div class="flex justify-center gap-4 font-black uppercase text-[10px] tracking-widest">
            <button class="px-12 py-6 bg-white text-black rounded-sm hover:bg-slate-200 transition shadow-2xl">Create Your Instance</button>
            <button class="px-12 py-6 bg-slate-900 border border-white/10 rounded-sm hover:bg-slate-800 transition">Technical Whitepaper</button>
        </div>
    </header>
    <section class="py-20 border-y border-white/5 bg-slate-900/20"><div class="max-w-7xl mx-auto px-10"><p class="text-center text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-12 italic">Powering the world's most innovative labs</p><div class="flex flex-wrap justify-center gap-20 opacity-30 grayscale hover:grayscale-0 transition duration-1000 font-black text-2xl italic"><span>FORBES</span><span>TECHCRUNCH</span><span>WIRED</span><span>THE VERGE</span><span>MIT</span></div></div></section>
    <section id="features" class="py-40 px-10 max-w-7xl mx-auto italic"><div class="grid md:grid-cols-2 gap-20 items-center"><div><h2 class="text-5xl font-black mb-8 leading-tight tracking-tighter uppercase">Deep Neural <br/>Code Synthesis.</h2><p class="text-slate-400 text-lg leading-relaxed font-light mb-10">Our proprietary LLM doesn't just predict text—it understands architectural patterns, security vulnerabilities, and design systems to output production-ready logic.</p><ul class="space-y-4 text-sm font-bold uppercase tracking-widest theme-text"><li>✓ 99.9% Logic Accuracy</li><li>✓ Real-time Hot Reloading</li><li>✓ SOC2 Type II Compliant</li></ul></div><div class="aspect-square bg-slate-900 border border-white/5 rounded-[3rem] shadow-[0_0_100px_rgba(0,0,0,0.5)] flex items-center justify-center text-slate-700 font-black text-2xl uppercase tracking-widest">Interactive UI Placeholder</div></div></section>
    <section class="py-32 theme-bg text-white italic"><div class="max-w-7xl mx-auto px-10 grid md:grid-cols-3 gap-20">
        <div><h4 class="text-7xl font-black mb-2 tracking-tighter italic">240%</h4><p class="text-xs uppercase font-black tracking-widest opacity-70">Average ROI Boost</p></div>
        <div><h4 class="text-7xl font-black mb-2 tracking-tighter italic">14ms</h4><p class="text-xs uppercase font-black tracking-widest opacity-70">Global Edge Latency</p></div>
        <div><h4 class="text-7xl font-black mb-2 tracking-tighter italic">ZERO</h4><p class="text-xs uppercase font-black tracking-widest opacity-70">Human Intervention</p></div>
    </div></section>
    <footer class="py-32 px-10 border-t border-white/5"><div class="max-w-7xl mx-auto grid md:grid-cols-4 gap-20 uppercase tracking-widest text-[10px] font-black text-slate-500">
        <div class="col-span-2"><div class="text-3xl text-white mb-8 italic">NEXUS.AI</div><p class="max-w-xs leading-loose font-bold opacity-40">The architects of tomorrow's autonomous digital economy. Built in SF, deployed globally.</p></div>
        <div class="space-y-4 theme-text"><h5>Product</h5><div class="flex flex-col gap-2 text-white italic opacity-60"><a>Changelog</a><a>Roadmap</a><a>Security</a></div></div>
        <div class="space-y-4 theme-text"><h5>Company</h5><div class="flex flex-col gap-2 text-white italic opacity-60"><a>Careers</a><a>Brand</a><a>Contact</a></div></div>
    </div></footer></body></html>`
  },

  // --- BUSINESS & IT ---
  {
    id: "business-it-global",
    name: "Global IT Agency",
    description: "Deep Business Framework: Top Bar, Services Grid, 4 Stats, Case Studies, and Contact Form.",
    category: "Business",
    image: "https://placehold.co/600x400/1e40af/FFF?text=IT+Global+Agency",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><style>.theme-text{color:#1e40af;} .theme-bg{background-color:#1e40af;} .theme-border{border-color:#1e40af;} .theme-bg-soft{background-color:rgba(30,64,175,0.1);}</style></head><body class="bg-[#fcfcfc] text-slate-900 font-sans">
    <nav class="flex justify-between items-center px-12 py-8 bg-white border-b sticky top-0 z-50 shadow-sm"><div class="text-3xl font-black theme-text tracking-tighter italic uppercase">Tech-Core.</div><div class="hidden lg:flex gap-12 font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400"><a>Solutions</a><a>Infrastructure</a><a>Cyber-Ops</a><a>Partners</a></div><button class="theme-bg text-white px-10 py-4 rounded-sm font-black text-[10px] uppercase tracking-widest hover:bg-black transition">Inquire Now</button></nav>
    <header class="py-40 px-12 bg-slate-50"><div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center"><div class="space-y-8 animate-in fade-in slide-in-from-left duration-700"><div class="w-20 h-1.5 theme-bg"></div><h1 class="text-8xl font-black leading-[0.9] tracking-tighter italic uppercase text-slate-950 underline decoration-blue-200">Global <br/>Resilience.</h1><p class="text-xl text-slate-500 leading-relaxed font-light italic max-w-md">Enterprise-grade cloud migration and cybersecurity perimeters for the Fortune 500. We don't just solve problems; we prevent them.</p><div class="flex gap-4 uppercase font-black text-[10px] tracking-widest"><button class="theme-bg text-white px-12 py-6 shadow-2xl">Capabilities</button><button class="border border-slate-300 px-12 py-6 hover:bg-white transition">Client Success</button></div></div><div class="h-[600px] bg-white border-[20px] border-slate-100 shadow-2xl rounded-sm p-20 flex items-center justify-center text-slate-200 font-black italic text-5xl text-center uppercase tracking-tighter">Enterprise <br/> Infrastructure <br/> Visual</div></div></header>
    <section class="py-32 px-12 max-w-7xl mx-auto"><div class="text-center mb-24"><p class="theme-text font-bold uppercase text-[10px] tracking-[0.4em] mb-4">Core Competencies</p><h2 class="text-5xl font-black uppercase italic tracking-tighter text-slate-900">Scale without friction.</h2></div><div class="grid md:grid-cols-3 gap-1"><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">01 Cloud.</h4><p class="text-sm text-slate-500 leading-loose italic">Scalable, hybrid architectures built for global distribution. AWS, Azure, and Google Cloud specialization.</p></div><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">02 Cyber.</h4><p class="text-sm text-slate-500 leading-loose italic">Zero-trust security protocols and military-grade encryption for sensitive enterprise datasets.</p></div><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">03 Ops.</h4><p class="text-sm text-slate-500 leading-loose italic">Automated CI/CD pipelines that eliminate manual deployment risks and reduce downtime to 0.01%.</p></div><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">04 Data.</h4><p class="text-sm text-slate-500 leading-loose italic">Transforming raw telemetry into actionable business intelligence with custom neural modeling.</p></div><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">05 Edge.</h4><p class="text-sm text-slate-500 leading-loose italic">Global node distribution for sub-10ms latency across any geographical region.</p></div><div class="p-16 border bg-white space-y-6"><h4 class="text-2xl font-black italic uppercase theme-text">06 Audit.</h4><p class="text-sm text-slate-500 leading-loose italic">Comprehensive compliance reporting for ISO 27001, SOC2 Type II, and HIPAA standards.</p></div></div></section>
    <section class="py-40 theme-bg text-white text-center italic"><div class="max-w-4xl mx-auto px-10 space-y-12"><h2 class="text-7xl font-black tracking-tighter uppercase leading-none underline decoration-white/20 underline-offset-8">Ready to modernize?</h2><p class="text-xl font-light opacity-70">Join 40+ industry leaders who trust Tech-Core for their mission-critical digital backbone.</p><button class="bg-white theme-text px-16 py-8 font-black uppercase text-xs tracking-[0.3em] hover:bg-yellow-400 transition">Request Technical Briefing</button></div></section>
</body></html>`
  },

  // --- NEW: REAL ESTATE ---
  {
    id: "real-estate-pro",
    name: "Luxury Estate Portal",
    description: "Property listing framework with Search filters, Map integration, Property Grid, and Agent contact.",
    category: "Business",
    image: "https://placehold.co/600x400/0f172a/FFF?text=Real+Estate",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><style>.theme-text{color:#10b981;} .theme-bg{background-color:#10b981;} .theme-border{border-color:#10b981;}</style></head><body class="bg-slate-50 text-slate-900 font-sans">
    <nav class="flex justify-between items-center px-10 py-6 bg-white shadow-sm sticky top-0 z-50">
        <div class="text-2xl font-black theme-text uppercase tracking-widest">Estates.</div>
        <div class="flex gap-6 text-xs font-bold uppercase tracking-widest text-slate-500"><a>Buy</a><a>Rent</a><a>Sell</a><a>Agents</a></div>
        <button class="theme-bg text-white px-6 py-3 rounded-sm font-bold text-xs uppercase tracking-widest">List Property</button>
    </nav>
    <header class="h-[600px] bg-slate-800 relative flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1600596542815-6ad4c7213aa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center">
        <div class="absolute inset-0 bg-black/40"></div>
        <div class="relative z-10 text-center text-white max-w-3xl">
            <h1 class="text-6xl font-black mb-6 uppercase tracking-tighter">Find your <span class="theme-text">Sanctuary.</span></h1>
            <div class="bg-white p-2 rounded-sm flex gap-2">
                <input type="text" placeholder="Search by City, Zip, or Address..." class="flex-1 p-4 outline-none text-slate-900 font-bold text-sm">
                <button class="theme-bg text-white px-8 font-black uppercase text-xs tracking-widest">Search</button>
            </div>
        </div>
    </header>
    <section class="py-24 px-10 max-w-7xl mx-auto">
        <h2 class="text-3xl font-black uppercase tracking-widest mb-10 text-slate-800">Featured Listings</h2>
        <div class="grid md:grid-cols-3 gap-10">
            <div class="bg-white group cursor-pointer border border-slate-200 hover:shadow-xl transition"><div class="h-64 bg-slate-200 relative"><div class="absolute top-4 left-4 theme-bg text-white px-2 py-1 text-[10px] font-bold uppercase">New</div></div><div class="p-6"><h3 class="font-bold text-lg mb-2">Modern Villa</h3><p class="text-slate-500 text-xs uppercase tracking-widest mb-4">Beverly Hills, CA</p><p class="theme-text font-black text-xl">$4,500,000</p></div></div>
            <div class="bg-white group cursor-pointer border border-slate-200 hover:shadow-xl transition"><div class="h-64 bg-slate-200"></div><div class="p-6"><h3 class="font-bold text-lg mb-2">Urban Loft</h3><p class="text-slate-500 text-xs uppercase tracking-widest mb-4">New York, NY</p><p class="theme-text font-black text-xl">$1,200,000</p></div></div>
            <div class="bg-white group cursor-pointer border border-slate-200 hover:shadow-xl transition"><div class="h-64 bg-slate-200"></div><div class="p-6"><h3 class="font-bold text-lg mb-2">Seaside Condo</h3><p class="text-slate-500 text-xs uppercase tracking-widest mb-4">Miami, FL</p><p class="theme-text font-black text-xl">$850,000</p></div></div>
        </div>
    </section>
    </body></html>`
  },

  // --- NEW: RESTAURANT ---
  {
    id: "restaurant-menu",
    name: "Fine Dining Menu",
    description: "Elegant restaurant homepage with Reservation form, Menu grid, and Chef's bio.",
    category: "Business",
    image: "https://placehold.co/600x400/000/FFF?text=Restaurant",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,400..900&display=swap" rel="stylesheet"><style>h1,h2,h3{font-family:'Playfair Display',serif;} .theme-text{color:#d4af37;} .theme-bg{background-color:#d4af37;} .theme-border{border-color:#d4af37;}</style></head><body class="bg-[#0c0c0c] text-neutral-100">
    <nav class="flex justify-between items-center px-10 py-8 border-b border-white/10 sticky top-0 bg-[#0c0c0c]/90 backdrop-blur-md z-50">
        <div class="text-3xl font-black italic theme-text">LUMIÈRE.</div>
        <div class="flex gap-10 font-bold text-[10px] uppercase tracking-[0.3em] text-neutral-400"><a>Menu</a><a>Wines</a><a>Private Dining</a></div>
        <button class="border border-white/20 px-8 py-3 uppercase text-[10px] tracking-widest hover:bg-white hover:text-black transition">Reserve Table</button>
    </nav>
    <header class="py-40 text-center px-6">
        <p class="text-xs font-bold uppercase tracking-[0.4em] mb-6 theme-text">Taste the Extraordinary</p>
        <h1 class="text-8xl md:text-9xl italic font-black mb-10 opacity-90">Culinary <br/> Alchemy.</h1>
        <p class="max-w-md mx-auto text-neutral-500 leading-loose text-sm mb-12">A sensory journey through the finest seasonal ingredients, crafted with passion and precision.</p>
        <div class="h-96 w-full max-w-4xl mx-auto bg-neutral-900 rounded-t-full border-t border-x border-white/10 flex items-center justify-center text-4xl italic text-neutral-800 font-black">Dish Visual</div>
    </header>
    </body></html>`
  },

  // --- NEW: GYM ---
  {
    id: "gym-fitness",
    name: "Iron Fitness Club",
    description: "High-energy gym landing page with Membership tiers, Trainer slider, and Class schedule.",
    category: "Business",
    image: "https://placehold.co/600x400/000/F00?text=Gym+Fitness",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><style>.theme-text{color:#ef4444;} .theme-bg{background-color:#ef4444;} .theme-border{border-color:#ef4444;}</style></head><body class="bg-black text-white italic uppercase">
    <nav class="flex justify-between items-center px-10 py-6 border-b border-white/10 bg-black sticky top-0 z-50">
        <div class="text-3xl font-black theme-text tracking-tighter">IRON.</div>
        <button class="bg-white text-black px-8 py-2 font-black text-sm hover:bg-gray-200 skew-x-[-10deg]">Join Now</button>
    </nav>
    <header class="h-screen flex items-center justify-center relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 grayscale"></div>
        <div class="relative z-10 text-center space-y-4">
            <h1 class="text-[12vw] leading-[0.8] font-black tracking-tighter">Forged <br/> In <span class="theme-text">Fire.</span></h1>
            <p class="text-xl font-bold tracking-widest text-gray-400">The last gym you will ever join.</p>
        </div>
    </header>
    <section class="py-20 px-6 grid md:grid-cols-3 gap-6 text-center">
        <div class="border border-white/10 p-10 hover:theme-bg transition duration-300 group"><h3 class="text-4xl font-black mb-4">Strength</h3><p class="text-xs font-bold text-gray-500 group-hover:text-black">Free Weights & Power Racks</p></div>
        <div class="border border-white/10 p-10 hover:theme-bg transition duration-300 group"><h3 class="text-4xl font-black mb-4">Cardio</h3><p class="text-xs font-bold text-gray-500 group-hover:text-black">HIIT & Endurance Zones</p></div>
        <div class="border border-white/10 p-10 hover:theme-bg transition duration-300 group"><h3 class="text-4xl font-black mb-4">Recovery</h3><p class="text-xs font-bold text-gray-500 group-hover:text-black">Sauna & Cold Plunge</p></div>
    </section>
    </body></html>`
  },

  // --- EDUCATION ---
  {
    id: "school-portal-full",
    name: "University Framework",
    description: "Full Academic Framework: Mega-Menu Nav, Admissions Banner, Department Grid, Live Notice Board, Alumni stats, and deep footer.",
    category: "Education",
    image: "https://placehold.co/600x400/fefce8/713f12?text=University+Portal+Full",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@1,700&family=Public+Sans:wght@400;900&display=swap" rel="stylesheet"><style>h1,h2,h3{font-family:'Crimson Pro',serif;} body{font-family:'Public Sans',sans-serif;} .theme-text{color:#1e3a8a;} .theme-bg{background-color:#1e3a8a;} .theme-border{border-color:#1e3a8a;}</style></head><body class="bg-[#fafaf9] text-slate-900">
    <div class="theme-bg text-white px-10 py-3 text-[10px] flex justify-between uppercase tracking-[0.2em] font-black border-b border-white/10 italic">
        <span>Accredited A++ Global Institute | QS Ranking: #42</span>
        <div class="flex gap-6"><a>Student Portal</a><a>E-Library</a><a>Research Hub</a></div>
    </div>
    <nav class="bg-white border-b px-10 py-8 flex justify-between items-center sticky top-0 z-50 shadow-sm animate-in slide-in-from-top duration-500">
        <div class="flex items-center gap-5">
            <div class="w-16 h-16 theme-bg rounded-full flex items-center justify-center text-white font-black text-3xl italic shadow-xl">S</div>
            <div><h1 class="text-2xl font-black uppercase tracking-tighter text-blue-950 leading-none underline decoration-yellow-500 decoration-4">Springfield Academy</h1><p class="text-[9px] theme-text font-black uppercase tracking-[0.3em] mt-1 italic">Knowledge for Tomorrow's Leaders</p></div>
        </div>
        <div class="hidden lg:flex gap-10 font-black text-[10px] uppercase tracking-widest text-slate-500 italic">
            <a class="hover:text-blue-900 transition border-b-2 border-transparent hover:border-yellow-500 pb-1">Academic</a>
            <a class="hover:text-blue-900 transition border-b-2 border-transparent hover:border-yellow-500 pb-1">Admissions</a>
            <a class="hover:text-blue-900 transition border-b-2 border-transparent hover:border-yellow-500 pb-1">Research</a>
            <a class="hover:text-blue-900 transition border-b-2 border-transparent hover:border-yellow-500 pb-1">Campus</a>
        </div>
        <button class="theme-bg text-white px-10 py-4 rounded-sm font-black uppercase text-[10px] tracking-widest hover:bg-black transition shadow-lg">Apply 2026</button>
    </nav>
    <header class="relative h-[750px] overflow-hidden group shadow-inner">
        <img src="https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&w=1920" class="w-full h-full object-cover group-hover:scale-105 transition duration-[3000ms]">
        <div class="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-950/40 to-transparent flex items-center px-24">
            <div class="max-w-3xl text-white space-y-8 italic">
                <h2 class="text-8xl font-bold mb-6 leading-[0.85] tracking-tight text-white drop-shadow-2xl">Tradition of <br/> <span class="text-yellow-400">Excellence.</span></h2>
                <p class="text-2xl opacity-90 leading-relaxed font-light border-l-8 border-yellow-500 pl-8 max-w-xl">Shaping the global minds of tomorrow with a legacy of innovation and compassionate leadership. Admissions are open for 2026-27 session.</p>
                <div class="flex gap-4 font-black uppercase text-[10px] tracking-widest pt-6">
                   <button class="bg-yellow-500 text-blue-950 px-14 py-6 shadow-[0_20px_50px_rgba(234,179,8,0.3)] hover:bg-white transition duration-300">Enroll Today</button>
                   <button class="bg-white/10 backdrop-blur-xl text-white border border-white/20 px-14 py-6 hover:bg-white/20 transition duration-300">Explore Campus</button>
                </div>
            </div>
        </div>
    </header>
    <section class="max-w-7xl mx-auto -mt-32 grid md:grid-cols-3 gap-12 px-10 relative z-10 pb-40 italic">
        <div class="bg-white p-14 shadow-[0_100px_100px_-50px_rgba(0,0,0,0.2)] border-t-[12px] border-blue-900 rounded-sm">
            <h3 class="font-bold text-4xl mb-8 theme-text underline decoration-yellow-400 decoration-4 underline-offset-8">Notices</h3>
            <ul class="text-xs space-y-8 text-slate-500 uppercase tracking-widest font-black">
                <li class="border-b pb-4 cursor-pointer hover:text-blue-900 transition flex justify-between"><span>Final Exam Schedule 2026</span><span class="text-yellow-600">PDF</span></li>
                <li class="border-b pb-4 cursor-pointer hover:text-blue-900 transition flex justify-between"><span>Annual Sports Day Meet</span><span class="text-yellow-600">NEW</span></li>
                <li class="italic text-blue-800 underline">View Archives →</li>
            </ul>
        </div>
        <div class="bg-white p-14 shadow-[0_100px_100px_-50px_rgba(0,0,0,0.2)] border-t-[12px] border-yellow-500 rounded-sm">
            <h3 class="font-bold text-4xl mb-8 theme-text underline decoration-blue-900 decoration-4 underline-offset-8">Resources</h3>
            <div class="grid grid-cols-1 gap-4 text-[11px] font-black uppercase tracking-widest">
               <button class="bg-slate-50 p-6 border border-slate-100 hover:bg-blue-900 hover:text-white transition shadow-sm flex justify-between">Curriculum <span>→</span></button>
               <button class="bg-slate-50 p-6 border border-slate-100 hover:bg-blue-900 hover:text-white transition shadow-sm flex justify-between">Fee Structure <span>→</span></button>
            </div>
        </div>
        <div class="theme-bg p-14 shadow-[0_100px_100px_-50px_rgba(30,58,138,0.4)] text-white rounded-sm relative overflow-hidden">
            <h3 class="font-bold text-4xl mb-8 italic underline decoration-yellow-400 decoration-4 underline-offset-8">Director</h3>
            <p class="text-lg italic leading-relaxed opacity-80 font-light">"Education is not the learning of facts, but the training of the mind to think."</p>
            <p class="mt-12 font-black uppercase text-[10px] tracking-[0.4em] text-yellow-400">— Dr. Robert Springfield</p>
        </div>
    </section>
</body></html>`
  },

  // --- PORTFOLIO ---
  {
    id: "portfolio-NR-pro",
    name: "Luxury Brand Identity",
    description: "Ultimate High-Contrast Portfolio: Fixed Blend Nav, 14vw Hero, Full-Screen Project Cards, Services Loop, and Contact Flow.",
    category: "Portfolio",
    image: "https://placehold.co/600x400/000/FFF?text=NR+Portfolio+PRO",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><style>@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;900&display=swap'); body{font-family:'Outfit',sans-serif;}</style></head><body class="bg-[#050505] text-white selection:bg-yellow-400 selection:text-black">
    <nav class="p-10 flex justify-between items-center fixed w-full top-0 z-50 mix-blend-difference italic">
        <div class="text-5xl font-black tracking-tighter uppercase underline decoration-white decoration-4 underline-offset-8">NR.</div>
        <div class="flex gap-12 font-black uppercase text-[11px] tracking-[0.5em] opacity-40 hover:opacity-100 transition"><a>Archives</a><a>Manifesto</a><a>Talks</a></div>
    </nav>
    <main class="px-10 italic">
        <section class="h-screen flex flex-col justify-center">
            <h1 class="text-[15vw] font-black leading-[0.75] uppercase tracking-tighter italic">Creative <br/><span class="text-transparent border border-white px-8 rounded-full italic">Developer</span></h1>
            <div class="mt-20 flex justify-between items-end border-t border-white/10 pt-12">
                <p class="max-w-xl text-3xl font-light opacity-50 leading-[1.1] tracking-tighter italic">I help high-growth startups and global luxury brands build digital interfaces that bridge the gap between design and technological poetry.</p>
                <div class="flex flex-col gap-2 font-black uppercase text-[11px] tracking-[0.2em] border-b-2 border-yellow-400 pb-2 cursor-pointer italic text-yellow-400 shadow-[0_10px_20px_rgba(250,204,21,0.1)]">Book Instance 2026</div>
            </div>
        </section>
        <section class="py-60 space-y-60 uppercase"><div class="h-[90vh] bg-zinc-900 rounded-[4rem] relative group cursor-pointer overflow-hidden border border-white/5 shadow-2xl">
            <div class="absolute inset-0 bg-yellow-400 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center text-black text-9xl font-black tracking-tighter italic">VIEW CASE</div>
            <div class="absolute bottom-12 left-12"><h3 class="text-6xl font-black italic">Crypton v2.0</h3><p class="text-sm tracking-[0.5em] opacity-40">Design Systems</p></div>
        </div><div class="h-[90vh] bg-zinc-900 rounded-[4rem] relative group cursor-pointer overflow-hidden border border-white/5 shadow-2xl">
            <div class="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-100 transition duration-700 flex items-center justify-center text-white text-9xl font-black tracking-tighter italic">VIEW CASE</div>
            <div class="absolute bottom-12 left-12"><h3 class="text-6xl font-black italic">Nebula AI</h3><p class="text-sm tracking-[0.5em] opacity-40">Webgl Interaction</p></div>
        </div></section>
    </main></body></html>`
  },

  // --- E-COMMERCE ---
  {
    id: "ecom-luxury-framework",
    name: "Auteur Luxury Shop",
    description: "Deep Content Shop: Sticky Vogue Nav, 90vh Video Hero, Detailed Product Card Grid, Collection Scrollers, and Newsletter.",
    category: "E-Commerce",
    image: "https://placehold.co/600x400/fdf2f8/be185d?text=Luxury+Vogue+Shop",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,900&family=Outfit:wght@300;700;900&display=swap" rel="stylesheet"><style>h1,h2{font-family:'Playfair Display',serif;} body{font-family:'Outfit',sans-serif;}</style></head><body class="bg-white text-zinc-950 italic">
    <nav class="flex justify-between items-center p-10 border-b border-zinc-100 sticky top-0 bg-white/90 backdrop-blur-xl z-50">
        <div class="flex gap-12 text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 italic"><a>Women</a><a>Men</a><a>New Season</a></div>
        <div class="text-6xl font-black italic tracking-tighter uppercase underline decoration-zinc-950 decoration-8 underline-offset-8">VOGUE.</div>
        <div class="flex gap-8 text-[10px] font-black uppercase tracking-[0.3em] italic"><a>Search</a><a>Cart (0)</a></div>
    </nav>
    <header class="h-[95vh] bg-[#fafafa] relative flex items-center justify-center overflow-hidden italic uppercase">
        <div class="text-center z-10 space-y-16 animate-in zoom-in duration-1000">
            <h1 class="text-[16vw] font-black tracking-tighter leading-[0.75] italic uppercase underline decoration-white/20">Spring <br/> <span class="text-transparent border border-zinc-950 px-8 rounded-full italic">Soirée</span></h1>
            <button class="px-16 py-8 bg-zinc-950 text-white font-black uppercase tracking-[0.4em] text-[11px] hover:bg-blue-600 transition shadow-[0_30px_60px_rgba(0,0,0,0.3)] italic">Explore the Atelier</button>
        </div>
    </header>
    <section class="py-40 px-10 max-w-7xl mx-auto"><div class="flex justify-between items-end mb-24 border-b border-zinc-100 pb-12"><h2 class="text-7xl font-black tracking-tighter uppercase italic italic leading-none">Curated <br/>Selection</h2><p class="max-w-xs text-[11px] font-black uppercase tracking-widest opacity-40 leading-loose">The finest Italian linens and hand-stitched leather artifacts, redefined for the modern aesthetic.</p></div>
    <div class="grid md:grid-cols-4 gap-20 italic font-black uppercase">
        <div class="space-y-6 group cursor-pointer"><div class="aspect-[3/4] bg-zinc-100 shadow-inner group-hover:bg-zinc-200 transition duration-700"></div><p class="text-xs tracking-widest">Linen Wrap Dress</p><p class="text-xs opacity-40 font-bold">$499.00</p></div>
        <div class="space-y-6 group cursor-pointer"><div class="aspect-[3/4] bg-zinc-100 shadow-inner group-hover:bg-zinc-200 transition duration-700"></div><p class="text-xs tracking-widest">Silk Slip Skirt</p><p class="text-xs opacity-40 font-bold">$345.00</p></div>
        <div class="space-y-6 group cursor-pointer"><div class="aspect-[3/4] bg-zinc-100 shadow-inner group-hover:bg-zinc-200 transition duration-700"></div><p class="text-xs tracking-widest">Minimal Mules</p><p class="text-xs opacity-40 font-bold">$220.00</p></div>
        <div class="space-y-6 group cursor-pointer"><div class="aspect-[3/4] bg-zinc-100 shadow-inner group-hover:bg-zinc-200 transition duration-700"></div><p class="text-xs tracking-widest">Straw Carryall</p><p class="text-xs opacity-40 font-bold">$189.00</p></div>
    </div></section>
</body></html>`
  },

  // --- AUTHENTICATION ---
  {
    id: "auth-identity-full",
    name: "Identity Security Hub",
    description: "Dual-column professional login screen with high-end glassmorphism, gradient assets, testimonials, and legal footer.",
    category: "Auth",
    image: "https://placehold.co/600x400/1e1e2e/FFF?text=Identity+Auth+Full",
    code: `<!DOCTYPE html><html lang="en"><head><script src="https://cdn.tailwindcss.com"></script><style id="theme-style">.theme-text{color:#2563eb;} .theme-bg{background-color:#2563eb;}</style></head><body class="bg-[#020617] h-screen flex items-center justify-center p-6 italic font-black">
    <div class="max-w-5xl w-full bg-white rounded-[4rem] overflow-hidden flex shadow-[0_0_150px_rgba(59,130,246,0.3)] h-[700px] border border-white/10">
        <div class="hidden lg:block w-1/2 bg-gradient-to-br from-blue-700 to-indigo-950 p-20 text-white relative">
            <div class="text-3xl font-black italic tracking-tighter uppercase underline decoration-white/20">IDENTITY.</div>
            <div class="mt-32">
                <h2 class="text-6xl font-black mb-8 leading-[0.9] tracking-tighter italic uppercase underline decoration-blue-400">The New <br/>Standard of <br/>Trust.</h2>
                <p class="opacity-60 italic leading-relaxed font-light text-lg">"Security is not a feature, it is the foundation of digital dignity. Welcome to the workspace of the future."</p>
            </div>
        </div>
        <div class="w-full lg:w-1/2 p-20 flex flex-col justify-center bg-white">
            <h2 class="text-5xl font-black mb-4 text-slate-950 tracking-tighter italic uppercase underline decoration-slate-100 underline-offset-8">Welcome</h2>
            <p class="text-slate-400 mb-12 text-[11px] font-black uppercase tracking-[0.3em] italic">Biometric Credentials Required</p>
            <form class="space-y-6" onsubmit="event.preventDefault()">
                <div class="space-y-2 uppercase tracking-widest text-[9px] text-slate-400 ml-2"><label>Email</label><input type="email" placeholder="user@identity.io" class="w-full bg-slate-50 border-0 rounded-3xl p-6 focus:ring-4 focus:ring-blue-600/10 transition outline-none text-sm font-bold shadow-inner italic"></div>
                <div class="space-y-2 uppercase tracking-widest text-[9px] text-slate-400 ml-2"><label>Password</label><input type="password" placeholder="••••••••" class="w-full bg-slate-50 border-0 rounded-3xl p-6 focus:ring-4 focus:ring-blue-600/10 transition outline-none text-sm font-bold shadow-inner italic"></div>
                <button class="w-full theme-bg text-white font-black py-6 rounded-3xl hover:bg-black transition shadow-2xl uppercase text-[11px] tracking-[0.4em] mt-6 italic">Initiate Session</button>
            </form>
        </div>
    </div></body></html>`
  }
];