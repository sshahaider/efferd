import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

interface Props {
    size?: "sm" | "md" | "lg"
}

const Logo: React.FC<Props> = ({ size = "sm" }) => {

    let width: number = 102;
    let height: number = 26;


    switch (size) {
        case "sm":
            width = width;
            height = height;
            break;
        case "md":
            width = 140;
            height = 35;
            break;
        case "lg":
            width = 217;
            height = 55;
            break;
        default:
            break;
    }



    return <Link href="/"><Image alt='logo' width={width} height={height} className='dark:invert' src='/logo.png' /></Link>
}

export default Logo
