import { useRef, useEffect } from 'react';
import { Clock, AlertTriangle, PhoneOff, MessageSquare, Check, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Features() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const arrowRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const problems = [
    { icon: Clock, title: t('problem1Title') },
    { icon: AlertTriangle, title: t('problem2Title') },
    { icon: PhoneOff, title: t('problem3Title') },
  ];

  const solutionPoints = [
    t('solutionPoint1'),
    t('solutionPoint2'),
    t('solutionPoint3'),
    t('solutionPoint5'),
    t('solutionPoint6'),
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left panel slides in
      gsap.fromTo(
        leftRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Problem items stagger in
      const problemItems = leftRef.current?.querySelectorAll('.problem-item');
      if (problemItems) {
        gsap.fromTo(
          problemItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: leftRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Arrow bounces in
      gsap.fromTo(
        arrowRef.current,
        { scale: 0, opacity: 0, rotate: -90 },
        {
          scale: 1,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          ease: 'back.out(2)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Arrow pulse loop
      gsap.to(arrowRef.current?.querySelector('.arrow-pulse'), {
        scale: 1.15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Right panel slides in
      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Solution checkmarks stagger in
      const solutionItems = rightRef.current?.querySelectorAll('.solution-item');
      if (solutionItems) {
        gsap.fromTo(
          solutionItems,
          { x: 30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: rightRef.current,
              start: 'top 75%',
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
        {/* Badge */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full">
            {t('problemBadge')}
          </span>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr,auto,1fr] gap-6 lg:gap-4 items-stretch">

          {/* LEFT: Problems */}
          <div ref={leftRef} className="relative bg-white rounded-3xl shadow-xl border border-[#7350ff]/10 p-8 space-y-6 overflow-hidden">
            {/* Decorative corner gradient */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#7350ff]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -right-16 w-32 h-32 bg-[#7350ff]/5 rounded-full blur-2xl" />

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2.5 h-2.5 bg-[#7350ff]/40 rounded-full" />
                <span className="text-sm font-bold text-[#7350ff]/60 uppercase tracking-wider">El problema</span>
              </div>

              <div className="space-y-4">
                {problems.map((problem, index) => (
                  <div
                    key={index}
                    className="problem-item group flex items-start gap-4 p-4 rounded-2xl bg-[#7350ff]/[0.03] hover:bg-[#7350ff]/[0.07] transition-all duration-300 border border-[#7350ff]/[0.06] hover:border-[#7350ff]/15 hover:shadow-md"
                  >
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#7350ff]/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#7350ff]/15">
                      <problem.icon className="w-5 h-5 text-[#7350ff]" />
                    </div>
                    <h3 className="font-medium text-gray-800 text-[15px] leading-snug pt-2">{problem.title}</h3>
                  </div>
                ))}
              </div>

              {/* Stat pill */}
              <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-[#7350ff]/5 rounded-full">
                <div className="flex -space-x-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#7350ff]/10 border-2 border-white" />
                  <div className="w-5 h-5 rounded-full bg-[#7350ff]/20 border-2 border-white" />
                  <div className="w-5 h-5 rounded-full bg-[#7350ff]/30 border-2 border-white" />
                </div>
                <span className="text-xs text-gray-500">+1h por tramite</span>
              </div>
            </div>
          </div>

          {/* CENTER: Arrow */}
          <div ref={arrowRef} className="hidden lg:flex items-center justify-center">
            <div className="arrow-pulse relative w-16 h-16 bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] rounded-2xl flex items-center justify-center shadow-xl shadow-[#7350ff]/30">
              <ArrowRight className="w-7 h-7 text-white" />
              <div className="absolute inset-0 bg-[#7350ff] rounded-2xl animate-ping opacity-10" />
            </div>
          </div>

          {/* Mobile arrow */}
          <div className="flex lg:hidden items-center justify-center py-2">
            <div className="w-12 h-12 bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] rounded-xl flex items-center justify-center shadow-lg shadow-[#7350ff]/20 rotate-90">
              <ArrowRight className="w-5 h-5 text-white" />
            </div>
          </div>

          {/* RIGHT: Solution */}
          <div ref={rightRef} className="relative bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] rounded-3xl shadow-xl p-8 text-white overflow-hidden">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                backgroundSize: '30px 30px'
              }}
            />
            <div className="absolute -top-20 -right-20 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-white/5 rounded-full blur-3xl" />

            <div className="relative space-y-6">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-white/70" />
                <span className="text-sm font-bold uppercase tracking-wider text-white/70">La solucion</span>
              </div>

              <h3 className="text-2xl font-bold font-['Fraunces'] leading-snug">
                Una conversacion, no un formulario
              </h3>

              <div className="space-y-2.5">
                {solutionPoints.map((point, index) => (
                  <div key={index} className="solution-item flex items-start gap-3">
                    <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 border border-white/10">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-white/90 text-sm leading-snug">{point}</span>
                  </div>
                ))}
              </div>

              {/* Stat pill */}
              <div className="mt-2 inline-flex items-center gap-2.5 px-4 py-2.5 bg-white/10 rounded-full border border-white/10">
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                  <span className="text-[11px] font-bold">10'</span>
                </div>
                <span className="text-white/70 text-sm">Tramite completo en 10 minutos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
