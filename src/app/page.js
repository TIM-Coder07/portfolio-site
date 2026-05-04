import HeroBanner from "@/Component/HeroBanner";
import Navbar from "@/Component/Navbar";
import Image from "next/image";
import About from "./about/page";
import ProjectsPage from "./projects/page";
import ContactPage from "./contact/page";

export default function Home() {
  return (
    <div>
      <section id="home" className="scroll-mt-14">
        <HeroBanner />
      </section>

      <section id="about" className="scroll-mt-14">
        <About />
      </section>

      <section id="projects" className="scroll-mt-14">
        <ProjectsPage />
      </section>

      <section id="contact" className="scroll-mt-14">
        <ContactPage />
      </section>
    </div>
  );
}
