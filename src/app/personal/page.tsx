"use client";

import React from "react";
import { motion } from "framer-motion";

const PersonalLife = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const sections = [
    {
      title: "🇳🇵 Where I'm From",
      content:
        "I was born and raised in Nepal — a beautiful yet underdeveloped country that inspires me every day to dream beyond borders. My goal isn't just personal success; I want to contribute meaningfully to Nepal's growth through innovation, technology, and eventually policy.\n\nI'm not driven just by money — although I do aim to crack a ₹1CR+ role soon — my real mission is to impact the world through meaningful development. I believe in building tools and platforms that solve real problems, uplift communities, and leave a lasting difference. I value execution over talk, learning by doing, and using technology as a force for good.",
      list: [
        "Build powerful tech platforms that scale globally",
        "Establish a business empire rooted in ethics and innovation",
        "Empower Nepali youth with opportunities and skills",
        "Lay the groundwork for future political reform in Nepal — starting by encouraging my father's leadership and stepping in myself at the right time",
        "Deep coding sessions",
        "Building AI/VR and cloud-based projects",
        "Exploring startup ideas",
        "Spending focused time with my partner and planning our future",
        "And occasionally pausing to reflect, learn, and grow",
        "I build for real-world impact",
        "I aim to become financially free and globally respected",
        "I never settle — and I'm here for the long game",
        "My journey is just beginning",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Personal Life
            </h1>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              Hi, I'm Rahul — a final-year Computer Science student at VIT
              Vellore, a self-taught developer, and an aspiring entrepreneur
              with a relentless drive to build technology that creates real
              impact. Beyond writing code or chasing tech trends, my life is
              anchored in purpose, values, and a clear long-term aim.
            </p>
          </motion.div>

          {/* Content Sections */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="space-y-12"
          >
            {sections.map((section, index) => (
              <motion.div key={index} variants={fadeInUp} className="group">
                <div
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 
                              border border-white/10 hover:border-white/20 
                              transition-all duration-300 hover:shadow-2xl
                              hover:shadow-amber-500/10 hover:-translate-y-1"
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-amber-400">
                    {section.title}
                  </h2>
                  <div className="space-y-6">
                    {section.content.split("\n\n").map((paragraph, idx) => (
                      <p key={idx} className="text-gray-300 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8">
                    <ul className="space-y-2">
                      {section.list.map((item, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 + idx * 0.1 }}
                          className="flex items-start gap-2 text-gray-300"
                        >
                          <span className="text-amber-400 mt-1">•</span>
                          <span>{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Quote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 text-center italic text-gray-400"
          >
            <p className="text-lg">
              "Even during chaos, I stay rooted in purpose.
              <br />
              Even when I fail, I return stronger, faster, and more focused."
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .shadow-2xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default PersonalLife;
