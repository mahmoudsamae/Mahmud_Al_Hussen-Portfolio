"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { HiOutlineMapPin } from "react-icons/hi2";
import {
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
const Contact = () => {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const response = await fetch("https://formspree.io/f/xzzgobjv", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (response.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.2, duration: 0.4, ease: "easeIn" },
      }}
      className="h-screen flex items-center py-24 xl:py-0 "
    >
      <div className="container mx-auto w-full h-full flex flex-col items-center xl:justify-center xl:overflow-hidden work-custom-scroll">
        <div className="w-full">
          <div className="flex flex-col xl:flex-row gap-6">
            {/* info text */}
            <div className="flex-1 xl:w-[600px] flex flex-col gap-4">
              {/* text  */}
              <div className="">
                <h2 className="h2 mb-6">
                  Get In <span className="text-accent">Touch</span>
                </h2>
                <p className="max-w-[460px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequuntur cumque magni voluptates eligendi quod? Distinctio
                  rerum voluptatibus repellendus minus quibusdam!
                </p>
              </div>
              <div className="flex flex-col gap-8 mb-6 xl:mb-0">
                {/* phone  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlinePhone className="text-2xl" />
                  </span>
                  <span>+49 163 1481230</span>
                </div>
                {/* email  */}
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMail className="text-2xl" />
                  </span>
                  <span>mahmoudsamaedbm@gmail.com</span>
                </div>
                <div className="flex items-center gap-4 text-lg">
                  <span className="text-accent">
                    <HiOutlineMapPin className="text-2xl" />
                  </span>
                  <span>ZiessStr 1, 93053 Regensburg</span>
                </div>
              </div>
            </div>
            {/* form  */}
            <div className="flex-1">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6 items-start"
              >
                <div className="flex flex-col xl:flex-row gap-6 w-full">
                  <div className="w-full ">
                    <Label htmlFor="firstname">
                      Firstname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="firstname"
                      name="firstname"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="w-full ">
                    <Label htmlFor="lastname">
                      Lastname <span className="text-accent">*</span>
                    </Label>
                    <Input
                      id="lastname"
                      name="lastname"
                      placeholder="Last Name"
                      required
                    />
                  </div>
                </div>
                {/* email  */}
                <div className="w-full ">
                  <Label htmlFor="email">
                    Email <span className="text-accent">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                {/* select  */}
                <div className="w-full">
                  <Label htmlFor="service">
                    I'm interested in <span className="text-accent">*</span>
                  </Label>
                  <Select name="service" required>
                    <SelectTrigger
                      id="service"
                      className="w-full !h-12 bg-white/5 border-white/10 px-4"
                    >
                      <SelectValue placeholder="Choose here" />
                    </SelectTrigger>
                    <SelectContent className={"bg-black border-white/20"}>
                      <SelectItem value="webdev">Web Development</SelectItem>
                      <SelectItem value="uiux">UI & UX Design</SelectItem>
                      <SelectItem value="logo">Logo Design</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                {/* textarea */}
                <div className="w-full">
                  <Label htmlFor="message">
                    Message <span className="text-accent">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="massage"
                    placeholder="Write your message.."
                    className="min-h-[160px] bg-white/5 border-white/10 focus-visible:border-accent focus-visible:ring-accent focus-visible:ring-[1px] resize-none p-4 selection:bg-accent placeholder:text-white/50"
                  />
                </div>
                {/* btn */}
                <button type="submit" className="btn btn-lg btn-accent">
                  <div className="flex items-center gap-3">
                    <span className="font-medium">
                      {" "}
                      {status === "sending" ? "Sending..." : "Send Message"}
                    </span>
                    <HiOutlineArrowNarrowRight className="text-xl" />
                  </div>
                </button>
                {status === "success" && (
                  <p className="text-green-600">
                    Thanks! Your message has been sent.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600">
                    Oops! Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
