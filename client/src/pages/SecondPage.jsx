function SecondPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden dark min-h-screen">
      
    {/*  TopAppBar  */}
    <header
        className="bg-surface/50 backdrop-blur-xl text-primary-fixed-dim shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 docked full-width top-0 flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-50">
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-container" data-icon="bubble_chart">bubble_chart</span>
            <h1 className="font-headline-md text-headline-md-mobile font-bold tracking-tighter text-primary-container">
                SwipeSync AI</h1>
        </div>
        <nav className="hidden md:flex items-center gap-8">
            <a className="font-label-sm text-label-sm text-primary-fixed-dim hover:text-primary-container transition-colors duration-200"
                href="/third">Match</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                href="/third">Insights</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                href="/third">Graph</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors duration-200"
                href="/third">Admin</a>
        </nav>
        <div className="flex items-center gap-4">
            <img alt="User profile photo" className="w-10 h-10 rounded-full border border-white/10"
                data-alt="A professional studio portrait of a technology executive with soft, cinematic side-lighting. The background is a deep charcoal indigo with a subtle blur, creating a high-end corporate aesthetic. The subject has a confident expression, reflecting intelligence and leadership in the AI space."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbxlE8vXYQ8mAHgRrAboRBcgwNH7nfnwfQZtdl999-8gTywRzQvCeQ3I3iChrX7YaXPAiu_SFG7bN5I51OJPVfew__JdGjGt0aiWNxd0xbAvCI0rKr6c3U6WP-KCygenQ8P8HVNhI_lX2usYiYW9ZpK68JYL_585jLOyqG3g9kqQEeC5BGs7lFRRPZ-fn2bO7MUtw_rvMpk5VJe8fqyQnQKbd7Eot6kKZy-8FolZTtxDP-TLKvrYCMy2yfMdv8EKeS8i5rMw1Tb38" />
        </div>
    </header>
    <main className="relative">
        {/*  Hero Section  */}
        <section
            className="relative min-h-[795px] flex flex-col items-center justify-center text-center px-gutter py-24 overflow-hidden">
            {/*  Background Network Graphic Simulation  */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/20 blur-[120px] rounded-full">
                </div>
                <div
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/20 blur-[120px] rounded-full">
                </div>
            </div>
            <div className="relative z-10 max-w-4xl">
                <div
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse"></span>
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest">Neural
                        Network Active</span>
                </div>
                <h2 className="font-display-lg text-display-lg-mobile md:text-display-lg mb-6 leading-tight">
                    Synchronize Your <span
                        className="text-transparent bg-clip-text bg-gradient-to-r from-primary-container to-secondary-fixed-dim">Ecosystem</span>
                </h2>
                <p className="font-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
                    Forge intelligent connections through high-performance AI orchestration. SwipeSync aligns human
                    potential with machine precision in a seamless fluid interface.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        className="bg-gradient-to-r from-primary-container/80 to-secondary-container/80 text-on-primary-container px-8 py-4 rounded-xl font-headline-md text-label-sm font-bold neon-glow hover:scale-105 transition-transform active:scale-95">
                        Get Started
                    </button>
                    <button
                        className="px-8 py-4 rounded-xl border border-white/10 glass-panel font-headline-md text-label-sm font-bold hover:bg-white/5 transition-colors">
                        View Demo
                    </button>
                </div>
                {/*  Social Proof Overlay  */}
                <div className="mt-20 flex flex-col items-center">
                    <div className="flex -space-x-3 mb-4">
                        <img className="w-10 h-10 rounded-full border-2 border-background"
                            data-alt="Close-up portrait of a diverse tech entrepreneur with warm, natural lighting against a minimalist architectural background. The image has a clean, professional finish with high-tech vibes."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFclUB1Z10PKWHR8tuVbApLfOOPcEuIfLR06Y54AuXXwNFmjkxLDvxeL1mg456YY9Tokzv-_Hv4nyFU4Pe_OszEIKyNNK4I38eT5YH9-4DfzCCFtTCzIEQzgHcMd5OIIgQ3Rwy9E2vR8udrbBQJyJw0XMalj6y1Evgvyhjhg0BR3I42ELL7B1SvosH-KmBw2vcwuRpGQz-SN_odbwjM1TP0Tc8ZwWsbDDTWDPzOa_1arRwGqqQUONkqdqJ99vs4k_2Simm-LCkPiQ" />
                        <img className="w-10 h-10 rounded-full border-2 border-background"
                            data-alt="Portrait of a young creative professional woman in a modern workspace. The lighting is soft and airy, with subtle hints of neon accents in the background to match the futuristic design system."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoT3D7HefvNPtM2ZbxOPPOqbUpp_q4YRVY707IJCW5smW5Z7LBkUF5MyG9nCypzVBNdF4CJTPCk5zanUjZdshNPfaxJWGms8W6nVU_Qyi_Bga8OJuULlvu6idUtLwsBAO5TKeWwaHFW1wpAdIgcJR3x_8XYcR4tufa7CR1I2_IMZu5yttyQHhOQEE36UvEwXEErGnPCPR8HILsL0FaBLNQcQ_p3HfkrvSg31n3gav8j10Op6bVqEsQ1_e0MKn3tyRGXMKS6po2Ch4" />
                        <img className="w-10 h-10 rounded-full border-2 border-background"
                            data-alt="A sophisticated male subject in a dark, high-contrast studio setting. His face is partially lit with a cyan rim light that emphasizes the tech-forward, futuristic atmosphere of the AI brand."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQL1zkSnsJsnKRPgmgKMyr_QJSkfUsewECVJ8kNPVC9z86qyWHfCMWxBBskE1gGXgghXnOJZXvwTxSj4XjHByGfs2EHBfQEu7Yhnfss01SdcHMboNMPlxbPif0lvRipzKnEqJaJWvqnjA3Ds4MbvgmeZhSprRhqReNNfuNAALO-CJk0HPLCGAQXRi3o3R2FDi_EnQ0c0WxM1uprkDk4BvcdnIUmS0J_5ls5XBSg4CEuAVIfH4VnBCvlMLnOzER0rqh-_b4j4YFego" />
                        <div
                            className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-high flex items-center justify-center text-[10px] font-bold">
                            +10k</div>
                    </div>
                    <p className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-widest">10k+
                        Connections Synchronized</p>
                </div>
            </div>
        </section>
        {/*  Bento Grid Value Props  */}
        <section className="px-gutter py-24 max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
                {/*  Large Feature Card  */}
                <div
                    className="md:col-span-8 glass-panel p-10 rounded-2xl gradient-border flex flex-col justify-between min-h-[400px]">
                    <div>
                        <div className="w-14 h-14 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6">
                            <span className="material-symbols-outlined text-primary-container" data-icon="psychology"
                                style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                        </div>
                        <h3 className="font-headline-md text-headline-md-mobile text-primary-container mb-4">AI-Powered
                            Matching</h3>
                        <p className="font-body-md text-on-surface-variant max-w-lg">
                            Our proprietary neural engine analyzes multi-dimensional data points to predict the
                            highest-affinity connections within your ecosystem, ensuring every synchronization is
                            purposeful.
                        </p>
                    </div>
                    <div className="mt-8">
                        <img className="w-full h-48 object-cover rounded-xl border border-white/5"
                            data-alt="A complex 3D visualization of a neural network with glowing cyan data nodes and purple energy paths. The aesthetic is deep charcoal and ultra-modern, showcasing artificial intelligence in motion with a cinematic depth of field."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbkZYCzuNqD42NglXJdloyjqBXhXvDVG7OdRXl4WW_5stHwRnTDva1l_qkzvCll60XreIBpJFyDGJNv68UZ0dAm1HzYt2RMJiZ7frJVsbrdSYR1jdRcbNqyeAFvKYEpREAb2oybZE-Efs83RdIhqOXXWgDs6iv29PlmeOlT8xw5k05sbkaPoQZfUerUXLSrn6x9E0_Xn2TtRVM57SzC-4EFAlgMrUaVd2uTjrYX3Y04aVOX_ZPJLmEJOfVkZa0yaFAOstZllB1PXk" />
                    </div>
                </div>
                {/*  Vertical Feature Card  */}
                <div className="md:col-span-4 glass-panel p-10 rounded-2xl gradient-border flex flex-col">
                    <div className="w-14 h-14 rounded-xl bg-secondary-container/10 flex items-center justify-center mb-6">
                        <span className="material-symbols-outlined text-secondary-fixed-dim"
                            data-icon="analytics">analytics</span>
                    </div>
                    <h3 className="font-headline-md text-headline-md-mobile text-secondary-fixed-dim mb-4">Relationship
                        Intelligence</h3>
                    <p className="font-body-md text-on-surface-variant flex-grow">
                        Go beyond surface-level metrics. SwipeSync provides deep behavioral insights into how your
                        network evolves, identifying growth catalysts and hidden friction points.
                    </p>
                    <div className="pt-8 mt-auto">
                        <div
                            className="h-32 w-full bg-white/5 rounded-lg flex items-end gap-1 px-4 py-2 border border-white/5">
                            <div className="bg-primary-container/40 w-full h-1/2 rounded-t-sm"></div>
                            <div className="bg-primary-container/60 w-full h-3/4 rounded-t-sm"></div>
                            <div className="bg-primary-container/80 w-full h-2/3 rounded-t-sm"></div>
                            <div className="bg-primary-container w-full h-full rounded-t-sm"></div>
                            <div className="bg-secondary-container w-full h-4/5 rounded-t-sm"></div>
                        </div>
                    </div>
                </div>
                {/*  Wide Bottom Card  */}
                <div
                    className="md:col-span-12 glass-panel p-10 rounded-2xl gradient-border flex flex-col md:flex-row items-center gap-10">
                    <div
                        className="flex-shrink-0 w-24 h-24 rounded-full bg-tertiary-container/10 flex items-center justify-center">
                        <span className="material-symbols-outlined text-tertiary-fixed-dim text-4xl"
                            data-icon="groups">groups</span>
                    </div>
                    <div className="flex-grow">
                        <h3 className="font-headline-md text-headline-md-mobile text-tertiary-fixed-dim mb-2">Inclusive
                            Networking</h3>
                        <p className="font-body-md text-on-surface-variant max-w-3xl">
                            Our algorithms are calibrated for diversity and ethical orchestration, breaking down echo
                            chambers to foster a truly global and equitable ecosystem.
                        </p>
                    </div>
                    <button
                        className="whitespace-nowrap px-8 py-3 rounded-xl border border-tertiary-fixed-dim/30 text-tertiary-fixed-dim font-bold hover:bg-tertiary-container/5 transition-colors">
                        Learn More
                    </button>
                </div>
            </div>
        </section>
        {/*  Stats Section (Glass Platform)  */}
        <section className="py-24 bg-surface-container-lowest border-y border-white/5">
            <div className="max-w-container-max mx-auto px-gutter grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="text-center">
                    <div className="font-display-lg text-primary-container mb-2">99.8%</div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Match Accuracy</div>
                </div>
                <div className="text-center">
                    <div className="font-display-lg text-secondary-fixed-dim mb-2">2.4M</div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">API Calls/Sec</div>
                </div>
                <div className="text-center">
                    <div className="font-display-lg text-tertiary-fixed-dim mb-2">140+</div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Ecosystem Nodes</div>
                </div>
                <div className="text-center">
                    <div className="font-display-lg text-primary-fixed mb-2">0ms</div>
                    <div className="font-label-sm text-on-surface-variant uppercase tracking-widest">Latency Delay</div>
                </div>
            </div>
        </section>
    </main>
    {/*  Footer  */}
    <footer
        className="bg-surface-container-lowest text-primary-fixed-dim border-t border-white/5 full-width relative w-full py-12 px-gutter flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary-container"
                    data-icon="bubble_chart">bubble_chart</span>
                <span className="font-headline-md text-on-surface font-bold">SwipeSync AI</span>
            </div>
            <p className="font-label-sm text-label-sm text-on-surface-variant">© 2024 SwipeSync AI. Neural Connections
                Secured.</p>
        </div>
        <div className="flex gap-8">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="/third">Terms</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="/third">Privacy</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="/third">Network Stats</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="/third">Contact AI</a>
        </div>
    </footer>
    {/*  BottomNavBar (Mobile Only)  */}
    <div
        className="md:hidden bg-surface-container-highest/60 backdrop-blur-2xl text-primary-fixed-dim border-t border-white/10 docked full-width bottom-0 rounded-t-xl shadow-[0_-8px_32px_rgba(0,0,0,0.3)] fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-safe pt-2">
        <div
            className="flex flex-col items-center justify-center bg-secondary-container/30 text-secondary-fixed-dim rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(220,184,255,0.2)] scale-90">
            <span className="material-symbols-outlined" data-icon="swipe">swipe</span>
            <span className="font-label-sm text-label-sm">Match</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined" data-icon="analytics">analytics</span>
            <span className="font-label-sm text-label-sm">Insights</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined" data-icon="hub">hub</span>
            <span className="font-label-sm text-label-sm">Graph</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined" data-icon="query_stats">query_stats</span>
            <span className="font-label-sm text-label-sm">Admin</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined" data-icon="person">person</span>
            <span className="font-label-sm text-label-sm">Profile</span>
        </div>
    </div>

    </div>
  );
}

export default SecondPage;
