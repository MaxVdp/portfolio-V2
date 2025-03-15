"use client"
import { ModeToggle } from "@/components/navbar/themeSwitcher"


export function Navbar(){
    return (
        <nav className="flex justify-between items-center py-8 px-4 sticky top-0 bg-white dark:bg-black z-50">
            <div className="flex space-x-4 gap-4 text-[#71717a] dark:text-[#a1a1aa] font-medium">
                <a href="/">home</a>
                <a href="/projects">projects</a>
                <a href="/about">about</a>
                <a href="/contact">contact</a>
            </div>
            <ModeToggle />
        </nav>
    );
}