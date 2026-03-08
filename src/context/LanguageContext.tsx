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
    navPricing: 'Contacto',
    navLogin: 'Iniciar sesion',
    navSignup: 'Registrarse',

    // Hero
    heroBadge: 'PLATAFORMA DE IA',
    heroTitle: 'Formularios que',
    heroTitleHighlight: 'conversan',
    heroSubtitle: 'La burocracia administrativa no desaparece. Pero puede dejar de ser un problema. Intervia convierte cualquier tramite complejo en una conversacion natural de 10 minutos.',
    heroCtaPrimary: 'Solicitar demo',
    heroCtaSecondary: 'Hablar con ventas',
    heroSetup: 'Setup en 2 minutos',

    // Problem & Solution
    problemBadge: 'EL PROBLEMA Y LA SOLUCION',
    problem1Title: 'Demasiado tiempo en recoger datos',
    problem1Desc: 'Un gestor dedica casi una hora a llamadas, emails y correcciones para recoger los datos de un solo cliente. Tiempo que no genera valor para nadie.',
    problem2Title: 'Errores que reinician el tramite',
    problem2Desc: 'Campos mal interpretados, documentacion incompleta, datos incoherentes. El tramite vuelve al inicio - con el coste de tiempo y reputacion que eso implica.',
    problem3Title: 'La digitalizacion no ha reducido la complejidad para el usuario',
    problem3Desc: 'El formulario existe en la web, pero el lenguaje tecnico hace que la mayoria de los usuarios lo abandone y llame igualmente a la oficina o gestoria.',
    solutionTitle: 'La solucion es una conversacion, no un formulario',
    solutionDesc: 'Intervia reemplaza el formulario por una conversacion guiada por voz o chat. El sistema recoge los datos, valida cada campo en tiempo real y genera el documento oficial listo para presentar - en una fraccion del tiempo habitual, sin errores, desde cualquier canal.',
    solutionPoint1: 'Conversacion adaptada al nivel del usuario - sin tecnicismos',
    solutionPoint2: 'La IA lee la documentacion oficial y explica que significa cada campo y que respuesta encaja con el caso concreto del usuario',
    solutionPoint3: 'Validacion de campos en tiempo real - cero errores de formato o incoherencias',
    solutionPoint4: 'Salida: PDF oficial pre-rellenado, listo para presentar en sede electronica o presencialmente',
    solutionPoint5: 'Multicanal: web, WhatsApp y voz - sin app, sin certificado digital',
    solutionPoint6: 'Cumplimiento RGPD y normativa espanola vigente',

    // Gestorias y Asesorias (Market Research / original)
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

    // RRHH
    rrhhBadge: 'PARA DEPARTAMENTOS DE RRHH',
    rrhhTitle: 'Incorpora un empleado en minutos,',
    rrhhTitleHighlight: 'no en horas.',
    rrhhDesc: 'Altas en la Seguridad Social, contratos, documentacion de incorporacion. Todo en una conversacion desde el movil del empleado.',
    rrhhPain1: 'RRHH actua de intermediario entre el empleado y la administracion',
    rrhhPain2: 'Errores en la documentacion retrasan contratos y pueden generar sanciones',
    rrhhPain3: 'Los procesos no escalan con el crecimiento de la empresa',
    rrhhResult1: 'El empleado completa su documentacion de forma autonoma desde el movil',
    rrhhResult2: 'Documentacion correcta al primer intento - sin correcciones',
    rrhhResult3: 'El equipo de RRHH revisa, no recoge datos manualmente',
    rrhhCta: 'Solicitar demo',

    // Administraciones Publicas
    adminBadge: 'PARA ADMINISTRACIONES PUBLICAS',
    adminTitle: 'El tramite online que los ciudadanos',
    adminTitleHighlight: 'si pueden completar.',
    adminDesc: 'El formulario existe en la sede electronica, pero el ciudadano sigue necesitando ayuda. Intervia convierte ese formulario en una conversacion accesible para todos.',
    adminPain1: 'La digitalizacion no redujo la carga: el ciudadano sigue necesitando ayuda',
    adminPain2: 'Las personas mas vulnerables mas dificultades tienen',
    adminPain3: 'El 40% de expedientes vuelve por errores o documentacion incompleta',
    adminPain4: 'Los funcionarios terminan cargando el desbordamiento de las dudas de los tramites online',
    adminResult1: 'Tasa de abandono en tramites online muy reducida',
    adminResult2: 'Reduccion significativa de carga de trabajo espontanea de funcionarios',
    adminResult3: 'Expedientes devueltos por errores notablemente menores',
    adminCta: 'Solicitar demo',

    // Integrations
    intBadge: 'INTEGRACIONES',
    intTitle: 'Conecta con',
    intTitleHighlight: 'cientos de herramientas',
    intDesc: 'Integra intervia ai con tus herramientas empresariales criticas y crea flujos de trabajo automatizados sin esfuerzo.',
    intCta: 'Ver todas las integraciones',

    // How it works (4 steps)
    howBadge: 'CÓMO FUNCIONA',
    howTitle: '4 pasos para eliminar la burocracia',
    howStep1Title: 'El usuario inicia la conversacion',
    howStep1Desc: 'Por WhatsApp, web o telefono. En su idioma, a su ritmo. Sin descargar nada, sin certificado digital, sin burocracia para acceder a la herramienta.',
    howStep2Title: 'Intervia guia y explica cada campo',
    howStep2Desc: 'El sistema detecta el tramite y conduce al usuario pregunta a pregunta. Si no sabe que responder, consulta la documentacion oficial del campo y explica que significa y que opcion encaja con su situacion concreta.',
    howStep3Title: 'El usuario confirma sus datos',
    howStep3Desc: 'El sistema presenta un resumen en lenguaje claro antes de finalizar. Si algo esta mal, se corrige en el momento - sin retrabajo posterior ni vuelta al inicio.',
    howStep4Title: 'El documento sale listo para presentar',
    howStep4Desc: 'El sistema genera el PDF oficial con todos los campos pre-rellenados y validados. El usuario lo descarga y lo presenta en la sede electronica o presencialmente - sin errores, en una fraccion del tiempo habitual.',

    // AI Document Reader
    aiDocBadge: 'INTERPRETACION DOCUMENTAL',
    aiDocTitle: 'La IA que lee la normativa por ti',
    aiDocDesc: 'Los formularios administrativos estan escritos en un lenguaje tecnico pensado para juristas, no para personas. Intervia lee la documentacion oficial de cada campo y lo traduce al lenguaje del usuario en tiempo real - explicando que significa, que opciones tiene y cual se adapta mejor a su situacion concreta.',
    aiDocCap1Title: 'Interpreta el texto legal',
    aiDocCap1Desc: 'Analiza la definicion oficial de cada campo y la convierte en una explicacion comprensible, sin perder rigor juridico.',
    aiDocCap2Title: 'Recomienda la respuesta mas adecuada',
    aiDocCap2Desc: 'En base al contexto del usuario - situacion laboral, tipo de contrato, regimen fiscal - sugiere cual es la opcion correcta para su caso concreto.',
    aiDocCap3Title: 'Advierte sobre implicaciones',
    aiDocCap3Desc: 'Si una eleccion tiene consecuencias fiscales o legales relevantes, el asistente lo explica antes de que el usuario confirme. Sin sorpresas despues.',
    aiDocCap4Title: 'Siempre actualizado',
    aiDocCap4Desc: 'Cuando cambia la normativa, cambian las explicaciones. Sin intervencion manual. Sin que nadie tenga que releer el BOE.',
    aiDocExamplesTitle: 'Ejemplos reales - Modelo 036 / AEAT',
    aiDocField1: 'Epigrafe IAE',
    aiDocOfficial1: 'Indique el epigrafe del Impuesto sobre Actividades Economicas correspondiente a la actividad economica declarada conforme a la clasificacion vigente.',
    aiDocIntervia1: 'Es el codigo que clasifica a que se dedica tu negocio segun Hacienda. Por ejemplo, si eres consultor informatico, tu epigrafe es el 763. A que te dedicas exactamente? Te ayudo a encontrar el tuyo.',
    aiDocField2: 'Regimen de IVA',
    aiDocOfficial2: 'Regimen de tributacion aplicable en el Impuesto sobre el Valor Anadido. Marque el regimen que corresponda segun la naturaleza y volumen de las operaciones.',
    aiDocIntervia2: 'Basicamente, como vas a gestionar el IVA. Para la mayoria de autonomos que empiezan, el Regimen General es lo correcto. El Simplificado solo aplica en sectores muy concretos como agricultura o ganaderia.',
    aiDocField3: 'Prorrata de IVA',
    aiDocOfficial3: 'Indique si realiza simultaneamente operaciones que originan el derecho a la deduccion y operaciones que no originan dicho derecho, a efectos del calculo de la prorrata.',
    aiDocIntervia3: 'Esto solo te afecta si parte de tus ingresos vienen de actividades exentas de IVA (como formacion o servicios medicos). Si todas tus facturas llevan IVA, marca No y seguimos.',
    aiDocOfficialLabel: 'Texto oficial',
    aiDocInterviaLabel: 'Intervia explica',

    // Contact / Lead capture
    contactBadge: 'CONTACTO',
    contactTitle: 'Hablemos de tu caso',
    contactDesc: 'Dejanos tu email y te contactamos para mostrarte como Intervia puede ayudarte.',
    contactEmailPlaceholder: 'tu@email.com',
    contactSubmit: 'Solicitar demo',
    contactSuccess: 'Gracias. Nos pondremos en contacto contigo pronto.',
    contactPrivacy: 'Tus datos estan seguros. Cumplimos con la RGPD.',

    // CTA Section
    ctaBadge: 'Comienza hoy',
    ctaTitle: 'Listo para transformar',
    ctaTitleEnd: 'tus tramites?',
    ctaDesc: 'Unete a las empresas que ya estan simplificando la recogida de datos con intervia ai.',
    ctaPrimary: 'Solicitar demo',
    ctaSecondary: 'Hablar con ventas',
    ctaSetup: 'Setup en 2 minutos',
    ctaCancel: 'Cancela cuando quieras',

    // Footer
    footerSlogan: 'De formularios a conversaciones. Intervia convierte tramites complejos en conversaciones naturales.',
    footerProduct: 'Producto',
    footerResources: 'Recursos',
    footerCompany: 'Conocenos',
    footerLegal: 'Legal',
    footerFeatures: 'Caracteristicas',
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
    footerTerms: 'Terminos',
    footerCookies: 'Cookies',
    footerSecurity: 'Seguridad',
    footerStatus: 'Estado del sistema',
    footerSitemap: 'Mapa del sitio',
    footerSystems: 'Todos los sistemas operativos',
    footerCopyright: 'Todos los derechos reservados.',

    // Language switcher
    langEs: 'ES',
    langEn: 'EN',

    // Misc
    learnMore: 'Saber mas',
    painPoints: 'Dolores del cliente',
    results: 'Resultados con Intervia',
  },
  en: {
    // Navigation
    navPlatform: 'Platform',
    navSolutions: 'Solutions',
    navIntegrations: 'Integrations',
    navPricing: 'Contact',
    navLogin: 'Log in',
    navSignup: 'Sign up',

    // Hero
    heroBadge: 'AI PLATFORM',
    heroTitle: 'Forms that',
    heroTitleHighlight: 'converse',
    heroSubtitle: 'Administrative bureaucracy doesn\'t disappear. But it can stop being a problem. Intervia turns any complex procedure into a natural 10-minute conversation.',
    heroCtaPrimary: 'Request demo',
    heroCtaSecondary: 'Talk to sales',
    heroSetup: 'Setup in 2 minutes',

    // Problem & Solution
    problemBadge: 'THE PROBLEM AND THE SOLUTION',
    problem1Title: 'Too much time collecting data',
    problem1Desc: 'A manager spends nearly an hour on calls, emails, and corrections to collect data from a single client. Time that generates no value for anyone.',
    problem2Title: 'Errors that restart the process',
    problem2Desc: 'Misinterpreted fields, incomplete documentation, inconsistent data. The process goes back to the start - with the cost of time and reputation that entails.',
    problem3Title: 'Digitalization hasn\'t reduced complexity for the user',
    problem3Desc: 'The form exists on the web, but the technical language causes most users to abandon it and call the office anyway.',
    solutionTitle: 'The solution is a conversation, not a form',
    solutionDesc: 'Intervia replaces the form with a conversation guided by voice or chat. The system collects data, validates each field in real time, and generates the official document ready to submit - in a fraction of the usual time, error-free, from any channel.',
    solutionPoint1: 'Conversation adapted to the user\'s level - no jargon',
    solutionPoint2: 'AI reads official documentation and explains what each field means and which answer fits the user\'s specific case',
    solutionPoint3: 'Real-time field validation - zero format errors or inconsistencies',
    solutionPoint4: 'Output: pre-filled official PDF, ready to submit electronically or in person',
    solutionPoint5: 'Multichannel: web, WhatsApp, and voice - no app, no digital certificate',
    solutionPoint6: 'GDPR compliant and current Spanish regulations',

    // Gestorias y Asesorias (Market Research / original)
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

    // RRHH
    rrhhBadge: 'FOR HR DEPARTMENTS',
    rrhhTitle: 'Onboard an employee in minutes,',
    rrhhTitleHighlight: 'not hours.',
    rrhhDesc: 'Social Security registrations, contracts, onboarding documentation. All in a conversation from the employee\'s phone.',
    rrhhPain1: 'HR acts as intermediary between the employee and the administration',
    rrhhPain2: 'Documentation errors delay contracts and can generate penalties',
    rrhhPain3: 'Processes don\'t scale with company growth',
    rrhhResult1: 'Employee completes documentation autonomously from their phone',
    rrhhResult2: 'Correct documentation on the first attempt - no corrections',
    rrhhResult3: 'HR team reviews, doesn\'t manually collect data',
    rrhhCta: 'Request demo',

    // Administraciones Publicas
    adminBadge: 'FOR PUBLIC ADMINISTRATIONS',
    adminTitle: 'The online procedure citizens',
    adminTitleHighlight: 'can actually complete.',
    adminDesc: 'The form exists on the e-government portal, but citizens still need help. Intervia turns that form into a conversation accessible to everyone.',
    adminPain1: 'Digitalization didn\'t reduce the load: citizens still need help',
    adminPain2: 'The most vulnerable people face the greatest difficulties',
    adminPain3: '40% of files come back due to errors or incomplete documentation',
    adminPain4: 'Civil servants end up bearing the overflow of doubts from online procedures',
    adminResult1: 'Online procedure abandonment rate greatly reduced',
    adminResult2: 'Significant reduction in spontaneous workload for civil servants',
    adminResult3: 'Files returned due to errors notably fewer',
    adminCta: 'Request demo',

    // Integrations
    intBadge: 'INTEGRATIONS',
    intTitle: 'Connect with',
    intTitleHighlight: 'hundreds of tools',
    intDesc: 'Integrate intervia ai with your critical business tools and create automated workflows effortlessly.',
    intCta: 'View all integrations',

    // How it works (4 steps)
    howBadge: 'HOW IT WORKS',
    howTitle: '4 steps to eliminate bureaucracy',
    howStep1Title: 'The user starts the conversation',
    howStep1Desc: 'Via WhatsApp, web, or phone. In their language, at their pace. No downloads, no digital certificate, no bureaucracy to access the tool.',
    howStep2Title: 'Intervia guides and explains each field',
    howStep2Desc: 'The system detects the procedure and guides the user question by question. If they don\'t know what to answer, it consults the official field documentation and explains what it means and which option fits their specific situation.',
    howStep3Title: 'The user confirms their data',
    howStep3Desc: 'The system presents a summary in plain language before finishing. If something is wrong, it gets corrected on the spot - no rework or starting over.',
    howStep4Title: 'The document comes out ready to submit',
    howStep4Desc: 'The system generates the official PDF with all fields pre-filled and validated. The user downloads it and submits it electronically or in person - error-free, in a fraction of the usual time.',

    // AI Document Reader
    aiDocBadge: 'DOCUMENT INTERPRETATION',
    aiDocTitle: 'The AI that reads regulations for you',
    aiDocDesc: 'Administrative forms are written in technical language designed for lawyers, not people. Intervia reads the official documentation for each field and translates it into the user\'s language in real time - explaining what it means, what options exist, and which best fits their specific situation.',
    aiDocCap1Title: 'Interprets legal text',
    aiDocCap1Desc: 'Analyzes the official definition of each field and converts it into an understandable explanation, without losing legal rigor.',
    aiDocCap2Title: 'Recommends the most suitable answer',
    aiDocCap2Desc: 'Based on the user\'s context - employment situation, contract type, tax regime - suggests which is the correct option for their specific case.',
    aiDocCap3Title: 'Warns about implications',
    aiDocCap3Desc: 'If a choice has relevant tax or legal consequences, the assistant explains it before the user confirms. No surprises afterwards.',
    aiDocCap4Title: 'Always up to date',
    aiDocCap4Desc: 'When regulations change, the explanations change. No manual intervention. No one needs to re-read the official gazette.',
    aiDocExamplesTitle: 'Real examples - Form 036 / AEAT',
    aiDocField1: 'IAE Classification',
    aiDocOfficial1: 'Indicate the Economic Activities Tax classification corresponding to the declared economic activity according to the current classification.',
    aiDocIntervia1: 'It\'s the code that classifies what your business does according to the Tax Agency. For example, if you\'re an IT consultant, your code is 763. What exactly do you do? I\'ll help you find yours.',
    aiDocField2: 'VAT Regime',
    aiDocOfficial2: 'Applicable tax regime for Value Added Tax. Mark the regime that corresponds according to the nature and volume of operations.',
    aiDocIntervia2: 'Basically, how you\'re going to handle VAT. For most freelancers starting out, the General Regime is correct. The Simplified one only applies in very specific sectors like agriculture or livestock.',
    aiDocField3: 'VAT Pro-rata',
    aiDocOfficial3: 'Indicate whether you simultaneously carry out operations that give rise to the right to deduction and operations that do not give rise to said right, for the purposes of calculating the pro-rata.',
    aiDocIntervia3: 'This only affects you if part of your income comes from VAT-exempt activities (like training or medical services). If all your invoices include VAT, select No and let\'s continue.',
    aiDocOfficialLabel: 'Official text',
    aiDocInterviaLabel: 'Intervia explains',

    // Contact / Lead capture
    contactBadge: 'CONTACT',
    contactTitle: 'Let\'s talk about your case',
    contactDesc: 'Leave us your email and we\'ll contact you to show how Intervia can help.',
    contactEmailPlaceholder: 'you@email.com',
    contactSubmit: 'Request demo',
    contactSuccess: 'Thanks! We\'ll be in touch soon.',
    contactPrivacy: 'Your data is safe. We comply with GDPR.',

    // CTA Section
    ctaBadge: 'Start today',
    ctaTitle: 'Ready to transform',
    ctaTitleEnd: 'your procedures?',
    ctaDesc: 'Join companies already simplifying data collection with intervia ai.',
    ctaPrimary: 'Request demo',
    ctaSecondary: 'Talk to sales',
    ctaSetup: 'Setup in 2 minutes',
    ctaCancel: 'Cancel anytime',

    // Footer
    footerSlogan: 'From forms to conversations. Intervia turns complex procedures into natural conversations.',
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

    // Misc
    learnMore: 'Learn more',
    painPoints: 'Client pain points',
    results: 'Results with Intervia',
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
