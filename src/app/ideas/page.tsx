"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const UniversityPage = () => {
  const [activeYear, setActiveYear] = useState<string>("third-year");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Add a useEffect to handle year changes
  useEffect(() => {
    // Reset any animation states or force re-render when year changes
    if (mounted) {
      const timer = setTimeout(() => {
        // This is just to force a re-render with a small delay
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [activeYear, mounted]);

  const yearsData = [
    {
      id: "third-year",
      title: "Projects",
      achievements: [
        {
          id: "break",
          title: "5th Semester Break",
          description:
            "Took a break during 5th semester due to continuous health reasons.",
          date: "September 2024 - December 2024",
          icon: "health",
          tags: ["Health Break", "Personal Development"],
        },
        {
          id: "ai-ml-foundations",
          title: "AI/ML Foundations",
          description:
            "Learned fundamentals of Artificial Intelligence and Machine Learning principles and applications.",
          date: "December 2024",
          icon: "ai",
          tags: ["AI", "Machine Learning", "Data Science"],
        },
        {
          id: "aws-cloud",
          title: "AWS Cloud Computing",
          description:
            "Developed skills in AWS cloud services and infrastructure, deciding to focus on cloud computing for future career.",
          date: "January 2025",
          icon: "cloud",
          tags: ["Cloud Computing", "AWS", "Technical Skill"],
        },
        {
          id: "crypto-tracker",
          title: "Cryptocurrency Price Tracker",
          description:
            "Built a Next.js application with API integration to track cryptocurrency prices in real time.",
          date: "December 2025",
          icon: "chart",
          tags: ["Next.js", "API Integration", "Real-time Data"],
        },
        {
          id: "url-shortener",
          title: "URL Shortener Service",
          description:
            "Developed AWS backend and Next.js frontend URL shortener that received 500+ visits in the first week. Updates planned for QR code generation.",
          date: "February 2025",
          icon: "link",
          link: "https://raba.pages.dev/",
          tags: ["AWS", "Next.js", "Full Stack"],
          image: "/university/3rd-year/ra URL Shortener.jpeg",
        },
        {
          id: "secure-chat",
          title: "Post - Secure Messaging Platform",
          description:
            "Working on a real-time chat application using SHA-256 for user information encryption and AES for message encryption, focused on privacy without data collection for ads.",
          date: "February 2025",
          icon: "security",
          link: "https://github.com/rahulyyadav/Post",
          tags: ["Encryption", "Security", "Web Application"],
        },
        {
          id: "hospital-system",
          title: "Hospital Management System",
          description:
            "Working on a project for hospital management system integrating doctors, patients and hospital staff in a single platform.",
          date: "From February 2025",
          icon: "project",
          tags: ["Healthcare", "Full Stack", "In Progress"],
        },
        {
          id: "patient-hardware",
          title: "Patient Health Data Hardware",
          description:
            "Working on a hardware project to get patient health data and upload it to AWS cloud to get patient statistics.",
          date: "From February 2025",
          icon: "hardware",
          tags: ["Hardware", "IoT", "Healthcare", "AWS"],
        },
      ],
    },
    {
      id: "second-year",
      title: "Second Year (2023-2024)",
      achievements: [
        {
          id: "web-programming",
          title: "Web Programming Excellence",
          description:
            'Achieved "S" grade in web programming courses, demonstrating mastery of key web technologies.',
          date: "February 2024",
          icon: "web",
          tags: ["Web Development", "S Grade", "Academic Excellence"],
        },
        {
          id: "environmental-project",
          title: "Environmental Pollution Awareness Project",
          description:
            "Designed and developed an educational website showcasing different types of pollution affecting our planet.",
          date: "March 2024",
          icon: "environment",
          link: "https://rahulyyadav.github.io/-Environmental-Pollution/",
          tags: ["Environmental Science", "Web Design", "Education"],
          image: "/university/2nd-year/Environmental-pollution.png",
        },
        {
          id: "dsa-practice",
          title: "Data Structures & Algorithms Practice",
          description:
            "Engaged in comprehensive DSA practice and problem-solving to strengthen core programming skills.",
          date: "Anytime 😉",
          icon: "algorithm",
          tags: ["DSA", "Algorithms", "Problem Solving"],
        },
        {
          id: "internship",
          title: "Internship Exploration",
          description:
            "Secured an internship opportunity but couldn't complete due to health reasons.",
          date: "June 2024",
          icon: "work",
          tags: ["Professional Experience", "Career Development"],
        },
        {
          id: "hospital-app",
          title: "Hospital Management Application",
          description:
            "Created an Expo app for a new hospital in Nepal, focusing on patient management and scheduling.",
          date: "July 2024",
          icon: "health",
          link: "https://raba.pages.dev/Zm0QVq",
          tags: ["Mobile Development", "Healthcare", "Expo"],
          image: "/university/2nd-year/aarogya.PNG",
        },
      ],
    },
    {
      id: "first-year",
      title: "First Year (2022-2023)",
      achievements: [
        {
          id: "python-dev",
          title: "Python Development",
          description:
            'Achieved "S" grade with 100/100 in the Python programming course.',
          date: "September 2022",
          icon: "code",
          tags: ["Python", "Programming", "S Grade"],
        },
        {
          id: "todo-project",
          title: "TO-DO List Project",
          description:
            "Built a functional task management application with HTML, CSS, and JavaScript.",
          date: "December 2022",
          icon: "web",
          link: "https://rahulyyadav.github.io/TO-DO/",
          tags: ["Web Development", "JavaScript", "Frontend"],
          image: "/university/1st-year/Todo List.jpeg",
        },
        {
          id: "simon-game",
          title: "Simon Game",
          description:
            "Interactive memory game built with web technologies to test and improve memory skills.",
          date: "January 2023",
          icon: "gamepad",
          link: "https://rahulyyadav.github.io/simon/",
          tags: ["Game Development", "JavaScript", "Frontend"],
          image: "/university/1st-year/Simon Game.jpeg",
        },
        {
          id: "cs50p",
          title: "CS50P Course Completion",
          description:
            "Completed Harvard's CS50 Introduction to Programming with Python free course.",
          date: "September 2022",
          icon: "certificate",
          tags: ["Online Learning", "Python", "Computer Science"],
        },
        {
          id: "cpp",
          title: "C/C++ Programming",
          description:
            'Learned C/C++ programming and achieved "S" grade in the course.',
          date: "March 2023",
          icon: "code",
          tags: ["C++", "Programming", "Core CS"],
        },
      ],
    },
  ];

  const skillsData = {
    technical: [
      { name: "HTML/CSS/JavaScript", proficiency: 90 },
      { name: "React/Next.js", proficiency: 85 },
      { name: "AWS Cloud Services", proficiency: 80 },
      { name: "Python", proficiency: 85 },
      { name: "C/C++", proficiency: 75 },
    ],
    research: [
      { name: "Data Analysis", proficiency: 75 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Technical Writing", proficiency: 80 },
      { name: "Research Methodology", proficiency: 70 },
    ],
    soft: [
      { name: "Team Leadership", proficiency: 85 },
      { name: "Problem Solving", proficiency: 90 },
      { name: "Project Management", proficiency: 80 },
      { name: "Communication", proficiency: 85 },
      { name: "Time Management", proficiency: 80 },
    ],
  };

  // Icon components
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "star":
        return (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        );
      case "computer":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "research":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        );
      case "code":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "web":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
        );
      case "environment":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "health":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        );
      case "algorithm":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
            />
          </svg>
        );
      case "work":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        );
      case "link":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        );
      case "chart":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "security":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        );
      case "cloud":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        );
      case "ai":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        );
      case "gamepad":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        );
      case "certificate":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
            />
          </svg>
        );
      case "project":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
        );
      case "hardware":
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
            />
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        );
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  // Year selector animation when changing years
  const yearTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Side Navigation - Floating - Moved to right side */}
      <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50">
        <div className="flex flex-col items-center gap-6 rounded-full py-5 px-3 bg-white/10 backdrop-blur-sm">
          {yearsData.map((year, index) => (
            <button
              key={year.id}
              onClick={() => setActiveYear(year.id)}
              className={`w-8 h-8 rounded-full transition-all flex items-center justify-center ${
                activeYear === year.id
                  ? "bg-amber-400 shadow-glow"
                  : "bg-white/20 hover:bg-white/30"
              }`}
              aria-label={`Go to ${year.title}`}
            >
              <span
                className={`text-xs font-bold ${
                  activeYear === year.id ? "text-black" : "text-white"
                }`}
              >
                {3 - index}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content - Adjusted to add left padding for main navigation */}
      <div className="pl-16 md:pl-20 pr-16 md:pr-20">
        {/* Header Section */}
        <motion.header
          className="py-20 px-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <motion.h1
              className="text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Projects and Ideas
            </motion.h1>
            <motion.p
              className="text-gray-400 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Explore all projects and ideas using the toggle on the right-hand
              side of the screen.
            </motion.p>

            <motion.div
              className="flex justify-center items-center gap-8 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-sm">P : Projects</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                <span className="text-sm">I : Ideas</span>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Academic Timeline - Completely reworked for reliable rendering */}
        {mounted && (
          <section className="py-16 px-8">
            <div className="max-w-6xl mx-auto">
              <div className="mb-10">
                <h2 className="text-3xl font-bold">
                  {yearsData.find((y) => y.id === activeYear)?.title}
                </h2>
                <div className="h-0.5 w-40 bg-amber-400 mt-2 mb-4"></div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeYear}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-8"
                >
                  {yearsData
                    .find((y) => y.id === activeYear)
                    ?.achievements.map((achievement, index) => (
                      <motion.div
                        key={`${activeYear}-${achievement.id}`}
                        className="border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm overflow-hidden shadow-soft hover:shadow-glow transition-all duration-500"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                        }}
                        whileHover={{
                          y: -5,
                          transition: { duration: 0.2 },
                        }}
                      >
                        <div className="p-6">
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mr-5 p-3 bg-white/10 rounded-lg text-amber-400">
                              {getIcon(achievement.icon)}
                            </div>
                            <div className="flex-1">
                              <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold">
                                  {achievement.title}
                                </h3>
                                <span className="px-3 py-1 text-sm bg-gray-800 rounded-full">
                                  {achievement.date}
                                </span>
                              </div>
                              <p className="text-gray-400 mb-4">
                                {achievement.description}
                              </p>

                              {achievement.image && (
                                <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                                  <Image
                                    src={achievement.image}
                                    alt={achievement.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-500"
                                  />
                                </div>
                              )}

                              <div className="flex flex-wrap gap-2 mb-3">
                                {achievement.tags.map((tag, idx) => (
                                  <span
                                    key={idx}
                                    className="px-2 py-1 text-xs bg-gray-800 rounded-md hover:bg-gray-700 transition-colors"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>

                              {achievement.link && (
                                <Link
                                  href={achievement.link}
                                  target="_blank"
                                  className="inline-flex items-center text-amber-400 hover:text-amber-300 transition-colors text-sm mt-2 group"
                                >
                                  View Project
                                  <svg
                                    className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform duration-300"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </Link>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </section>
        )}

        {/* Skills Section */}
        <motion.section
          className="py-16 px-8 bg-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Skills Developed
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Technical Skills */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-6">Technical Skills</h3>
                <div className="space-y-4">
                  {skillsData.technical.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-amber-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            delay: 1.0 + index * 0.1,
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Research Skills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-6">Research Skills</h3>
                <div className="space-y-4">
                  {skillsData.research.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-amber-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            delay: 1.4 + index * 0.1,
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Soft Skills */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
              >
                <h3 className="text-xl font-bold mb-6">Soft Skills</h3>
                <div className="space-y-4">
                  {skillsData.soft.map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-1">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="bg-amber-400 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.proficiency}%` }}
                          transition={{
                            delay: 1.8 + index * 0.1,
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                        ></motion.div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Footer - Updated to match requirements */}
        <motion.footer
          className="py-8 px-8 border-t border-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0, duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400">All rights reserved © Rahul Yadav</p>
          </div>
        </motion.footer>
      </div>

      {/* Add custom styles for glow effects */}
      <style jsx global>{`
        .shadow-soft {
          box-shadow: 0 4px 20px rgba(255, 255, 255, 0.05);
        }
        .shadow-glow {
          box-shadow: 0 0 15px rgba(251, 191, 36, 0.3);
        }
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
    </div>
  );
};

export default UniversityPage;
