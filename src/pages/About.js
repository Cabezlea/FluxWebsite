import { motion } from 'framer-motion';
import { FiBox, FiMapPin, FiClock, FiShield } from 'react-icons/fi';

const About = () => {
    return (
        <div className="min-h-screen pt-20 bg-black">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Warehouse Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-morphism rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8">Our Houston Facility</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <FiMapPin className="text-blue-500 text-2xl" />
                                <div>
                                    <h3 className="text-xl font-semibold">Location</h3>
                                    <p className="text-gray-400">
                                        220 Barren Springs Drive #20<br/>
                                        Houston, TX 77090<br/>
                                        Warehouse #: (936) 668-1606
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <FiClock className="text-blue-500 text-2xl" />
                                <div>
                                    <h3 className="text-xl font-semibold">Operating Hours</h3>
                                    <p className="text-gray-400">
                                        Mon-Fri: 8AM - 6PM CST<br/>
                                        Sat: 9AM - 1PM CST<br/>
                                        Closed Sundays
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                            <iframe
                                title="Warehouse Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.341435746897!2d-95.46946672401706!3d29.800822734973395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c3db5d58f38b%3A0x4e8d1f6285d924e7!2s220%20Barren%20Springs%20Dr%20%2320%2C%20Houston%2C%20TX%2077090!5e0!3m2!1sen!2sus!4v1719000000000!5m2!1sen!2sus"
                                className="w-full h-full"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                {/* Process Visualization */}
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    className="grid md:grid-cols-4 gap-6 mb-16"
                >
                    {[
                        { icon: FiBox, title: "1. Receive", text: "Daily inventory intake 8-10AM" },
                        { icon: FiShield, title: "2. Secure", text: "Climate-controlled storage" },
                        { icon: FiClock, title: "3. Process", text: "1-3 business day turnaround" },
                        { icon: FiBox, title: "4. Ship", text: "UPS/FedEx daily pickups 4PM" }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-morphism p-6 rounded-xl hover:glow-effect">
                            <item.icon className="text-3xl mb-4 text-blue-500" />
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-400">{item.text}</p>
                        </div>
                    ))}
                </motion.div>

                {/* Core Values Section */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="glass-morphism rounded-2xl p-8 mb-12"
                >
                    <h2 className="text-3xl font-bold mb-8">Our Texas Values</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                icon: FiBox,
                                title: "Lightning-Fast Processing",
                                desc: "Guaranteed 24-hour order turnaround from receiving to shipping"
                            },
                            {
                                icon: FiShield,
                                title: "Enhanced Security",
                                desc: "24/7 warehouse monitoring + insured inventory protection"
                            },
                            {
                                icon: FiBox,
                                title: "Client-First Approach",
                                desc: "Direct line to our operations team for urgent requests"
                            },
                            {
                                icon: FiBox,
                                title: "Transparent Tracking",
                                desc: "Real-time updates through Zoho Inventory portal"
                            }
                        ].map((value, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ scale: 1.02 }}
                                className="p-6 border border-gray-700 rounded-xl hover:glow-effect"
                            >
                                <value.icon className="text-4xl mb-4 text-blue-500" />
                                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                                <p className="text-gray-400">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Real Warehouse Stats */}
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0 }}
                    className="grid md:grid-cols-3 gap-6 mb-16"
                >
                    {[
                        { stat: "24/7", label: "Order Monitoring" },
                        { stat: "100%", label: "Inventory Accuracy" },
                        { stat: "<24h", label: "Response Time" }
                    ].map((item, idx) => (
                        <div key={idx} className="glass-morphism p-8 text-center rounded-2xl">
                            <div className="text-5xl font-bold mb-2">{item.stat}</div>
                            <div className="text-gray-400">{item.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;
