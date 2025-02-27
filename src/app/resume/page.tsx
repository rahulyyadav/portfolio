import { Inter } from "next/font/google";
import { FaGithub, FaXTwitter, FaLinkedin } from "react-icons/fa6";
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
      className={`${sfPro.className} text-white p-8 max-w-4xl mx-auto space-y-8`}
    >
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
          including a real-time chat app (
          <ProjectLink
            name="Post"
            image="/Post.png"
            link="https://github.com/rahulyyadav/Post"
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
              Post – Real-Time Chat App -{" "}
              <ProjectLink
                name="Post"
                image="/Post.png"
                link="https://github.com/rahulyyadav/Post"
              />
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                Developed a real-time chat application using Next.js with AWS as
                the backend.
              </li>
              <li>
                Integrated WebSockets & AWS Lambda for instant message delivery.
              </li>
              <li>
                Utilized JWT authentication & AWS SSM for secure auto-login &
                credential management.
              </li>
              <li>
                Working on SHA-256 encryption to enhance message security,
                ensuring end-to-end encryption even if AWS storage is
                compromised.
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
          <p>CGPA - 7.43 / 10 ( Currently in 3rd Year )</p>
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
