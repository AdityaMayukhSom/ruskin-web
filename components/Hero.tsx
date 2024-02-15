import Link from "next/link";
import "@/styles/components/Hero.module.css";

export default function Hero() {
  return (
    <section className="w-full flex flex-col justify-center items-center pt-12">
      <h1 className=" text-5xl font-semibold py-2">
        Open Source Real Time Distributed
      </h1>
      <h1 className=" text-5xl font-semibold text-secondary-font-color">
        Message Queueing System
      </h1>
      <div>
        <Link href="">Get Started</Link>
        <Link href="">Try Demo</Link>
      </div>

      <h2>Develop Message Queues Fast</h2>
      <h2>In an easy, simple and distributed manner</h2>
    </section>
  );
}
