import React from "react";
import LinksNav from "./LinksNav";
import Logo from "./Logo";
import { MdFileDownload } from "react-icons/md";
import Link from "next/link";

const MainNav = () => {
  return (
    <div className="w-full pt-16">
      <div className="flex flex-col h-full items-center justify-between">
        <Logo />
        <LinksNav containerStyles={"flex flex-col gap-6"} />
        <button className="btn btn-lg btn-tertiary mb-16">
          <Link href={"/cv.pdf"} download="cv" className="flex items-center gap-3">
            <span>Download CV.</span>
            <MdFileDownload className="text-xl" />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default MainNav;
