import HeroSection from "@/components/HeroSection";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WorkProcess from "@/components/WorkProcess";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      <About />
      <Skills />
      <WorkProcess />
      <Experience />
      <Blog />
      <Footer />
    </main>
  );
}
