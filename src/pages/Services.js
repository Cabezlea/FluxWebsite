import { motion } from 'framer-motion';
import PricingCalculator from '../components/Pricing/PricingCalculator';

const Services = () => {
    const services = [
        {
            title: "Order Processing",
            description: "$1.50 per item with volume discounts",
            icon: "📦"
        },
        {
            title: "Storage Solutions",
            description: "14-day free storage + climate control",
            icon: "🏭"
        },
        {
            title: "Custom Packaging",
            description: "Branded packaging solutions",
            icon: "🎁"
        }
    ];

    return (
        <div className="min-h-screen pt-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl font-bold mb-12 text-center"
                >
                    Our Services
                </motion.h2>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.2 }}
                            className="glass-morphism rounded-xl p-6 hover:glow-effect"
                        >
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                            <p className="text-gray-400">{service.description}</p>
                        </motion.div>
                    ))}
                </div>

                <PricingCalculator />
            </div>
        </div>
    );
};

export default Services;
