import { useRef, useEffect } from 'react';
import { ArrowRight, MessageSquareText, Clock, TrendingDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

function ResearchIllustration() {
  return (
    <svg viewBox="0 0 480 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-md">
      {/* Background glow */}
      <defs>
        <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7350ff" stopOpacity="0.15" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="purpleSolid" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7350ff" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>
        <filter id="shadow" x="-10%" y="-10%" width="120%" height="130%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#7350ff" floodOpacity="0.15" />
        </filter>
      </defs>

      {/* Dashboard panel */}
      <rect x="180" y="30" width="280" height="200" rx="16" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#shadow)" />
      <rect x="180" y="30" width="280" height="40" rx="16" fill="url(#purpleGrad)" />
      <rect x="180" y="54" width="280" height="16" fill="url(#purpleGrad)" />
      {/* Dashboard dots */}
      <circle cx="200" cy="50" r="5" fill="#ff6b6b" />
      <circle cx="216" cy="50" r="5" fill="#ffd93d" />
      <circle cx="232" cy="50" r="5" fill="#6bcb77" />
      {/* Dashboard title */}
      <rect x="260" y="45" width="80" height="10" rx="3" fill="#7350ff" opacity="0.3" />

      {/* Bar chart */}
      <rect x="200" y="160" width="28" height="50" rx="4" fill="#7350ff" opacity="0.25" />
      <rect x="236" y="140" width="28" height="70" rx="4" fill="#7350ff" opacity="0.4" />
      <rect x="272" y="120" width="28" height="90" rx="4" fill="#7350ff" opacity="0.6" />
      <rect x="308" y="95" width="28" height="115" rx="4" fill="url(#purpleSolid)" opacity="0.85" />

      {/* NPS gauge */}
      <path d="M390 190 A45 45 0 0 1 390 100" stroke="#e5e7eb" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M390 190 A45 45 0 0 1 365 108" stroke="url(#purpleSolid)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <text x="390" y="155" textAnchor="middle" fill="#7350ff" fontSize="14" fontWeight="bold">NPS</text>
      <text x="390" y="172" textAnchor="middle" fill="#374151" fontSize="11">78</text>

      {/* Line chart sparkline */}
      <polyline points="200,88 220,92 240,82 260,85 280,75 300,78 320,68" stroke="#a855f7" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="320" cy="68" r="3.5" fill="#a855f7" />

      {/* Conversation bubbles - left side */}
      {/* Bubble 1 - user */}
      <rect x="20" y="60" width="140" height="50" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#shadow)" />
      <circle cx="44" cy="85" r="14" fill="url(#purpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="44" y="89" textAnchor="middle" fill="#7350ff" fontSize="12" fontWeight="bold">U</text>
      <rect x="66" y="74" width="78" height="8" rx="4" fill="#e5e7eb" />
      <rect x="66" y="88" width="55" height="8" rx="4" fill="#e5e7eb" />

      {/* Bubble 2 - AI */}
      <rect x="40" y="130" width="140" height="50" rx="14" fill="#7350ff" filter="url(#shadow)" />
      <circle cx="64" cy="155" r="14" fill="white" fillOpacity="0.2" />
      <text x="64" y="159" textAnchor="middle" fill="white" fontSize="12" fontWeight="bold">AI</text>
      <rect x="86" y="144" width="78" height="8" rx="4" fill="white" fillOpacity="0.4" />
      <rect x="86" y="158" width="55" height="8" rx="4" fill="white" fillOpacity="0.3" />

      {/* Bubble 3 - user */}
      <rect x="20" y="200" width="140" height="50" rx="14" fill="white" stroke="#e5e7eb" strokeWidth="1.5" filter="url(#shadow)" />
      <circle cx="44" cy="225" r="14" fill="url(#purpleGrad)" stroke="#7350ff" strokeWidth="1.5" />
      <text x="44" y="229" textAnchor="middle" fill="#7350ff" fontSize="12" fontWeight="bold">U</text>
      <rect x="66" y="214" width="78" height="8" rx="4" fill="#e5e7eb" />
      <rect x="66" y="228" width="65" height="8" rx="4" fill="#e5e7eb" />

      {/* Connection lines from bubbles to dashboard */}
      <path d="M160 85 Q170 85 175 75 Q180 65 190 65" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />
      <path d="M180 155 Q190 150 190 140" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />
      <path d="M160 225 Q180 225 185 215 Q190 205 195 200" stroke="#7350ff" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.35" fill="none" />

      {/* Small data flow dots along connection lines */}
      <circle cx="168" cy="78" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="185" cy="147" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="0.6s" repeatCount="indefinite" />
      </circle>
      <circle cx="175" cy="213" r="2.5" fill="#7350ff" opacity="0.5">
        <animate attributeName="opacity" values="0.2;0.8;0.2" dur="2s" begin="1.2s" repeatCount="indefinite" />
      </circle>

      {/* Sentiment indicators */}
      <rect x="200" y="260" width="110" height="36" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#shadow)" />
      <text x="216" y="283" fill="#374151" fontSize="10" fontWeight="500">Sentiment</text>
      <circle cx="288" cy="278" r="10" fill="#6bcb77" opacity="0.2" />
      <text x="288" y="282" textAnchor="middle" fontSize="10">😊</text>

      <rect x="324" y="260" width="120" height="36" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#shadow)" />
      <text x="340" y="283" fill="#374151" fontSize="10" fontWeight="500">Pain Points</text>
      <rect x="410" y="272" width="22" height="12" rx="6" fill="#7350ff" />
      <text x="421" y="281" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">3</text>

      {/* Rating stars row */}
      <rect x="200" y="306" width="244" height="36" rx="10" fill="white" stroke="#e5e7eb" strokeWidth="1" filter="url(#shadow)" />
      <text x="216" y="329" fill="#374151" fontSize="10" fontWeight="500">Rating</text>
      <text x="280" y="329" fill="#fbbf24" fontSize="13">★★★★</text>
      <text x="316" y="329" fill="#d1d5db" fontSize="13">★</text>
      <text x="340" y="329" fill="#7350ff" fontSize="11" fontWeight="bold">4.2</text>

      {/* Decorative floating circles */}
      <circle cx="460" cy="260" r="6" fill="#7350ff" opacity="0.1" />
      <circle cx="10" cy="300" r="8" fill="#a855f7" opacity="0.1" />
      <circle cx="470" cy="340" r="4" fill="#7350ff" opacity="0.15" />
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
    { icon: MessageSquareText, text: t('mrBenefit1') },
    { icon: Clock, text: t('mrBenefit2') },
    { icon: TrendingDown, text: t('mrBenefit3') },
    { icon: Globe, text: t('mrBenefit4') },
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
              <ResearchIllustration />

              {/* Floating stats cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-green-600" />
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
                    <TrendingDown className="w-5 h-5 text-[#7350ff]" />
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
