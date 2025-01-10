"use client";
import React, { useEffect, useState } from 'react'

export function Headerwraper({ children }: { children: React.ReactNode }) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`w-full sticky top-0 z-50
            ${isScrolled && "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"}`}
        >
            {children}
        </div>
    )
}
