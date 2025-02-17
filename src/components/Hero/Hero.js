import { motion } from 'framer-motion';
import { FiPackage, FiClock, FiDollarSign } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative h-screen gradient-bg overflow-hidden">

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute w-[200%] h-[200%] animate-rotate bg-grid-blue-500/20" />
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-14 rounded-3xl border-2 border-blue-500 flex justify-center">
                    <div className="w-1 h-3 bg-blue-500 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            <div className="relative z-10 h-full flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 via-blue-400 to-gray-100 bg-clip-text text-transparent">
                            FLUX<span className="text-blue-500">TX</span>
                        </h1>
                        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
                            Precision fulfillment for Texas e-commerce businesses
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="grid md:grid-cols-3 gap-8 mb-16"
                    >
                        {[
                            { icon: FiPackage, title: "$1.50/item", desc: "Flat processing fee" },
                            { icon: FiClock, title: "14 Days Free", desc: "Initial storage period" },
                            { icon: FiDollarSign, title: "$0.025/ft³", desc: "Daily storage after 14 days" },
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                className="glass-morphism p-6 rounded-2xl hover:glow-effect"
                                whileHover={{ scale: 1.05 }}
                            >
                                <stat.icon className="text-4xl mb-4 mx-auto text-blue-500" />
                                <h3 className="text-2xl font-bold mb-2">{stat.title}</h3>
                                <p className="text-gray-400">{stat.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="flex gap-6 justify-center"
                    >
                        <button
                            onClick={() => navigate('/contact')}
                            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-medium glow-effect transition-all duration-300 hover:scale-105"
                        >
                            Start Your Trial
                        </button>
                        <button
                            onClick={() => navigate('/contact')}
                            className="border border-blue-500/50 hover:border-blue-500 px-8 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:scale-105"
                        >
                            Request Quote
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
