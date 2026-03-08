import { useRef, useEffect } from 'react';
import { ArrowRight, AlertCircle, TrendingUp, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function AdminWebIllustration() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Browser window */}
      <div className="bg-white rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-gray-200 overflow-hidden">
        {/* Browser chrome */}
        <div className="bg-gray-50 border-b border-gray-200 px-4 py-2.5 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-white border border-gray-200 rounded-md px-3 py-1 text-[11px] text-gray-400 text-center">
            sede.administracion.gob.es/tramites/prestaciones
          </div>
        </div>

        {/* Website content */}
        <div className="relative">
          {/* Gov header bar */}
          <div className="bg-[#1a1a4e] px-4 py-2 flex items-center gap-2">
            <div className="w-5 h-5 bg-white/20 rounded flex items-center justify-center">
              <span className="text-white text-[7px] font-bold">GOB</span>
            </div>
            <span className="text-white/90 text-[10px] font-medium">Sede Electronica</span>
            <div className="ml-auto flex gap-3">
              <span className="text-white/50 text-[9px]">Inicio</span>
              <span className="text-white/50 text-[9px]">Tramites</span>
              <span className="text-white/50 text-[9px]">Ayuda</span>
            </div>
          </div>

          {/* Page content */}
          <div className="p-4 pb-6 bg-gray-50 min-h-[280px]">
            {/* Breadcrumb */}
            <div className="text-[9px] text-gray-400 mb-3">
              Inicio &gt; Tramites &gt; Prestaciones &gt; <span className="text-gray-600">Solicitud</span>
            </div>

            {/* Page title */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 mb-3">
              <h3 className="text-[11px] font-bold text-gray-800 mb-1">Solicitud de prestacion por desempleo</h3>
              <p className="text-[9px] text-gray-400 leading-relaxed">Procedimiento para la solicitud de prestacion contributiva segun art. 262 LGSS</p>
            </div>

            {/* Form fields (background, greyed out) */}
            <div className="bg-white rounded-lg border border-gray-200 p-3 space-y-2 opacity-40">
              <div>
                <div className="text-[8px] text-gray-500 mb-0.5">Tipo de prestacion contributiva</div>
                <div className="h-5 bg-gray-100 rounded border border-gray-200" />
              </div>
              <div>
                <div className="text-[8px] text-gray-500 mb-0.5">Base reguladora de cotizacion</div>
                <div className="h-5 bg-gray-100 rounded border border-gray-200" />
              </div>
              <div>
                <div className="text-[8px] text-gray-500 mb-0.5">Periodo de carencia minimo</div>
                <div className="h-5 bg-gray-100 rounded border border-gray-200" />
              </div>
            </div>
          </div>

          {/* Embedded chat widget - bottom right */}
          <div className="absolute bottom-3 right-3 w-[200px] bg-white rounded-xl shadow-[0_8px_30px_rgba(115,80,255,0.25)] border border-[#7350ff]/20 overflow-hidden animate-[pulseGlow_3s_ease-in-out_infinite]">
            {/* Chat header */}
            <div className="bg-gradient-to-r from-[#7350ff] to-[#5a3fd4] px-3 py-2 flex items-center gap-2">
              <MessageSquare className="w-3 h-3 text-white" />
              <span className="text-white text-[10px] font-semibold">Intervia · Asistente</span>
              <div className="ml-auto w-1.5 h-1.5 bg-green-400 rounded-full" />
            </div>

            {/* Chat messages */}
            <div className="p-2.5 space-y-2 bg-gray-50">
              {/* AI */}
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-[6px] font-bold flex-shrink-0">IA</div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 text-[9px] text-gray-700 leading-snug">
                  Quieres solicitar la prestacion por desempleo? Te guio paso a paso.
                </div>
              </div>

              {/* User */}
              <div className="flex gap-1.5 flex-row-reverse">
                <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-white text-[6px] font-bold flex-shrink-0">TU</div>
                <div className="bg-[#7350ff] rounded-md px-2 py-1 text-[9px] text-white leading-snug">
                  Si, me han despedido
                </div>
              </div>

              {/* AI */}
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-[6px] font-bold flex-shrink-0">IA</div>
                <div className="bg-white border border-gray-200 rounded-md px-2 py-1 text-[9px] text-gray-700 leading-snug">
                  Entendido. Cuanto tiempo llevas trabajando en esa empresa?
                </div>
              </div>

              {/* User */}
              <div className="flex gap-1.5 flex-row-reverse">
                <div className="w-4 h-4 rounded-full bg-gray-600 flex items-center justify-center text-white text-[6px] font-bold flex-shrink-0">TU</div>
                <div className="bg-[#7350ff] rounded-md px-2 py-1 text-[9px] text-white leading-snug">
                  3 anos y medio
                </div>
              </div>

              {/* AI validation */}
              <div className="flex gap-1.5">
                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-[#7350ff] to-[#a855f7] flex items-center justify-center text-white text-[6px] font-bold flex-shrink-0">IA</div>
                <div className="bg-green-50 border border-green-200 rounded-md px-2 py-1 text-[9px] text-gray-700 leading-snug">
                  <span className="text-green-600 font-semibold">Tienes derecho a 116 dias.</span> Seguimos con tus datos?
                </div>
              </div>
            </div>

            {/* Progress bar */}
            <div className="px-2.5 pb-2 bg-gray-50 flex items-center gap-1.5">
              <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#7350ff] to-[#a855f7] rounded-full" style={{ width: '40%' }} />
              </div>
              <span className="text-[8px] text-[#7350ff] font-semibold">40%</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating stat - top right */}
      <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3 z-20 animate-float">
        <div className="text-[11px] text-gray-400 mb-0.5">Abandono</div>
        <div className="text-lg font-extrabold text-green-500 font-['Fraunces']">-60%</div>
      </div>

      {/* Floating stat - bottom left */}
      <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.1)] p-3 z-20 animate-float" style={{ animationDelay: '-2s' }}>
        <div className="text-[11px] text-gray-400 mb-0.5">Expedientes correctos</div>
        <div className="text-lg font-extrabold text-[#7350ff] font-['Fraunces']">+95%</div>
      </div>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 8px 30px rgba(115,80,255,0.2); }
          50% { box-shadow: 0 8px 30px rgba(115,80,255,0.4); }
        }
      `}</style>
    </div>
  );
}

export default function MarketResearch() {
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
    t('adminPain1'),
    t('adminPain2'),
    t('adminPain3'),
    t('adminPain4'),
  ];

  const results = [
    t('adminResult1'),
    t('adminResult2'),
    t('adminResult3'),
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
                {t('adminBadge')}
              </span>
            </div>

            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-['Fraunces']">
              {t('adminTitle')}{' '}
              <span className="text-gradient">{t('adminTitleHighlight')}</span>
            </h2>

            <p className="reveal-item text-xl text-gray-600 leading-relaxed">
              {t('adminDesc')}
            </p>

            {/* Pain points */}
            <div className="reveal-item space-y-3">
              <p className="text-sm font-semibold text-red-500 uppercase tracking-wider">{t('painPoints')}</p>
              {pains.map((pain, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 bg-red-50/50 rounded-xl"
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
                  className="flex items-start gap-3 p-3 bg-green-50/50 rounded-xl"
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
                {t('adminCta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center py-8"
          >
            <AdminWebIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
