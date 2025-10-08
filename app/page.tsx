"use client";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ClientOnly from "@/components/ui/ClientOnly";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <ClientOnly>
      <main className="relative flex justify-center items-center flex-col overflow-clip mx-auto">
        <FloatingNav className="" navItems={navItems}/>
        <Hero />
        <Grid />
        <TechStack />
        <Experience />
        <Education />
        <RecentProjects />
        <Contact />
        <Footer />
      </main>
    </ClientOnly>
  );
}
