import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import Logo from "../Logo";
import React from "react";
import LinkItem from "./LinkItem";
import SidePenal from "./SidePenal";
import HeaderWraper from "./HeaderWraper";

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
        <HeaderWraper>
            <div className="flex items-center justify-between">
                <Logo />
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="hidden md:flex">
                        {Links.map((item, i) => (
                            <LinkItem
                                key={i}
                                item={item}
                            />
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
                <SidePenal links={Links} />
            </div>
        </HeaderWraper>
    );
};

export default LandingHeader;