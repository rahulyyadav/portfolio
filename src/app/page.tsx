import Image from "next/image";
import ShineEffect from "./components/ShineEffect";
import MobileNav from "./components/MobileNav";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-8 pl-32 md:pl-32 pl-4">
      {/* Mobile Navigation */}
      <MobileNav />

      {/* Email Button */}
      <a
        href="mailto:rahulyyadav21@gmail.com"
        className="fixed top-8 right-8 px-6 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
      >
        Email Me
      </a>

      {/* Main Content */}
      <div className="max-w-6xl w-full mt-20">
        {/* Name Section - Centered */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-7xl md:text-7xl text-5xl font-light mb-4">
            I&apos;m Rahul
            <br />
            Yadav
          </h1>
          <p className="text-2xl md:text-2xl text-xl text-gray-400 font-light">
            a Software Engineer focused on Cloud Computing
            <br />
            and Full-Stack Development
          </p>

          {/* Social Media Links - Centered */}
          <div className="flex gap-6 mt-8">
            <a
              href="https://x.com/_rahulyyadav"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/x-logo.svg"
                alt="X (Twitter)"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/rahulyyadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/linkedin-logo.svg"
                alt="LinkedIn"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.instagram.com/_rahulyyadav/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
            >
              <Image
                src="/instagram-logo.svg"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>

        {/* Content Grid - More space from nav and swapped positions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 md:pl-12 pl-4">
          {/* Image - Now on the left */}
          <div className="relative aspect-[4/3] w-full">
            <Image
              src="/profile.jpeg"
              alt="Rahul Yadav"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Description - Now on the right */}
          <div className="space-y-6">
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              I design and build scalable applications using AWS, serverless
              architectures, and modern web technologies. I have experience
              working with distributed systems, backend development, and
              real-time applications.
            </p>
            <p className="text-xl text-gray-300 font-light leading-relaxed">
              Currently, I am developing cloud-native solutions that improve
              performance and reliability. My goal is to build efficient systems
              that solve real-world problems at scale.
            </p>
          </div>
        </div>

        {/* Current Work Section - Centered */}
        <div className="mt-32 flex flex-col items-center">
          <h2 className="text-4xl md:text-4xl text-3xl font-light mb-16 text-center">
            What I&apos;m currently working on
          </h2>

          {/* Project Cards with Connecting Line */}
          <div className="relative space-y-32 w-full max-w-4xl">
            {/* Vertical Connecting Line with Shine Effect */}
            <ShineEffect />

            {/* Project 1 */}
            <div className="group relative">
              {/* Dot on the timeline */}
              <div className="absolute left-[25%] top-[50%] w-4 h-4 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 z-10" />

              <div className="ml-[30%] md:ml-[30%] ml-4 bg-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 w-[500px] md:w-[500px] w-full flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-lg">
                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-light">Papers</h3>
                  <p className="text-gray-300 font-light leading-relaxed text-base">
                    Papers is a website in productin right now, for complete AI
                    integrated past questions collection of all the
                    universities. So many featues are comming soon, which makes
                    whole communities for all. Thank you.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      Next.js
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      web app
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      AI tools
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative">
              {/* Dot on the timeline */}
              <div className="absolute left-[25%] top-[50%] w-4 h-4 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 z-10" />

              <div className="ml-[30%] md:ml-[30%] ml-4 bg-white/5 rounded-lg p-6 transition-all duration-300 hover:bg-white/10 hover:scale-105 w-[500px] md:w-[500px] w-full flex items-center justify-center border border-white/20 backdrop-blur-sm shadow-lg">
                <div className="space-y-6 text-center">
                  <h3 className="text-2xl font-light">
                    Coding in Summer Vacation
                  </h3>
                  <p className="text-gray-300 font-light leading-relaxed text-base">
                    Summer vacation is going on, and I am solving coding
                    problems of leetcode, gfg, etc. Learning new things and
                    building new projects, working on skills, Took one course
                    for 'Artificial Intelligence with Google'.
                  </p>
                  <div className="flex gap-3 justify-center flex-wrap">
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      AI
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      Code
                    </span>
                    <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                      Summer Vacation
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-32 text-center text-gray-400 text-sm pb-8">
          All rights reserved © Rahul Yadav.
        </div>
      </div>
    </main>
  );
}
