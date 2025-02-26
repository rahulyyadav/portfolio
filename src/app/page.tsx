import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col p-8 pl-32">
      {/* Main Content */}
      <div className="max-w-6xl w-full mt-20">
        {/* Name Section - Centered */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h1 className="text-7xl font-light mb-4">
            I&apos;m Rahul
            <br />
            Yadav
          </h1>
          <p className="text-2xl text-gray-400 font-light">
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20 pl-12">
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
          <h2 className="text-4xl font-light mb-16 text-center">
            What I&apos;m currently working on
          </h2>

          {/* Project Cards with Connecting Line */}
          <div className="relative space-y-8 w-full max-w-4xl">
            {/* Vertical Connecting Line */}
            <div className="absolute left-[calc(25%-1px)] top-0 bottom-0 w-[2px] bg-white/10" />

            {/* Project 1 */}
            <div className="group relative">
              {/* Dot on the timeline */}
              <div className="absolute left-[25%] top-[50%] w-4 h-4 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 z-10" />

              <div className="ml-[30%] bg-white/5 rounded-lg p-6 transition-colors duration-300 hover:bg-white/10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 items-center">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src="/Post.JPG"
                      alt="Post app"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light">Post</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      Post is a real-time chat application built using
                      WebSockets, AWS Lambda, API Gateway, and DynamoDB. It
                      enables users to send and receive messages instantly with
                      a scalable and serverless architecture. The app securely
                      stores user data in AWS, ensuring reliability and
                      performance.
                    </p>
                    <div className="flex gap-3">
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        AWS
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        Serverless
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        TypeScript
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative">
              {/* Dot on the timeline */}
              <div className="absolute left-[25%] top-[50%] w-4 h-4 rounded-full bg-white/20 -translate-x-1/2 -translate-y-1/2 z-10" />

              <div className="ml-[30%] bg-white/5 rounded-lg p-6 transition-colors duration-300 hover:bg-white/10">
                <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-8 items-center">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    <Image
                      src="/university.webp"
                      alt="University Work"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-light">University Work</h3>
                    <p className="text-gray-300 font-light leading-relaxed">
                      This semester, I am focusing on mastering Cloud Computing
                      and Full-Stack Development while managing a heavy
                      33-credit course load at VIT Vellore. I am building
                      real-time applications using AWS, refining my backend
                      development skills, and deploying scalable solutions.
                      Additionally, I am preparing for internships to gain
                      industry experience and strengthen my expertise in
                      distributed systems.
                    </p>
                    <div className="flex gap-3">
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        University
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        VIT
                      </span>
                      <span className="text-sm px-3 py-1 rounded-full bg-white/10">
                        Internship
                      </span>
                    </div>
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
