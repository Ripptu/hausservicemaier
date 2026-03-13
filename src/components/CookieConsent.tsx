import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Settings, Check } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      // Slight delay to let the user see the page first before the banner pops up
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.3 } }}
          transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
          className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] w-[calc(100%-2rem)] sm:w-[500px]"
        >
          {/* Subtle cyan-blue glow effect behind the banner */}
          <div className="absolute inset-0 -z-10 bg-cyan-400/30 blur-[60px] rounded-full transform translate-y-10"></div>

          {/* Glassmorphism Container */}
          <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,150,255,0.15)] rounded-3xl p-6 sm:p-8 overflow-hidden">
            
            {/* Glossy reflection highlight */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

            {/* 3D Isometric House Illustration */}
            <div className="relative w-full flex justify-center -mt-16 mb-4 drop-shadow-2xl pointer-events-none">
              <svg width="140" height="140" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <filter id="warm-glow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="roof-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0284c7" />
                  </linearGradient>
                </defs>
                {/* Isometric Roof */}
                <path d="M60 25 L100 45 L60 65 L20 45 Z" fill="url(#roof-grad)" />
                <path d="M20 45 L60 65 L60 70 L20 50 Z" fill="#0369a1" />
                <path d="M100 45 L60 65 L60 70 L100 50 Z" fill="#075985" />
                {/* Walls */}
                <path d="M25 52 L55 67 L55 95 L25 80 Z" fill="#ffffff" />
                <path d="M95 52 L65 67 L65 95 L95 80 Z" fill="#f1f5f9" />
                {/* Glowing Window Left */}
                <path d="M35 63 L45 68 L45 76 L35 71 Z" fill="#fef08a" filter="url(#warm-glow)" />
                {/* Glowing Window Right */}
                <path d="M85 63 L75 68 L75 76 L85 71 Z" fill="#fde047" filter="url(#warm-glow)" />
                {/* Door */}
                <path d="M65 82 L75 77 L75 90 L65 95 Z" fill="#0ea5e9" />
                {/* Door handle */}
                <circle cx="68" cy="87" r="1.5" fill="#ffffff" />
              </svg>
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display font-bold text-slate-800 mb-3 text-center">
                Ihr digitales Zuhause zählt
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-8 text-center">
                Wir verwenden Cookies, um sicherzustellen, dass Ihr Erlebnis auf unserer Website genauso gepflegt und einladend ist wie Ihr Zuhause. Diese helfen uns, unsere Services zu personalisieren und die Leistung zu optimieren.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => handleAccept('all')}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(8,145,178,0.3)] hover:shadow-[0_6px_20px_rgba(8,145,178,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  <Check className="w-5 h-5" /> Alle Services akzeptieren
                </button>
                <button 
                  onClick={() => setShowSettings(!showSettings)}
                  className="flex-1 bg-transparent border-2 border-cyan-500 text-cyan-700 hover:bg-cyan-50 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Settings className="w-5 h-5" /> Einstellungen anpassen
                </button>
              </div>

              {/* Expandable Settings */}
              <AnimatePresence>
                {showSettings && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-6 mt-6 border-t border-slate-200/60 space-y-4">
                      <div className="flex items-center justify-between group bg-white/50 p-3 rounded-lg border border-white/60">
                        <div>
                          <span className="text-sm font-bold text-slate-800 block">Essenziell</span>
                          <span className="text-xs text-slate-500">Für die Grundfunktion der Seite</span>
                        </div>
                        <div className="w-10 h-5 bg-cyan-600 rounded-full relative shadow-inner">
                          <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between group opacity-60 bg-white/30 p-3 rounded-lg border border-white/40">
                        <div>
                          <span className="text-sm font-bold text-slate-800 block">Analyse & Statistik</span>
                          <span className="text-xs text-slate-500">Helfen uns, die Seite zu verbessern</span>
                        </div>
                        <div className="w-10 h-5 bg-slate-300 rounded-full relative shadow-inner cursor-not-allowed">
                          <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
