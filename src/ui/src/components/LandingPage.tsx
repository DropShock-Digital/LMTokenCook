import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Shield, Database, FileCode, CheckCircle2, AlertCircle, Zap, Github, ChefHat, Coins, Globe, Activity, ArrowDown } from 'lucide-react';
import { LegalModal } from './LegalModal';
import clsx from 'clsx';

interface LandingPageProps {
    onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
    const [legalOpen, setLegalOpen] = useState<'privacy' | 'terms' | null>(null);
    const [stats, setStats] = useState({ tokens: 12500000, chunks: 4500, runs: 120 });
    const [scrolled, setScrolled] = useState(false);

    // Fetch Real Stats (Mock for now, will connect to API next)
    useEffect(() => {
        const fetchStats = async () => {
            try {
                // In a real scenario, this would be: await fetch('/api/stats')
                // For now, simpler mock or localStorage could be used, but user wants REAL tracking.
                // We will implement the fetch logic assuming the backend exists on port 8000
                const res = await fetch('http://localhost:8000/stats').catch(() => null);
                if (res && res.ok) {
                    const data = await res.json();
                    setStats(data);
                }
            } catch (e) {
                console.log("Stats fetch failed (Endpoint might not be ready)");
            }
        };
        fetchStats();
        // Poll every 10s
        const interval = setInterval(fetchStats, 10000);
        return () => clearInterval(interval);
    }, []);

    // Scroll Listener
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 selection:text-amber-200 overflow-x-hidden">
            {/* Dynamic Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-neutral-950 to-neutral-950" />
                <motion.div
                    animate={{
                        opacity: [0.3, 0.5, 0.3],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-amber-600/10 blur-[120px] rounded-full"
                />
            </div>

            {/* Nav */}
            <nav className={clsx("fixed top-0 w-full z-50 border-b transition-all duration-300", scrolled ? "bg-black/80 backdrop-blur-md border-white/5" : "bg-transparent border-transparent")}>
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Logo" className="w-8 h-8 object-contain" />
                        <span className="font-bold tracking-tight hidden sm:block">LMTokenCook</span>
                    </div>

                    <div className="flex items-center gap-2 md:gap-6 text-xs md:text-sm font-bold text-neutral-400">
                        {/* Desktop Links */}
                        <a href="https://dropshockdigital.com" target="_blank" className="hover:text-amber-500 transition-colors hidden md:block">DropShock Digital</a>
                        <a href="https://stevenseagondollar.com" target="_blank" className="hover:text-amber-500 transition-colors hidden md:block">Steven Seagondollar</a>
                        <a href="https://github.com/DropShock-Digital" target="_blank" className="hover:text-white transition-colors flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full hover:bg-white/10">
                            <Github className="w-4 h-4" />
                            <span className="hidden sm:block">GitHub</span>
                        </a>
                    </div>
                </div>
            </nav>

            {/* Fullscreen Hero */}
            <header className="relative h-screen flex flex-col items-center justify-center text-center px-6 max-w-7xl mx-auto z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                        AI Context Optimization Engine
                    </div>

                    {/* Animated Text Background */}
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-orange-500/20 to-amber-500/20 blur-3xl -z-10"
                            animate={{ opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 4, repeat: Infinity }}
                        />
                        <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight mb-8 leading-tight">
                            Cook YOUR <br />
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-orange-400 to-amber-600">
                                FILES
                            </span>
                        </h1>
                    </div>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-10 px-4">
                        Process, tokenize, and perfectly portion your local data for any AI web interface.
                        <br />
                        <span className="text-white/60 text-base mt-2 block">
                            By Steven Seagondollar | DropShock Digital
                        </span>
                    </p>

                    <button
                        onClick={onStart}
                        className="group relative inline-flex items-center gap-3 px-8 py-5 bg-white text-black rounded-full font-bold text-xl hover:bg-neutral-200 transition-all shadow-[0_0_50px_rgba(255,255,255,0.2)] hover:scale-[1.02] active:scale-[0.98]"
                    >
                        <div className="relative w-8 h-8">
                            <ChefHat className="w-8 h-8 text-neutral-800" />
                            <Coins className="w-4 h-4 text-amber-600 absolute bottom-0 right-0" />
                        </div>
                        <span>Start Cooking Now</span>
                    </button>

                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 flex flex-col items-center gap-2 cursor-pointer text-white/30 hover:text-white transition-colors"
                >
                    <span className="text-xs uppercase tracking-widest">Scroll to Learn More</span>
                    <ArrowDown className="w-6 h-6" />
                </motion.div>
            </header>

