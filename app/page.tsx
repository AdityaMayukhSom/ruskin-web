import AdminPanel from "@/components/AdminPanel";
import BackgroundCircularBlur from "@/components/BackgroundCircularBlur";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductionDescription from "@/components/ProductDescription";

const circlePositions: CircleCoordinates[] = [
  {
    top: 100,
    left: 8,
  },
  {
    bottom: 7,
    right: 8,
  },
];

export default function Home() {
  return (
    <main className="font-circular-std bg-primary-background-color text-primary-font-color">
      <BackgroundCircularBlur circlePositions={circlePositions}>
        <Navbar />
        <Hero />
        <ProductionDescription />
        <AdminPanel />
        <Features />
        <Footer />
      </BackgroundCircularBlur>
    </main>
  );
}
