import { useEffect } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import LogoMarquee from './sections/LogoMarquee';
import Features from './sections/Features';
import DataCollection from './sections/DataCollection';
import MarketResearch from './sections/MarketResearch';
import Automations from './sections/Automations';
import Integrations from './sections/Integrations';
import Stats from './sections/Stats';
import Pricing from './sections/Pricing';
import CTA from './sections/CTA';
import Footer from './sections/Footer';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <LogoMarquee />
        <Features />
        <DataCollection />
        <MarketResearch />
        <Automations />
        <Integrations />
        <Stats />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
