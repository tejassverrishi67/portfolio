import { useState, useEffect, lazy, Suspense } from 'react';
import { LoadingScreen } from './components/sections/LoadingScreen';
import { ParticleUniverse } from './components/three/ParticleUniverse';
import { CustomCursor } from './components/ui/CustomCursor';
import { Navbar } from './components/ui/Navbar';
import { Hero } from './components/sections/Hero';
import { MatrixRain } from './components/ui/MatrixRain';
import { initLenis } from './lib/lenis';

// Lazy loaded below-the-fold sections
const About = lazy(() => import('./components/sections/About').then(m => ({ default: m.About })));
const Skills = lazy(() => import('./components/sections/Skills').then(m => ({ default: m.Skills })));
const Projects = lazy(() => import('./components/sections/Projects').then(m => ({ default: m.Projects })));
const Awards = lazy(() => import('./components/sections/Awards').then(m => ({ default: m.Awards })));
const Experience = lazy(() => import('./components/sections/Experience').then(m => ({ default: m.Experience })));
const Education = lazy(() => import('./components/sections/Education').then(m => ({ default: m.Education })));
const Stats = lazy(() => import('./components/sections/Stats').then(m => ({ default: m.Stats })));
const Contact = lazy(() => import('./components/sections/Contact').then(m => ({ default: m.Contact })));
const Footer = lazy(() => import('./components/sections/Footer').then(m => ({ default: m.Footer })));

// Loading placeholder component
const SectionFallback = () => <div className="w-full min-h-[300px]" />;

function App() {
  const [loading, setLoading] = useState(true);
  const [discoActive, setDiscoActive] = useState(false);

  useEffect(() => {
    // Initialize Lenis smooth scroll on mount
    initLenis();

    const handleDisco = () => {
      setDiscoActive(true);
      setTimeout(() => {
        setDiscoActive(false);
      }, 2000);
    };

    window.addEventListener('disco-trigger', handleDisco);
    return () => {
      window.removeEventListener('disco-trigger', handleDisco);
    };
  }, []);

  return (
    <>
      {/* Loading Sequence Screen (Section 4) */}
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}

      {/* Main app layout wrapper */}
      <div className={`relative min-h-screen ${loading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* Disco Mode Overlay (Easter Egg 3) */}
        {discoActive && (
          <div className="fixed inset-0 z-40 pointer-events-none animate-disco opacity-20 mix-blend-color-dodge" />
        )}

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
          
          <Suspense fallback={<SectionFallback />}>
            <About />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Skills />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Projects />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Awards />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Experience />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Education />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Stats />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={<div className="h-20" />}>
          <Footer />
        </Suspense>
      </div>
    </>
  );
}

export default App;

