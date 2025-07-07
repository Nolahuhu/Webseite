import Navbar from "./components/Navbar"; // neu
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // ganz unten hinzufügen

export default function Home() {
  return (
    <>

<main className="p-0 m-0">
        <Hero />
         <Navbar />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer /> {/* 👈 Ganz unten */}
    </>
  );
}
