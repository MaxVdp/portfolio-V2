import Image from "next/image";
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { HiOutlineFolderDownload } from "react-icons/hi";


const getAge = () => {
    const birthYear = 2003;
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear;
  }

export function MainInfo() {
  return (
    <div className="w-full flex gap-4 flex-col md:justify-between md:items-center md:flex-row-reverse">
      <Image
        src="/max.jpg"
        alt="Picture of the author"
        width={200}
        height={200}
        className="rounded-lg"
      />
      
      <div className="flex flex-col gap-4 ">
        <h1 className="text-4xl font-bold">hey, Max here!</h1>
        <p className="">I'm a {getAge()} year old software developer from Belgium</p>
        <p className="">I like to develop websites, do bouldering and calisthenics, play the guitar and run around the table with my dog.</p>
        <div className="flex">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Button variant="outline">Resume <HiOutlineFolderDownload/></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Dutch resume</DropdownMenuItem>
              <DropdownMenuItem>English resume</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          {/* linkedin */}
          {/* email */}
        </div>
      </div>
    </div>
  );
}