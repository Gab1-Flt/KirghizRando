import { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expéditions', href: '#expeditions' },
    { name: 'Expérience', href: '#experience' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Témoignages', href: '#temoignages' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'
        }`}
    >
      {/* L'astuce pour coller au bord : 
          - On enlève "max-w-7xl"
          - On met "w-full"
          - On utilise "px-4 md:px-10" pour garder juste un petit filet de sécurité
      */}
      <div className="w-full px-4 md:px-10">
        <div className="flex justify-between items-center">

          {/* LOGO - COLLÉ À GAUCHE */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-3">
              <img
                src="/images/logo.jpg"
                alt="Logo Kirghiz Rando"
                className="h-10 w-auto rounded-full object-cover border-2 border-white/20"
              />
              <div className="flex flex-col">
                <span className={`text-2xl font-serif font-bold leading-none tracking-tight ${isScrolled ? 'text-forest-800' : 'text-white'}`}>
                  KIRGHIZ
                </span>
                <span className={`text-[10px] tracking-[0.3em] font-bold uppercase ${isScrolled ? 'text-orange-600' : 'text-orange-400'}`}>
                  Rando Équestre
                </span>
              </div>
            </a>
          </div>

          {/* MENU ET BOUTON - COLLÉS À DROITE */}
          <div className="hidden md:flex items-center gap-10">
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    const element = document.querySelector(link.href);
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-orange-500 transition-colors ${isScrolled ? 'text-forest-700' : 'text-white'
                    }`}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => {
                const element = document.querySelector('#contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-sm font-bold transition-all flex items-center shadow-lg"
            >
              NOUS CONTACTER
              <ChevronRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          {/* MENU MOBILE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? 'text-forest-800' : 'text-white'}
              aria-label={isMobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white w-full absolute top-full left-0 border-t border-sand-100 shadow-xl py-6 px-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => {
                const element = document.querySelector(link.href);
                element?.scrollIntoView({ behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left py-4 text-xl font-bold text-forest-800 border-b border-sand-50"
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => {
              const element = document.querySelector('#contact');
              element?.scrollIntoView({ behavior: 'smooth' });
              setIsMobileMenuOpen(false);
            }}
            className="block mt-6 w-full bg-orange-500 text-white py-4 rounded-xl text-center font-bold"
          >
            NOUS CONTACTER
          </button>
        </div>
      )}
    </nav>
  );
}