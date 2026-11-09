import Topbar from "@/components/Topbar";
import { Sidebar, MobileTabs } from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Education, Skills, Projects, Experience, Goals, Contact } from "@/components/Sections";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-accent focus:px-3 focus:py-2">
        Skip to content
      </a>
      <Topbar />
      <MobileTabs />
      <div className="mx-auto flex max-w-7xl">
        <Sidebar />
        <main id="main" className="min-w-0 flex-1 space-y-5 px-4 py-6 lg:px-8">
          <Hero />
          <About />
          <Education />
          <Skills />
          <Projects />
          <Experience />
          <Goals />
          <Contact />
        </main>
      </div>
      <Footer />
    </>
  );
}
