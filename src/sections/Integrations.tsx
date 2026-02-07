import { useRef, useEffect } from 'react';
import { ArrowRight, Plug } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const base = import.meta.env.BASE_URL;

const integrations = [
  { name: 'Slack', icon: `${base}icon-1.png`, color: '#4A154B' },
  { name: 'Google Drive', icon: `${base}icon-2.png`, color: '#4285F4' },
  { name: 'Zapier', icon: `${base}icon-3.png`, color: '#FF4A00' },
  { name: 'Salesforce', icon: `${base}icon-4.png`, color: '#00A1E0' },
  { name: 'HubSpot', icon: `${base}icon-5.png`, color: '#FF7A59' },
  { name: 'Notion', icon: `${base}icon-6.png`, color: '#000000' },
];

export default function Integrations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        centerRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      const cards = gridRef.current?.querySelectorAll('.integration-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.6,
            stagger: {
              each: 0.1,
              from: 'center',
            },
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: gridRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );

        cards.forEach((card, index) => {
          gsap.to(card, {
            y: Math.sin(index) * 10,
            duration: 3 + index * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="integrations"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-purple-100 text-[#7350ff] text-sm font-medium rounded-full mb-4">
            <Plug className="w-4 h-4" />
            {t('intBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('intTitle')}{' '}
            <span className="text-gradient">{t('intTitleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600">
            {t('intDesc')}
          </p>
        </div>

        {/* Integration Constellation */}
        <div className="relative py-16">
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 0 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#7350ff" stopOpacity="0.2" />
                <stop offset="50%" stopColor="#7350ff" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#7350ff" stopOpacity="0.2" />
              </linearGradient>
            </defs>
            <line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="20%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
            />
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="20%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
              style={{ animationDelay: '0.5s' }}
            />
            <line
              x1="50%"
              y1="50%"
              x2="20%"
              y2="80%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
              style={{ animationDelay: '1s' }}
            />
            <line
              x1="50%"
              y1="50%"
              x2="80%"
              y2="80%"
              stroke="url(#lineGradient)"
              strokeWidth="2"
              strokeDasharray="5,5"
              className="animate-pulse"
              style={{ animationDelay: '1.5s' }}
            />
          </svg>

          {/* Center Hub */}
          <div className="flex justify-center mb-12">
            <div
              ref={centerRef}
              className="relative w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-10 border-2 border-[#7350ff]/20"
            >
              <img 
                src={`${import.meta.env.BASE_URL}intervia-logo.png`}
                alt="intervia.ai" 
                className="w-16 h-16 object-contain"
              />
              <div className="absolute inset-0 bg-[#7350ff] rounded-3xl animate-ping opacity-10" />
              <div className="absolute inset-[-10px] bg-[#7350ff]/10 rounded-3xl animate-ping opacity-5" style={{ animationDelay: '0.5s' }} />
            </div>
          </div>

          {/* Integration Grid */}
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto"
          >
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="integration-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#7350ff]/30 cursor-pointer"
              >
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${integration.color}10 0%, ${integration.color}05 100%)`
                  }}
                />
                
                <div className="relative flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={integration.icon}
                      alt={integration.name}
                      className="w-10 h-10 object-contain"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-[#7350ff] transition-colors">
                    {integration.name}
                  </span>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-[#7350ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30 group"
          >
            {t('intCta')}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
