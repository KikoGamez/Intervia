import { useRef, useEffect } from 'react';
import { MessageCircle, HelpCircle, CheckSquare, FileDown } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const steps = [
    {
      number: '1',
      icon: MessageCircle,
      title: t('howStep1Title'),
      description: t('howStep1Desc'),
      color: '#7350ff',
    },
    {
      number: '2',
      icon: HelpCircle,
      title: t('howStep2Title'),
      description: t('howStep2Desc'),
      color: '#6366f1',
    },
    {
      number: '3',
      icon: CheckSquare,
      title: t('howStep3Title'),
      description: t('howStep3Desc'),
      color: '#10b981',
    },
    {
      number: '4',
      icon: FileDown,
      title: t('howStep4Title'),
      description: t('howStep4Desc'),
      color: '#f59e0b',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.step-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-purple-50/50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
            {t('howBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('howTitle')}
          </h2>
        </div>

        {/* Steps */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {steps.map((step, index) => (
            <div
              key={index}
              className="step-card group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${step.color}08 0%, ${step.color}03 100%)`
                }}
              />

              {/* Step number */}
              <div
                className="relative w-12 h-12 rounded-full flex items-center justify-center mb-6 font-['Fraunces'] text-2xl font-bold text-white"
                style={{ backgroundColor: step.color }}
              >
                {step.number}
              </div>

              <div
                className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${step.color}15` }}
              >
                <step.icon
                  className="w-7 h-7"
                  style={{ color: step.color }}
                />
              </div>

              <h3 className="relative text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>

              <p className="relative text-sm text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Connector line (except last) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 -right-4 w-8 border-t-2 border-dashed border-gray-200 z-10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
