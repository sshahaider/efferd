'use client';

import React from 'react'
import LinkItem from './LinkItem';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import Logo from '../Logo';
import { Button } from '../ui/button';
import { MenuIcon } from 'lucide-react';


interface Props {
    links: {
        title: string;
        link: string;
    }[]
}

const SidePenal = ({ links }: Props) => {


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className='md:hidden'>
                    <MenuIcon className='size-5' />
                </Button>
            </SheetTrigger>
            <SheetContent className='flex w-full flex-col sm:max-w-sm max-w-[70%]' side="left">
                <SheetHeader className='flex-row  items-center justify-start w-full'>
                    <Logo size='sm' />
                </SheetHeader>
                <div className="flex flex-col items-start  justify-between   h-full">
                    <div className='flex flex-col gap-x-2 mt-5 items-center h-max w-full'>
                        {links.map((item, i) => (
                            <LinkItem close key={i} item={item} />
                        ))}
                    </div>
                </div>

            </SheetContent>
        </Sheet>
    );

}

export default SidePenal;