import React from 'react'

interface Props {
    opacity?: string
}

const GridBackGround = ({ opacity = "0.05" }: Props) => {
    return (
        <div
            className={
                `z--10 
                [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] 
                absolute inset-0 h-full w-full 
                bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] 
                bg-[size:24px_24px]`}
        />
    );
}

export default GridBackGround;
