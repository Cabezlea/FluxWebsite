import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import Swal from 'sweetalert2';

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                {
                    from_name: data.name,
                    from_email: data.email,
                    message: data.message,
                    to_email: 'support@fluxtexas.com',
                    to_name: 'Support Team',
                    reply_to: data.email
                },
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            );

            Swal.fire({
                icon: 'success',
                title: 'Message Sent!',
                text: 'We\'ll respond within 2 business hours',
                confirmButtonColor: '#007bff',
                background: '#111',
                color: '#fff'
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Failed to Sendd',
                text: 'Please try again or contact us directly',
                confirmButtonColor: '#007bff',
                background: '#111',
                color: '#fff'
            });
            console.error('EmailJS Error:', error);
        }
        setIsLoading(false);
    };

    return (
        <div className="min-h-screen pt-20 bg-black">
            <div className="max-w-3xl mx-auto px-4 py-12">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="glass-morphism rounded-2xl p-8"
                >
                    <h2 className="text-3xl font-bold mb-8">Contact Our Team</h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {/* Name Field */}
                        <div>
                            <label className="flex items-center gap-3 mb-2">
                                <FiUser className="text-blue-500" />
                                Full Name
                            </label>
                            <input
                                {...register('name', { required: true })}
                                className="w-full bg-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.name && <span className="text-red-500">Please enter your name</span>}
                        </div>

                        {/* Email Field */}
                        <div>
                            <label className="flex items-center gap-3 mb-2">
                                <FiMail className="text-blue-500" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: true,
                                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                })}
                                className="w-full bg-gray-900 rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.email && <span className="text-red-500">Valid email required</span>}
                        </div>

                        {/* Message Field */}
                        <div>
                            <label className="flex items-center gap-3 mb-2">
                                <FiMessageSquare className="text-blue-500" />
                                Message
                            </label>
                            <textarea
                                {...register('message', { required: true })}
                                className="w-full bg-gray-900 rounded-lg p-3 h-32 focus:ring-2 focus:ring-blue-500"
                            />
                            {errors.message && <span className="text-red-500">Message required</span>}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-all font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    {/* Real Contact Info */}
                    <div className="mt-8 pt-8 border-t border-gray-700">
                        <div className="grid md:grid-cols-2 gap-8 text-gray-300">
                            <div>
                                <h3 className="font-semibold mb-3">Visit Us</h3>
                                <p className="text-sm">
                                    220 Barren Springs Drive #20<br/>
                                    Houston, TX 77090<br/>
                                    Open Mon-Fri 8AM-6PM CST
                                </p>
                            </div>
                            <div>
                                <h3 className="font-semibold mb-3">Direct Contact</h3>
                                <p className="text-sm">
                                    Phone: (936) 668-1606<br/>
                                    Email: support@fluxtexas.com<br/>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Live Chat Indicator */}
                    <div className="mt-8 flex items-center gap-3 text-green-400">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span>Live chat available 24/7</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;
