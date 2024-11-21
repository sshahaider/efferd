import React from "react";
import { Cover } from "@/components/ui/cover";
import { MotionDiv } from "../motion";
import { AuroraBackground } from "../ui/aurora-background";

export function Hero() {
  return (
    <AuroraBackground>
      <MotionDiv
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Next-Level Web Development Services
          <br /> Crafted for  <Cover>Your Success </Cover>
        </h1>
      </MotionDiv>
    </AuroraBackground>
  );
}
