import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { Skills, Experience, Education, Contact, Footer } from "./components/Sections";

export default function App() {
  return (
    <div className="page">
      <div className="bg-orbs" aria-hidden>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="bg-grid" aria-hidden />

      <Nav />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
