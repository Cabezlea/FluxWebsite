import { motion } from 'framer-motion';
import { FiBox, FiShield, FiZap, FiMap, FiPackage, FiClock, FiLayout, FiTruck } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Features = () => {
    const navigate = useNavigate();
    const workflowSteps = [
        {
            icon: FiPackage,
            title: "1. Inventory Receiving",
            content: "Daily intake with barcode scanning",
            stats: "2hr average processing"
        },
        {
            icon: FiLayout,
            title: "2. Smart Storage",
            content: "FIFO organization with real-time tracking",
            stats: "Climate-controlled"
        },
        {
            icon: FiClock,
            title: "3. Order Processing",
            content: "24/7 pick-pack operations",
            stats: "100% accuracy guarantee" // Changed from 99.9%
        },
        {
            icon: FiTruck,
            title: "4. Shipping Out",
            content: "Carrier optimization & tracking",
            stats: "Daily pickup cutoff: 4PM CST"
        }
    ];

    return (
        <section className="py-20 px-4 relative bg-gradient-to-b from-black to-gray-900">
            <div className="max-w-7xl mx-auto">
                {/* Core Value Proposition - NO CHANGES */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-blue-400 bg-clip-text text-transparent">
                        Full-Cycle Fulfillment Simplified
                    </h2>
                    <p className="text-gray-400 max-w-3xl mx-auto text-lg">
                        From warehouse receiving to customer doorstep - all under one roof
                    </p>
                </motion.div>

                {/* Animated Workflow - ONLY SPACING CHANGES */}
                <div className="grid md:grid-cols-4 gap-8 mb-20"> {/* Changed gap-4 to gap-8 */}
                    {workflowSteps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="glass-morphism p-6 rounded-2xl hover:glow-effect">
                                <step.icon className="text-4xl mb-4 text-blue-500 transition-transform group-hover:scale-110" />
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400 mb-3">{step.content}</p>
                                <div className="text-blue-400 text-sm font-mono">
                                    {step.stats}
                                </div>
                            </div>
                            {index < 3 && (
                                <div className="hidden md:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Technology Stack - API REFERENCES REMOVED */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="glass-morphism rounded-2xl p-8 mb-20"
                >
                    <div className="text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-bold mb-4">Precision Technology Stack</h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Integrated systems for flawless operations
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Inventory Management",
                                content: "Zoho Inventory integration with real-time sync",
                                icon: "📦",
                                stats: "Auto low-stock alerts"
                            },
                            {
                                title: "Order Automation",
                                content: "Instant import from all major platforms",
                                icon: "⚡",
                                stats: "Shopify, WooCommerce, BigCommerce"
                            },
                            {
                                title: "Shipment Tracking",
                                content: "Live updates with carrier integration", // Changed from "carrier API integration"
                                icon: "📡",
                                stats: "UPS, FedEx, USPS, DHL"
                            }
                        ].map((tech, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 border border-gray-700 rounded-xl"
                            >
                                <div className="text-4xl mb-4">{tech.icon}</div>
                                <h4 className="text-xl font-bold mb-2">{tech.title}</h4>
                                <p className="text-gray-400 mb-3">{tech.content}</p>
                                <div className="text-blue-400 text-sm font-mono">
                                    {tech.stats}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Strategic Advantage - NO CHANGES */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid md:grid-cols-2 gap-8 items-center"
                >
                    <div className="space-y-6">
                        <h3 className="text-2xl md:text-4xl font-bold">
                            Why Texas?<br/>
                            <span className="text-blue-400">America's Logistics Crossroads</span>
                        </h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-center gap-3">
                                <FiMap className="text-blue-500 flex-shrink-0" />
                                <span>Central location = 35% lower shipping costs</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiClock className="text-blue-500 flex-shrink-0" />
                                <span>24/7 operations with same-day processing</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <FiShield className="text-blue-500 flex-shrink-0" />
                                <span>$1M inventory insurance on all goods</span>
                            </li>
                        </ul>
                    </div>
                    <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                        <iframe
                            title="Warehouse Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.341435746897!2d-95.46946672401706!3d29.800822734973395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3db5d58f38b%3A0x4e8d1f6285d924e7!2s220%20Barren%20Springs%20Dr%20%2320%2C%20Houston%2C%20TX%2077090!5e0!3m2!1sen!2sus!4v1719000000000!5m2!1sen!2sus"
                            className="w-full h-full"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </motion.div>

                {/* CTA Section - NO CHANGES */}
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    className="text-center mt-20"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">
                        Ready to Streamline Your Fulfillment?
                    </h3>
                    <button
                        onClick={() => navigate('/contact')}
                        className="bg-blue-600 hover:bg-blue-700 px-12 py-4 rounded-xl text-lg font-bold glow-effect transition-all duration-300 hover:scale-105"
                    >
                        Start Your Free Trial
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
