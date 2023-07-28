"use client";

import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoReact,
  BiLogoCss3,
  BiLogoWix,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { RiJavascriptFill } from "react-icons/ri";
import { SiNextdotjs, SiMongodb, SiFramer } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import LinkText from "./LinkText";
import Link from "next/link";

const skills = [
  {
    name: "HTML5",
    description:
      "HTML5 is the latest version of the Hypertext Markup Language, used for structuring and presenting content on the web, introducing new elements and improved multimedia support.",
    icon: AiFillHtml5,
    color: "#F06529",
  },
  {
    name: "CSS3",
    description:
      "CSS3 is the latest version of Cascading Style Sheets, enhancing the design and layout capabilities of web pages with new features like transitions, animations, and flexible box layouts.",
    icon: BiLogoCss3,
    color: "#264de4",
  },
  {
    name: "JS",
    description:
      "JavaScript (JS) is a versatile programming language commonly used in web development to add interactivity and dynamic content to websites, enabling client-side scripting for enhanced user experiences.",
    icon: RiJavascriptFill,
    color: "#F0DB4F",
  },
  {
    name: "Github",
    description:
      "GitHub is a web-based platform for version control and collaboration, widely used by developers to host and manage their software projects, providing features like pull requests and issue tracking.",
    icon: AiFillGithub,
    color: "#fffff",
  },
  {
    name: "ReactJS",
    description:
      "React is a popular JavaScript library for building user interfaces, allowing developers to create reusable UI components and efficiently manage the state of web applications.",
    icon: BiLogoReact,
    color: "#61DBFB",
  },
  {
    name: "NextJS",
    description:
      "Next.js is a framework built on top of React, providing server-side rendering and other powerful features to develop fast and scalable web applications with ease.",
    icon: SiNextdotjs,
    color: "#000000",
  },
  {
    name: "Mongo db",
    description:
      "MongoDB is a NoSQL database system that stores data in JSON-like documents, offering high flexibility and scalability for handling large volumes of unstructured or semi-structured data in modern applications.",
    icon: SiMongodb,
    color: "#589636",
  },
  {
    name: "Wix with Velo",
    description:
      "Wix is a cloud-based website builder that enables users to create and customize professional-looking websites without requiring coding knowledge, offering a user-friendly drag-and-drop interface and a variety of templates and features.",
    icon: BiLogoWix,
    color: "#000000",
  },
  {
    name: "Tailwindcss",
    description:
      "Tailwind CSS is a utility-first CSS framework that provides a comprehensive set of ready-to-use classes, allowing developers to build modern and responsive user interfaces rapidly, without writing custom CSS.",
    icon: BiLogoTailwindCss,
    color: "#3490dc",
  },
  {
    name: "Framer motion",
    description:
      "Framer Motion is a popular animation library for React that enables developers to create smooth and interactive animations for their web applications with straightforward syntax and intuitive APIs.",
    icon: SiFramer,
    color: "#000000",
  },
  {
    name: "Rest Api",
    description:
      "REST (Representational State Transfer) API is a standard architecture for building web services that use HTTP methods to interact with resources, allowing clients to request and manipulate data from a server in a stateless manner.",
    icon: TbApi,
    color: "#000000",
  },
];

export default function Skills() {
  return (
    <div className="py-24 relative z-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Skills
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Tech Stack that I used.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            As a front-end developer, I possess a comprehensive set of skills to
            create dynamic and engaging website. My experience extends to create
            responsive design, cross-browser compatibility, and optimizing
            websites for performance with different device. Additionally, I have
            knowledge of version control systems.
          </p>
        </div>
        <div className="mx-auto relative mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {skills.slice(0, 8).map((skill, i) => (
              <div
                key={i}
                className={`bg-white/20 backdrop-blur rounded-xl shadow-sm`}
              >
                <div
                  className={`flex items-center justify-center px-4 py-6 text-[${
                    skill.color || "#000000"
                  }]`}
                >
                  <skill.icon
                    color={skill.color || "#000000"}
                    size={"8rem"}
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-4 p-3">
                  <h3 className="text-lg font-semibold md:text-center">
                    {skill.name}
                  </h3>
                  {/* <p>{skill.description}</p> */}
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-10 flex justify-center items-center">
            <Link href={"/skills"}>
              <p className="text-blue-700 hover:text-blue-900">
                Know more about skills I used
              </p>
            </Link>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
