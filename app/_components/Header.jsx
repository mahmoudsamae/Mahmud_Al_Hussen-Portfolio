import React from "react";
import Logo from "./Logo";
import { CiMenuFries } from "react-icons/ci";
import { MdFileDownload } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Socials from "./Socials";
import LinksNav from "./LinksNav";
import Link from "next/link";
const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0">
      <div className="container mx-auto bg-primary">
        <div className="flex items-center justify-between py-6 ">
          {/* Logo  */}
          <Logo />
          {/* nav mobile - (Sheet Component)  */}
          <Sheet>
            <SheetTrigger className={"cursor-pointer text-[30px] text-white"}>
              <CiMenuFries />
            </SheetTrigger>
            <SheetContent
              side="left"
              className={
                "bg-primary border-0 flex flex-col justify-between items-center pt-16 pb-20"
              }
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className={"sr-only"}>
                  Navigation menu
                </SheetDescription>
              </SheetHeader>
              <LinksNav containerStyles={"flex flex-col gap-8 max-w-[100px]"} />
              <div>
                <button className="btn btn-lg btn-tertiary mb-16">
                  <Link
                    href={"/cv.pdf"}
                    download={"cv"}
                    className="flex items-center gap-3"
                  >
                    <span>Download CV.</span>
                    <MdFileDownload className="text-xl" />
                  </Link>
                </button>
                <Socials
                  containerStyles={"flex gap-4 relative z-30 "}
                  iconStyles={
                    "bg-accent text-white hover:bg-accent-hover transition w-[40px] h-[40px] text-[20px] flex items-center justify-center rounded-full cursor-pointer"
                  }
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
