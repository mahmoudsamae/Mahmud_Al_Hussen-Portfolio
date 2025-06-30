"use client";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "LaunchWave Landnig Page",
    description: "React + Tailwind landing page",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Framer motion"],
  },
  {
    id: 2,
    category: "frontend",
    title: "Nextfolio Portfolio Site",
    description: "Next.js + portfolio site",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["React", "Tailwind CSS", "Shadcn UI"],
  },
  {
    id: 3,
    category: "fullstack",
    title: "AuthBoard Dashboard",
    description: "Mern app with authentication",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: 4,
    category: "fullstack",
    title: "ChatSync Platform",
    description: "Real-time MERN app with chat functionality",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["MongoDB", "Socket.IO", "React", "Node.js"],
  },
  {
    id: 5,
    category: "uiux",
    title: "FlowMobile App Design",
    description: "Mobile-firs Figma design",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Figma", "Adobe XD"],
  },
  {
    id: 6,
    category: "uiux",
    title: "ShopEase Dashboard Redesign",
    description: "Redesign of e-commerce dashboard",
    image: "/assets/work/thumb2.png",
    link: "",
    github: "",
    tech: ["Figma", "Framer", "Whimsical"],
  },
  {
    id: 7,
    category: "branding",
    title: "Brewhaus Brand Identity",
    description: "A bold and earthy visual identity for a modern coffee brand",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Photoshop", "Figma"],
  },
  {
    id: 8,
    category: "branding",
    title: "LunaSkin Laxury Branding",
    description: "Elegant branching for a premiumskincare product line",
    image: "/assets/work/thumb4.png",
    link: "",
    github: "",
    tech: ["Photoshop", "Figma", "Canva"],
  },
  {
    id: 9,
    category: "branding",
    title: "NovaTach Brand Kit",
    description:
      "Full brandinng kit for a tech startup including logo and brand book",
    image: "/assets/work/thumb1.png",
    link: "",
    github: "",
    tech: ["Illustrator", "Figma", "Notion"],
  },
];

const categories = ["frontend", "fullstack", "uiux", "branding"];

const Work = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center  xl:py-0 "
    >
      <div className="containere mx-auto w-full h-full flex flex-col justify-center">
        <h2 className="h2 mb-4 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        <Tabs
          defaultValue="frontend"
          className={"w-full flex flex-col gap-6 xl:gap-12 border-2"}
        >
          {/* tabs list  */}
          <TabsList
            className={
              "flex flex-wrap justify-center items-centeer gap-4 h-full mb-4 xl:mb-0"
            }
          >
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className={
                    "capitalize border border-white/10 data-[state=active]:bg-accent data-[state=active]:border-accent h-[48px] px-6 rounded-full cursor-pointer"
                  }
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tabs content  */}
          <div className="h-[480px] work-custom-scroll xl:overflow-y-visible">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper modules={[Pagination]} pagination={{clickable: true, dynamicBullets: true}} className="h-max xl:h-[460px]">
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-5 xl:gap-12 mb-10">
                              {/* project info  */}
                              <div className="w-full max-w-[380px] flex flex-col gap-2 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                <h3 className="h3">{project.title}</h3>
                                {/* tech / */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>

                                {/* btns */}
                                <div className="flex flex-row gap-4 items-start">
                                  <Link href={project.link}>
                                    <button className="px-2 py-2 rounded-4xl btn-accent flex items-center  gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      Live Project
                                    </button>
                                  </Link>
                                  <Link href={project.github}>
                                    <button className="px-2 py-2 rounded-4xl btn-white flex  items-center gap-2">
                                      <MdArrowOutward className="text-xl" />
                                      Github Repo
                                    </button>
                                  </Link>
                                </div>
                              </div>

                              {/* project img  */}
                              <div className="relative w-full h-[200px] md:h-[300px] xl:h-[400px] bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <img
                                  src={project.image}
                                  alt={project.image}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Work;
