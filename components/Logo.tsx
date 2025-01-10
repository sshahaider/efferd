import React from 'react'
import { cva, type VariantProps } from "class-variance-authority"

interface Props {
    size?: "sm" | "md" | "lg"
}

const logoVariants = cva(
    "w-max dark:invert",
    {
        variants: {
            size: {
                sm: "h-5",
                md: "h-7",
                lg: "h-10"
            },
        },
        defaultVariants: {
            size: "sm",
        },
    }
)

const Logo: React.FC<Props> = ({ size }) => {
    return <img
        alt='Logo'
        className={logoVariants({ size })}
        src='/logo.png'
    />
}
export default Logo
