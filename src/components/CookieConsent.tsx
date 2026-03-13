import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Shield, X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      setHasConsented(true);
    }
  }, []);

  const handleAcceptAll = () => {
    setIsAccepted(true);
    // Wait for the light and pop-up animation to finish before closing
    setTimeout(() => {
      localStorage.setItem('cookie-consent', 'all');
      setIsVisible(false);
      setHasConsented(true);
      // Reset after it's hidden so it's ready if reopened
      setTimeout(() => setIsAccepted(false), 1500);
    }, 1200);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
    setHasConsented(true);
  };

  const openSettings = () => {
    setIsVisible(true);
  };

  return (
    <>
      {/* Floating Reopen Button (visible when banner is closed) */}
      <AnimatePresence>
        {!isVisible && hasConsented && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, x: -50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -50 }}
            onClick={openSettings}
            className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-[90] bg-white/80 backdrop-blur-md border border-cyan-100 shadow-[0_4px_14px_rgba(8,145,178,0.15)] p-3 rounded-full text-cyan-700 hover:bg-cyan-50 hover:scale-110 transition-all duration-300"
            aria-label="Cookie Einstellungen öffnen"
            title="Cookie Einstellungen"
          >
            <Shield className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95, transition: { duration: 1.2, ease: "easeInOut" } }}
            transition={{ duration: 0.6, type: 'spring', bounce: 0.3 }}
            className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-[100] w-[calc(100%-2rem)] sm:w-[500px]"
          >
            {/* Subtle cyan-blue glow effect behind the banner */}
            <div className="absolute inset-0 -z-10 bg-cyan-400/30 blur-[60px] rounded-full transform translate-y-10"></div>

            {/* Glassmorphism Container */}
            <div className="relative bg-white/70 backdrop-blur-2xl border border-white/60 shadow-[0_8px_32px_rgba(0,150,255,0.15)] rounded-3xl p-6 sm:p-8 overflow-hidden">
              
              {/* Close Button */}
              <button 
                onClick={handleDecline}
                disabled={isAccepted}
                className="absolute top-4 right-4 z-50 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100/50 rounded-full transition-colors disabled:opacity-50"
                aria-label="Schließen"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Glossy reflection highlight */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-80"></div>
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

              {/* 3D Isometric House Illustration */}
              <motion.div 
                className="relative w-full flex justify-center -mt-16 mb-4 drop-shadow-2xl pointer-events-none"
                animate={isAccepted ? { y: [0, -25, 0], scale: [1, 1.15, 1] } : { y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3, type: "spring", bounce: 0.5 }}
              >
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
                  <motion.path 
                    d="M35 63 L45 68 L45 76 L35 71 Z" 
                    initial={{ fill: "#1e293b" }}
                    animate={{ fill: isAccepted ? "#FFEA00" : "#1e293b" }}
                    filter={isAccepted ? "url(#warm-glow)" : undefined}
                    transition={{ duration: 0.3 }}
                  />
                  {/* Glowing Window Right */}
                  <motion.path 
                    d="M85 63 L75 68 L75 76 L85 71 Z" 
                    initial={{ fill: "#1e293b" }}
                    animate={{ fill: isAccepted ? "#FFD700" : "#1e293b" }}
                    filter={isAccepted ? "url(#warm-glow)" : undefined}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Door */}
                  <path d="M65 82 L75 77 L75 90 L65 95 Z" fill="#0ea5e9" />
                  {/* Door handle */}
                  <circle cx="68" cy="87" r="1.5" fill="#ffffff" />
                </svg>
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-slate-800 mb-3 text-center">
                  Ihr digitales Zuhause zählt
                </h3>
                
                <p className="text-slate-600 text-sm leading-relaxed mb-8 text-center">
                  Wir verwenden Cookies, um sicherzustellen, dass Ihr Erlebnis auf unserer Website genauso gepflegt und einladend ist wie Ihr Zuhause. Diese helfen uns, unsere Services zu personalisieren und die Leistung zu optimieren.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button 
                    onClick={handleAcceptAll}
                    disabled={isAccepted}
                    className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-[0_4px_14px_rgba(8,145,178,0.3)] hover:shadow-[0_6px_20px_rgba(8,145,178,0.4)] hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-80 disabled:hover:translate-y-0"
                  >
                    <Check className="w-5 h-5" /> Alle akzeptieren
                  </button>
                  <button 
                    onClick={handleDecline}
                    disabled={isAccepted}
                    className="flex-1 bg-transparent border-2 border-slate-300 text-slate-600 hover:bg-slate-50 hover:border-slate-400 font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <X className="w-5 h-5" /> Ablehnen
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
