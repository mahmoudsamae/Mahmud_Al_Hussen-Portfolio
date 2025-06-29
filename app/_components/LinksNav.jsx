"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "about",
    path: "/about",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const LinksNav = ({ containerStyles }) => {
  const pathname = usePathname();
  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        const isActive = pathname === link.path;
        const chatLength = link.name.length;
        const lineWidth = chatLength > 5 ? "after:w-[100%]" : "after:w-[60%]";
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative text-lg uppercase text-white ${
              isActive &&
              `after:content-[''] after:block after:absolute after:left-0 after:bottom-0 ${lineWidth} after:h-[3px] rounded-4xl after:bg-accent after:-translate-y-1/2 after:z-0`
            }`}
          >
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </ul>
  );
};

export default LinksNav;
