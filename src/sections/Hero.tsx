import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { useLanguage } from '@/context/LanguageContext';
import AIBrain3D from '@/components/AIBrain3D';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { y: 100, opacity: 0, rotateX: 45 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.2 }
      )
        .fromTo(
          subheadlineRef.current,
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          '-=0.8'
        )
        .fromTo(
          ctaRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8 },
          '-=0.6'
        )
        .fromTo(
          imageRef.current,
          { scale: 0.8, opacity: 0, rotateY: 30 },
          { scale: 1, opacity: 1, rotateY: 0, duration: 1.5, ease: 'back.out(1.7)' },
          '-=1'
        );

      gsap.to(imageRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!imageRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 20;
      const y = (clientY / innerHeight - 0.5) * 20;

      gsap.to(imageRef.current, {
        rotateY: x,
        rotateX: -y,
        duration: 0.5,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-blue-50 animate-gradient" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7350ff]/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-blue-300/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#7350ff 1px, transparent 1px), linear-gradient(90deg, #7350ff 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#7350ff]/10 rounded-full border border-[#7350ff]/20">
              <Sparkles className="w-4 h-4 text-[#7350ff]" />
              <span className="text-sm font-medium text-[#7350ff]">{t('heroBadge')}</span>
            </div>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] font-['Fraunces']"
              style={{ perspective: '1000px' }}
            >
              {t('heroTitle')}{' '}
              <span className="text-gradient">{t('heroTitleHighlight')}</span>
            </h1>

            {/* Subheadline */}
            <p
              ref={subheadlineRef}
              className="text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30 group"
              >
                {t('heroCtaPrimary')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-300 hover:border-[#7350ff] hover:text-[#7350ff] px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                {t('heroCtaSecondary')}
              </Button>
            </div>

            {/* Trust badges */}
            <div className="pt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{t('heroSetup')}</span>
              </div>
            </div>
          </div>

          {/* 3D Image */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center"
            style={{ perspective: '1000px', transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#7350ff]/30 via-transparent to-transparent blur-2xl scale-150" />
            
            <div className="relative z-10 w-full max-w-xl">
              <AIBrain3D />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
