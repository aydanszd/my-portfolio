import Nav from "../src/components/Layout/Nav";
import Hero from "../src/components/Hero";
import About from "../src/components/About";
import Skills from "../src/components/Skills";
import Experience from "../src/components/Experience";
import Projects from "../src/components/Projects";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Layout/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}