import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Activity, Sparkles } from 'lucide-react';
import { Toaster } from '@/components/ui/toaster';
import { useToast } from '@/components/ui/use-toast';

function App() {
    const { toast } = useToast();

    const handleLinkedInClick = () => {
        toast({
            title: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
        });
    };

    return (
        <>
            <Helmet>
                <title>PulsarMetric - Yakında</title>
                <meta name="description" content="PulsarMetric - Yakında sizlerle!" />
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden">
                {/* Redesigned Star/Sparkle Decoration - Vibrant & Floating */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(25)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            initial={{
                                opacity: 0,
                                x: Math.random() * window.innerWidth,
                                y: Math.random() * window.innerHeight,
                                rotate: 0
                            }}
                            animate={{
                                opacity: [0.3, 0.8, 0.3],
                                scale: [0.8, 1.2, 0.8],
                                rotate: [0, 90, 180]
                            }}
                            transition={{
                                duration: 4 + Math.random() * 4,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`
                            }}
                        >
                            <Sparkles className="w-6 h-6 text-sky-300" strokeWidth={1.5} />
                        </motion.div>
                    ))}
                </div>

                {/* EKG-inspired decorative lines - Top */}
                <div className="absolute top-0 left-0 w-full h-[50%] pointer-events-none opacity-20">
                    <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 300" xmlns="http://www.w3.org/2000/svg">
                        <motion.path
                            d="M 0 150 L 300 150 L 330 50 L 360 250 L 390 150 L 600 150 L 630 100 L 660 200 L 690 150 L 900 150 L 930 50 L 960 250 L 990 150 L 1440 150"
                            stroke="#3B82F6"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                    </svg>
                </div>

                {/* Main content */}
                <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center max-w-2xl"
                    >
                        {/* Logo/Icon made static */}
                        <div
                            className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 shadow-xl shadow-blue-200 border-4 border-white mb-8"
                        >
                            <Activity className="w-12 h-12 text-white" strokeWidth={2.5} />
                        </div>

                        {/* Company name - Vibrant Blue Gradient */}
                        <motion.h1
                            className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-tight mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            PulsarMetric
                        </motion.h1>

                        {/* Coming soon text - Clean, no stars */}
                        <motion.div
                            className="mb-12"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h2 className="text-3xl md:text-4xl font-semibold text-slate-600 uppercase tracking-[0.2em]">
                                Yakında
                            </h2>
                        </motion.div>

                        {/* Social links - Both Vibrant & Visible */}
                        <motion.div
                            className="flex items-center justify-center gap-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                        >
                            {/* Instagram - Vibrant Gradient */}
                            <a
                                href="https://www.instagram.com/pulsarmetric/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Instagram className="w-6 h-6 text-white" strokeWidth={2} />
                                </motion.div>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Instagram
                                </span>
                            </a>

                            {/* LinkedIn - Vibrant Blue (Active-looking) */}
                            <button
                                onClick={handleLinkedInClick}
                                className="group relative cursor-pointer"
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-2xl bg-[#0077b5] flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
                                    whileHover={{ scale: 1.1, rotate: -5 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Linkedin className="w-6 h-6 text-white" strokeWidth={2} />
                                </motion.div>
                                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    Yakında
                                </span>
                            </button>
                        </motion.div>

                        {/* Decorative Line below logos - Width approx 1.4x of a typical header */}
                        <div className="mt-12 w-full flex justify-center">
                            <motion.div
                                className="h-1 bg-gradient-to-r from-transparent via-slate-300 to-transparent w-[140%]"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.8 }}
                            />
                        </div>
                    </motion.div>
                </div>

                <Toaster />
            </div>
        </>
    );
}

export default App;