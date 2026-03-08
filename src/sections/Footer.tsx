import { Linkedin, Instagram } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

const base = import.meta.env.BASE_URL;

function XIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    producto: [
      { label: t('footerFeatures'), href: '#features' },
      { label: t('navIntegrations'), href: '#integrations' },
    ],
    recursos: [
      { label: t('footerBlog'), href: `${base}blog.html` },
      { label: t('footerHelp'), href: `${base}help.html` },
    ],
    conocenos: [
      { label: t('footerAbout'), href: '#' },
      { label: t('footerCareers'), href: `${base}careers.html` },
      { label: t('footerContact'), href: '#' },
    ],
    legal: [
      { label: t('footerPrivacy'), href: '#' },
      { label: t('footerTerms'), href: '#' },
      { label: t('footerCookies'), href: '#' },
      { label: t('footerSecurity'), href: '#' },
    ],
  };

  const socialLinks = [
    { icon: XIcon, href: '#', label: 'X' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-[#191949] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <img
                src={`${import.meta.env.BASE_URL}intervia-logo.png`}
                alt="intervia ai"
                className="h-[120px] w-auto brightness-0 invert"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footerSlogan')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#7350ff] transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Producto */}
          <div>
            <h4 className="font-semibold mb-4">{t('footerProduct')}</h4>
            <ul className="space-y-3">
              {footerLinks.producto.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="font-semibold mb-4">{t('footerResources')}</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conocenos */}
          <div>
            <h4 className="font-semibold mb-4">{t('footerCompany')}</h4>
            <ul className="space-y-3">
              {footerLinks.conocenos.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">{t('footerLegal')}</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors duration-300 relative group"
                  >
                    {link.label}
                    <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} intervia ai. {t('footerCopyright')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footerStatus')}
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              {t('footerSitemap')}
            </a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-400 text-sm">{t('footerSystems')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
