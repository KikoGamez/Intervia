import { useState } from 'react';
import { Mail, User, Building2, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { useLanguage } from '@/context/LanguageContext';
import { useContactDialog } from '@/context/ContactDialogContext';

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
    </svg>
  );
}

function MicrosoftIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <rect x="1" y="1" width="10" height="10" fill="#F25022"/>
      <rect x="13" y="1" width="10" height="10" fill="#7FBA00"/>
      <rect x="1" y="13" width="10" height="10" fill="#00A4EF"/>
      <rect x="13" y="13" width="10" height="10" fill="#FFB900"/>
    </svg>
  );
}

export default function ContactDialog() {
  const { isContactOpen, closeContact } = useContactDialog();
  const [submitted, setSubmitted] = useState(false);
  const { language } = useLanguage();

  const texts = language === 'es' ? {
    title: 'Hablemos de tu caso',
    subtitle: 'Dejanos tus datos y te contactamos para mostrarte como intervia ai puede ayudarte.',
    name: 'Nombre',
    company: 'Empresa',
    email: 'Email',
    submit: 'Solicitar demo',
    orContinueWith: 'o registrate con',
    google: 'Google',
    apple: 'Apple',
    microsoft: 'Microsoft',
    success: 'Gracias! Nos pondremos en contacto contigo pronto.',
    privacy: 'Tus datos estan seguros. Cumplimos con la RGPD.',
  } : {
    title: "Let's talk about your case",
    subtitle: 'Leave us your details and we\'ll contact you to show how intervia ai can help.',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    submit: 'Request demo',
    orContinueWith: 'or sign up with',
    google: 'Google',
    apple: 'Apple',
    microsoft: 'Microsoft',
    success: 'Thanks! We\'ll be in touch soon.',
    privacy: 'Your data is safe. We comply with GDPR.',
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      closeContact();
      setTimeout(() => setSubmitted(false), 300);
    }
  };

  return (
    <Dialog open={isContactOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-[420px] p-0 gap-0 border-none bg-white rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#7350ff] to-[#5a3fd4] px-8 pt-8 pb-6 text-center">
          <img src={`${import.meta.env.BASE_URL}intervia-logo.png`} alt="intervia ai" className="h-[80px] mx-auto brightness-0 invert mb-3" />
          <h2 className="text-xl font-bold text-white font-['Fraunces']">{texts.title}</h2>
          <p className="text-sm text-white/70 mt-1">{texts.subtitle}</p>
        </div>

        <div className="px-8 py-6 space-y-5">
          {!submitted ? (
            <>
              {/* Social login buttons */}
              <div className="grid grid-cols-3 gap-3">
                <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                  <GoogleIcon />
                  <span className="text-xs font-medium text-gray-700">{texts.google}</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                  <AppleIcon />
                  <span className="text-xs font-medium text-gray-700">{texts.apple}</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-3 py-2.5 bg-gray-50 hover:bg-gray-100 rounded-xl border border-gray-200 transition-all duration-200 hover:scale-[1.02] hover:shadow-sm">
                  <MicrosoftIcon />
                  <span className="text-xs font-medium text-gray-700">{texts.microsoft}</span>
                </button>
              </div>

              {/* Divider */}
              <div className="flex items-center gap-3">
                <div className="flex-1 h-px bg-gray-200" />
                <span className="text-xs text-gray-400 uppercase tracking-wide">{texts.orContinueWith}</span>
                <div className="flex-1 h-px bg-gray-200" />
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={texts.name}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
                  />
                </div>

                {/* Company */}
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder={texts.company}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder={texts.email}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#7350ff]/30 focus:border-[#7350ff] transition-all"
                  />
                </div>

                {/* Submit */}
                <Button
                  type="submit"
                  className="w-full bg-[#7350ff] hover:bg-[#5a3fd4] text-white py-3 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-lg hover:shadow-[#7350ff]/30 group"
                >
                  {texts.submit}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>

              <p className="text-center text-xs text-gray-400">{texts.privacy}</p>
            </>
          ) : (
            <div className="flex flex-col items-center gap-4 py-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-7 h-7 text-green-600" />
              </div>
              <p className="text-gray-700 font-medium text-center">{texts.success}</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
