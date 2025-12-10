import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import PresidentMessage from './components/PresidentMessage';
import FloorPlans from './components/FloorPlans';
import TechnicalSpecs from './components/TechnicalSpecs';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation scrolled={scrolled} />
      <Hero />
      <About />
      <PresidentMessage />
      <FloorPlans />
      <TechnicalSpecs />
      <Amenities />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