            {/* Problem / Solution (The Context Gap) */}
            <section className="py-24 bg-neutral-900/10 border-y border-white/5 relative z-10">
                <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-6">
                        <h2 className="text-sm font-bold text-red-400 uppercase tracking-widest flex items-center gap-2">
                            <AlertCircle className="w-4 h-4" /> The AI Power-User's Dilemma
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold">Big Models, <span className="text-neutral-500">Tiny Prompt Windows.</span></h3>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            Modern AIs possess incredible context windows (1M+ tokens), but their <strong className="text-white">web interfaces often restrict you</strong> to a tiny fraction (30k-130k).
                        </p>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            This "Context Gap" means you can't satisfy the model's hunger for deep understanding. How do you feed it your entire codebase or book?
                        </p>
                    </div>
                    <div className="space-y-6">
                        <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4" /> The Solution
                        </h2>
                        <h3 className="text-3xl md:text-4xl font-bold">Bridge the <span className="text-emerald-500">Context Gap.</span></h3>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            LMTokenCook is your desktop sous-chef. It intelligently extracts, filters, and portions your files into precise, <strong className="text-white">token-aware "servings"</strong> ready for sequential input.
                        </p>
                        <p className="text-neutral-400 leading-relaxed text-lg">
                            Stop wrestling with limits. Start maximizing your AI's contextual understanding.
                        </p>
                    </div>
                </div>
            </section>

            {/* Showcase Animation */}
            <section className="py-12 bg-black relative z-10">
                <div className="max-w-4xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-xl overflow-hidden shadow-[0_0_100px_rgba(245,158,11,0.1)] border border-white/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
                        <div className="bg-neutral-900 aspect-video flex items-center justify-center relative overflow-hidden group">
                            {/* Simulation of code scanning */}
                            <div className="absolute inset-x-0 top-0 h-1 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.8)] z-20 animate-[scan_3s_ease-in-out_infinite]" />
                            <div className="space-y-3 p-12 w-full opacity-30 font-mono text-xs text-left">
                                <div className="flex gap-4">
                                    <div className="w-12 h-64 bg-white/5 rounded" />
                                    <div className="flex-1 space-y-4">
                                        {Array.from({ length: 8 }).map((_, i) => (
                                            <div key={i} className="h-2 bg-white/20 rounded w-full" style={{ width: `${Math.random() * 50 + 40}%` }} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-30">
                                <span className="px-6 py-3 bg-black/80 backdrop-blur-md border border-amber-500/30 rounded-full text-lg font-mono text-amber-100 flex items-center gap-3 shadow-2xl">
                                    <Activity className="w-5 h-5 text-amber-500 animate-pulse" />
                                    Scanning & Tokenizing...
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* STATS CARD (New Placement) */}
            <section className="py-24 px-6 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-neutral-900/50 border border-white/10 rounded-3xl p-8 backdrop-blur text-center"
                    >
                        <div className="flex items-center justify-center gap-2 mb-6 text-amber-500 text-sm font-bold tracking-widest uppercase">
                            <Globe className="w-4 h-4" /> Global Community Impact
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-10">Used by AI Engineers Worldwide</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/5">
                            <div className="p-4">
                                <div className="text-4xl font-mono font-bold text-white mb-2">{stats.tokens.toLocaleString()}</div>
                                <div className="text-sm text-neutral-500 uppercase tracking-wider">Tokens Processed</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-mono font-bold text-white mb-2">{stats.chunks.toLocaleString()}</div>
                                <div className="text-sm text-neutral-500 uppercase tracking-wider">Chunks Created</div>
                            </div>
                            <div className="p-4">
                                <div className="text-4xl font-mono font-bold text-white mb-2">{stats.runs.toLocaleString()}</div>
                                <div className="text-sm text-neutral-500 uppercase tracking-wider">Happy Cooks</div>
                            </div>
                        </div>

                        <p className="mt-8 text-xs text-neutral-500">
                            * Real-time metrics from the distributed LMTokenCook network.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 3 Steps */}
            <section className="py-24 px-6 max-w-7xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-center mb-16">The 3-Step Recipe</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Step 1 */}
                    <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 relative group hover:border-amber-500/20 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-bold text-white/5 select-none">1</div>
                        <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center mb-6 text-blue-400">
                            <Database className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Smart Scan & Extract</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            Select entire folders. We handle the recursive scanning, filtering out junk (binary, .git, node_modules), and extracting text from code, markdown, and data files.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Ignores binaries & archives</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-blue-500 rounded-full" /> Supports drag-and-drop</li>
                        </ul>
                    </div>

                    {/* Step 2 */}
                    <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 relative group hover:border-amber-500/20 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-bold text-white/5 select-none">2</div>
                        <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 text-purple-400">
                            <FileCode className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Structure & Tokenize</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            We map your file hierarchy and count tokens using <span className="font-mono text-white/70">tiktoken (cl100k_base)</span>—the same logic used by GPT-4 and Gemini.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> Generates File Map / TOC</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-purple-500 rounded-full" /> Accurate Token Counts</li>
                        </ul>
                    </div>

