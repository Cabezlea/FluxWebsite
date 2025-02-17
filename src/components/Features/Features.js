// components/Features/Features.js
import { motion } from 'framer-motion';

const features = [
    {
        title: "Automated Fulfillment",
        description: "98.9% order accuracy rate",
        icon: "🤖",
        stats: "15min processing time"
    },
    {
        title: "Smart Inventory",
        description: "Real-time stock predictions",
        icon: "📈",
        stats: "99.9% API uptime"
    },
    {
        title: "Global Network",
        description: "5 continental hubs",
        icon: "🌍",
        stats: "24/7 monitoring"
    },
];

const Features = () => {
    return (
        <section className="py-20 px-4 relative bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Why Choose FLUXTX?</h2>
                    <p className="text-gray-400 max-w-3xl mx-auto">
                        Combining military-grade operational precision with startup agility
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0.95 }}
                            whileInView={{ scale: 1 }}
                            className="glass-morphism rounded-2xl p-8 hover:glow-effect transition-all group"
                        >
                            <div className="text-6xl mb-6 transition-transform group-hover:scale-110">
                                {feature.icon}
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-400 mb-4">{feature.description}</p>
                            <div className="text-blue-500 font-mono text-sm">
                                {feature.stats}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
