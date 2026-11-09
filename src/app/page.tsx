import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Education, Skills, Projects, Experience, Goals, Contact } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-ink">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Experience />
        <Goals />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
