import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight, CheckCircle2, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

// Animation Variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeRight = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
};

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-50 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden">
      {/* Top Bar - Trust & Contact Info */}
      <div className="bg-primary-950 text-surface-100 py-2 px-4 sm:px-6 lg:px-8 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-accent-500" /> Von-Haniel-Straße 7, 85778 Haimhausen</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-accent-500" /> Mo-Fr: 08:00 - 17:00 Uhr</span>
          </div>
          <div className="flex items-center space-x-6 font-medium">
            <a href="mailto:info@hausservice-maier.de" className="flex items-center hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2 text-accent-500" /> info@hausservice-maier.de
            </a>
            <a href="tel:+491754011720" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2 text-accent-500" /> +49 175 4011720
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white sticky top-0 z-50 border-b border-surface-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end md:justify-between items-center h-20 md:h-24">
            {/* Logo - Hidden on mobile */}
            <div className="hidden md:flex flex-shrink-0 items-center">
              <a href="#" className="flex items-center">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260302_081216_d31ef968-c599-402c-bf77-c23a0b007f39.jpeg&w=1280&q=85" 
                  alt="Hausservice Maier Logo" 
                  className="h-16 w-auto object-contain mix-blend-multiply"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#leistungen" className="text-surface-800 hover:text-primary-600 font-medium transition-colors">Leistungen</a>
              <a href="#vorteile" className="text-surface-800 hover:text-primary-600 font-medium transition-colors">Vorteile</a>
              <a href="#faq" className="text-surface-800 hover:text-primary-600 font-medium transition-colors">FAQ</a>
              <a href="#kontakt" className="bg-primary-900 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center">
                Angebot anfordern
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-surface-800 hover:text-primary-900 p-2 -mr-2"
              >
                {isMobileMenuOpen ? <X className="h-8 w-8" strokeWidth={1.5} /> : <Menu className="h-8 w-8" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-surface-200 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              <a href="#leistungen" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">Leistungen</a>
              <a href="#vorteile" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">Vorteile</a>
              <a href="#faq" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">FAQ</a>
              <a href="tel:+491754011720" className="mt-4 flex justify-center items-center w-full text-center bg-primary-900 text-white px-6 py-3 rounded-lg font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative bg-primary-950 text-white overflow-hidden">
          {/* Background Pattern/Image Overlay with slow scale animation */}
          <motion.div 
            className="absolute inset-0 opacity-20"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <img 
              src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop" 
              alt="Modern building facade" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary-950 mix-blend-multiply"></div>
          </motion.div>

          {/* Adjusted padding: pt-10 pb-20 for mobile to remove empty space, lg:py-32 for desktop */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-20 md:pb-24 lg:py-32">
            <div className="max-w-3xl">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center rounded-full px-4 py-1.5 bg-primary-800/50 border border-primary-700 backdrop-blur-sm text-sm font-medium text-primary-100 mb-6 md:mb-8">
                  <ShieldCheck className="w-4 h-4 mr-2 text-accent-400" />
                  Ihr lokaler Partner in München & Haimhausen
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance leading-[1.1] mb-6">
                  Werterhalt für Ihre Immobilie seit 1994.
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-primary-100 mb-8 md:mb-10 text-balance max-w-2xl leading-relaxed">
                  Professionelle Objektbetreuung, Gartenpflege und Reinigung. Wir entlasten Eigentümer und Hausverwaltungen – zuverlässig, kompetent und regional.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-primary-950 bg-accent-500 hover:bg-accent-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1">
                    Kostenloses Angebot anfordern
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                  <a href="tel:+491754011720" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-primary-800 hover:bg-primary-700 border border-primary-700 transition-all hover:-translate-y-1">
                    <Phone className="mr-2 w-5 h-5" />
                    0175 4011720
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-10 md:mt-12 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm font-medium text-primary-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    <span>Inhabergeführt</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    <span>Fester Ansprechpartner</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent-500" />
                    <span>Schnelle Reaktionszeit</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="leistungen" className="py-20 md:py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-primary-600 font-semibold tracking-wide uppercase text-sm mb-3">Unsere Leistungen</motion.h2>
              <motion.h3 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-surface-900 mb-6">Komplettservice aus einer Hand</motion.h3>
              <motion.p variants={fadeUp} className="text-lg text-surface-600">Wir bieten maßgeschneiderte Lösungen für den langfristigen Werterhalt Ihrer Gewerbe- und Wohnimmobilien.</motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Service 1 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Hausmeisterservice</h4>
                <p className="text-surface-600 mb-6 leading-relaxed">Technische Betreuung, Instandhaltung und regelmäßige Kontrollgänge für einen reibungslosen Betrieb Ihrer Immobilie.</p>
                <ul className="space-y-2 text-surface-600 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Kleinreparaturen</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Haustechnik-Kontrolle</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> 24/7 Notdienst-Koordination</li>
                </ul>
              </motion.div>

              {/* Service 2 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Gebäudereinigung</h4>
                <p className="text-surface-600 mb-6 leading-relaxed">Strahlende Sauberkeit für Treppenhäuser, Büros und Tiefgaragen. Repräsentativ und hygienisch einwandfrei.</p>
                <ul className="space-y-2 text-surface-600 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Treppenhausreinigung</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Fenster- & Glasreinigung</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Tiefgaragenreinigung</li>
                </ul>
              </motion.div>

              {/* Service 3 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-primary-100 text-primary-700 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Garten- & Winterdienst</h4>
                <p className="text-surface-600 mb-6 leading-relaxed">Gepflegte Außenanlagen im Sommer und garantierte Sicherheit bei Schnee und Eis im Winter.</p>
                <ul className="space-y-2 text-surface-600 font-medium">
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Rasenschnitt & Heckenpflege</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Unkrautbeseitigung</li>
                  <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Zuverlässiger Räumdienst</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Social Proof / Authority Section */}
        <section id="vorteile" className="py-20 md:py-24 bg-primary-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                <motion.h2 variants={fadeRight} className="text-3xl md:text-4xl font-display font-bold mb-6">Warum Hausverwaltungen auf uns vertrauen.</motion.h2>
                <motion.p variants={fadeRight} className="text-primary-100 text-lg mb-8 leading-relaxed">
                  Seit über drei Jahrzehnten sind wir der verlässliche Partner für Immobilienbesitzer im Raum München Nord. Wir verstehen, dass eine Immobilie nicht nur ein Gebäude, sondern ein wertvolles Asset ist, das kontinuierliche Pflege benötigt.
                </motion.p>
                
                <motion.div variants={fadeRight} className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-display font-bold text-accent-400 mb-2">30+</div>
                    <div className="font-medium text-primary-100">Jahre Erfahrung in der Objektbetreuung</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-accent-400 mb-2">100%</div>
                    <div className="font-medium text-primary-100">Inhabergeführt & Regional verwurzelt</div>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeLeft}
                className="relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="https://www.mkm-traumhaus.de/assets/images/artikel/68/werterhalt-wertsteigerung-von-immobilien.jpg" 
                    alt="Professional property maintenance" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Floating Badge */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-6 -left-6 bg-white text-surface-900 p-6 rounded-2xl shadow-xl max-w-xs"
                >
                  <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-12 bg-accent-100 rounded-full flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Geprüfte Qualität</div>
                      <div className="text-sm text-surface-500">Seit 1994</div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 md:py-24 bg-surface-50 overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-surface-900 mb-4">Häufig gestellte Fragen</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600">Transparente Antworten für eine vertrauensvolle Zusammenarbeit.</motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6"
            >
              {/* FAQ Item 1 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-surface-900 mb-2">Für welche Objekte übernehmen Sie die Betreuung?</h3>
                <p className="text-surface-600">Wir betreuen Wohnanlagen (WEGs), Gewerbeimmobilien, Bürogebäude sowie private Mehrfamilienhäuser im Raum München Nord und Haimhausen.</p>
              </motion.div>
              
              {/* FAQ Item 2 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-surface-900 mb-2">Bieten Sie auch Winterdienst an?</h3>
                <p className="text-surface-600">Ja, wir bieten einen zuverlässigen Winterdienst gemäß den gesetzlichen Bestimmungen Ihrer Gemeinde an, inklusive Haftungsübernahme für die geräumten Flächen.</p>
              </motion.div>

              {/* FAQ Item 3 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-surface-900 mb-2">Wie schnell können Sie mit der Betreuung starten?</h3>
                <p className="text-surface-600">Nach einer gemeinsamen Objektbegehung und Angebotsannahme können wir in der Regel innerhalb von 2-4 Wochen, bei Dringlichkeit auch schneller, mit der regulären Betreuung beginnen.</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA / Contact Section - Minimalist Bento Grid */}
        <section id="kontakt" className="py-20 md:py-32 bg-surface-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="mb-16 md:mb-24"
            >
              <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-surface-900 mb-6 tracking-tight">
                Lassen Sie uns<br className="hidden md:block" /> sprechen.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-surface-600 max-w-2xl leading-relaxed">
                Wählen Sie Ihren bevorzugten Kontaktweg. Wir reagieren schnell, unkompliziert und zuverlässig.
              </motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {/* Phone Card */}
              <motion.a variants={fadeUp} href="tel:+491754011720" className="group bg-white p-10 rounded-[2rem] border border-surface-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between aspect-square md:aspect-auto lg:aspect-square">
                <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mb-8">
                  <Phone className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-surface-400 mb-2 uppercase tracking-widest">Rufen Sie an</div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-surface-900 group-hover:text-primary-600 transition-colors">+49 175 4011720</div>
                </div>
              </motion.a>

              {/* Email Card */}
              <motion.a variants={fadeUp} href="mailto:info@hausservice-maier.de" className="group bg-white p-10 rounded-[2rem] border border-surface-200 hover:border-primary-500 hover:shadow-xl transition-all duration-300 flex flex-col justify-between aspect-square md:aspect-auto lg:aspect-square">
                <div className="w-16 h-16 bg-surface-100 rounded-full flex items-center justify-center group-hover:bg-primary-50 group-hover:text-primary-600 group-hover:scale-110 transition-all duration-300 mb-8">
                  <Mail className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-sm font-bold text-surface-400 mb-2 uppercase tracking-widest">Schreiben Sie uns</div>
                  <div className="text-2xl md:text-3xl font-display font-bold text-surface-900 group-hover:text-primary-600 transition-colors break-all">info@<br/>hausservice-maier.de</div>
                </div>
              </motion.a>

              {/* WhatsApp Card */}
              <motion.a variants={fadeUp} href="https://wa.me/491754011720" target="_blank" rel="noopener noreferrer" className="group bg-[#25D366] p-10 rounded-[2rem] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between aspect-square md:aspect-auto lg:aspect-square text-white shadow-lg shadow-[#25D366]/20 hover:shadow-[#25D366]/40">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-8 backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-white/80 mb-2 uppercase tracking-widest">Direkt Chatten</div>
                  <div className="text-2xl md:text-3xl font-display font-bold">WhatsApp</div>
                </div>
              </motion.a>

              {/* Maps Card - spans full width on mobile, 3 cols on lg */}
              <motion.div variants={fadeUp} className="md:col-span-2 lg:col-span-3 bg-white p-4 rounded-[2rem] border border-surface-200 h-[400px] md:h-[500px] relative overflow-hidden group">
                <div className="absolute inset-0 p-4">
                  <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                    <iframe 
                      src="https://maps.google.com/maps?q=Von-Haniel-Stra%C3%9Fe%207,%2085778%20Haimhausen&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0, filter: 'grayscale(100%) contrast(100%) opacity(80%)' }} 
                      allowFullScreen={false} 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="transition-all duration-700 group-hover:filter-none group-hover:scale-105"
                    ></iframe>
                    {/* Overlay to make it look trendy */}
                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl pointer-events-none border border-white/20">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary-900 rounded-full flex items-center justify-center shrink-0">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-surface-900 text-lg">Unser Standort</div>
                          <div className="text-sm text-surface-500 font-medium">Haimhausen, München Nord</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#050505] text-surface-400 pt-20 pb-8 border-t border-surface-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-white text-3xl md:text-4xl font-display font-bold mb-6">
                Bereit für den nächsten Schritt?
              </h3>
              <p className="text-surface-400 text-lg mb-8 max-w-md leading-relaxed">
                Lassen Sie uns gemeinsam den Wert Ihrer Immobilie sichern. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
              </p>
              <a href="mailto:info@hausservice-maier.de" className="inline-flex items-center text-white font-bold text-xl group">
                info@hausservice-maier.de
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#leistungen" className="hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#vorteile" className="hover:text-white transition-colors">Vorteile</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#kontakt" className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Kontakt</h4>
              <ul className="space-y-4 text-sm font-medium">
                <li>Von-Haniel-Straße 7</li>
                <li>85778 Haimhausen</li>
                <li className="pt-2"><a href="tel:+491754011720" className="hover:text-white transition-colors text-lg">+49 175 4011720</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium">
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="hover:text-white transition-colors">Impressum</a>
              <a href="#" className="hover:text-white transition-colors">Datenschutz</a>
              <a href="#" className="hover:text-white transition-colors">AGB</a>
            </div>
            <p>&copy; {new Date().getFullYear()} Hausservice Maier.</p>
          </div>
        </div>
        
        {/* Massive Text Background/Footer Bottom */}
        <div className="mt-12 w-full overflow-hidden flex justify-center items-center opacity-[0.03] select-none pointer-events-none">
          <span className="text-[14vw] font-display font-black leading-none whitespace-nowrap text-white tracking-tighter">
            HAUSSERVICE
          </span>
        </div>
      </footer>
    </div>
  );
}
