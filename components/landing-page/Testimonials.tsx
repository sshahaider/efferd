"use client";
import avatar1 from "@/public/avatar/1.webp";
import avatar2 from "@/public/avatar/2.webp";
import avatar3 from "@/public/avatar/3.webp";
import avatar4 from "@/public/avatar/4.webp";
import avatar5 from "@/public/avatar/5.webp";
import avatar6 from "@/public/avatar/6.webp";
import avatar7 from "@/public/avatar/7.webp";
import avatar8 from "@/public/avatar/8.webp";
import avatar9 from "@/public/avatar/9.webp";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "../motion";
import { GradientHeading } from "../ui/GradientHeading";

const testimonials  = [
  {
    text: "This agency transformed our outdated website into a sleek, modern platform. Their web development skills are top-tier!",
    imageSrc: avatar1.src,
    name: "Ayesha Khan",
    username: "@ayeshakclient",
  },
  {
    text: "We partnered with this agency for our e-commerce store, and the results were amazing. The site is fast, responsive, and user-friendly.",
    imageSrc: avatar2.src,
    name: "Bilal Ahmed",
    username: "@bilal_ahmed",
  },
  {
    text: "They developed a custom CMS for our company that streamlined all our operations. It's been a game-changer for us.",
    imageSrc: avatar3.src,
    name: "Saman Malik",
    username: "@saracustomer",
  },
  {
    text: "I couldn't be happier with the website they built for my business. They truly understand the needs of growing companies.",
    imageSrc: avatar4.src,
    name: "Omar Raza",
    username: "@omarraza_client",
  },
  {
    text: "Their team was always available and quick to implement feedback. The custom web app they built for us has improved our efficiency by leaps and bounds.",
    imageSrc: avatar5.src,
    name: "Zainab Hussain",
    username: "@zainab_h_client",
  },
  {
    text: "From day one, the process of working with this agency was smooth. They delivered on every promise and more!",
    imageSrc: avatar6.src,
    name: "Aliza Khan",
    username: "@alizakhan_client",
  },
  {
    text: "Our new website is both visually stunning and highly functional. We've received so much positive feedback from our customers!",
    imageSrc: avatar7.src,
    name: "Farhan Siddiqui",
    username: "@farhan_siddiqui_client",
  },
  {
    text: "I was impressed with how quickly they understood our needs and delivered a product that exceeded expectations. Great experience!",
    imageSrc: avatar8.src,
    name: "Sana Sheikh",
    username: "@sanaclient",
  },
  {
    text: "Their web development services helped us boost our online presence significantly. Our traffic and conversions are up!",
    imageSrc: avatar9.src,
    name: "Hassan Ali",
    username: "@hassanali_customer",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <MotionDiv
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, imageSrc, name, username }) => (
                <div className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full" key={username}>
                  <div>{text}</div>
                  <div className="flex items-center gap-2 mt-5">
                    <Image
                      width={40}
                      height={40}
                      src={imageSrc}
                      alt={name}
                      className="h-10 w-10 rounded-full"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5">{name}</div>
                      <div className="leading-5 opacity-60 tracking-tight">{username}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </MotionDiv>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="bg-background my-20 relative">

      <div className="container z-10 mx-auto">
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">Testimonials</div>
          </div>

          <GradientHeading h={2} className="text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter mt-5">What our users say</GradientHeading>
          <p className="text-center mt-5 opacity-75">
            From intuitive design to powerful features, out app has become an essential tool for users around
            the world.
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
