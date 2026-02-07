import { useRef, useEffect } from 'react';
import { ArrowRight, FileText, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function GestoriaIllustration() {
  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
      <defs>
        <linearGradient id="mrPurpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7350ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="mrPurpleSolid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7350ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="mrShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7350ff" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Official document */}
      <rect x="200" y="20" width="260" height="340" rx="12" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#mrShadow)" />
      {/* Document header bar */}
      <rect x="200" y="20" width="260" height="44" rx="12" fill="url(#mrPurpleGrad)" />
      <rect x="200" y="48" width="260" height="16" fill="url(#mrPurpleGrad)" />
      {/* Header coat of arms placeholder */}
      <circle cx="330" cy="42" r="12" fill="#7350ff" opacity="0.15" stroke="#7350ff" strokeWidth="1" />
      <text x="330" y="46" textAnchor="middle" fill="#7350ff" fontSize="10" fontWeight="bold">ES</text>
      {/* Document title */}
      <rect x="280" y="56" width="100" height="6" rx="3" fill="#7350ff" opacity="0.25" />

      {/* Form field 1 - NIF (filled) */}
      <text x="220" y="88" fill="#6b7280" fontSize="9" fontWeight="500">NIF / CIF</text>
      <rect x="220" y="92" width="220" height="26" rx="6" fill="#f0ecff" stroke="#7350ff" strokeWidth="1" />
      <text x="232" y="109" fill="#374151" fontSize="10">B-12345678</text>
      <circle cx="428" cy="105" r="7" fill="#6bcb77" opacity="0.2" />
      <text x="428" y="108" textAnchor="middle" fontSize="8" fill="#16a34a">✓</text>

      {/* Form field 2 - Name (filling animation) */}
      <text x="220" y="134" fill="#6b7280" fontSize="9" fontWeight="500">Denominación social</text>
      <rect x="220" y="138" width="220" height="26" rx="6" fill="white" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="0" />
      <text x="232" y="155" fill="#374151" fontSize="10">Empresa Demo S.L.</text>
      {/* Typing cursor */}
      <rect x="338" y="144" width="2" height="14" rx="1" fill="#7350ff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Form field 3 - Activity (empty, about to fill) */}
      <text x="220" y="180" fill="#6b7280" fontSize="9" fontWeight="500">Actividad económica (IAE)</text>
      <rect x="220" y="184" width="220" height="26" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="232" y="194" width="80" height="6" rx="3" fill="#e5e7eb" />

      {/* Form field 4 - Address */}
      <text x="220" y="226" fill="#6b7280" fontSize="9" fontWeight="500">Domicilio fiscal</text>
      <rect x="220" y="230" width="220" height="26" rx="6" fill="white" stroke="#e5e7eb" strokeWidth="1" />
      <rect x="232" y="240" width="120" height="6" rx="3" fill="#e5e7eb" />

      {/* Form model label */}
      <rect x="355" y="272" width="90" height="24" rx="8" fill="#7350ff" opacity="0.1" />
      <text x="400" y="288" textAnchor="middle" fill="#7350ff" fontSize="10" fontWeight="bold">Modelo 036</text>

      {/* Progress bar */}
      <text x="220" y="318" fill="#6b7280" fontSize="9">Completado</text>
      <rect x="280" y="310" width="140" height="8" rx="4" fill="#e5e7eb" />
      <rect x="280" y="310" width="84" height="8" rx="4" fill="url(#mrPurpleSolid)">
        <animate attributeName="width" values="50;84;50" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="426" y="318" fill="#7350ff" fontSize="9" fontWeight="bold">60%</text>

      {/* AI Chat bubbles - left side */}
      {/* AI greeting */}
      <rect x="10" y="50" width="160" height="46" rx="14" fill="#7350ff" filter="url(#mrShadow)" />
      <circle cx="34" cy="73" r="13" fill="white" fillOpacity="0.2" />
      <text x="34" y="77" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
      <rect x="56" y="63" width="98" height="7" rx="3.5" fill="white" fillOpacity="0.4" />
      <rect x="56" y="76" width="70" height="7" rx="3.5" fill="white" fillOpacity="0.3" />

      {/* User response */}
      <rect x="20" y="112" width="155" height="42" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#mrShadow)" />
      <circle cx="44" cy="133" r="13" fill="url(#mrPurpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="44" y="137" textAnchor="middle" fill="#7350ff" fontSize="10" fontWeight="bold">U</text>
      <rect x="66" y="124" width="92" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="66" y="137" width="60" height="7" rx="3.5" fill="#e5e7eb" />

      {/* AI follow-up */}
      <rect x="10" y="170" width="160" height="42" rx="14" fill="#7350ff" filter="url(#mrShadow)" />
      <circle cx="34" cy="191" r="13" fill="white" fillOpacity="0.2" />
      <text x="34" y="195" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">AI</text>
      <rect x="56" y="182" width="98" height="7" rx="3.5" fill="white" fillOpacity="0.4" />
      <rect x="56" y="195" width="80" height="7" rx="3.5" fill="white" fillOpacity="0.3" />

      {/* User response 2 */}
      <rect x="20" y="228" width="155" height="42" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#mrShadow)" />
      <circle cx="44" cy="249" r="13" fill="url(#mrPurpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="44" y="253" textAnchor="middle" fill="#7350ff" fontSize="10" fontWeight="bold">U</text>
      <rect x="66" y="240" width="80" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="66" y="253" width="55" height="7" rx="3.5" fill="#e5e7eb" />

      {/* Connection arrows from chat to form fields */}
      <path d="M170 73 Q185 73 190 80 Q195 88 205 95" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />
      <path d="M175 133 Q190 133 195 138 Q200 143 210 148" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />
      <path d="M170 191 Q185 191 193 193 Q200 196 210 198" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />
      <path d="M175 249 Q190 249 195 245 Q200 241 210 238" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />

      {/* Animated data flow dots */}
      <circle cx="188" cy="78" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="192" cy="138" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="190" cy="195" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="192" cy="243" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Microphone icon (voice input) */}
      <rect x="50" y="290" width="80" height="32" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#mrShadow)" />
      <circle cx="72" cy="306" r="8" fill="#7350ff" opacity="0.1" />
      <rect x="70" y="300" width="4" height="10" rx="2" fill="#7350ff" />
      <path d="M67 306 Q67 312 74 312 Q81 312 81 306" stroke="#7350ff" strokeWidth="1.2" fill="none" />
      <line x1="74" y1="312" x2="74" y2="315" stroke="#7350ff" strokeWidth="1.2" />
      <text x="95" y="310" fill="#6b7280" fontSize="8">Voz</text>

      {/* Decorative elements */}
      <circle cx="465" cy="380" r="5" fill="#7350ff" opacity="0.1" />
      <circle cx="5" cy="350" r="7" fill="#a855f7" opacity="0.1" />
      <circle cx="470" cy="40" r="4" fill="#7350ff" opacity="0.15" />
    </svg>
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
        { rotateY: 30, opacity: 0, x: 100 },
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
    { icon: FileText, text: t('mrBenefit1') },
    { icon: CheckCircle, text: t('mrBenefit2') },
    { icon: Clock, text: t('mrBenefit3') },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gray-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="reveal-item">
              <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
                {t('mrBadge')}
              </span>
            </div>

            <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 leading-tight font-['Fraunces']">
              {t('mrTitle')}{' '}
              <span className="text-gradient">{t('mrTitleHighlight')}</span>
            </h2>

            <p className="reveal-item text-xl text-gray-600 leading-relaxed">
              {t('mrDesc')}
            </p>

            {/* Benefits list */}
            <div className="reveal-item space-y-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl hover:bg-purple-50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-gray-50 rounded-lg shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                {t('mrCta')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          {/* Illustration */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center"
            style={{ perspective: '1000px' }}
          >
            <div className="absolute inset-0 bg-gradient-radial from-[#7350ff]/20 via-transparent to-transparent blur-3xl scale-150" />

            <div className="relative transform-gpu" style={{ transformStyle: 'preserve-3d' }}>
              <GestoriaIllustration />

              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('mrStat1')}</p>
                    <p className="text-lg font-bold text-gray-900">{t('mrStat1Value')}</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-4 animate-float" style={{ animationDelay: '-2s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#7350ff]/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-[#7350ff]" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">{t('mrStat2')}</p>
                    <p className="text-lg font-bold text-gray-900">{t('mrStat2Value')}</p>
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