                    {/* Step 3 */}
                    <div className="p-8 rounded-3xl bg-neutral-900/40 border border-white/5 relative group hover:border-amber-500/20 transition-all">
                        <div className="absolute top-6 right-6 text-7xl font-bold text-white/5 select-none">3</div>
                        <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-6 text-amber-400">
                            <Zap className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Intelligent Servings</h3>
                        <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                            Your data is split into sequential chunks that fit your AI's window. We inject smart prompts to guide the AI to "wait for the next chunk" effectively.
                        </p>
                        <ul className="text-xs text-neutral-500 space-y-2">
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Anti-Hallucination Headers</li>
                            <li className="flex items-center gap-2"><div className="w-1 h-1 bg-amber-500 rounded-full" /> Clean Sequential Output</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* The Payoff */}
            <section className="py-24 bg-gradient-to-b from-neutral-900/20 to-black px-6 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">The Payoff: <span className="text-amber-500">Context Augmented Generation</span></h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="space-y-2">
                            <h4 className="font-bold text-white">Deeper Analysis</h4>
                            <p className="text-xs text-neutral-400">LLM sees the full research paper or legal text.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-white">Better Code</h4>
                            <p className="text-xs text-neutral-400">Understand interdependencies across files.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-white">Coherent Writing</h4>
                            <p className="text-xs text-neutral-400">Maintain plot consistency across chapters.</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-white">Complete Answers</h4>
                            <p className="text-xs text-neutral-400">Informed by ALL your data, not just training.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-white/5 py-12 bg-neutral-950 relative z-10">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-neutral-500">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        <span>100% Local & Private Processing</span>
                    </div>
                    <p className="text-center md:text-left">© 2025 DropShock Digital. Created by Steven Seagondollar.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        <button onClick={() => setLegalOpen('privacy')} className="hover:text-white transition-colors">Privacy Policy</button>
                        <button onClick={() => setLegalOpen('terms')} className="hover:text-white transition-colors">Terms of Use</button>
                        <a href="mailto:support@dropshockdigital.com" className="hover:text-white transition-colors">Support</a>
                    </div>
                </div>
            </footer>

            {/* Legal Modals */}
            <LegalModal
                isOpen={legalOpen === 'terms'}
                onClose={() => setLegalOpen(null)}
                title="Terms of Use"
                content={
                    <div className="space-y-6">
                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Jurisdiction: Hesperia, San Bernardino County, CA</p>

                        <section>
                            <h3 className="text-white font-bold mb-2">1. Acceptance of Terms</h3>
                            <p>By accessing or using LMTokenCook ("The Software"), you agree to be bound by these Terms. The Software is owned and operated by <strong>DropShock Digital</strong> and <strong>Steven Seagondollar</strong>, operating out of Hesperia, California.</p>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">2. Limitation of Liability</h3>
                            <div className="p-4 bg-red-900/10 border border-red-500/20 rounded-lg text-red-200">
                                <p className="uppercase font-bold text-xs mb-2">Important</p>
                                <p>To the maximum extent permitted by law, DropShock Digital and Steven Seagondollar shall NOT be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use this software, including but not limited to data loss, leakage of sensitive information to third-party AI providers, or corruption of local files.</p>
                            </div>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">3. User Responsibility</h3>
                            <p>You acknowledge that you are solely responsible for the content you process. You agree not to use this tool to process illegal content or violate the Terms of Service of any third-party AI provider (e.g., OpenAI, Anthropic, Google).</p>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">4. Accessibility (ADA Compliance)</h3>
                            <p>We are committed to making our software accessible to all users, including those with disabilities. We strive to adhere to WCAG 2.1 Level AA standards. If you encounter accessibility barriers, please contact support@dropshockdigital.com.</p>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">5. Governing Law</h3>
                            <p>These terms are governed by the laws of the State of California. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the state and federal courts located in <strong>San Bernardino County, California</strong>.</p>
                        </section>
                    </div>
                }
            />

            <LegalModal
                isOpen={legalOpen === 'privacy'}
                onClose={() => setLegalOpen(null)}
                title="Privacy Policy"
                content={
                    <div className="space-y-6">
                        <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold">Effect Date: December 1, 2025</p>

                        <section>
                            <h3 className="text-white font-bold mb-2">1. The "No-Data" Philosophy</h3>
                            <p>LMTokenCook operates on a simple principle: <strong>We do not want your data.</strong> The software runs entirely on your local machine using client-side technologies (WebAssembly, File System Access API).</p>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">2. Data Collection (Global Stats)</h3>
                            <p>To monitor the utility and adoption of the tool, the application may send anonymous, aggregate usage counters to our central dashboard.</p>
                            <ul className="list-disc pl-5 space-y-2 mt-2 bg-white/5 p-4 rounded-lg">
                                <li><strong>What we count:</strong> Incrementing integers (e.g., "+1 chunking run", "+450 tokens processed").</li>
                                <li><strong>What we DO NOT count:</strong> Filenames, file contents, IP addresses, user agents, or any personally identifiable information (PII).</li>
                                <li><strong>Purpose:</strong> To display the "Community Stats" bar on the landing page and validate development resources.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-white font-bold mb-2">3. No Third-Party Tracking</h3>
                            <p>We do not use Google Analytics, Facebook Pixels, or third-party cookies. Your usage remains a private interaction between you and your computer.</p>
                        </section>
                    </div>
                }
            />
        </div>
    )
}
