"use client"
import { Experience } from "@/components/experience";
import { MainInfo } from "@/components/mainInfo";

export default function Home() {
  return (
    
    <div className="flex flex-col gap-16 px-4">
      
      <MainInfo />
      <Experience />
      
    </div>
    
  );
}
