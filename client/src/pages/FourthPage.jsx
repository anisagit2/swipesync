function FourthPage() {
  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden dark min-h-screen lg:pl-72">
      
    {/*  TopAppBar  */}
    <header
        className="bg-surface/50 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex justify-between items-center px-gutter py-4 w-full sticky top-0 z-50">
        <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">bubble_chart</span>
            <span
                className="font-headline-md text-headline-md-mobile font-bold tracking-tighter text-primary-container">SwipeSync
                AI</span>
        </div>
        <div className="flex items-center gap-4">
            <div className="hidden md:flex gap-6 items-center">
                <span
                    className="font-label-sm text-label-sm text-primary-fixed-dim hover:text-primary-container transition-colors duration-200 cursor-pointer">Match</span>
                <span
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors duration-200 cursor-pointer">Insights</span>
                <span
                    className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-container transition-colors duration-200 cursor-pointer">Graph</span>
            </div>
            <img alt="User profile photo" className="w-10 h-10 rounded-full border-2 border-primary-container/30"
                data-alt="A professional headshot of a modern user with a clean, tech-focused aesthetic. The person is set against a blurred background of a high-tech office with cool blue and deep charcoal lighting. The lighting is soft and professional, emphasizing a sophisticated, expert persona that aligns with the premium futuristic minimalist UI style."
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeoPztYuDGLc9lKCH8oa9Bs9beKItPBVJnZyu9ZrejFRhpzh8X2vAMdLsLAFFJyGAiZe_mEFZL37vQ4Cyh5Y9aT9jHBCcHkcEKwq-ZKI5zjqaj1GJgwyTSCQjXXtwY-FRWnxVFr3eOYvpsH9-sXW06lX4af3otd9p1Qe5ci5XhTdCNQvunOpULO9h8OHOZgyQl18kjM10eTmUDowDxUK7BCynBgXVfEEnfOjKSay2oZV3rZRcWGi2ae3ppFT8rZRm7hbFNF0fQw6Y" />
        </div>
    </header>
    <main
        className="min-h-[calc(100vh-160px)] relative network-grid pt-8 pb-32 md:pb-8 flex flex-col items-center justify-center">
        {/*  Abstract Background Elements  */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-container/5 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-container/5 rounded-full blur-[120px]">
            </div>
        </div>
        {/*  Matching Interface Content  */}
        <div className="container-max mx-auto px-gutter relative z-10 flex flex-col items-center">
            {/*  Compatibility Highlight (Floating Badge)  */}
            <div
                className="mb-8 glass-panel px-6 py-2 rounded-full border-primary-container/20 flex items-center gap-2 animate-pulse">
                <span className="w-2 h-2 bg-primary-container rounded-full shadow-[0_0_8px_#00f2ff]"></span>
                <span className="font-label-sm text-label-sm text-primary-container tracking-widest">NEURAL ALIGNMENT
                    DETECTED</span>
            </div>
            {/*  Card Stack Container  */}
            <div className="relative w-full max-w-[480px] aspect-[3/4.5] md:aspect-[3/4]">
                {/*  Background Shadow Cards  */}
                <div className="absolute inset-0 translate-y-4 scale-95 glass-panel rounded-2xl opacity-40"></div>
                <div className="absolute inset-0 translate-y-2 scale-[0.975] glass-panel rounded-2xl opacity-70"></div>
                {/*  Primary Active Card  */}
                <div className="absolute inset-0 glass-panel rounded-2xl overflow-hidden shadow-2xl border-white/10 group">
                    {/*  Profile Image  */}
                    <div className="relative h-2/3 w-full">
                        <img alt="Sarah Chen" className="w-full h-full object-cover"
                            data-alt="A portrait of Sarah Chen, a professional tech architect with an intelligent and approachable expression. She is in a sleek, modern architectural space with glass and steel elements. The lighting is cinematic with subtle cyan and purple rim lights, creating a high-tech developer environment aesthetic. The overall mood is one of leadership and innovation."
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC700oOcxS4eZQn89s6pYX5FptpOuJO8Uj08LWt6vO0C0s66oONftLGlD3na1QOS3zwzN1kI7Gg52j9wsOrU-9WtNEV_Id6MkZDpoFn_WazFVsg3QLwCSmXkk1nPW8tTGtMyiQyPcm1QgqJFL_SoPtQK-DDZSspqfIvu-i_-ttcALl-PknTZ_c7xAX_UPZrDlrhjih6kQW-PVc1RsnPf1L3rumtbl6x6qHF_dSeZAI51YXw-CW5TeFd0snWvcjv_kNafIaiBfsq_-Y" />
                        {/*  Overlay Info  */}
                        <div
                            className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="font-headline-md text-white text-3xl font-bold">Sarah Chen</h2>
                                    <p className="text-primary-container font-medium">Tech Architect</p>
                                </div>
                                <div
                                    className="bg-primary-container/20 backdrop-blur-md border border-primary-container/40 rounded-xl p-3 text-center">
                                    <p
                                        className="text-[10px] font-label-sm text-on-primary-container uppercase tracking-tighter">
                                        Match Score</p>
                                    <p className="text-2xl font-bold text-primary-container leading-none">98%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  Profile Details  */}
                    <div className="p-6 space-y-4">
                        <div className="flex flex-wrap gap-2">
                            <span
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] font-label-sm text-on-surface-variant">AI
                                Engineering</span>
                            <span
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] font-label-sm text-on-surface-variant">Scaling
                                Systems</span>
                            <span
                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[12px] font-label-sm text-on-surface-variant">Advisory</span>
                        </div>
                        <div className="glass-panel p-4 rounded-xl border-secondary-container/20 bg-secondary-container/5">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="material-symbols-outlined text-secondary-fixed-dim text-sm"
                                    style={{ fontVariationSettings: "'FILL' 1" }}>psychology</span>
                                <p className="text-[11px] font-label-sm text-secondary-fixed-dim uppercase tracking-widest">
                                    Why You Match</p>
                            </div>
                            <p className="text-sm text-on-surface-variant leading-relaxed">
                                Sarah's expertise in distributed AI matches your current infrastructure bottleneck. Her
                                advisory goal aligns with your Q4 roadmap for scaling neural nodes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Control Actions  */}
            <div className="mt-12 flex items-center gap-12">
                {/*  Skip Button  */}
                <button
                    className="w-16 h-16 rounded-full glass-panel border-error/30 flex items-center justify-center group hover:bg-error/10 hover:border-error transition-all active:scale-90 glow-magenta">
                    <span
                        className="material-symbols-outlined text-error text-3xl group-hover:rotate-12 transition-transform">close</span>
                </button>
                {/*  Sync Button  */}
                <button
                    className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-container/80 to-secondary-container/80 flex items-center justify-center group hover:scale-105 transition-all shadow-[0_0_40px_rgba(0,242,255,0.3)] active:scale-95 glow-cyan">
                    <div className="flex flex-col items-center">
                        <span className="material-symbols-outlined text-on-primary-container text-4xl"
                            style={{ fontVariationSettings: "'FILL' 1" }}>sync</span>
                        <span className="text-[10px] font-bold text-on-primary-container tracking-widest mt-1">SYNC</span>
                    </div>
                </button>
                {/*  Info Button  */}
                <button
                    className="w-16 h-16 rounded-full glass-panel border-primary-container/30 flex items-center justify-center group hover:bg-primary-container/10 hover:border-primary-container transition-all active:scale-90 glow-cyan">
                    <span className="material-symbols-outlined text-primary-container text-3xl">info</span>
                </button>
            </div>
        </div>
    </main>
    {/*  BottomNavBar  */}
    <nav
        className="fixed bottom-0 left-0 w-full z-50 bg-surface-container-highest/60 backdrop-blur-2xl border-t border-white/10 flex justify-around items-center px-4 pb-safe pt-2 md:hidden shadow-[0_-8px_32px_rgba(0,0,0,0.3)]">
        <div
            className="flex flex-col items-center justify-center bg-secondary-container/30 text-secondary-fixed-dim rounded-xl px-4 py-1.5 shadow-[0_0_15px_rgba(220,184,255,0.2)]">
            <span className="material-symbols-outlined">swipe</span>
            <span className="font-label-sm text-label-sm mt-0.5">Match</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-label-sm text-label-sm mt-0.5">Insights</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined">hub</span>
            <span className="font-label-sm text-label-sm mt-0.5">Graph</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined">query_stats</span>
            <span className="font-label-sm text-label-sm mt-0.5">Admin</span>
        </div>
        <div
            className="flex flex-col items-center justify-center text-on-surface-variant/80 px-4 py-1.5 hover:bg-white/5 transition-all">
            <span className="material-symbols-outlined">person</span>
            <span className="font-label-sm text-label-sm mt-0.5">Profile</span>
        </div>
    </nav>
    {/*  NavigationDrawer (Desktop Only Hidden by default, shown for structure)  */}
    <aside
        className="fixed left-0 top-0 h-full z-[60] py-gutter px-4 bg-surface-dim/95 backdrop-blur-md border-r border-white/10 shadow-2xl shadow-surface-container-lowest h-full w-72 rounded-r-2xl hidden lg:block">
        <div className="flex items-center gap-3 mb-10 px-2">
            <span className="material-symbols-outlined text-primary-container text-3xl">bubble_chart</span>
            <span className="font-headline-md text-primary-container font-bold tracking-tighter">SwipeSync</span>
        </div>
        <div className="space-y-2">
            <div
                className="bg-primary-container/10 text-primary-fixed-dim font-bold border-l-4 border-primary-container flex items-center gap-4 py-3 px-4 rounded-r-lg transition-transform translate-x-1 cursor-pointer">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>dashboard</span>
                <span className="font-body-md text-body-md">Ecosystem Overview</span>
            </div>
            <div
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high flex items-center gap-4 py-3 px-4 rounded-lg transition-all cursor-pointer">
                <span className="material-symbols-outlined">trending_up</span>
                <span className="font-body-md text-body-md">Trend Analysis</span>
            </div>
            <div
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high flex items-center gap-4 py-3 px-4 rounded-lg transition-all cursor-pointer">
                <span className="material-symbols-outlined">groups</span>
                <span className="font-body-md text-body-md">Member Directory</span>
            </div>
            <div
                className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high flex items-center gap-4 py-3 px-4 rounded-lg transition-all cursor-pointer">
                <span className="material-symbols-outlined">psychology</span>
                <span className="font-body-md text-body-md">AI Calibration</span>
            </div>
        </div>
        <div className="absolute bottom-10 left-4 right-4 glass-panel p-4 rounded-xl">
            <div className="flex items-center gap-3">
                <img alt="Admin Avatar" className="w-10 h-10 rounded-full"
                    data-alt="A professional avatar of a senior system administrator. The image features a man with glasses in a dark tech studio. The lighting is moody with purple and indigo hues, maintaining the futuristic aesthetic of the AI platform."
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCS2gs9s-ZiEDL1PXoU96-bp3lk1KxFKT3dfWVTSm6ATKWzxURN3QUCrg0Ca2Av2oCVqJaaoOgzcY7lSfuRZM8N0L4iaMCV0Sy4Ntd_Irt6v_DfVb8b5OA96004HC1d9llN9I2_abTYkHJoGJ7Umw_OTKOU0S78vok31UsvCFkUSb5ME__CEemz1ajTW8EBJVKMLGM7uomVD-yYl581So2i0cmUTiFyMUOtvrNOOxKrkN-ZO_JJBwM9KJ1da-afuGybLZ28-Lh-ZQw" />
                <div>
                    <p className="text-sm font-bold text-primary-fixed-dim">Ecosystem Admin</p>
                    <p className="text-[10px] text-on-surface-variant uppercase tracking-widest">Superuser Access</p>
                </div>
            </div>
        </div>
    </aside>
    {/*  Footer  */}
    <footer
        className="w-full py-12 px-gutter flex flex-col md:flex-row justify-between items-center gap-4 bg-surface-container-lowest border-t border-white/5 relative z-10">
        <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary-fixed-dim">bubble_chart</span>
            <span className="font-label-sm text-label-sm text-primary-fixed-dim">© 2024 SwipeSync AI. Neural Connections
                Secured.</span>
        </div>
        <div className="flex gap-6">
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="#">Terms</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="#">Privacy</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="#">Network Stats</a>
            <a className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed transition-colors"
                href="#">Contact AI</a>
        </div>
    </footer>

    </div>
  );
}

export default FourthPage;
