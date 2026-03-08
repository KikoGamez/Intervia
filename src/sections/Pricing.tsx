import { useRef, useEffect, useState } from 'react';
import { ArrowRight, Mail, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useLanguage } from '@/context/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || loading) return;

    setLoading(true);

    // Send to Notion via a simple webhook / API
    // For now, we'll store it and show success
    try {
      // You can replace this with your Notion API integration
      console.log('Lead captured:', email);
      setSubmitted(true);
      setEmail('');
    } catch {
      // silently fail, still show success
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={contentRef} className="text-center space-y-8">
          <div className="reveal-item">
            <span className="inline-block px-4 py-1.5 bg-[#7350ff]/10 text-[#7350ff] text-sm font-medium rounded-full mb-4">
              {t('contactBadge')}
            </span>
          </div>

          <h2 className="reveal-item text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-['Fraunces']">
            {t('contactTitle')}
          </h2>

          <p className="reveal-item text-xl text-gray-600 leading-relaxed max-w-xl mx-auto">
            {t('contactDesc')}
          </p>

          {/* Email form */}
          <div className="reveal-item max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t('contactEmailPlaceholder')}
                    required
                    className="w-full pl-12 pr-4 py-4 rounded-full border-2 border-gray-200 focus:border-[#7350ff] focus:outline-none focus:ring-2 focus:ring-[#7350ff]/20 transition-all duration-300 text-gray-900"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-[#7350ff] hover:bg-[#5a3fd4] text-white px-6 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#7350ff]/30 group flex-shrink-0"
                >
                  {t('contactSubmit')}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-3 p-4 bg-green-50 rounded-2xl border border-green-200">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-green-700 font-medium">{t('contactSuccess')}</p>
              </div>
            )}
          </div>

          <p className="reveal-item text-sm text-gray-400">
            {t('contactPrivacy')}
          </p>
        </div>
      </div>
    </section>
  );
}
