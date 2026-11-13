import { useState, useEffect } from 'react';
import { Cookie, X } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('cookieConsent', 'all');
    setIsVisible(false);
  };

  const acceptEssential = () => {
    localStorage.setItem('cookieConsent', 'essential');
    setIsVisible(false);
  };

  const dismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl border border-sand-200 p-6 md:flex md:items-center md:justify-between">
          <div className="flex items-start space-x-4 mb-4 md:mb-0 md:flex-1">
            <Cookie className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-forest-800 mb-1">
                Gestion des Cookies
              </h3>
              <p className="text-sm text-forest-600 leading-relaxed">
                Nous utilisons des cookies pour améliorer votre expérience de
                navigation et analyser notre trafic. En cliquant sur "Tout
                accepter", vous consentez à l'utilisation de tous les cookies.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:ml-4">
            <button
              onClick={acceptEssential}
              className="px-5 py-2.5 border border-forest-600 text-forest-700 rounded-lg hover:bg-forest-50 transition text-sm font-medium whitespace-nowrap"
            >
              Essentiels uniquement
            </button>
            <button
              onClick={acceptAll}
              className="px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition text-sm font-medium whitespace-nowrap"
            >
              Tout accepter
            </button>
            <button
              onClick={dismiss}
              className="p-2.5 text-forest-600 hover:bg-forest-50 rounded-lg transition"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
