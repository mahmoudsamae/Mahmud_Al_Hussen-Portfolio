"use client";
import { motion } from "framer-motion";
import Blob from "./_components/Blob";
import { MdArrowOutward } from "react-icons/md";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import Socials from "./_components/Socials";
import Pattern from "./_components/Pattern";
import Link from "next/link";
const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />

      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* Text  */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="h1 flex-1  mb-[28px]">
            Hi! I'm Mahmud,
            <br />
            <TypeAnimation
              sequence={["Web Developer", 2000, "Web Designer", 2000]}
              wrapper="span"
              speed={40}
              className="text-accent"
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I build visually captivating, user-friendly websites and web apps
            that tranform your idesas into seamless, engaging digital
            experiences.
          </p>
          <button className="btn btn-lg btn-accent mb-16">
            <Link href={"/contact"} className="flex items-center gap-3">
              <span>Let's talk.</span>
              <MdArrowOutward className="text-xl" />
            </Link>
          </button>
          {/* Contact info  */}
          <div className="flex flex-col xl:flex-row xl:items-center gap-4 sl:gap-8 mb-12 xl:mb-0">
            {/* phone  */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <div className="">+49 163 1481230</div>
            </div>
            {/* email  */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <div className="">mahmoudsamaedbm@gmail.com</div>
            </div>
          </div>
            {/* Socials  */}
            <Socials
              containerStyles={"hidden gap-6 2xl:flex mt-4"}
              iconStyles={
                "bg-accent text-white hover:bg-accent-hover transition w-[45px] h-[45px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
              }
            />
        </div>
        <div className="hidden xl:block flex-1 relative z-20">
          <Blob containerStyles={"w-[560px] h-[560px]"} />
          <Image
            src={"/assets/avatar2.png"}
            alt="avatar-img"
            width={440}
            height={700}
            quality={100}
            className="absolute -top-16 left-[120px]"
          />
          <div className="w-full h-[164px] absolute bottom-0 left-0 -right-10 bg-gradient-to-t from-primary via-primary/90 to-primary/60"></div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
