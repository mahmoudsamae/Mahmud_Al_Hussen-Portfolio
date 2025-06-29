"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

const PageTransition = ({ children }) => {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{delay: 1, duration: 0.4, ease: "easeInOut" }}
        className="min-h-screen w-screen fixed top-0"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;
