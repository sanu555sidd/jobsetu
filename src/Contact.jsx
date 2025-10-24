import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Job Setu! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-gray-100 px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-indigo-500 mb-3">
            Contact Us
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have questions, feedback, or need help? Reach out to us — we’d love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700"
          >
            <h2 className="text-2xl font-semibold text-indigo-400 mb-4">
              Get in Touch
            </h2>
            <div className="flex items-center space-x-4">
              <Mail className="text-indigo-400" />
              <p>support@jobsetu.com</p>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-indigo-400" />
              <p>+91 98765 43210</p>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-indigo-400" />
              <p>Pune, Maharashtra, India</p>
            </div>
            <p className="text-gray-400 pt-4 leading-relaxed">
              Our team is available 7 days a week to help with any queries regarding
              job applications, postings, or technical support.
            </p>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-700 space-y-6"
          >
            <div>
              <label className="block text-gray-300 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-100"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="flex items-center justify-center w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-500 transition-all"
            >
              <Send className="mr-2 w-5 h-5" />
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
}
