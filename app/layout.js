import { Sometype_Mono } from "next/font/google";
import "./globals.css";
import MainNav from "./_components/MainNav";
import PageTransition from "./_components/PageTransition";
import RegtangelTransition from "./_components/RectangelTransition";
import Gradient from "./_components/Gradient";
import Header from "./_components/Header";
import { icons } from "lucide-react";

const sometypeMono = Sometype_Mono({
  variable: "--font-sometypeMono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Web Developer Portfolio",
  description:
    "Welcome to Mahmud's portfolio — showcasing projects and skills in web development and design.",
    icons: "/assets/m.png"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sometypeMono.variable} antialiased overflow-hidden relative`}
      >
        <Gradient />
        <RegtangelTransition />
        <PageTransition>
          <div className="flex ">
            {/* main nav  */}
            <div className="hidden 2xl:flex w-[285px] h-screen bg-secondary">
              <MainNav />
            </div>
            <div className="w-full max-w-[1130px] px-[15px] mx-auto ">
              <Header />
              {children}
            </div>
          </div>
        </PageTransition>
      </body>
    </html>
  );
}
