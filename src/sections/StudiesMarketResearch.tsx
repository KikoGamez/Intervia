import { useRef, useEffect } from 'react';
import { ArrowRight, AlertCircle, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function RRHHChatCard() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Main chat card */}
      <div className="relative z-10 bg-white rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-100 p-6 animate-[pulse-glow_3s_ease-in-out_infinite]"
        style={{
          animationName: 'pulseGlow',
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5 pb-4 border-b border-gray-100">
          <div className="w-9 h-9 bg-gradient-to-br from-[#7350ff] to-[#a855f7] rounded-[10px] flex items-center justify-center">
            <MessageSquare className="w-[18px] h-[18px] text-white" />
          </div>
          <div className="flex-1">
            <div className="text-sm font-semibold text-gray-900">Intervia · Modelo TA.2/S</div>
            <div className="text-xs text-green-500 flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block" />
              En linea
            </div>
          </div>
          <div className="text-xs text-gray-400">7 min</div>
        </div>

        {/* Chat messages */}
        <div className="bg-gray-50 rounded-xl p-4 space-y-3">
          {/* AI message 1 */}
          <div className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">IA</div>
            <div className="bg-white border border-gray-200 rounded-[4px_12px_12px_12px] px-3 py-2 text-[13px] text-gray-700 leading-snug max-w-[80%]">
              Hola! Vamos a completar tu alta. Como te llamas y cual es tu DNI?
            </div>
          </div>

          {/* User message 1 */}
          <div className="flex gap-2.5 flex-row-reverse">
            <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">TU</div>
            <div className="bg-[#7350ff] rounded-[12px_4px_12px_12px] px-3 py-2 text-[13px] text-white leading-snug">
              Maria Lopez, 12345678Z
            </div>
          </div>

          {/* AI validation + next question */}
          <div className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">IA</div>
            <div className="bg-green-50 border border-green-200 rounded-[4px_12px_12px_12px] px-3 py-2 text-[13px] text-gray-700 leading-snug max-w-[80%]">
              <span className="text-green-600 font-semibold">DNI validado.</span> Fecha de nacimiento?
            </div>
          </div>

          {/* User message 2 */}
          <div className="flex gap-2.5 flex-row-reverse">
            <div className="w-7 h-7 rounded-full bg-gray-700 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">TU</div>
            <div className="bg-[#7350ff] rounded-[12px_4px_12px_12px] px-3 py-2 text-[13px] text-white leading-snug">
              15 de marzo del 95
            </div>
          </div>

          {/* AI message - contract confirmation (pre-filled from company) */}
          <div className="flex gap-2.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">IA</div>
            <div className="bg-white border border-gray-200 rounded-[4px_12px_12px_12px] px-3 py-2 text-[13px] text-gray-700 leading-snug max-w-[80%]">
              La empresa indica que tu contrato es <span className="font-semibold text-gray-900">indefinido a jornada completa</span>. Es correcto?
            </div>
          </div>

          {/* Quick reply buttons */}
          <div className="flex gap-2 pl-9">
            <span className="px-3 py-1.5 rounded-full border border-[#7350ff] bg-[#7350ff]/5 text-[#7350ff] text-xs font-medium cursor-pointer">
              Si, correcto
            </span>
            <span className="px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 text-xs font-medium cursor-pointer hover:border-[#7350ff] hover:text-[#7350ff] transition-colors">
              No, es diferente
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-4 flex items-center gap-2">
          <div className="flex-1 h-1 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#7350ff] to-[#a855f7] rounded-full animate-[progressPulse_4s_ease-in-out_infinite]"
              style={{ width: '65%' }}
            />
          </div>
          <span className="text-xs text-[#7350ff] font-semibold">65%</span>
        </div>
      </div>

      {/* Floating stat - top right */}
      <div className="absolute -top-5 -right-5 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3.5 z-20 animate-float">
        <div className="text-[11px] text-gray-400 mb-0.5">Tiempo por alta</div>
        <div className="text-xl font-extrabold text-[#7350ff] font-['Fraunces']">7 min</div>
        <div className="text-[11px] text-gray-400">vs. 45-60 min habitual</div>
      </div>

      {/* Floating stat - bottom left */}
      <div className="absolute -bottom-5 -left-5 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3.5 z-20 animate-float" style={{ animationDelay: '-2s' }}>
        <div className="text-[11px] text-gray-400 mb-1">Datos correctos</div>
        <div className="flex items-center gap-1.5">
          <span className="text-xl font-extrabold text-green-500 font-['Fraunces']">99%</span>
          <span className="text-lg">&#x2713;</span>
        </div>
      </div>

      {/* Floating document card - right */}
      <div className="absolute top-1/2 -right-16 -translate-y-1/2 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3 z-20 hidden lg:block animate-float" style={{ animationDelay: '-1s' }}>
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-11 bg-[#7350ff]/10 rounded border border-[#7350ff]/20 flex items-center justify-center">
            <span className="text-[#7350ff] text-[10px] font-bold leading-tight text-center">TA.2<br/>/S</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-gray-800">Alta SS</div>
            <div className="text-[10px] text-gray-400">Auto-rellenando...</div>
            <div className="mt-1 w-20 h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-green-400/60 rounded-full animate-[progressPulse_3s_ease-in-out_infinite]" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StudiesMarketResearch() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
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

  const pains = [
    t('rrhhPain1'),
    t('rrhhPain2'),
    t('rrhhPain3'),
  ];

  const results = [
    t('rrhhResult1'),
    t('rrhhResult2'),
    t('rrhhResult3'),
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50 overflow-hidden"
    >
      {/* Keyframe animations */}
      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 20px rgba(115,80,255,0.15); }
          50% { box-shadow: 0 20px 60px rgba(0,0,0,0.12), 0 0 40px rgba(115,80,255,0.3); }
        }
        @keyframes progressPulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
                {t('rrhhBadge')}
              </span>
            </div>

            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-['Fraunces']">
              {t('rrhhTitle')}{' '}
              <span className="text-gradient">{t('rrhhTitleHighlight')}</span>
            </h2>

            <p className="reveal-item text-xl text-gray-600 leading-relaxed">
              {t('rrhhDesc')}
            </p>

            {/* Pain points */}
            <div className="reveal-item space-y-3">
              <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">{t('painPoints')}</p>
              {pains.map((pain, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{pain}</span>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="reveal-item space-y-3">
              <p className="text-sm font-semibold text-green-600 uppercase tracking-wider">{t('results')}</p>
              {results.map((result, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-white rounded-xl"
                >
                  <TrendingUp className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{result}</span>
                </div>
              ))}
            </div>

            <div className="reveal-item">
              <Button
                size="lg"
                className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30 group"
              >
                {t('rrhhCta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center py-8"
          >
            <RRHHChatCard />
          </div>
        </div>
      </div>
    </section>
  );
}
