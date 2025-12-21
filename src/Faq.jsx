import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    id: 1,
    category: "General",
    question: "What is Job Setu?",
    answer:
      "Job Setu is a platform connecting job seekers and employers across various professions like teachers, doctors, and engineers, simplifying the hiring process.",
  },
  {
    id: 2,
    category: "Account",
    question: "How do I create an account?",
    answer:
      "Click on 'Sign Up' on the homepage. Choose your role (Employer or Job Seeker), enter details, and verify your email to start using Job Setu.",
  },
  {
    id: 3,
    category: "Job Posting",
    question: "How can I post a job?",
    answer:
      "Employers can log in, go to the dashboard, and click 'Post a Job'. Fill in job details such as title, description, and profession before submitting.",
  },
  {
    id: 4,
    category: "Job Seeking",
    question: "How do I apply for jobs?",
    answer:
      "As a job seeker, log in and browse available jobs. Once you find a role that fits, click 'Apply Now' and upload your resume.",
  },
  {
    id: 5,
    category: "Verification",
    question: "Are job postings verified?",
    answer:
      "Yes, Job Setu verifies all job postings before they are listed to ensure authenticity and security.",
  },
  {
    id: 6,
    category: "Support",
    question: "How do I contact support?",
    answer:
      "You can reach us anytime at support@jobsetu.com or through the 'Contact Us' page on the website.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  const toggleFAQ = (id) => {
    setActive(active === id ? null : id);
  };

  return (
    <section id="faq" className="min-h-screen bg-gradient-to-b from-gray-900 to-black py-16 px-6 sm:px-10 text-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-indigo-500 mb-3">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Find answers about using Job Setu for posting, applying, and managing jobs.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gray-800 border border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
              >
                <div>
                  <span className="text-sm text-indigo-400 font-semibold">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-medium text-gray-100 mt-1">
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`text-2xl font-bold transition-transform ${
                    active === faq.id ? "rotate-45 text-indigo-400" : "text-gray-500"
                  }`}
                >
                  +
                </div>
              </button>

              <AnimatePresence initial={false}>
                {active === faq.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-5 border-t border-gray-700"
                  >
                    <p className="mt-3 text-indigo-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400">
          Still have questions?{" "}
          <a
            href="#contact"
            className="text-indigo-400 font-medium hover:underline"
          >
            Contact our support team
          </a>
          
        </div>
      </div>
    </section>
  );
}
