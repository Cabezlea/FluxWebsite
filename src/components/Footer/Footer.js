import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="bg-gray-900/90 border-t border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid md:grid-cols-4 gap-8 text-gray-300">

                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold">FLUX TX LLC</h3>
                        <p className="text-sm">
                            Texas Business License: 32049238749<br/>
                            Insured & Bonded
                        </p>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FiPhone className="text-blue-500" />
                            <span>(936) 668-1606</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <FiMail className="text-blue-500" />
                            <span>support@fluxtx.com</span>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FiMapPin className="text-blue-500" />
                            <span>
                                220 Barren Springs Dr<br/>
                                Houston, TX 77090
                            </span>
                        </div>
                    </div>

                    {/* Hours - UPDATED WITH 24/7 SUPPORT */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <FiClock className="text-blue-500" />
                            <span>
                                24/7 Emergency Support<br/>
                                Mon-Fri: 8AM-6PM<br/>
                                Sat: 9AM-1PM
                            </span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} FLUX TX LLC - Texas Fulfillment Services
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
