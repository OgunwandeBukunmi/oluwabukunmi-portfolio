import { FiLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import data from "./data";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Project = {
  name: string;
  description: string;
  imageUrl: string;
  websiteUrl: string;
  githuburl: string;
};

function Project() {
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.to(projectsRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: projectsRef.current[0],
        start: "top 175%",
        end: "+=500"
      },
    });
  });

  return (
    <section id="projects">
      <h2 className="text-center text-3xl md:text-5xl font-extrabold mb-10 mt-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {data &&
          data.map((d: Project, i: number) => (
            <div
              key={i}
              id={`item${i}`}
              ref={(el) => (projectsRef.current[i] = el)}
              className="opacity-0 translate-y-5"
            >
              <ProjectComponent d={d} />
            </div>
          ))}
      </div>
    </section>
  );
}

function ProjectComponent({ d }: { d: Project }) {
  return (
    <div className="max-w-md mx-auto bg-gray-50 rounded-2xl shadow-lg p-4 overflow-hidden hover:shadow-xl transition duration-300">
      {/* Image */}
      <img
        src={d.imageUrl}
        alt={d.name}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{d.name}</h2>
        <p className="text-gray-600 text-sm leading-relaxed">{d.description}</p>

        {/* Links */}
        <div className="flex gap-5 text-xl text-gray-700">
          <a
            href={d.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FiLink />
          </a>
          <a
            href={d.githuburl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
