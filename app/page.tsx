import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-red-300 w-full flex justify-center items-center px-4">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Welcome to my Next.js TailwindCSS Starter</h1>
        <Image src="/logo.svg" width={200} height={200} alt="logo" />
      </div>
    </div>
  );
}
