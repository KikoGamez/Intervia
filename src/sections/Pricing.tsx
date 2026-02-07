import { useRef, useEffect, useState } from 'react';
import { Check, Sparkles, Zap, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const [isYearly, setIsYearly] = useState(true);
  const { t } = useLanguage();

  const plans = [
    {
      name: t('planStarter'),
      description: t('planStarterDesc'),
      monthlyPrice: 0,
      yearlyPrice: 0,
      icon: Sparkles,
      color: '#7350ff',
      features: [
        t('featResponses'),
        t('featForms'),
        t('featTemplates'),
        t('featExport'),
        t('featSupport'),
      ],
      cta: t('ctaStartFree'),
      popular: false,
    },
    {
      name: t('planPro'),
      description: t('planProDesc'),
      monthlyPrice: 29,
      yearlyPrice: 24,
      icon: Zap,
      color: '#7350ff',
      features: [
        t('featUnlimitedResp'),
        t('featUnlimitedForms'),
        t('featAllTemplates'),
        t('featAdvancedInt'),
        t('featRealtime'),
        t('featBranding'),
        t('featPriority'),
      ],
      cta: t('ctaTrial'),
      popular: true,
    },
    {
      name: t('planEnterprise'),
      description: t('planEnterpriseDesc'),
      monthlyPrice: null,
      yearlyPrice: null,
      icon: Building2,
      color: '#191949',
      features: [
        t('everythingInPro'),
        t('featApi'),
        t('featSSO'),
        t('featSecurity'),
        t('featSLA'),
        t('featManager'),
        t('featTraining'),
      ],
      cta: t('ctaContact'),
      popular: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll('.pricing-card');
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
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
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
            {t('pricingBadge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('pricingTitle')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('pricingDesc')}
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
            {t('pricingMonthly')}
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-[#7350ff]"
          />
          <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
            {t('pricingYearly')}
          </span>
          {isYearly && (
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
              {t('pricingSave')}
            </span>
          )}
        </div>

        {/* Pricing Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-8"
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card relative rounded-3xl p-8 transition-all duration-500 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#7350ff] to-[#5a3fd4] text-white shadow-2xl shadow-[#7350ff]/30 scale-105 z-10'
                  : 'bg-white border-2 border-gray-100 hover:border-[#7350ff]/30 hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-white text-[#7350ff] text-sm font-semibold rounded-full shadow-lg">
                    {t('planPopular')}
                  </span>
                </div>
              )}

              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                  plan.popular ? 'bg-white/20' : 'bg-[#7350ff]/10'
                }`}
              >
                <plan.icon
                  className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-[#7350ff]'}`}
                />
              </div>

              <h3
                className={`text-2xl font-bold mb-2 font-['Fraunces'] ${
                  plan.popular ? 'text-white' : 'text-gray-900'
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.popular ? 'text-white/80' : 'text-gray-500'
                }`}
              >
                {plan.description}
              </p>

              <div className="mb-8">
                {plan.monthlyPrice !== null ? (
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`text-5xl font-bold font-['Fraunces'] ${
                        plan.popular ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      €{isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-white/70' : 'text-gray-500'
                      }`}
                    >
                      /{t('month')}
                    </span>
                  </div>
                ) : (
                  <div
                    className={`text-3xl font-bold font-['Fraunces'] ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {t('planCustom')}
                  </div>
                )}
                {isYearly && plan.monthlyPrice !== null && (
                  <p
                    className={`text-sm mt-1 ${
                      plan.popular ? 'text-white/70' : 'text-gray-500'
                    }`}
                  >
                    {t('pricingBilled')}
                  </p>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.popular ? 'bg-white/20' : 'bg-[#7350ff]/10'
                      }`}
                    >
                      <Check
                        className={`w-3 h-3 ${
                          plan.popular ? 'text-white' : 'text-[#7350ff]'
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm ${
                        plan.popular ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full py-6 rounded-xl font-medium transition-all duration-300 ${
                  plan.popular
                    ? 'bg-white text-[#7350ff] hover:bg-gray-100 hover:scale-105'
                    : 'bg-[#7350ff] text-white hover:bg-[#5a3fd4] hover:scale-105'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Trust note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            {t('pricingFooter')}{' '}
            <a href="#" className="text-[#7350ff] hover:underline">
              {t('pricingCompare')}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
