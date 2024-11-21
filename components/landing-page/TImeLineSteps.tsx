"use client";
import {
    useMotionValueEvent,
    useScroll,
    useTransform,
    motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { GradientHeading } from "../ui/GradientHeading";

interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}

const data = [
    {
        title: "Strategize with Precision",
        content: (
            <div>We dive deep into your business objectives to craft a customized website strategy that sets you apart.</div>
        ),
    },
    {
        title: "Design for Impact, Build for Speed",
        content: (
            <div>We design visually stunning, responsive websites that offer a seamless user experience and lightning-fast performance.</div>
        ),
    },
    {
        title: "Launch with Confidence, Scale with Ease",
        content: (
            <div>We ensure your website goes live smoothly and provide ongoing support and updates to keep it ahead of the curve.</div>
        ),
    },
];

export const TImeLineSteps = () => {
    const ref = useRef<HTMLDivElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    useEffect(() => {
        if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            setHeight(rect.height);
        }
    }, [ref]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 10%", "end 50%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

    return (
        <div className="w-full md:px-10 py-24" ref={containerRef}>
            <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto">
                <GradientHeading h={2} className="text-3xl md:text-5xl font-bold tracking-tighter mt-5">
                    Your Journey to Success
                </GradientHeading>
                <p className="text-center mt-5 opacity-75">
                    From concept to execution, we're with you every step of the way, building websites that empower your business to thrive.
                </p>
            </div>

            <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
                {data.map((item, index) => (
                    <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
                        <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
                            <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full flex items-center justify-center">
                                <div className="h-4 w-4 rounded-full dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
                            </div>
                            <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500">
                                {item.title}
                            </h3>
                        </div>

                        <div className="relative pl-20 pr-4 md:pl-4 w-full">
                            <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500">
                                {item.title}
                            </h3>
                            {item.content}{" "}
                        </div>
                    </div>
                ))}
                <div
                    style={{
                        height: height + "px",
                    }}
                    className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
                >
                    <motion.div
                        style={{
                            height: heightTransform,
                            opacity: opacityTransform,
                        }}
                        className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
                    />
                </div>
            </div>
        </div>
    );
};
