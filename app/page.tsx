"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ui/ClientOnly";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <ClientOnly>
      <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
        <FloatingNav className="" navItems={navItems}/>
        <Hero />
        <Grid />
        <TechStack />
        <RecentProjects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </ClientOnly>
  );
}
