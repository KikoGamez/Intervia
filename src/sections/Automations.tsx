import { useRef, useEffect } from 'react';
import { ArrowRight, Mail, Workflow, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Automations() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 0.8, opacity: 0, rotateZ: -10 },
        {
          scale: 1,
          opacity: 1,
          rotateZ: 0,
          duration: 1.2,
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
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.12,
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

  const features = [
    { icon: Mail, text: t('autoFeature1') },
    { icon: Workflow, text: t('autoFeature2') },
    { icon: Clock, text: t('autoFeature3') },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-blue-50/30 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-100 text-blue-700 text-sm font-medium rounded-full mb-4">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                {t('autoBadge')}
              </span>
            </div>
            
            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-['Fraunces']">
              {t('autoTitle')}{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {t('autoTitleHighlight')}
              </span>
            </h2>
            
            <p className="reveal-item text-xl text-gray-600 leading-relaxed">
              {t('autoDesc')}
            </p>

            {/* Features list */}
            <div className="reveal-item space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group border border-gray-100"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="reveal-item">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 group"
              >
                {t('autoCta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* 3D Image */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent blur-3xl scale-150" />
            
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}voice-forms.jpg`}
                alt="Voice Forms"
                className="w-full max-w-lg rounded-3xl shadow-2xl"
              />
              
              {/* Floating automation cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Workflow className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('autoStat1')}</p>
                    <p className="text-sm font-bold text-gray-900">{t('autoStat1Value')}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('autoStat2')}</p>
                    <p className="text-sm font-bold text-gray-900">{t('autoStat2Value')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
