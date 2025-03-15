import { Experience } from "@/components/experience";
import { MainInfo } from "@/components/mainInfo";

export default function Home() {
  return (
    
    <div className="flex flex-col gap-16 px-4">
      
      <MainInfo />
      <Experience />
      <h1 className="text-4xl font-bold">hello Max here! portfolio v2</h1>
      <p>hier komt korte intro + foto + snelle links naar linkedin, email cv etc, werk + school section, klein aantal projectjes, footer</p>
    </div>
    
  );
}
