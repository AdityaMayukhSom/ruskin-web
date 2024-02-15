import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
export default function Home() {
  return (
    <main className="font-circular-std bg-primary-background-color text-primary-font-color">
      <Navbar />
      <Hero />
    </main>
  );
}
