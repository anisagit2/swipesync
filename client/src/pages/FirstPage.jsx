function FirstPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden dark min-h-screen md:pl-72">
      
    {/*  Top Navigation Bar  */}
    <header
        className="bg-surface/50 backdrop-blur-xl text-primary-fixed-dim border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-50">
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-container text-3xl">bubble_chart</span>
            <h1
                className="font-headline-md text-headline-md-mobile md:text-headline-md font-bold tracking-tighter text-primary-container">
                SwipeSync AI</h1>
        </div>
        <div className="flex items-center gap-4">
            <button
                className="material-symbols-outlined text-on-surface-variant hover:text-primary-container transition-colors">notifications</button>
            <div className="w-10 h-10 rounded-full border border-primary-container/30 p-0.5">
                <img alt="User Profile" className="w-full h-full rounded-full object-cover"
                    data-alt="A high-end professional headshot of a person with a futuristic, clean aesthetic. The lighting is soft and cinematic, with subtle cyan and purple rim lighting that matches a dark, tech-oriented UI. The background is a blurred, deep charcoal office environment with glowing data interfaces."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsXk0RiVtKR9J0rCtDosiomt5qtX2fl8epdra4OEoJgp08LDzJssNXg7fR273iaXHeeHDY-OmEJVXepLjd972SJaCGa0ncAw-aKTj9GeacZYx9qz3856jXmf7YXBQaWpiD1Rlc6RcIFNdbd8l73xUxvSOjfjb3kp6YoTxfDO7LZHg9ER05qY1zJ4tpqzaYoJktQMabR9KKZ-QkZuCvO5i7dlhPt6aQmctlezWMssn5StEEEfrMqH6JhbXMjXivkqdtLiNJTaPEiWA" />
            </div>
        </div>
    </header>
    <main className="max-w-container-max mx-auto px-gutter py-8 space-y-8 pb-32">
        {/*  Hero Section: Identity Overview  */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div
                className="md:col-span-8 glass-panel rounded-xl p-8 flex flex-col justify-center relative overflow-hidden glow-cyan">
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary-container/10 blur-[100px] rounded-full">
                </div>
                <h2 className="font-headline-md text-headline-md text-primary-fixed-dim mb-2">Collaboration DNA Overview
                </h2>
                <p className="text-on-surface-variant max-w-xl font-body-md mb-6">Neural mapping complete. Your ecosystem
                    sync rate is currently at 88%. Optimize your network by addressing communication style disparities.
                </p>
                <div className="flex flex-wrap gap-4">
                    <div className="glass-panel px-4 py-3 rounded-lg border-l-4 border-primary-container">
                        <span className="font-label-sm text-label-sm block text-on-surface-variant uppercase mb-1">Work
                            Pace</span>
                        <div className="flex items-center gap-2">
                            <span className="font-headline-md text-primary-container">High</span>
                            <span className="material-symbols-outlined text-primary-container text-sm">bolt</span>
                        </div>
                    </div>
                    <div className="glass-panel px-4 py-3 rounded-lg border-l-4 border-secondary-container">
                        <span className="font-label-sm text-label-sm block text-on-surface-variant uppercase mb-1">Comm
                            Style</span>
                        <div className="flex items-center gap-2">
                            <span className="font-headline-md text-secondary">Async</span>
                            <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                        </div>
                    </div>
                    <div className="glass-panel px-4 py-3 rounded-lg border-l-4 border-tertiary-container">
                        <span
                            className="font-label-sm text-label-sm block text-on-surface-variant uppercase mb-1">Interests</span>
                        <div className="flex items-center gap-2">
                            <span className="font-headline-md text-tertiary-fixed-dim">Deep AI</span>
                            <span className="material-symbols-outlined text-tertiary-fixed-dim text-sm">psychology</span>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Relationship Health Meter  */}
            <div className="md:col-span-4 glass-panel rounded-xl p-8 flex flex-col items-center justify-center glow-purple">
                <h3 className="font-label-sm text-label-sm text-on-surface-variant uppercase mb-6">Relationship Health</h3>
                <div className="relative w-48 h-48 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                        <circle className="text-surface-container-high" cx="96" cy="96" fill="transparent" r="80"
                            stroke="currentColor" strokeWidth="8"></circle>
                        <circle className="text-secondary shadow-[0_0_20px_rgba(220,184,255,0.4)]" cx="96" cy="96"
                            fill="transparent" r="80" stroke="currentColor" strokeDasharray="502"
                            strokeDashoffset="100" strokeWidth="8"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="font-headline-md text-3xl text-secondary">82%</span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Engagement</span>
                    </div>
                </div>
                <div className="mt-8 grid grid-cols-2 gap-8 w-full">
                    <div className="text-center">
                        <span className="block font-label-sm text-on-surface-variant mb-1">Engagement</span>
                        <span className="font-headline-md text-primary-fixed-dim text-lg">High</span>
                    </div>
                    <div className="text-center">
                        <span className="block font-label-sm text-on-surface-variant mb-1">Risk</span>
                        <span className="font-headline-md text-error text-lg">Low</span>
                    </div>
                </div>
            </div>
        </div>
        {/*  Middle Section: Bento Grid for Stats and Analysis  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/*  Radar Chart Analysis Placeholder  */}
            <div className="md:col-span-2 glass-panel rounded-xl p-8 relative min-h-[400px]">
                <div className="flex justify-between items-start mb-8">
                    <div>
                        <h3 className="font-headline-md text-primary-fixed-dim">Compatibility Radar</h3>
                        <p className="font-body-md text-on-surface-variant">Multidimensional alignment metrics.</p>
                    </div>
                    <div className="flex gap-2">
                        <span
                            className="px-3 py-1 rounded-full bg-primary-container/10 border border-primary-container/20 text-primary-container text-xs font-label-sm uppercase">Optimized</span>
                    </div>
                </div>
                {/*  Simulated Radar Chart  */}
                <div className="flex items-center justify-center py-4 relative">
                    <div className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center">
                        <div className="w-48 h-48 border border-white/10 rounded-full flex items-center justify-center">
                            <div className="w-32 h-32 border border-white/10 rounded-full flex items-center justify-center">
                                <div className="w-16 h-16 border border-white/10 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                    {/*  Radar Polygon Overlay  */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                        <polygon fill="rgba(0, 219, 231, 0.2)" points="50,15 80,40 70,80 30,80 20,40" stroke="#00dbe7"
                            strokeWidth="0.5"></polygon>
                        <circle cx="50" cy="15" fill="#00dbe7" r="1"></circle>
                        <circle cx="80" cy="40" fill="#00dbe7" r="1"></circle>
                        <circle cx="70" cy="80" fill="#00dbe7" r="1"></circle>
                        <circle cx="30" cy="80" fill="#00dbe7" r="1"></circle>
                        <circle cx="20" cy="40" fill="#00dbe7" r="1"></circle>
                    </svg>
                    {/*  Labels  */}
                    <span
                        className="absolute top-4 left-1/2 -translate-x-1/2 font-label-sm text-xs text-on-surface-variant uppercase">Pace</span>
                    <span
                        className="absolute top-1/3 right-12 font-label-sm text-xs text-on-surface-variant uppercase">Logic</span>
                    <span
                        className="absolute bottom-12 right-1/4 font-label-sm text-xs text-on-surface-variant uppercase">Vision</span>
                    <span
                        className="absolute bottom-12 left-1/4 font-label-sm text-xs text-on-surface-variant uppercase">Skill</span>
                    <span
                        className="absolute top-1/3 left-12 font-label-sm text-xs text-on-surface-variant uppercase">Sync</span>
                </div>
            </div>
            {/*  Suggested Collaborators  */}
            <div className="glass-panel rounded-xl p-8 flex flex-col gap-6">
                <div>
                    <h3 className="font-headline-md text-primary-fixed-dim">AI Recommendations</h3>
                    <p className="font-body-md text-on-surface-variant">Closing expertise gaps.</p>
                </div>
                <div className="space-y-4">
                    {/*  Rec 1  */}
                    <div className="group p-4 glass-panel rounded-lg hover:bg-white/5 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                            <img alt="Rec 1" className="w-12 h-12 rounded-full border border-secondary-container/30"
                                data-alt="A portrait of a male data scientist with a modern, high-tech aesthetic. The setting is a darkened laboratory space filled with floating holographic charts. The color palette is deep indigo and vibrant magenta, with clean studio lighting highlighting professional features."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-nFv9_FL2pw9YXDd0KyG5Qed0IY4i1HGHNLRVMaUiODlM5znti4Qh52dsXtz-JmVas3qSLWRv_FMoTbzoEsL2ifj21Ceef3u6rU-1a_LUvy6dMOb0k4c6t3eMjLcKnrPeBpeurTXzzTeVDxoN3hKHWyc1GlF38z6GvUm-H2N-ioP-3RZRvDwjpe8J6sG44bKHNx6RVT6yjr4-DN5o_1KDeFy5NsdyxTU-w6vajB6x4-MCYfqlI_F1VCJ8shPXz4FtTs8ILu0f5iw" />
                            <div>
                                <h4 className="font-body-md font-bold text-on-surface">Vector Prime</h4>
                                <span className="font-label-sm text-secondary-fixed-dim">Data Orchestration</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-label-sm text-xs text-on-surface-variant">96% Alignment</span>
                            <span
                                className="material-symbols-outlined text-primary-container text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                    {/*  Rec 2  */}
                    <div className="group p-4 glass-panel rounded-lg hover:bg-white/5 transition-all cursor-pointer">
                        <div className="flex items-center gap-4 mb-3">
                            <img alt="Rec 2" className="w-12 h-12 rounded-full border border-primary-container/30"
                                data-alt="A portrait of a female creative director specializing in AI systems. She is wearing sleek, minimalist glasses that reflect a high-tech UI environment. The background is a soft, dark space with glowing cyan lines of network connections, conveying a sophisticated and intelligent mood."
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaHIU4RwJtd_kXKTAim-jlKKHfbQRutecQwphlkJps-yR9inGg__6PWqtw3ZUtSXTtIqca0r9VdVr0mNfeyq3j-2hFBcXWm4sRvquC-YBZu8MiTJvIz8BAfQepb84vci7SPaTOnusKAh1S6iXjdDvpAJu3sXcZm9BAestT1QT3EPDPCRau8qhQVsW3-xzcv2NnUe-E7e45pxQsUZyyUDgCXmrhbRAb1XISXTDKy4CAzsZho4wCkXfvLMJJxMYHJYqSzbd17iEueMg" />
                            <div>
                                <h4 className="font-body-md font-bold text-on-surface">Neural Nexus</h4>
                                <span className="font-label-sm text-primary-fixed-dim">Creative Logic</span>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="font-label-sm text-xs text-on-surface-variant">92% Alignment</span>
                            <span
                                className="material-symbols-outlined text-primary-container text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </div>
                    </div>
                </div>
                <button
                    className="w-full py-4 glass-panel rounded-xl font-label-sm text-on-surface uppercase tracking-widest hover:bg-primary-container hover:text-on-primary-container transition-all active:scale-95">Explore
                    All Matches</button>
            </div>
        </div>
        {/*  Detail Insights  */}
        <div className="glass-panel rounded-2xl p-8 glow-cyan">
            <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary-container">insights</span>
                <h3 className="font-headline-md text-primary-fixed-dim">Deeper Calibration Metrics</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <span className="font-label-sm text-on-surface-variant uppercase">Response Latency</span>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary-container w-[75%]"></div>
                    </div>
                    <span className="font-body-md text-primary-container">Sub-10ms Optimal</span>
                </div>
                <div className="space-y-4">
                    <span className="font-label-sm text-on-surface-variant uppercase">Tone Consistency</span>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-secondary-container w-[90%]"></div>
                    </div>
                    <span className="font-body-md text-secondary">High-Cortex Sync</span>
                </div>
                <div className="space-y-4">
                    <span className="font-label-sm text-on-surface-variant uppercase">Context Retention</span>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-tertiary-container w-[60%]"></div>
                    </div>
                    <span className="font-body-md text-tertiary-fixed-dim">Scaling Active</span>
                </div>
                <div className="space-y-4">
                    <span className="font-label-sm text-on-surface-variant uppercase">Conflict Resolution</span>
                    <div className="h-2 w-full bg-surface-container-high rounded-full overflow-hidden">
                        <div className="h-full bg-primary-container w-[85%]"></div>
                    </div>
                    <span className="font-body-md text-primary-container">Highly Adaptive</span>
                </div>
            </div>
        </div>
    </main>
    {/*  Navigation Shells  */}
    {/*  Navigation Drawer (Desktop Sidebar)  */}
    <aside
        className="hidden md:flex flex-col fixed left-0 top-0 h-full w-72 bg-surface-dim/95 backdrop-blur-md border-r border-white/10 shadow-2xl z-[60] py-gutter px-4">
        <div className="flex items-center gap-3 mb-12 px-4">
            <span className="material-symbols-outlined text-primary-container text-4xl">hub</span>
            <span className="font-headline-md text-primary-container font-bold">SwipeSync</span>
        </div>
        <nav className="space-y-2 flex-grow">
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl bg-primary-container/10 text-primary-fixed-dim font-bold border-l-4 border-primary-container transition-transform translate-x-1"
                href="/second">
                <span className="material-symbols-outlined">analytics</span>
                <span className="font-body-md">Insights</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
                href="/second">
                <span className="material-symbols-outlined">dashboard</span>
                <span className="font-body-md">Ecosystem Overview</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
                href="/second">
                <span className="material-symbols-outlined">groups</span>
                <span className="font-body-md">Member Directory</span>
            </a>
            <a className="flex items-center gap-4 px-4 py-3 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all"
                href="/second">
                <span className="material-symbols-outlined">psychology</span>
                <span className="font-body-md">AI Calibration</span>
            </a>
        </nav>
        <div className="px-4 py-6 border-t border-white/5">
            <div className="flex items-center gap-4">
                <img alt="Admin" className="w-10 h-10 rounded-full"
                    data-alt="A detailed profile photo of a professional avatar for a technical system administrator. The image features high-contrast lighting with cool blue tones and sharp focus. The setting is a modern, sleek tech workspace with minimalist hardware components visible in the background."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwrnckwXyAeR70i3uibqECNGMf-QfZzhswqA8aVVEbarzvpn2qI7DwyJttUc-GktEqcxMLB6Hi7vg0bkj1Xp8BWbX_iI-eZMiHrzCpnwVkQ53MhzYaTWPiTWZXTiaLNSDxsp3tLAp5UigSs4HHWGPFqT1e59A5dyNYZwaQhmKrYnr8rp0_DXTjTeR-rnlkk79_Sz0SUvvCGeUC4-esHl220usMLoc5fhVzR2r0B7fcyKAG5YKiukiSM-ISOCI8KO4g5oD3keykqpM" />
                <div>
                    <h5 className="text-sm font-bold text-on-surface">Ecosystem Admin</h5>
                    <span className="text-xs text-on-surface-variant">Superuser Access</span>
                </div>
            </div>
        </div>
    </aside>
    {/*  Bottom Navigation (Mobile Only)  */}
    <nav
        className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe pt-2 bg-surface-container-highest/60 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_32px_rgba(0,0,0,0.3)] rounded-t-xl">
        <div className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5">
            <span className="material-symbols-outlined">swipe</span>
            <span className="font-label-sm text-label-sm">Match</span>
        </div>
        <div
            className="flex flex-col items-center justify-center bg-secondary-container/30 text-secondary-fixed-dim rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(220,184,255,0.2)] scale-90">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-sm text-label-sm">Insights</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5">
            <span className="material-symbols-outlined">hub</span>
            <span className="font-label-sm text-label-sm">Graph</span>
        </div>
        <div className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
        </div>
    </nav>
    {/*  Footer  */}
    <footer
        className="w-full py-12 px-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-lowest border-t border-white/5 mt-auto">
        <div className="flex flex-col items-center md:items-start">
            <h4 className="font-headline-md text-on-surface mb-2">SwipeSync AI</h4>
            <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">© 2024 Neural
                Connections Secured.</p>
        </div>
        <div className="flex gap-6">
            <a className="text-on-surface-variant hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="/second">Terms</a>
            <a className="text-on-surface-variant hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="/second">Privacy</a>
            <a className="text-on-surface-variant hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="/second">Network Stats</a>
            <a className="text-on-surface-variant hover:text-primary-fixed transition-colors font-label-sm text-label-sm"
                href="/second">Contact AI</a>
        </div>
    </footer>

    </div>
  );
}

export default FirstPage;
