import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import WhyWorkWithMe from "./sections/WhyWorkWithMe/WhyWorkWithMe";
import Process from "./sections/Process/Process";
import Pricing from "./sections/Pricing/Pricing";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <WhyWorkWithMe />
        <Process />
        <Pricing />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;