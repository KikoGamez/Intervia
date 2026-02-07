import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'es' | 'en';

interface Translations {
  [key: string]: string;
}

const translations: Record<Language, Translations> = {
  es: {
    // Navigation
    navPlatform: 'Plataforma',
    navSolutions: 'Soluciones',
    navIntegrations: 'Integraciones',
    navPricing: 'Precios',
    navLogin: 'Iniciar sesión',
    navSignup: 'Registrarse',
    
    // Hero
    heroBadge: 'PLATAFORMA DE IA',
    heroTitle: 'Formularios que',
    heroTitleHighlight: 'conversan',
    heroSubtitle: 'Cambia formularios estructurados por conversaciones naturales. La IA que entiende a tus usuarios y simplifica la recogida de información.',
    heroCtaPrimary: 'Rellena formulario gratis',
    heroCtaSecondary: 'Ver demo',
    heroSetup: 'Setup en 2 minutos',
    
    // Logo Marquee
    trustedBy: 'Empresas que confían en nosotros',
    
    // Features
    featuresBadge: 'CARACTERÍSTICAS',
    featuresTitle: 'Simplifica la recogida de información',
    featuresSubtitle: 'Olvídate de formularios complejos para los que tu cliente no tiene paciencia. Hazlos más fáciles y eficaces con nuestra tecnología de IA.',
    feature1Title: 'Conversaciones naturales',
    feature1Desc: 'Transforma formularios complejos en diálogos fluidos que tus clientes disfrutan completar.',
    feature2Title: 'Automatización inteligente',
    feature2Desc: 'La IA procesa respuestas en tiempo real y adapta las siguientes preguntas según el contexto.',
    feature3Title: 'Análisis avanzado',
    feature3Desc: 'Obtén insights valiosos sobre el comportamiento de tus usuarios y optimiza continuamente.',
    feature4Title: 'Experiencia personalizada',
    feature4Desc: 'Cada usuario recibe un flujo único basado en sus respuestas anteriores.',
    featuresCta: 'Explorar todas las características',
    learnMore: 'Saber más',
    
    // Data Collection
    dataBadge: 'RECOGIDA DE DATOS',
    dataTitle: 'Obtén',
    dataTitleHighlight: '3,5 veces más datos',
    dataTitleEnd: 'con un experto en formularios',
    dataDesc: 'Intervia.ai te ayuda a crear una experiencia de recogida de información optimizada. Probados para obtener más respuestas y mejorar la experiencia de tus clientes.',
    dataBenefit1: 'Recogida de datos 3.5x más rápida',
    dataBenefit2: 'IA que aprende de cada interacción',
    dataBenefit3: 'Mejora continua del rendimiento',
    dataCta: 'Ver planes',
    dataStat1: 'Tasa de respuesta',
    dataStat1Value: '+340%',
    dataStat2: 'Datos recogidos',
    dataStat2Value: '1M+',

    // Studies Market Research
    smrBadge: 'B2B MARKET RESEARCH',
    smrTitle: 'Estudios de mercado',
    smrTitleHighlight: 'conversacionales e inteligentes',
    smrDesc: 'Olvídate de encuestas tradicionales costosas y lentas. Nuestra IA conduce conversaciones naturales que extraen datos cuantitativos (NPS, ratings) y cualitativos (sentiment, pain points) con profundidad adaptativa.',
    smrBenefit1: 'Feedback 5x más profundo y riguroso con patrones objetivos',
    smrBenefit2: 'Resultados en 3-5 días vs 3-4 semanas',
    smrBenefit3: 'Coste por respuesta <50% vs tradicional',
    smrBenefit4: 'Multicanal: WhatsApp, voz, SMS, web',
    smrCta: 'Solicitar demo',
    smrStat1: 'Resultado',
    smrStat1Value: '3-5 días',
    smrStat2: 'Coste por respuesta',
    smrStat2Value: '<50%',

    // Market Research
    mrBadge: 'GESTORÍAS Y ASESORÍAS',
    mrTitle: 'Formularios oficiales',
    mrTitleHighlight: 'pre-rellenados por IA',
    mrDesc: 'Automatiza la recolección de datos para formularios oficiales (036, 037, 303...) mediante conversación guiada. Tu cliente responde por chat o voz y el formulario se pre-rellena listo para tramitar. Sin llamadas, sin emails de ida y vuelta.',
    mrBenefit1: 'Modelos 036, 037, 303, alta SS y constitución SL listos en minutos',
    mrBenefit2: 'Datos completos a la primera, sin follow-ups',
    mrBenefit3: 'De 3-5 días a menos de 1 hora por formulario',
    mrCta: 'Solicitar demo',
    mrStat1: 'Completitud datos',
    mrStat1Value: '98%',
    mrStat2: 'Reducción follow-ups',
    mrStat2Value: '-85%',

    // Automations
    autoBadge: 'INMOBILIARIAS',
    autoTitle: 'Fichas de propiedad y captación de clientes',
    autoTitleHighlight: 'sin papeleo manual',
    autoDesc: 'Tu cliente comprador o vendedor responde por chat o voz y la ficha de captación, requisitos de búsqueda o datos para el contrato se completan automáticamente. Sin visitas innecesarias, sin formularios que nadie rellena.',
    autoFeature1: 'Fichas de captación, mandatos de venta y contratos de arras listos al instante',
    autoFeature2: 'Requisitos del comprador perfilados a la primera conversación',
    autoFeature3: 'De 2-3 visitas previas a 1 sola visita cualificada',
    autoCta: 'Solicitar demo',
    autoStat1: 'Captación datos',
    autoStat1Value: '95%',
    autoStat2: 'Visitas cualificadas',
    autoStat2Value: '+60%',
    
    // Integrations
    intBadge: 'INTEGRACIONES',
    intTitle: 'Conecta con',
    intTitleHighlight: 'cientos de herramientas',
    intDesc: 'Integra intervia.ai con tus herramientas empresariales críticas y crea flujos de trabajo automatizados sin esfuerzo.',
    intCta: 'Ver todas las integraciones',
    
    // Stats
    statsBadge: 'RESULTADOS COMPROBADOS',
    statsTitle: '¿Por qué intervia.ai?',
    statsDesc: 'Después de cambiar a intervia.ai, nuestros clientes están de acuerdo:',
    statsStat1: 'tienen una mejor experiencia de marca',
    statsStat2: 'recopilan más datos, más fácilmente',
    statsStat3: 'revelan información más profunda',
    statsSurvey: 'Basado en una encuesta realizada a más de',
    statsSurveyEnd: 'clientes en 2024',
    customers: 'clientes',
    
    // Pricing
    pricingBadge: 'PRECIOS',
    pricingTitle: 'Elige el plan perfecto para ti',
    pricingDesc: 'Optimiza costes con nuestras soluciones flexibles que se adaptan a tus necesidades.',
    pricingMonthly: 'Mensual',
    pricingYearly: 'Anual',
    pricingSave: 'Ahorra 20%',
    pricingBilled: 'Facturado anualmente',
    pricingCompare: 'Ver comparativa completa',
    pricingFooter: 'Todos los planes incluyen SSL gratuito y cumplimiento GDPR.',
    month: 'mes',
    
    // Plans
    planStarter: 'Starter',
    planStarterDesc: 'Para individuos y pequeños proyectos',
    planPro: 'Pro',
    planProDesc: 'Para equipos en crecimiento',
    planEnterprise: 'Enterprise',
    planEnterpriseDesc: 'Para grandes organizaciones',
    planPopular: 'Más popular',
    planCustom: 'Personalizado',
    everythingInPro: 'Todo lo de Pro',
    
    // Plan features
    featResponses: 'Hasta 100 respuestas/mes',
    featForms: '3 formularios activos',
    featTemplates: 'Plantillas básicas',
    featExport: 'Exportación CSV',
    featSupport: 'Soporte por email',
    featUnlimitedResp: 'Respuestas ilimitadas',
    featUnlimitedForms: 'Formularios ilimitados',
    featAllTemplates: 'Todas las plantillas',
    featAdvancedInt: 'Integraciones avanzadas',
    featRealtime: 'Análisis en tiempo real',
    featBranding: 'Personalización de marca',
    featPriority: 'Soporte prioritario',
    featApi: 'API completa',
    featSSO: 'SSO y SAML',
    featSecurity: 'Seguridad avanzada',
    featSLA: 'SLA garantizado',
    featManager: 'Gestor de cuenta dedicado',
    featTraining: 'Formación personalizada',
    
    // CTA buttons
    ctaStartFree: 'Empezar gratis',
    ctaTrial: 'Prueba gratis 14 días',
    ctaContact: 'Contactar ventas',
    
    // CTA Section
    ctaBadge: 'Comienza gratis hoy',
    ctaTitle: '¿Listo para transformar',
    ctaTitleEnd: 'tus formularios?',
    ctaDesc: 'Únete a miles de empresas que ya están mejorando sus conversiones y simplificando la recogida de datos con intervia.ai.',
    ctaPrimary: 'Crear formulario gratis',
    ctaSecondary: 'Hablar con ventas',
    ctaSetup: 'Setup en 2 minutos',
    ctaCancel: 'Cancela cuando quieras',
    
    // Footer
    footerSlogan: 'From forms to conversations. Transforma formularios aburridos en conversaciones inteligentes que tus clientes disfrutan.',
    footerProduct: 'Producto',
    footerResources: 'Recursos',
    footerCompany: 'Conócenos',
    footerLegal: 'Legal',
    footerFeatures: 'Características',
    footerTemplates: 'Plantillas',
    footerBlog: 'Blog',
    footerHelp: 'Centro de ayuda',
    footerCommunity: 'Comunidad',
    footerTutorials: 'Tutoriales',
    footerWebinars: 'Webinars',
    footerAbout: 'Sobre nosotros',
    footerCareers: 'Carreras',
    footerPress: 'Prensa',
    footerContact: 'Contacto',
    footerPartners: 'Partners',
    footerPrivacy: 'Privacidad',
    footerTerms: 'Términos',
    footerCookies: 'Cookies',
    footerSecurity: 'Seguridad',
    footerStatus: 'Estado del sistema',
    footerSitemap: 'Mapa del sitio',
    footerSystems: 'Todos los sistemas operativos',
    footerCopyright: 'Todos los derechos reservados.',
    
    // Language switcher
    langEs: 'ES',
    langEn: 'EN',
  },
  en: {
    // Navigation
    navPlatform: 'Platform',
    navSolutions: 'Solutions',
    navIntegrations: 'Integrations',
    navPricing: 'Pricing',
    navLogin: 'Log in',
    navSignup: 'Sign up',
    
    // Hero
    heroBadge: 'AI PLATFORM',
    heroTitle: 'Forms that',
    heroTitleHighlight: 'converse',
    heroSubtitle: 'Change structured forms for natural conversations. AI that understands your users and simplifies data collection.',
    heroCtaPrimary: 'Fill form for free',
    heroCtaSecondary: 'View demo',
    heroSetup: 'Setup in 2 minutes',
    
    // Logo Marquee
    trustedBy: 'Companies that trust us',
    
    // Features
    featuresBadge: 'FEATURES',
    featuresTitle: 'Simplify data collection',
    featuresSubtitle: 'Forget about complex forms your customers don\'t have patience for. Make them easier and more effective with our AI technology.',
    feature1Title: 'Natural conversations',
    feature1Desc: 'Transform complex forms into fluid dialogues your customers enjoy completing.',
    feature2Title: 'Smart automation',
    feature2Desc: 'AI processes responses in real-time and adapts following questions based on context.',
    feature3Title: 'Advanced analytics',
    feature3Desc: 'Get valuable insights about user behavior and continuously optimize.',
    feature4Title: 'Personalized experience',
    feature4Desc: 'Each user receives a unique flow based on their previous responses.',
    featuresCta: 'Explore all features',
    learnMore: 'Learn more',
    
    // Data Collection
    dataBadge: 'DATA COLLECTION',
    dataTitle: 'Get',
    dataTitleHighlight: '3.5x more data',
    dataTitleEnd: 'with a form expert',
    dataDesc: 'Intervia.ai helps you create an optimized data collection experience. Proven to get more responses and improve your customer experience.',
    dataBenefit1: '3.5x faster data collection',
    dataBenefit2: 'AI that learns from every interaction',
    dataBenefit3: 'Continuous performance improvement',
    dataCta: 'View plans',
    dataStat1: 'Response rate',
    dataStat1Value: '+340%',
    dataStat2: 'Data collected',
    dataStat2Value: '1M+',

    // Studies Market Research
    smrBadge: 'B2B MARKET RESEARCH',
    smrTitle: 'Market research',
    smrTitleHighlight: 'conversational & intelligent',
    smrDesc: 'Forget expensive and slow traditional surveys. Our AI drives natural conversations that extract quantitative data (NPS, ratings) and qualitative insights (sentiment, pain points) with adaptive depth.',
    smrBenefit1: '5x deeper and more rigorous feedback with objective patterns',
    smrBenefit2: 'Results in 3-5 days vs 3-4 weeks',
    smrBenefit3: 'Cost per response <50% vs traditional',
    smrBenefit4: 'Multichannel: WhatsApp, voice, SMS, web',
    smrCta: 'Request demo',
    smrStat1: 'Results',
    smrStat1Value: '3-5 days',
    smrStat2: 'Cost per response',
    smrStat2Value: '<50%',

    // Market Research
    mrBadge: 'TAX AGENCIES & ADVISORS',
    mrTitle: 'Official forms',
    mrTitleHighlight: 'pre-filled by AI',
    mrDesc: 'Automate data collection for official forms (036, 037, 303...) through guided conversation. Your client answers via chat or voice and the form is pre-filled ready to submit. No calls, no back-and-forth emails.',
    mrBenefit1: 'Forms 036, 037, 303, SS registration & SL incorporation ready in minutes',
    mrBenefit2: 'Complete data on the first try, no follow-ups',
    mrBenefit3: 'From 3-5 days to less than 1 hour per form',
    mrCta: 'Request demo',
    mrStat1: 'Data completeness',
    mrStat1Value: '98%',
    mrStat2: 'Follow-up reduction',
    mrStat2Value: '-85%',

    // Automations
    autoBadge: 'REAL ESTATE',
    autoTitle: 'Property listings and client acquisition',
    autoTitleHighlight: 'without manual paperwork',
    autoDesc: 'Your buyer or seller client answers via chat or voice and the listing sheet, search requirements or contract data are completed automatically. No unnecessary visits, no forms that nobody fills out.',
    autoFeature1: 'Listing sheets, sale mandates and deposit contracts ready instantly',
    autoFeature2: 'Buyer requirements profiled in a single conversation',
    autoFeature3: 'From 2-3 preliminary visits to 1 qualified visit',
    autoCta: 'Request demo',
    autoStat1: 'Data capture',
    autoStat1Value: '95%',
    autoStat2: 'Qualified visits',
    autoStat2Value: '+60%',
    
    // Integrations
    intBadge: 'INTEGRATIONS',
    intTitle: 'Connect with',
    intTitleHighlight: 'hundreds of tools',
    intDesc: 'Integrate intervia.ai with your critical business tools and create automated workflows effortlessly.',
    intCta: 'View all integrations',
    
    // Stats
    statsBadge: 'PROVEN RESULTS',
    statsTitle: 'Why intervia.ai?',
    statsDesc: 'After switching to intervia.ai, our customers agree:',
    statsStat1: 'have a better brand experience',
    statsStat2: 'collect more data, more easily',
    statsStat3: 'reveal deeper insights',
    statsSurvey: 'Based on a survey of over',
    statsSurveyEnd: 'customers in 2024',
    customers: 'customers',
    
    // Pricing
    pricingBadge: 'PRICING',
    pricingTitle: 'Choose the perfect plan for you',
    pricingDesc: 'Optimize costs with our flexible solutions that adapt to your needs.',
    pricingMonthly: 'Monthly',
    pricingYearly: 'Yearly',
    pricingSave: 'Save 20%',
    pricingBilled: 'Billed annually',
    pricingCompare: 'View full comparison',
    pricingFooter: 'All plans include free SSL and GDPR compliance.',
    month: 'month',
    
    // Plans
    planStarter: 'Starter',
    planStarterDesc: 'For individuals and small projects',
    planPro: 'Pro',
    planProDesc: 'For growing teams',
    planEnterprise: 'Enterprise',
    planEnterpriseDesc: 'For large organizations',
    planPopular: 'Most popular',
    planCustom: 'Custom',
    everythingInPro: 'Everything in Pro',
    
    // Plan features
    featResponses: 'Up to 100 responses/month',
    featForms: '3 active forms',
    featTemplates: 'Basic templates',
    featExport: 'CSV export',
    featSupport: 'Email support',
    featUnlimitedResp: 'Unlimited responses',
    featUnlimitedForms: 'Unlimited forms',
    featAllTemplates: 'All templates',
    featAdvancedInt: 'Advanced integrations',
    featRealtime: 'Real-time analytics',
    featBranding: 'Brand customization',
    featPriority: 'Priority support',
    featApi: 'Full API',
    featSSO: 'SSO & SAML',
    featSecurity: 'Advanced security',
    featSLA: 'Guaranteed SLA',
    featManager: 'Dedicated account manager',
    featTraining: 'Custom training',
    
    // CTA buttons
    ctaStartFree: 'Start for free',
    ctaTrial: 'Free 14-day trial',
    ctaContact: 'Contact sales',
    
    // CTA Section
    ctaBadge: 'Start free today',
    ctaTitle: 'Ready to transform',
    ctaTitleEnd: 'your forms?',
    ctaDesc: 'Join thousands of companies already improving their conversions and simplifying data collection with intervia.ai.',
    ctaPrimary: 'Create form for free',
    ctaSecondary: 'Talk to sales',
    ctaSetup: 'Setup in 2 minutes',
    ctaCancel: 'Cancel anytime',
    
    // Footer
    footerSlogan: 'From forms to conversations. Transform boring forms into intelligent conversations your customers enjoy.',
    footerProduct: 'Product',
    footerResources: 'Resources',
    footerCompany: 'Company',
    footerLegal: 'Legal',
    footerFeatures: 'Features',
    footerTemplates: 'Templates',
    footerBlog: 'Blog',
    footerHelp: 'Help center',
    footerCommunity: 'Community',
    footerTutorials: 'Tutorials',
    footerWebinars: 'Webinars',
    footerAbout: 'About us',
    footerCareers: 'Careers',
    footerPress: 'Press',
    footerContact: 'Contact',
    footerPartners: 'Partners',
    footerPrivacy: 'Privacy',
    footerTerms: 'Terms',
    footerCookies: 'Cookies',
    footerSecurity: 'Security',
    footerStatus: 'System status',
    footerSitemap: 'Sitemap',
    footerSystems: 'All systems operational',
    footerCopyright: 'All rights reserved.',
    
    // Language switcher
    langEs: 'ES',
    langEn: 'EN',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
