"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Card,
    CardContent
  } from "@/components/ui/card"
  import Image from "next/image";

export function Experience() {
  return (
    <Tabs defaultValue="Experience" className="">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="Experience">Experience</TabsTrigger>
        <TabsTrigger value="Education">Education</TabsTrigger>
      </TabsList>
      <TabsContent value="Experience">
        <Card>
        <CardContent className="p-0">
            <ul className="ml-12 border-l">
              <li className="relative ml-12 py-4">
                <a className="absolute -left-[78px] top-6 flex justify-center items-center" href="https://www.leuven2030.be/" target="_blank">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
                    <Image
                        src="/leuven2030.png"
                        alt="UCLL College"
                        width={90}
                        height={90}
                        className="aspect-square h-full w-full bg-background object-contain bg-white"
                      />
                  </span>
                </a>
                <div className="flex flex-col flex-1 justify-start gap-2">
                  <time className="text-sm text-[#71717a] dark:text-[#a1a1aa]">Dec 2024 - Jan 2025</time>
                  <h2 className="font-medium leading-none">Leuven 2030</h2>
                  <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">Full Stack Web Developer & Product Owner (Bachelor's Thesis)</p>
                  <p>We built on an existing React.js web application, EcoFoodMap. We built an admin dashboard for data management and optimized recurring tasks throughout the web application.</p>
                </div>
              </li>
              <li className="relative ml-12 py-4">
                <a className="absolute -left-[78px] top-6 flex justify-center items-center" href="https://www.imec.be/" target="_blank">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
                    <Image
                        src="/logoimec.png"
                        alt="UCLL College"
                        width={90}
                        height={90}
                        className="aspect-square h-full w-full bg-background object-contain bg-white"
                      />
                  </span>
                </a>
                <div className="flex flex-col flex-1 justify-start gap-2">
                  <time className="text-sm text-[#71717a] dark:text-[#a1a1aa]">Sep 2024 - Dec 2024</time>
                  <h2 className="font-medium leading-none">imec</h2>
                  <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">Full Stack Web Developer (Internship)</p>
                  <p>I built on an existing Next.js web application to optimize network management, focusing on refining the UI/UX and adding new features. I also contributed to the backend by developing new APIs to expand system capabilities.</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="Education">
        <Card>
          <CardContent className="p-0">
            <ul className="ml-12 border-l">
              <li className="relative ml-12 py-4">
                <a className="absolute -left-[78px] top-6 flex justify-center items-center" href="https://www.ucll.be/en" target="_blank">
                  <span className="relative flex shrink-0 overflow-hidden rounded-full size-14 border">
                    <Image
                        src="/logoUCLL.png"
                        alt="UCLL College"
                        width={90}
                        height={90}
                        className="aspect-square h-full w-full bg-background object-contain"
                      />
                  </span>
                </a>
                <div className="flex flex-col flex-1 justify-start gap-2">
                  <time className="text-sm text-[#71717a] dark:text-[#a1a1aa]">2021 - 2025</time>
                  <h2 className="font-medium leading-none">UC Leuven Limburg</h2>
                  <p className="text-sm text-[#71717a] dark:text-[#a1a1aa]">Bachelor's Degree Applied Informatics</p>
                  <p>I pursued the knowledge that a Applied Informatics degree had to offer. I learned about web development, databases and a variaty of programming languages.</p>
                </div>
              </li>
              
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}