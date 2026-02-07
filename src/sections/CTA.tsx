import { useRef, useEffect } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function CTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
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
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-purple-50/50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="relative bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] rounded-3xl p-12 sm:p-16 overflow-hidden"
        >
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            <div 
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          {/* Content */}
          <div className="relative text-center space-y-8">
            <div className="reveal-item inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">{t('ctaBadge')}</span>
            </div>

            <h2 className="reveal-item text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-['Fraunces']">
              {t('ctaTitle')}{' '}
              <span className="text-white/90">{t('ctaTitleEnd')}</span>
            </h2>

            <p className="reveal-item text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              {t('ctaDesc')}
            </p>

            <div className="reveal-item flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button
                size="lg"
                className="bg-white text-[#7350ff] hover:bg-gray-100 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                {t('ctaPrimary')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                {t('ctaSecondary')}
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="reveal-item pt-8 flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>{t('ctaSetup')}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full" />
                <span>{t('ctaCancel')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
