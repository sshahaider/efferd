"use client";
import {  ArrowRightIcon } from "lucide-react";
import { buttonVariants } from "../ui/button";
import { FlipWords } from "../ui/flip-words";
import GridBackGround from "../ui/GridBackGround";
import Link from "next/link";

export const CallToAction = () => {

  const words = ["Professional", "Modern", "Creative", "Functional"];


  return (
    <section className="relative overflow-hidden h-screen py-10 flex items-center justify-center">
      <GridBackGround />
      <div className="container z-10">
        <div className="flex flex-col items-center justify-center max-w-5xl mx-auto relative">
          <h2 className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mt-5">
            Let's Build
            <FlipWords words={words} /> <br />
            Website That Deliver Results
          </h2>
          <p className="text-base font-bold text-center mt-5">
            Ready to take your business to the next level? start your project today!
          </p>

        </div>
        <div className="flex gap-2 mt-10 justify-center">
        <Link href="/contact" className={buttonVariants({ className: "px-6 py-2 font-bold text-lg" })}>Start Your Project <ArrowRightIcon className="size-5" /></Link>
        </div>
      </div>

    </section>
  );
};
