import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import Logo from "../Logo";
import React from "react";
import LinkItem from "./LinkItem";
import { Headerwraper } from "./wraper";
import Link from "next/link";

const Links = [
    // {
    //     title: "Pricing",
    //     link: "/#plans",
    // },
    {
        title: "Conact Us",
        link: '/contact',
    }
]

const LandingHeader = () => {
    return (
        <Headerwraper>
            <header className="container h-14 flex items-center justify-between">
                <Link href="/">
                    <Logo />
                </Link>
                <NavigationMenu>
                    <NavigationMenuList className="flex">
                        {Links.map((item, i) => (
                            <LinkItem
                                key={i}
                                item={item}
                            />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </header>
        </Headerwraper>
    );
};

export default LandingHeader;