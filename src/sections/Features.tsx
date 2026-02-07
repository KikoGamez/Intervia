import { useRef, useEffect } from 'react';
import { ArrowRight, MessageSquare, Zap, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const features = [
    {
      icon: MessageSquare,
      title: t('feature1Title'),
      description: t('feature1Desc'),
      color: '#7350ff',
    },
    {
      icon: Zap,
      title: t('feature2Title'),
      description: t('feature2Desc'),
      color: '#10b981',
    },
    {
      icon: BarChart3,
      title: t('feature3Title'),
      description: t('feature3Desc'),
      color: '#f59e0b',
    },
    {
      icon: Users,
      title: t('feature4Title'),
      description: t('feature4Desc'),
      color: '#ec4899',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.feature-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
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
      id="features"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-purple-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
            {t('featuresBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('featuresTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('featuresSubtitle')}
          </p>
        </div>

        {/* Feature Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-[#7350ff]/20 overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}08 0%, ${feature.color}03 100%)`
                }}
              />
              
              <div 
                className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
                style={{ backgroundColor: `${feature.color}15` }}
              >
                <feature.icon 
                  className="w-7 h-7 transition-colors duration-300" 
                  style={{ color: feature.color }}
                />
              </div>

              <h3 className="relative text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#7350ff] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="relative text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <div className="relative mt-6 flex items-center text-[#7350ff] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">
                <span className="text-sm font-medium">{t('learnMore')}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            size="lg"
            className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30"
          >
            {t('featuresCta')}
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
