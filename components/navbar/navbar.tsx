import { ModeToggle } from "@/components/navbar/themeSwitcher"

{/* <ModeToggle /> */}



export function Navbar(){
    return (
        <nav className="flex justify-between items-center py-4">
        <div className="flex space-x-4">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>
        <div className="text-2xl font-bold">Max Vdp</div>
        </nav>
    );
}