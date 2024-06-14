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

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <FloatingNav className="" navItems={navItems}/>
      <Hero />
      <Grid />
      <RecentProjects />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
