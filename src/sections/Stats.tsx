import { useRef, useEffect, useState } from 'react';
import { TrendingUp, Users, Sparkles } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const numberRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: numberRef.current,
        start: 'top 85%',
        onEnter: () => {
          gsap.to(
            { val: 0 },
            {
              val: value,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function () {
                setDisplayValue(Math.round(this.targets()[0].val));
              },
            }
          );
        },
        once: true,
      });
    });

    return () => ctx.revert();
  }, [value]);

  return (
    <span ref={numberRef} className="tabular-nums">
      {displayValue}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const stats = [
    {
      value: 96,
      suffix: '%',
      label: t('statsStat1'),
      icon: Sparkles,
      color: '#7350ff',
    },
    {
      value: 95,
      suffix: '%',
      label: t('statsStat2'),
      icon: TrendingUp,
      color: '#10b981',
    },
    {
      value: 87,
      suffix: '%',
      label: t('statsStat3'),
      icon: Users,
      color: '#f59e0b',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.stat-card');
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
            {t('statsBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('statsTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('statsDesc')}
          </p>
        </div>

        {/* Stats Grid */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-card group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden"
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${stat.color}08 0%, ${stat.color}03 100%)`
                }}
              />

              <div 
                className="relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}15` }}
              >
                <stat.icon 
                  className="w-8 h-8"
                  style={{ color: stat.color }}
                />
              </div>

              <div 
                className="relative text-6xl sm:text-7xl font-bold mb-4 font-['Fraunces']"
                style={{ color: stat.color }}
              >
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              </div>

              <p className="relative text-lg text-gray-600 leading-relaxed">
                {stat.label}
              </p>

              <div 
                className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10 transition-transform duration-500 group-hover:scale-150"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          ))}
        </div>

        {/* Additional trust text */}
        <div className="mt-16 text-center">
          <p className="text-gray-500">
            {t('statsSurvey')}{' '}
            <span className="font-semibold text-gray-700">10,000 {t('customers')}</span>{' '}
            {t('statsSurveyEnd')}
          </p>
        </div>
      </div>
    </section>
  );
}
