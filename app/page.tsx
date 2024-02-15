import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import ProductionDescription from "@/components/ProductDescription";
export default function Home() {
  return (
    <main className="font-circular-std bg-primary-background-color text-primary-font-color">
      <Navbar />
      <Hero />
      <ProductionDescription />
    </main>
  );
}
