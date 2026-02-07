import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const logos = [
  { name: 'TechFlow', src: '/logo-1.png' },
  { name: 'DataSphere', src: '/logo-2.png' },
  { name: 'CloudPeak', src: '/logo-3.png' },
  { name: 'NovaLabs', src: '/logo-4.png' },
  { name: 'PulseAI', src: '/logo-5.png' },
  { name: 'Vertex', src: '/logo-6.png' },
];

export default function LogoMarquee() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const allLogos = [...logos, ...logos];

  return (
    <section ref={sectionRef} className="py-10 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-center text-gray-500 text-sm font-medium uppercase tracking-wider">
          {t('trustedBy')}
        </p>
      </div>

      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling track - larger logos */}
        <div
          className="flex items-center gap-20 animate-marquee hover:[animation-play-state:paused]"
        >
          {allLogos.map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <div className="w-52 h-28 flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
