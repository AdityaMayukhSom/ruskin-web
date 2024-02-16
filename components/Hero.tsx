import Link from "next/link";
import "@/styles/components/Hero.module.css";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-32">
      <h1 className=" text-3xl md:text-5xl font-semibold py-2 drop-shadow-2xl">
        Open Source Real Time Distributed
      </h1>
      <h1 className=" text-3xl md:text-5xl font-semibold text-secondary-font-color drop-shadow-2xl">
        Message Queueing System
      </h1>
      <div className="pt-12 grid grid-cols-2 gap-x-8">
        <Link className="p-4" href="">
          Get Started
        </Link>
        <Link className="p-4" href="">
          Try Demo
        </Link>
      </div>
      <section className="py-8 text-xl md:text-3xl text-center font-semibold  text-transparent bg-clip-text bg-gradient-to-br from-[#AAAAAA] to-[#6B6B6B]">
        <h2 className="drop-shadow-2xl">Develop Message Queues Fast</h2>
        <h2 className="drop-shadow-2xl">
          In an easy, simple and distributed fashion.
        </h2>
      </section>
      <section className=" relative w-full h-120">
        <Image
          className="w-full object-cover"
          src="/hero-cover.png"
          fill={true}
          alt="hero image"
        />
      </section>
    </section>
  );
}
