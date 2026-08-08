import Navbar from "./components/Navbar/Navbar";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
      </main>

      
    </>
  );
}

export default App;