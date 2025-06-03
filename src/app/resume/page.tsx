import { Inter } from "next/font/google";
import { FaGithub, FaXTwitter, FaLinkedin, FaArrowDown } from "react-icons/fa6";
import Image from "next/image";

const sfPro = Inter({ subsets: ["latin"] }); // Using Inter as SF Pro isn't available in Google Fonts

const ProjectLink = ({
  name,
  image,
  link,
  className = "",
  size = "large",
}: {
  name: string;
  image: string;
  link: string;
  className?: string;
  size?: "large" | "small";
}) => {
  const dimensions = {
    large: { width: 800, height: 480 },
    small: { width: 200, height: 80 },
  };

  const { width, height } = dimensions[size];

  return (
    <span className="relative inline-block group">
      <a
        href={link}
        target="_blank"
        className={`font-bold text-white hover:text-gray-300 transition-colors ${className}`}
      >
        {name}
      </a>
      <span className="fixed hidden group-hover:block z-50 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className="rounded-xl shadow-2xl border-2 border-white/20"
        />
      </span>
    </span>
  );
};

const sectionClass =
  "bg-gray-800/20 p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:bg-gray-800/30 hover:scale-[1.02] hover:shadow-xl space-y-4 border border-white/20";

export default function Resume() {
  return (
    <main
      className={`${sfPro.className} text-white p-8 max-w-4xl mx-auto space-y-8 relative`}
    >
      {/* Floating Download Button */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 animate-bounce">
        <a
          href="/ResumE.pdf"
          download="Rahul_Yadav_Resume.pdf"
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
        >
          <FaArrowDown />
          <span>Resume</span>
        </a>
      </div>

      {/* Header */}
      <div className="text-center bg-gray-800/20 p-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:bg-gray-800/30 hover:scale-[1.02] hover:shadow-xl">
        <h1 className="text-3xl font-bold mb-2">Rahul Yadav</h1>
        <p className="mb-2">rahulyyadav21@gmail.com | +91 7092724850</p>
        <div className="flex justify-center items-center gap-4">
          <a
            href="https://github.com/rahulyyadav"
            className="text-2xl hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/rahulyyadav"
            className="text-2xl hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://linkedin.com/in/rahulyyadav"
            className="text-2xl hover:text-gray-300 transition-colors"
            target="_blank"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Profile Summary */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">PROFILE SUMMARY</h2>
        <div className="leading-relaxed">
          Software Engineer skilled in DSA and AWS, with experience debugging
          and enhancing full-stack/mobile applications. Built scalable projects,
          including a collaborative academic platform (
          <ProjectLink
            name="uni-papers.com"
            image="/Uni-Papers.jpeg"
            link="https://uni-papers.com"
          />
          ), a URL shortener (
          <ProjectLink
            name="raba"
            image="/raba.png"
            link="https://raba.pages.dev/"
          />
          ), and a hospital management app (
          <ProjectLink
            name="Aarogya"
            image="/Aarogya.PNG"
            link="https://raba.pages.dev/pPUGHw"
            size="small"
          />
          ). Passionate about cloud computing and system optimization.
        </div>
      </section>

      {/* Projects */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="space-y-6">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Founder & Developer –{" "}
              <ProjectLink
                name="uni-papers.com"
                image="/Uni-Papers.jpeg"
                link="https://uni-papers.com"
              />
            </h3>
            <p className="text-sm text-gray-400">
              Launched Version 1.0 | Next.js, AWS, Open Source
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Built and launched uni-papers.com, a collaborative academic
                platform for sharing university papers, notes, and solutions.
              </li>
              <li>
                Implemented a revenue-sharing model where contributors earn from
                Google Ads, and university onboarding earns lifetime
                commissions.
              </li>
              <li>
                Integrated AI-powered question support directly into resource
                pages, eliminating the need for external search.
              </li>
              <li>
                Designed the platform to be open-source, inviting students and
                developers to contribute to its growth and accessibility.
              </li>
              <li>
                Currently rolling out Version 1.0 features, with planned
                enhancements including advanced analytics, contributor
                dashboards, and full encryption for resource security.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              Aarogya - Hospital Management App -{" "}
              <ProjectLink
                name="Demo"
                image="/Aarogya.PNG"
                link="https://raba.pages.dev/pPUGHw"
                size="small"
              />
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed a secure health records management app for hospitals
                using React Native (Expo).
              </li>
              <li>
                Integrated with Excel sheets to streamline data entry and
                patient report updates by hospital staff.
              </li>
              <li>
                Leveraged Google Drive's 15GB free storage to manage 1,00,000+
                patient records efficiently.
              </li>
              <li>
                Designed an intuitive login-based system for easy and secure
                data retrieval.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold">
              URL Shortener -{" "}
              <ProjectLink
                name="raba"
                image="/raba.png"
                link="https://raba.pages.dev/"
              />
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Built a scalable URL shortening service using Next.js with AWS
                as the backend.
              </li>
              <li>
                Implemented AWS Lambda & API Gateway for short URL generation,
                retrieval, and redirection.
              </li>
              <li>Utilized DynamoDB for efficient short & long-URL storage</li>
              <li>
                Deployed on Cloudflare Pages.dev for high availability and fast
                performance.
              </li>
              <li>Achieved 100+ unique user visits per day on the website.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">SKILLS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Programming Languages: Python, Java, C, C++, JavaScript, TypeScript
          </li>
          <li>
            Cloud Computing: AWS (S3, EC2, Lambda, IAM, DynamoDB, API Gateway,
            CloudFormation, SSM, WebSockets), Docker, Kubernetes (Learning)
          </li>
          <li>
            Data Structures & Algorithms: Strong problem-solving skills with
            competitive programming experience (Neetcode, Codeforces, Leetcode)
          </li>
          <li>
            Full-Stack Development: TypeScript (Proficient), React.js
            (Proficient), Next.js (Proficient), Node.js (Proficient), HTML, CSS
          </li>
          <li>Mobile Development: React Native, Expo (Proficient), Shadcn</li>
        </ul>
      </section>

      {/* Education */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">EDUCATION</h2>
        <div className="space-y-2">
          <h3 className="font-semibold">
            B.Tech Computer Science and Engineering ( 2022 - 2026 )
          </h3>
          <p>Vellore Institute of Technology, Vellore</p>
          <p>CGPA - 7.96 / 10</p>
        </div>
      </section>

      {/* Certifications */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">CERTIFICATIONS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            CS50P: Introduction to Programming with Python – Harvard University
            (Completed Course)
          </li>
        </ul>
      </section>

      {/* Key Highlights & Interests */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">KEY HIGHLIGHTS & INTERESTS</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Hands-on experience with AWS services and scalable cloud solutions.
          </li>
          <li>
            Strong problem-solving skills with competitive programming
            achievements (Neetcode, Codeforces, Leetcode).
          </li>
          <li>
            Actively developing and maintaining GitHub projects, showcasing
            hands-on debugging and enhancement skills.
          </li>
          <li>
            Passionate about collaborating on open-source projects and learning
            from talented developers.
          </li>
          <li>
            Exploring cloud computing, DevOps, and system scalability with a
            focus on AWS and Docker, Kubernetes.
          </li>
        </ul>
      </section>

      {/* Additional Information */}
      <section className={sectionClass}>
        <h2 className="text-xl font-bold">ADDITIONAL INFORMATION</h2>
        <div className="space-y-2">
          <p>Languages:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Native: Maithili, Nepali</li>
            <li>Fluent: English, Hindi</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
