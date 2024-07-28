import Appointment from "@/components/HomePage/Appointment";
import HeroSection from "@/components/HomePage/HeroSection";
import Schedule from "@/components/HomePage/Schedule";
import { Button } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Appointment />
      <Schedule />
    </>
  );
}
