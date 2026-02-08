import { useRef, useEffect } from 'react';
import { ArrowRight, FileText, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function GestoriaIllustration() {
  return (
    <svg viewBox="0 0 480 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
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

      {/* === OFFICIAL FORM DOCUMENT === */}
      <rect x="185" y="10" width="280" height="400" rx="4" fill="white" stroke="#c9ccd1" strokeWidth="1" filter="url(#mrShadow)" />

      {/* Top institutional band */}
      <rect x="185" y="10" width="280" height="4" rx="2" fill="url(#mrPurpleSolid)" />

      {/* Header: escudo + Agencia Tributaria style */}
      <rect x="197" y="22" width="256" height="42" fill="white" />
      {/* Shield / coat of arms */}
      <rect x="204" y="26" width="28" height="34" rx="3" fill="#7350ff" opacity="0.08" stroke="#7350ff" strokeWidth="0.8" />
      <path d="M218 30 L218 40 Q218 50 210 52 Q225 50 218 40 Z" fill="#7350ff" opacity="0.15" />
      <circle cx="218" cy="38" r="4" fill="#7350ff" opacity="0.2" />
      <text x="218" y="55" textAnchor="middle" fill="#7350ff" fontSize="4" fontWeight="bold">GOB</text>
      {/* Agency name */}
      <text x="242" y="35" fill="#4b5563" fontSize="6" fontWeight="500">Agencia Tributaria</text>
      <text x="242" y="44" fill="#7350ff" fontSize="9" fontWeight="bold">MODELO 036</text>
      <text x="242" y="53" fill="#6b7280" fontSize="5.5">Declaración censal de alta, modificación y baja</text>
      {/* Model number box */}
      <rect x="415" y="26" width="38" height="34" rx="3" fill="#7350ff" opacity="0.06" stroke="#7350ff" strokeWidth="0.8" />
      <text x="434" y="41" textAnchor="middle" fill="#7350ff" fontSize="14" fontWeight="bold">036</text>
      <text x="434" y="53" textAnchor="middle" fill="#6b7280" fontSize="5">Pág. 1</text>

      {/* Divider line */}
      <line x1="197" y1="68" x2="453" y2="68" stroke="#d1d5db" strokeWidth="0.5" />

      {/* === SECTION 1: Datos identificativos === */}
      <rect x="197" y="72" width="256" height="14" rx="2" fill="#7350ff" opacity="0.06" />
      <text x="203" y="82" fill="#7350ff" fontSize="7" fontWeight="bold">1</text>
      <text x="214" y="82" fill="#4b5563" fontSize="6.5" fontWeight="600">DATOS IDENTIFICATIVOS</text>

      {/* NIF row - FILLED with grid cells */}
      <text x="200" y="98" fill="#6b7280" fontSize="5.5">NIF</text>
      <g>
        {[0,1,2,3,4,5,6,7,8].map((i) => (
          <rect key={`nif-${i}`} x={225 + i * 18} y={90} width="16" height="16" rx="1.5" fill={i < 9 ? '#f0ecff' : 'white'} stroke="#7350ff" strokeWidth="0.6" />
        ))}
        {'B12345678'.split('').map((ch, i) => (
          <text key={`nifv-${i}`} x={233 + i * 18} y={102} textAnchor="middle" fill="#374151" fontSize="9" fontFamily="monospace">{ch}</text>
        ))}
      </g>
      <circle cx="400" cy="98" r="6" fill="#6bcb77" opacity="0.15" />
      <text x="400" y="101" textAnchor="middle" fontSize="7" fill="#16a34a">✓</text>

      {/* Denominación social row - FILLING */}
      <text x="200" y="124" fill="#6b7280" fontSize="5.5">Apellidos y nombre o razón social</text>
      <rect x="200" y="127" width="250" height="16" rx="1.5" fill="white" stroke="#7350ff" strokeWidth="0.8" />
      <text x="206" y="138" fill="#374151" fontSize="8">Empresa Demo S.L.</text>
      {/* Typing cursor */}
      <rect x="290" y="130" width="1.5" height="11" rx="0.75" fill="#7350ff">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>

      {/* Divider */}
      <line x1="197" y1="150" x2="453" y2="150" stroke="#d1d5db" strokeWidth="0.5" />

      {/* === SECTION 2: Actividad === */}
      <rect x="197" y="154" width="256" height="14" rx="2" fill="#7350ff" opacity="0.06" />
      <text x="203" y="164" fill="#7350ff" fontSize="7" fontWeight="bold">2</text>
      <text x="214" y="164" fill="#4b5563" fontSize="6.5" fontWeight="600">ACTIVIDAD ECONÓMICA</text>

      {/* IAE row - empty, placeholder */}
      <text x="200" y="181" fill="#6b7280" fontSize="5.5">Epígrafe I.A.E.</text>
      <g>
        {[0,1,2,3].map((i) => (
          <rect key={`iae-${i}`} x={272 + i * 18} y={173} width="16" height="16" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
        ))}
      </g>
      <rect x="206" y="193" width="180" height="5" rx="2.5" fill="#e5e7eb" />

      {/* Divider */}
      <line x1="197" y1="206" x2="453" y2="206" stroke="#d1d5db" strokeWidth="0.5" />

      {/* === SECTION 3: Domicilio === */}
      <rect x="197" y="210" width="256" height="14" rx="2" fill="#7350ff" opacity="0.06" />
      <text x="203" y="220" fill="#7350ff" fontSize="7" fontWeight="bold">3</text>
      <text x="214" y="220" fill="#4b5563" fontSize="6.5" fontWeight="600">DOMICILIO FISCAL</text>

      {/* Address fields - empty */}
      <text x="200" y="237" fill="#6b7280" fontSize="5.5">Tipo vía</text>
      <rect x="232" y="229" width="50" height="14" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
      <text x="290" y="237" fill="#6b7280" fontSize="5.5">Nombre vía</text>
      <rect x="322" y="229" width="128" height="14" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />

      <text x="200" y="256" fill="#6b7280" fontSize="5.5">Núm.</text>
      <rect x="220" y="248" width="30" height="14" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
      <text x="258" y="256" fill="#6b7280" fontSize="5.5">Piso</text>
      <rect x="274" y="248" width="24" height="14" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
      <text x="306" y="256" fill="#6b7280" fontSize="5.5">C.P.</text>
      <g>
        {[0,1,2,3,4].map((i) => (
          <rect key={`cp-${i}`} x={322 + i * 16} y={248} width="14" height="14" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
        ))}
      </g>

      {/* Checkbox row at bottom */}
      <rect x="197" y="272" width="256" height="14" rx="2" fill="#7350ff" opacity="0.06" />
      <text x="203" y="282" fill="#7350ff" fontSize="7" fontWeight="bold">4</text>
      <text x="214" y="282" fill="#4b5563" fontSize="6.5" fontWeight="600">OBLIGACIONES FISCALES</text>

      {/* Checkboxes */}
      <rect x="206" y="290" width="10" height="10" rx="1.5" fill="#f0ecff" stroke="#7350ff" strokeWidth="0.6" />
      <text x="211" y="298" textAnchor="middle" fill="#7350ff" fontSize="8">✓</text>
      <text x="222" y="298" fill="#374151" fontSize="5.5">IVA — Régimen general</text>

      <rect x="206" y="305" width="10" height="10" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
      <text x="222" y="313" fill="#6b7280" fontSize="5.5">IRPF — Estimación directa</text>

      <rect x="206" y="320" width="10" height="10" rx="1.5" fill="white" stroke="#d1d5db" strokeWidth="0.6" />
      <text x="222" y="328" fill="#6b7280" fontSize="5.5">Retenciones e ingresos a cuenta</text>

      {/* Bottom page info */}
      <line x1="197" y1="340" x2="453" y2="340" stroke="#d1d5db" strokeWidth="0.5" />
      <text x="325" y="352" textAnchor="middle" fill="#9ca3af" fontSize="5">Modelo 036 — Agencia Estatal de Administración Tributaria</text>

      {/* Progress bar overlay */}
      <rect x="200" y="362" width="80" height="18" rx="9" fill="#7350ff" opacity="0.08" />
      <text x="210" y="374" fill="#6b7280" fontSize="6">Completado</text>
      <rect x="286" y="367" width="120" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="286" y="367" width="72" height="7" rx="3.5" fill="url(#mrPurpleSolid)">
        <animate attributeName="width" values="40;72;40" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="414" y="374" fill="#7350ff" fontSize="7" fontWeight="bold">60%</text>

      {/* === AI CHAT BUBBLES — left side === */}
      {/* AI greeting */}
      <rect x="5" y="40" width="152" height="44" rx="14" fill="#7350ff" filter="url(#mrShadow)" />
      <circle cx="28" cy="62" r="12" fill="white" fillOpacity="0.2" />
      <text x="28" y="66" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">AI</text>
      <rect x="48" y="53" width="94" height="6.5" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="48" y="65" width="66" height="6.5" rx="3" fill="white" fillOpacity="0.3" />

      {/* User response */}
      <rect x="14" y="100" width="148" height="40" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#mrShadow)" />
      <circle cx="36" cy="120" r="12" fill="url(#mrPurpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="36" y="124" textAnchor="middle" fill="#7350ff" fontSize="9" fontWeight="bold">U</text>
      <rect x="56" y="112" width="88" height="6.5" rx="3" fill="#e5e7eb" />
      <rect x="56" y="124" width="56" height="6.5" rx="3" fill="#e5e7eb" />

      {/* AI follow-up */}
      <rect x="5" y="156" width="152" height="40" rx="14" fill="#7350ff" filter="url(#mrShadow)" />
      <circle cx="28" cy="176" r="12" fill="white" fillOpacity="0.2" />
      <text x="28" y="180" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">AI</text>
      <rect x="48" y="168" width="94" height="6.5" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="48" y="180" width="76" height="6.5" rx="3" fill="white" fillOpacity="0.3" />

      {/* User response 2 */}
      <rect x="14" y="212" width="148" height="40" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#mrShadow)" />
      <circle cx="36" cy="232" r="12" fill="url(#mrPurpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="36" y="236" textAnchor="middle" fill="#7350ff" fontSize="9" fontWeight="bold">U</text>
      <rect x="56" y="224" width="76" height="6.5" rx="3" fill="#e5e7eb" />
      <rect x="56" y="236" width="50" height="6.5" rx="3" fill="#e5e7eb" />

      {/* === CONNECTION LINES from chat to form === */}
      <path d="M157 62 Q170 62 175 72 Q180 82 192 88" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M162 120 Q174 120 178 126 Q182 132 192 134" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M157 176 Q170 176 176 180 Q182 184 192 186" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M162 232 Q174 232 178 230 Q184 226 192 222" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />

      {/* Animated data flow dots */}
      <circle cx="174" cy="70" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="178" cy="128" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="176" cy="182" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="178" cy="228" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Microphone / voice input pill */}
      <rect x="40" y="272" width="80" height="28" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#mrShadow)" />
      <circle cx="60" cy="286" r="7" fill="#7350ff" opacity="0.1" />
      <rect x="58" y="281" width="3.5" height="9" rx="1.75" fill="#7350ff" />
      <path d="M55 287 Q55 292 61.5 292 Q68 292 68 287" stroke="#7350ff" strokeWidth="1" fill="none" />
      <line x1="61.5" y1="292" x2="61.5" y2="295" stroke="#7350ff" strokeWidth="1" />
      <text x="78" y="289" fill="#6b7280" fontSize="7">Voz</text>

      {/* Decorative elements */}
      <circle cx="470" cy="400" r="5" fill="#7350ff" opacity="0.1" />
      <circle cx="3" cy="360" r="7" fill="#a855f7" opacity="0.1" />
      <circle cx="472" cy="30" r="4" fill="#7350ff" opacity="0.15" />
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
