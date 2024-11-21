import { cn } from '@/lib/utils'
import React from 'react'

interface Prosp {
    className?: string;
    children: React.ReactNode;
    h: 1 | 2 | 3
}

export const GradientHeading = ({ className, children, h }: Prosp) => {

    const classes = cn("bg-clip-text text-transparent dark:text-transparent bg-gradient-to-b from-primary to-primary/70", className)
    if (h === 1) {
        return <h1 className={classes}>{children}</h1>
    }
    if (h === 2) {
        return <h2 className={classes}>{children}</h2>
    }
    if (h === 3) {
        return <h3 className={classes}>{children}</h3>
    }

};