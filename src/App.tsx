import { useState, useEffect } from 'react';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { ParticleUniverse } from './components/three/ParticleUniverse';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Awards } from './components/sections/Awards';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Stats } from './components/sections/Stats';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { MatrixRain } from './components/ui/MatrixRain';
import { initLenis } from './lib/lenis';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis smooth scroll on mount
    initLenis();
  }, []);

  return (
    <>
      {/* Loading Sequence Screen (Section 4) */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main app layout wrapper */}
      <div className={`relative min-h-screen ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Background Visual Components */}
        <ParticleUniverse />
        <div className="bg-grain" />

        {/* Global UI Overlays */}
        <CustomCursor />
        <MatrixRain />
        <Navbar />

        {/* Sections content */}
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Awards />
          <Experience />
          <Education />
          <Stats />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
