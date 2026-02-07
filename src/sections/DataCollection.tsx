import { useRef, useEffect } from 'react';
import { ArrowRight, Database, Brain, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function DataCollection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { rotateY: -30, opacity: 0, x: -100 },
        {
          rotateY: 0,
          opacity: 1,
          x: 0,
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        contentRef.current?.querySelectorAll('.reveal-item') || [],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: contentRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const benefits = [
    { icon: Database, text: t('dataBenefit1') },
    { icon: Brain, text: t('dataBenefit2') },
    { icon: TrendingUp, text: t('dataBenefit3') },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Image */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center order-2 lg:order-1"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#7350ff]/20 via-transparent to-transparent blur-3xl scale-150" />
            
            <div className="relative transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              <img
                src="/data-collection.jpg"
                alt="Data Collection"
                className="w-full max-w-md rounded-3xl shadow-2xl"
              />
              
              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('dataStat1')}</p>
                    <p className="text-lg font-bold text-gray-900">{t('dataStat1Value')}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7350ff]/10 rounded-lg flex items-center justify-center">
                    <Database className="w-5 h-5 text-[#7350ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('dataStat2')}</p>
                    <p className="text-lg font-bold text-gray-900">{t('dataStat2Value')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="order-1 lg:order-2 space-y-8">
            <div className="reveal-item">
              <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
                {t('dataBadge')}
              </span>
            </div>
            
            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-['Fraunces']">
              {t('dataTitle')}{' '}
              <span className="text-gradient">{t('dataTitleHighlight')}</span>{' '}
              {t('dataTitleEnd')}
            </h2>
            
            <p className="reveal-item text-xl text-gray-600 leading-relaxed">
              {t('dataDesc')}
            </p>

            {/* Benefits list */}
            <div className="reveal-item space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 text-[#7350ff]" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal-item">
              <Button
                size="lg"
                className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30 group"
              >
                {t('dataCta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
