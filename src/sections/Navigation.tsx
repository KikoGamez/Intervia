import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import LoginDialog from '@/components/LoginDialog';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('navPlatform'), href: '#features' },
    { label: t('navSolutions'), href: '#solutions' },
    { label: t('navIntegrations'), href: '#integrations' },
    { label: t('navPricing'), href: '#pricing' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Bigger */}
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="/intervia-logo.png" 
              alt="intervia.ai" 
              className="h-[120px] w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Desktop Navigation - Adjusted spacing */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label as string}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#7350ff] relative group ${
                  isScrolled ? 'text-gray-700' : 'text-gray-700'
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#7350ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Buttons + Language */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher - Discreet */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-500 hover:text-[#7350ff] hover:bg-[#7350ff]/5 rounded-full transition-all duration-300"
              title={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{language === 'es' ? t('langEn') : t('langEs')}</span>
            </button>

            <Button
              variant="ghost"
              className="text-gray-700 hover:text-[#7350ff] hover:bg-[#7350ff]/10"
              onClick={() => setIsLoginOpen(true)}
            >
              {t('navLogin')}
            </Button>
            <Button className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-6 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#7350ff]/30">
              {t('navSignup')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl p-6 space-y-4">
            {/* Mobile Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 w-full px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#7350ff] hover:bg-[#7350ff]/5 rounded-lg transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'es' ? 'Switch to English' : 'Cambiar a Español'}</span>
            </button>
            
            <div className="border-t border-gray-100" />
            
            {navLinks.map((link) => (
              <a
                key={link.label as string}
                href={link.href}
                className="block text-gray-700 hover:text-[#7350ff] font-medium py-2 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-3">
              <Button variant="outline" className="w-full" onClick={() => { setIsMobileMenuOpen(false); setIsLoginOpen(true); }}>
                {t('navLogin')}
              </Button>
              <Button className="w-full bg-[#7350ff] hover:bg-[#5a3fd4] text-white">
                {t('navSignup')}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <LoginDialog open={isLoginOpen} onOpenChange={setIsLoginOpen} />
    </nav>
  );
}
