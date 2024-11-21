import React from 'react'

interface Props {
    children: React.ReactNode
}

const HeaderWraper = ({ children }: Props) => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-50 h-[60px] flex items-center justify-center">
            <div className="container px-4 md:px-0">
                {children}
            </div>
        </header>
    )
}

export default HeaderWraper
