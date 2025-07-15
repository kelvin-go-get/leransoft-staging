import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
    return (
        <section id="contact" className="bg-white py-20 px-5 lg:px-20">
            {/* Main Section Title */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-bold text-blue-950 mb-3">Contact Learnsoft</h1>
                <p className="text-gray-600 text-lg">
                    Have a question, proposal, or want to work with us? Reach out — we're here to help!
                </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                {/* Contact Info */}
                <motion.div
                    initial={{ x: -60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-bold text-blue-950 mb-6">Get in Touch</h2>
                    <p className="text-gray-600 mb-6">
                        Let’s talk! Fill out the form or reach us directly — we’re here to support your digital transformation journey.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-orange-500 text-xl mt-1" />
                            <p>123 Smart Avenue, Nairobi, Kenya</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-orange-500 text-xl mt-1" />
                            <p>+254 700 000 000</p>
                        </div>
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-orange-500 text-xl mt-1" />
                            <p>info@learnsoft.co.ke</p>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    initial={{ x: 60, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gray-50 p-8 rounded-lg shadow-lg space-y-6"
                >
                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your name"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-1 text-sm font-medium text-gray-700">
                            Message
                        </label>
                        <textarea
                            rows={5}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                    >
                        Send Message
                    </button>
                </motion.form>
            </div>

            {/* Google Map */}
            <div className="mt-20 rounded-lg overflow-hidden shadow-lg">
                <iframe
                    title="Learnsoft Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.111718117084!2d36.8219466!3d-1.2920657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d479360a91%3A0x8c2f7d63e40758e3!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1715694189658"
                    width="100%"
                    height="300"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </section>
    );
};

export default ContactUs;
