import { useRef, useEffect } from 'react';
import { ArrowRight, Home, UserCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function RealEstateIllustration() {
  return (
    <svg viewBox="0 0 480 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-lg">
      <defs>
        <linearGradient id="autoBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="autoBlueSolid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#8b5cf6" />
        </linearGradient>
        <filter id="autoShadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#3b82f6" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Property listing card */}
      <rect x="190" y="15" width="275" height="350" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#autoShadow)" />

      {/* Property image placeholder */}
      <rect x="204" y="28" width="247" height="110" rx="10" fill="url(#autoBlueGrad)" />
      {/* House silhouette inside image */}
      <path d="M310 95 L310 65 L328 50 L346 65 L346 95 Z" fill="#3b82f6" opacity="0.2" />
      <rect x="320" y="78" width="12" height="17" rx="2" fill="#3b82f6" opacity="0.3" />
      <path d="M300 95 L328 42 L356 95" stroke="#3b82f6" strokeWidth="1.5" fill="none" opacity="0.35" />
      {/* Price tag */}
      <rect x="370" y="108" width="72" height="22" rx="6" fill="url(#autoBlueSolid)" />
      <text x="406" y="123" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">€285.000</text>
      {/* Photo count */}
      <rect x="212" y="108" width="44" height="22" rx="6" fill="white" fillOpacity="0.9" />
      <text x="234" y="123" textAnchor="middle" fill="#374151" fontSize="9">12 fotos</text>

      {/* Listing details */}
      <text x="214" y="162" fill="#111827" fontSize="12" fontWeight="bold">Piso en Calle Gran Vía, 45</text>
      <text x="214" y="178" fill="#6b7280" fontSize="9">Madrid · Chamberí · 3 hab · 95m²</text>

      {/* Form fields auto-filled */}
      <text x="214" y="202" fill="#6b7280" fontSize="8" fontWeight="500">Tipo de inmueble</text>
      <rect x="214" y="206" width="240" height="22" rx="5" fill="#eff6ff" stroke="#3b82f6" strokeWidth="0.8" />
      <text x="224" y="220" fill="#374151" fontSize="9">Piso — 3 habitaciones, 2 baños</text>
      <circle cx="444" cy="217" r="6" fill="#6bcb77" opacity="0.2" />
      <text x="444" y="220" textAnchor="middle" fontSize="7" fill="#16a34a">✓</text>

      <text x="214" y="244" fill="#6b7280" fontSize="8" fontWeight="500">Propietario</text>
      <rect x="214" y="248" width="240" height="22" rx="5" fill="white" stroke="#3b82f6" strokeWidth="1.2" />
      <text x="224" y="262" fill="#374151" fontSize="9">María García López</text>
      {/* Typing cursor */}
      <rect x="316" y="254" width="2" height="12" rx="1" fill="#3b82f6">
        <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
      </rect>

      <text x="214" y="286" fill="#6b7280" fontSize="8" fontWeight="500">Precio solicitado</text>
      <rect x="214" y="290" width="240" height="22" rx="5" fill="white" stroke="#e5e7eb" strokeWidth="0.8" />
      <rect x="224" y="298" width="70" height="6" rx="3" fill="#e5e7eb" />

      {/* Document type badge */}
      <rect x="348" y="326" width="106" height="22" rx="7" fill="#3b82f6" opacity="0.1" />
      <text x="401" y="340" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">Ficha captación</text>

      {/* Progress bar */}
      <text x="214" y="350" fill="#6b7280" fontSize="8">Completado</text>
      <rect x="274" y="342" width="120" height="7" rx="3.5" fill="#e5e7eb" />
      <rect x="274" y="342" width="78" height="7" rx="3.5" fill="url(#autoBlueSolid)">
        <animate attributeName="width" values="45;78;45" dur="4s" repeatCount="indefinite" />
      </rect>
      <text x="400" y="350" fill="#3b82f6" fontSize="8" fontWeight="bold">65%</text>

      {/* AI Chat bubbles — left side */}
      {/* AI message */}
      <rect x="5" y="40" width="155" height="44" rx="13" fill="url(#autoBlueSolid)" filter="url(#autoShadow)" />
      <circle cx="27" cy="62" r="12" fill="white" fillOpacity="0.2" />
      <text x="27" y="66" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">AI</text>
      <rect x="48" y="53" width="96" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="48" y="65" width="68" height="6" rx="3" fill="white" fillOpacity="0.3" />

      {/* User response */}
      <rect x="15" y="100" width="150" height="40" rx="13" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#autoShadow)" />
      <circle cx="37" cy="120" r="12" fill="url(#autoBlueGrad)" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="37" y="124" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">U</text>
      <rect x="58" y="112" width="90" height="6" rx="3" fill="#e5e7eb" />
      <rect x="58" y="124" width="58" height="6" rx="3" fill="#e5e7eb" />

      {/* AI follow-up */}
      <rect x="5" y="156" width="155" height="40" rx="13" fill="url(#autoBlueSolid)" filter="url(#autoShadow)" />
      <circle cx="27" cy="176" r="12" fill="white" fillOpacity="0.2" />
      <text x="27" y="180" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">AI</text>
      <rect x="48" y="168" width="96" height="6" rx="3" fill="white" fillOpacity="0.4" />
      <rect x="48" y="180" width="78" height="6" rx="3" fill="white" fillOpacity="0.3" />

      {/* User response 2 */}
      <rect x="15" y="212" width="150" height="40" rx="13" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#autoShadow)" />
      <circle cx="37" cy="232" r="12" fill="url(#autoBlueGrad)" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="37" y="236" textAnchor="middle" fill="#3b82f6" fontSize="9" fontWeight="bold">U</text>
      <rect x="58" y="224" width="78" height="6" rx="3" fill="#e5e7eb" />
      <rect x="58" y="236" width="52" height="6" rx="3" fill="#e5e7eb" />

      {/* Connection lines from chat to listing */}
      <path d="M160 62 Q175 62 180 70 Q185 80 195 85" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M165 120 Q178 120 183 130 Q188 140 198 145" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M160 176 Q175 176 182 185 Q188 195 198 200" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />
      <path d="M165 232 Q178 232 183 238 Q188 245 198 250" stroke="#3b82f6" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.3" fill="none" />

      {/* Animated data flow dots */}
      <circle cx="178" cy="68" r="2.5" fill="#3b82f6" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="132" r="2.5" fill="#3b82f6" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="180" cy="188" r="2.5" fill="#3b82f6" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1s" repeatCount="indefinite" />
      </circle>
      <circle cx="182" cy="240" r="2.5" fill="#3b82f6" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1.5s" repeatCount="indefinite" />
      </circle>

      {/* Voice / chat input indicator */}
      <rect x="40" y="272" width="85" height="30" rx="15" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#autoShadow)" />
      <circle cx="60" cy="287" r="7" fill="#3b82f6" opacity="0.1" />
      <rect x="58" y="282" width="4" height="9" rx="2" fill="#3b82f6" />
      <path d="M55 288 Q55 293 62 293 Q69 293 69 288" stroke="#3b82f6" strokeWidth="1" fill="none" />
      <line x1="62" y1="293" x2="62" y2="296" stroke="#3b82f6" strokeWidth="1" />
      <text x="82" y="290" fill="#6b7280" fontSize="7">Chat / Voz</text>

      {/* Decorative elements */}
      <circle cx="472" cy="390" r="5" fill="#3b82f6" opacity="0.1" />
      <circle cx="3" cy="340" r="7" fill="#8b5cf6" opacity="0.1" />
      <circle cx="468" cy="30" r="4" fill="#3b82f6" opacity="0.15" />
    </svg>
  );
}

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
    { icon: Home, text: t('autoFeature1') },
    { icon: UserCheck, text: t('autoFeature2') },
    { icon: MapPin, text: t('autoFeature3') },
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

          {/* Illustration */}
          <div
            ref={imageRef}
            className="relative flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-radial from-blue-400/20 via-purple-400/10 to-transparent blur-3xl scale-150" />

            <div className="relative">
              <RealEstateIllustration />

              {/* Floating stat cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <UserCheck className="w-5 h-5 text-green-600" />
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
                    <Home className="w-5 h-5 text-blue-600" />
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
