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
  const [activePage, setActivePage] = useState<'home' | 'impressum' | 'datenschutz' | 'agb'>('home');

  return (
    <div className="min-h-screen bg-surface-50 font-sans selection:bg-primary-500 selection:text-white overflow-x-hidden">
      {/* Top Bar - Trust & Contact Info */}
      <div className="bg-primary-950 text-surface-100 py-2 px-4 sm:px-6 lg:px-8 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-accent-500" /> Von-Haniel-Straße 7, 85778 Haimhausen</span>
            <span className="flex items-center"><Clock className="w-4 h-4 mr-2 text-accent-500" /> Mo. - Do. von 8 - 16 Uhr und Freitags von 8-12 Uhr</span>
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
          <div className="flex justify-between items-center h-24 md:h-28">
            {/* Logo */}
            <div className="flex flex-shrink-0 items-center">
              <a href="#" onClick={(e) => { e.preventDefault(); setActivePage('home'); window.scrollTo(0,0); }} className="flex items-center">
                <img 
                  src="https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_2zg6kRsQgLvpBAc5mmGVtMaqZi0%2Fhf_20260302_081216_d31ef968-c599-402c-bf77-c23a0b007f39.jpeg&w=1280&q=85" 
                  alt="HausService Maier GmbH Logo" 
                  className="h-16 sm:h-20 md:h-24 w-auto object-contain mix-blend-multiply"
                  fetchPriority="high"
                  decoding="async"
                />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8 items-center">
              <a href="#leistungen" onClick={() => setActivePage('home')} className="text-surface-800 hover:text-primary-600 font-medium transition-colors">Leistungen</a>
              <a href="#vorteile" onClick={() => setActivePage('home')} className="text-surface-800 hover:text-primary-600 font-medium transition-colors">Vorteile</a>
              <a href="#faq" onClick={() => setActivePage('home')} className="text-surface-800 hover:text-primary-600 font-medium transition-colors">FAQ</a>
              <a href="#kontakt" onClick={() => setActivePage('home')} className="bg-primary-900 hover:bg-primary-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center">
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
              <a href="#leistungen" onClick={() => { setIsMobileMenuOpen(false); setActivePage('home'); }} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">Leistungen</a>
              <a href="#vorteile" onClick={() => { setIsMobileMenuOpen(false); setActivePage('home'); }} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">Vorteile</a>
              <a href="#faq" onClick={() => { setIsMobileMenuOpen(false); setActivePage('home'); }} className="block px-3 py-3 text-base font-medium text-surface-800 hover:bg-surface-50 rounded-md">FAQ</a>
              <a href="tel:+491754011720" className="mt-4 flex justify-center items-center w-full text-center bg-primary-900 text-white px-6 py-3 rounded-lg font-medium">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
              </a>
            </div>
          </motion.div>
        )}
      </header>

      {activePage === 'impressum' ? (
        <main className="max-w-4xl mx-auto px-4 py-20">
          <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="mb-8 text-primary-600 font-bold flex items-center hover:underline">
            &larr; Zurück zur Startseite
          </button>
          <h1 className="text-4xl font-display font-bold mb-8 text-surface-900">Impressum</h1>
          <div className="prose prose-lg text-surface-700 max-w-none">
            <p><strong>Angaben gemäß § 5 TMG</strong></p>
            <p>
              HausService Maier GmbH<br />
              Von-Haniel-Str. 7<br />
              85778 Haimhausen
            </p>
            <p>
              <strong>Handelsregister:</strong> HRB 261650<br />
              <strong>Registergericht:</strong> Amtsgericht München
            </p>
            <p>
              <strong>Vertreten durch:</strong><br />
              Stefan Maier, Thomas Maier
            </p>
            <p>
              <strong>USt - IdNr.:</strong> DE338437249
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Kontakt</h2>
            <p>
              <strong>E-Mail:</strong> info@hausservice-maier.de<br />
              <strong>Stefan Maier:</strong> 0151 41432890<br />
              <strong>Thomas Maier:</strong> 0175 4011720
            </p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Redaktionell Verantwortlicher:</h2>
            <p>Stefan Maier, Thomas Maier</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">EU-Streitschlichtung</h2>
            <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
            <p>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Haftung für Inhalte</h2>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Haftung für Links</h2>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">Urheberrecht</h2>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>
        </main>
      ) : activePage === 'datenschutz' ? (
        <main className="max-w-4xl mx-auto px-4 py-20">
          <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="mb-8 text-primary-600 font-bold flex items-center hover:underline">
            &larr; Zurück zur Startseite
          </button>
          <h1 className="text-4xl font-display font-bold mb-8 text-surface-900">Datenschutzerklärung</h1>
          <div className="prose prose-lg text-surface-700 max-w-none">
            <p>Hier folgt die Datenschutzerklärung der HausService Maier GmbH. (Bitte fügen Sie hier Ihren vollständigen Datenschutztext ein).</p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">1. Datenschutz auf einen Blick</h2>
            <p>Allgemeine Hinweise: Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen.</p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">2. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>Datenschutz: Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>
        </main>
      ) : activePage === 'agb' ? (
        <main className="max-w-4xl mx-auto px-4 py-20">
          <button onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="mb-8 text-primary-600 font-bold flex items-center hover:underline">
            &larr; Zurück zur Startseite
          </button>
          <h1 className="text-4xl font-display font-bold mb-8 text-surface-900">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <div className="prose prose-lg text-surface-700 max-w-none">
            <p>Hier folgen die Allgemeinen Geschäftsbedingungen der HausService Maier GmbH. (Bitte fügen Sie hier Ihren vollständigen AGB-Text ein).</p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">1. Geltungsbereich</h2>
            <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge, Lieferungen und sonstigen Leistungen der HausService Maier GmbH.</p>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-surface-900">2. Vertragsschluss</h2>
            <p>Unsere Angebote sind freibleibend und unverbindlich. Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung zustande.</p>
          </div>
        </main>
      ) : (
      <main>
        {/* Hero Section */}
        <section className="relative bg-surface-50 text-surface-900 overflow-hidden">
          {/* Background Pattern/Image Overlay */}
          <div className="absolute inset-0 opacity-100">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="Moderne Gewerbeimmobilie" 
              className="w-full h-full object-cover"
              fetchPriority="high"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30"></div>
          </div>

          {/* Adjusted padding: pt-10 pb-20 for mobile to remove empty space, lg:py-32 for desktop */}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 md:pt-20 md:pb-24 lg:py-32">
            <div className="max-w-3xl">
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={fadeUp} className="inline-flex items-center rounded-full px-4 py-1.5 bg-white/80 border border-surface-200 shadow-sm backdrop-blur-sm text-sm font-medium text-surface-800 mb-6 md:mb-8">
                  <ShieldCheck className="w-4 h-4 mr-2 text-accent-500" />
                  Ihr lokaler Partner in München & Umgebung
                </motion.div>
                
                <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-balance leading-[1.1] mb-6 text-surface-900">
                  Werterhalt für Ihre Immobilie seit 1994.
                </motion.h1>
                
                <motion.p variants={fadeUp} className="text-lg sm:text-xl md:text-2xl text-surface-600 mb-8 md:mb-10 text-balance max-w-2xl leading-relaxed">
                  HausService Maier GmbH bietet seit 1994 erstklassiges Facility Management. Professionelle Objektbetreuung, Grünanlagenpflege und Reinigung. Wir entlasten Eigentümer und Hausverwaltungen – zuverlässig, kompetent und regional.
                </motion.p>
                
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                  <a href="#kontakt" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-white bg-primary-900 hover:bg-primary-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    Kostenloses Angebot anfordern
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </a>
                  <a href="tel:+491754011720" className="inline-flex justify-center items-center px-8 py-4 text-base font-bold rounded-xl text-surface-900 bg-white hover:bg-surface-50 border border-surface-200 shadow-sm transition-all hover:-translate-y-1">
                    <Phone className="mr-2 w-5 h-5 text-primary-600" />
                    0175 4011720
                  </a>
                </motion.div>

                <motion.div variants={fadeUp} className="mt-10 md:mt-12 flex flex-wrap items-center gap-y-3 gap-x-6 text-sm font-medium text-surface-600">
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
              viewport={{ once: true, amount: 0.2 }}
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
              viewport={{ once: true, amount: 0.1 }}
              className="grid md:grid-cols-3 gap-8"
            >
              {/* Service 1 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img src="https://s1.directupload.eu/images/260306/fr7vru3s.jpg" alt="Mitarbeiter vor Maschinenanlage" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Hausmeisterservice</h4>
                  <p className="text-surface-600 mb-6 leading-relaxed">Technische Betreuung, Instandhaltung und regelmäßige Kontrollgänge für einen reibungslosen Betrieb Ihrer Immobilie.</p>
                  <ul className="space-y-2 text-surface-600 font-medium">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Kleinreparaturen</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Haustechnik-Kontrolle</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> 24/7 Notdienst-Koordination</li>
                  </ul>
                </div>
              </motion.div>

              {/* Service 2 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img src="https://s1.directupload.eu/images/260306/3u4a6wd3.jpg" alt="Treppenhausreinigung" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Gebäudereinigung</h4>
                  <p className="text-surface-600 mb-6 leading-relaxed">Strahlende Sauberkeit für Treppenhäuser, Büros und Tiefgaragen. Repräsentativ und hygienisch einwandfrei.</p>
                  <ul className="space-y-2 text-surface-600 font-medium">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Treppenhausreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Fenster- & Glasreinigung</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Tiefgaragenreinigung</li>
                  </ul>
                </div>
              </motion.div>

              {/* Service 3 */}
              <motion.div variants={fadeUp} className="bg-surface-50 rounded-2xl p-8 border border-surface-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
                <div className="relative z-10">
                  <div className="w-full h-48 mb-6 rounded-xl overflow-hidden">
                    <img src="https://s1.directupload.eu/images/260306/7yeu2rgl.jpg" alt="Winterdienstfahrzeug" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-surface-900 mb-3">Grünanlagen- & Winterdienst</h4>
                  <p className="text-surface-600 mb-6 leading-relaxed">Gepflegte Außenanlagen im Sommer und garantierte Sicherheit bei Schnee und Eis im Winter.</p>
                  <ul className="space-y-2 text-surface-600 font-medium">
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Rasenschnitt & Heckenpflege</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Unkrautbeseitigung</li>
                    <li className="flex items-start"><CheckCircle2 className="w-5 h-5 text-accent-500 mr-2 shrink-0" /> Zuverlässiger Räumdienst</li>
                  </ul>
                </div>
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
                viewport={{ once: true, amount: 0.3 }}
              >
                <motion.h2 variants={fadeRight} className="text-3xl md:text-4xl font-display font-bold mb-6">Warum Hausverwaltungen auf uns vertrauen.</motion.h2>
                <motion.p variants={fadeRight} className="text-primary-100 text-lg mb-8 leading-relaxed">
                  Seit über drei Jahrzehnten sind wir der verlässliche Partner für Immobilienbesitzer im Raum München und Umgebung. Wir verstehen, dass eine Immobilie nicht nur ein Gebäude, sondern ein wertvolles Asset ist, das kontinuierliche Pflege benötigt.
                </motion.p>
                
                <motion.div variants={fadeRight} className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-4xl font-display font-bold text-accent-400 mb-2">30+</div>
                    <div className="font-medium text-primary-100">Jahre Erfahrung in der Objektbetreuung</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-bold text-accent-400 mb-2">100%</div>
                    <div className="font-medium text-primary-100">Inhabergeführt & Regional verwurzelt</div>
                  </div>
                </motion.div>

                <motion.div variants={fadeRight}>
                  <a href="https://www.provenexpert.com/hausservice-maier-gmbh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl transition-colors border border-white/20">
                    <span className="font-bold">Bewerten Sie uns auf</span>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-5 h-5 text-[#00C853]" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                      <span className="font-bold text-white tracking-tight text-lg">Proven<span className="font-normal">Expert</span></span>
                    </div>
                  </a>
                </motion.div>
              </motion.div>
              
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeLeft}
                className="relative"
              >
                <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl bg-surface-800">
                  <motion.img 
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src="https://s1.directupload.eu/images/260306/uw3zz38x.jpg" 
                    alt="Die Geschäftsführer von HausService Maier GmbH" 
                    className="w-full h-full object-cover will-change-transform"
                    loading="lazy"
                    decoding="async"
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
              viewport={{ once: true, amount: 0.3 }}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-display font-bold text-surface-900 mb-4">Häufig gestellte Fragen</motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-surface-600">Transparente Antworten für eine vertrauensvolle Zusammenarbeit.</motion.p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-6"
            >
              {/* FAQ Item 1 */}
              <motion.div variants={fadeUp} className="bg-white rounded-2xl p-6 shadow-sm border border-surface-100 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-bold text-surface-900 mb-2">Für welche Objekte übernehmen Sie die Betreuung?</h3>
                <p className="text-surface-600">Wir betreuen Wohnanlagen (WEGs), Gewerbeimmobilien, Bürogebäude sowie private Mehrfamilienhäuser im Raum München und Umgebung.</p>
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
              viewport={{ once: true, amount: 0.2 }}
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
              viewport={{ once: true, amount: 0.1 }}
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
              <motion.div variants={fadeUp} className="md:col-span-2 lg:col-span-3 bg-surface-200 rounded-[2rem] h-[400px] md:h-[500px] relative overflow-hidden group">
                <iframe 
                  src="https://maps.google.com/maps?q=Von-Haniel-Stra%C3%9Fe%207,%2085778%20Haimhausen&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, filter: 'grayscale(100%) contrast(100%) opacity(80%)' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full transition-all duration-700 group-hover:filter-none group-hover:scale-105"
                ></iframe>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      )}

      {/* Footer */}
      <footer className="bg-[#050505] text-white pt-20 pb-8 border-t border-surface-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
            <div className="lg:col-span-2">
              <h3 className="text-white text-3xl md:text-4xl font-display font-bold mb-6">
                Bereit für den nächsten Schritt?
              </h3>
              <p className="text-white/90 text-lg mb-8 max-w-md leading-relaxed">
                Lassen Sie uns gemeinsam den Wert Ihrer Immobilie sichern. Kontaktieren Sie uns für ein unverbindliches Erstgespräch.
              </p>
              <a href="mailto:info@hausservice-maier.de" className="inline-flex items-center text-white font-bold text-xl group">
                info@hausservice-maier.de
                <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
              </a>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Navigation</h4>
              <ul className="space-y-4 text-sm font-medium text-white/90">
                <li><a href="#leistungen" onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Leistungen</a></li>
                <li><a href="#vorteile" onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Vorteile</a></li>
                <li><a href="#faq" onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#kontakt" onClick={() => { setActivePage('home'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Kontakt</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Social Media</h4>
              <ul className="space-y-4 text-sm font-medium text-white/90">
                <li><a href="https://www.facebook.com/HausServiceMaierGmbH" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> Facebook</a></li>
                <li><a href="https://www.instagram.com/hausservicemaier_gmbh/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg> Instagram</a></li>
                <li><a href="https://www.linkedin.com/checkpoint/challengesV2/AQExq4Lt5OjvIAAAAZzCCgPa8MM5rCwDIg5S355xFxg1FT4s0ca2B9J0ZptJgojRe-Zw5gtU4Kk7kbiMa7VNVy3cONs50dj2jg?ut=03zw7ACGV-RY81" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> LinkedIn</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-white/80">
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => { setActivePage('impressum'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Impressum</button>
              <button onClick={() => { setActivePage('datenschutz'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">Datenschutz</button>
              <button onClick={() => { setActivePage('agb'); window.scrollTo(0,0); }} className="hover:text-white transition-colors">AGB</button>
            </div>
            <p>&copy; {new Date().getFullYear()} HausService Maier GmbH.</p>
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
