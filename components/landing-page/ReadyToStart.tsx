import React from 'react'
import { WavyBackground } from '../ui/wavy-background'

const ReadyToStart = () => {
    return (
        <section className='relative overflow-hidden'>
            <WavyBackground className="max-w-4xl mx-auto px-2" backgroundFill="#09090b">
                <h2 className="text-3xl md:text-3 lg:text-5xl  font-bold inter-var text-center">
                    Ready to Make Your Digital Mark?
                </h2>
            </WavyBackground>
        </section>
    )
}

export default ReadyToStart
