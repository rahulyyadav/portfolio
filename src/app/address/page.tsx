"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

interface ContentItem {
  subtitle: string;
  text?: string;
  subtext?: string;
  link?: string;
  icon?: React.ReactNode;
}

const AddressPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const content: ContentItem[] = [
    {
      subtitle: "📍 Where I'm Based",
      text: "VIT Vellore, Tamil Nadu, India",
      subtext: "(Native: Siraha, Nepal)",
    },
    {
      subtitle: "🌍 Open to Opportunities",
      text: "Remote | India | USA | Europe",
      subtext: "(Austria preferred for 2026)",
    },
    {
      subtitle: "🤝 Available For",
      text: "Freelance, Internship, or Full-time Roles",
    },
    {
      subtitle: "Connect With Me",
      icon: (
        <div className="flex justify-center gap-6 mt-2">
          <Link
            href="mailto:rahulyyadav21@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          >
            <EnvelopeIcon className="w-6 h-6" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rahulyyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link
            href="https://x.com/_rahulyyadav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl w-full px-4"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Address</h1>
          <p className="text-gray-400 text-lg md:text-xl">
            Feel free to reach out for collaboration, hiring, or any meaningful
            opportunity. I'm always open to good conversations and great
            projects.
          </p>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="space-y-4"
        >
          {content.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + idx * 0.1 }}
              className="group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300 text-center"
            >
              <h3 className="text-lg font-semibold mb-1 text-gray-300">
                {item.subtitle}
              </h3>
              {item.text && <p className="text-gray-400">{item.text}</p>}
              {item.subtext && (
                <p className="text-gray-500 text-sm mt-1">{item.subtext}</p>
              )}
              {item.icon}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AddressPage;
