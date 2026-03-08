import { useEffect } from 'react';
import './App.css';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Features from './sections/Features';
import DataCollection from './sections/DataCollection';
import StudiesMarketResearch from './sections/StudiesMarketResearch';
import MarketResearch from './sections/MarketResearch';
import Integrations from './sections/Integrations';
import Stats from './sections/Stats';
import AIDocumentReader from './sections/AIDocumentReader';
import CTA from './sections/CTA';
import Footer from './sections/Footer';
import { ContactDialogProvider } from './context/ContactDialogContext';
import ContactDialog from './components/ContactDialog';

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ContactDialogProvider>
      <div className="min-h-screen bg-white overflow-x-hidden">
        <Navigation />
        <main>
          <Hero />
          <Features />
          <DataCollection />
          <StudiesMarketResearch />
          <MarketResearch />
          <Integrations />
          <Stats />
          <AIDocumentReader />
          <CTA />
        </main>
        <Footer />
      </div>
      <ContactDialog />
    </ContactDialogProvider>
  );
}

export default App;
