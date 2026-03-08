import { useRef, useEffect, useState } from 'react';
import { BookOpen, Lightbulb, AlertTriangle, RefreshCw } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function AIDocumentReader() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const capsRef = useRef<HTMLDivElement>(null);
  const examplesRef = useRef<HTMLDivElement>(null);
  const [activeExample, setActiveExample] = useState(0);
  const { t } = useLanguage();

  const capabilities = [
    {
      icon: BookOpen,
      title: t('aiDocCap1Title'),
      description: t('aiDocCap1Desc'),
      color: '#7350ff',
    },
    {
      icon: Lightbulb,
      title: t('aiDocCap2Title'),
      description: t('aiDocCap2Desc'),
      color: '#f59e0b',
    },
    {
      icon: AlertTriangle,
      title: t('aiDocCap3Title'),
      description: t('aiDocCap3Desc'),
      color: '#ef4444',
    },
    {
      icon: RefreshCw,
      title: t('aiDocCap4Title'),
      description: t('aiDocCap4Desc'),
      color: '#10b981',
    },
  ];

  const examples = [
    {
      field: t('aiDocField1'),
      official: t('aiDocOfficial1'),
      intervia: t('aiDocIntervia1'),
    },
    {
      field: t('aiDocField2'),
      official: t('aiDocOfficial2'),
      intervia: t('aiDocIntervia2'),
    },
    {
      field: t('aiDocField3'),
      official: t('aiDocOfficial3'),
      intervia: t('aiDocIntervia3'),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const caps = capsRef.current?.querySelectorAll('.cap-card');
      if (caps) {
        gsap.fromTo(
          caps,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: capsRef.current,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      gsap.fromTo(
        examplesRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: examplesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Auto-rotate examples
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExample((prev) => (prev + 1) % examples.length);
    }, 9000);
    return () => clearInterval(interval);
  }, [examples.length]);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-purple-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
            {t('aiDocBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('aiDocTitle')}
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {t('aiDocDesc')}
          </p>
        </div>

        {/* 4 Capabilities */}
        <div
          ref={capsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24"
        >
          {capabilities.map((cap, index) => (
            <div
              key={index}
              className="cap-card group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#7350ff]/20 overflow-hidden"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${cap.color}08 0%, ${cap.color}03 100%)`
                }}
              />

              <div
                className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${cap.color}15` }}
              >
                <cap.icon
                  className="w-6 h-6"
                  style={{ color: cap.color }}
                />
              </div>

              <h3 className="relative text-lg font-semibold text-gray-900 mb-2">
                {cap.title}
              </h3>
              <p className="relative text-sm text-gray-600 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Demo - Modelo 036 examples */}
        <div ref={examplesRef} className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 font-['Fraunces'] mb-2">
              {t('aiDocExamplesTitle')}
            </h3>
          </div>

          {/* Field selector tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {examples.map((example, index) => (
              <button
                key={index}
                onClick={() => setActiveExample(index)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeExample === index
                    ? 'bg-[#7350ff] text-white shadow-lg shadow-[#7350ff]/30'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {example.field}
              </button>
            ))}
          </div>

          {/* Comparison card */}
          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Field header */}
            <div className="bg-gradient-to-r from-[#7350ff] to-[#5a3fd4] px-8 py-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white/70 text-xs uppercase tracking-wider">Modelo 036</p>
                  <p className="text-white font-semibold">{examples[activeExample].field}</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {/* Official text */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-400 rounded-full" />
                  <span className="text-sm font-semibold text-red-500 uppercase tracking-wider">
                    {t('aiDocOfficialLabel')}
                  </span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed italic">
                  "{examples[activeExample].official}"
                </p>
              </div>

              {/* Intervia explanation */}
              <div className="p-8 bg-purple-50/30">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-[#7350ff] rounded-full" />
                  <span className="text-sm font-semibold text-[#7350ff] uppercase tracking-wider">
                    {t('aiDocInterviaLabel')}
                  </span>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-[#7350ff] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xs font-bold">AI</span>
                  </div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-4 shadow-sm border border-gray-100">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      "{examples[activeExample].intervia}"
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex justify-center gap-2 py-4 bg-gray-50/50">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveExample(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeExample === index
                      ? 'bg-[#7350ff] w-6'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
