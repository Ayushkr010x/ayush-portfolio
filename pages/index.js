import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SocialIcons from "../components/SocialIcons";

export default function Home() {
  return (
    <div className="bg-gray-900 dark:bg-gray-900">
      <Navbar />
      <SocialIcons />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
