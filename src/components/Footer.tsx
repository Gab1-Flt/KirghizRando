import { Mountain, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onLegalClick: (page: string) => void;
}

export default function Footer({ onLegalClick }: FooterProps) {
  return (
    <footer className="bg-forest-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Mountain className="h-8 w-8 text-sand-400" />
              <span className="font-serif text-xl font-bold">
                Kirghiz Rando Équestre
              </span>
            </div>
            <p className="text-sand-200 text-sm leading-relaxed">
              Votre spécialiste des randonnées équestres authentiques au
              Kirghizistan. Expéditions encadrées par des guides certifiés-expérimentés.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-sand-300">
              Liens Rapides
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('expeditions');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sand-200 hover:text-white transition"
                >
                  Nos Circuits
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('experience');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sand-200 hover:text-white transition"
                >
                  L'Expérience
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('carte');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sand-200 hover:text-white transition"
                >
                  Cartographie
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-sand-200 hover:text-white transition"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-sand-300">
              Informations Légales
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onLegalClick('mentions')}
                  className="text-sand-200 hover:text-white transition"
                >
                  Mentions Légales
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalClick('confidentialite')}
                  className="text-sand-200 hover:text-white transition"
                >
                  Politique de Confidentialité
                </button>
              </li>
              <li>
                <button
                  onClick={() => onLegalClick('cgv')}
                  className="text-sand-200 hover:text-white transition"
                >
                  Conditions Générales de Vente
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-sand-300">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-sand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-200">kirghizrandoequestre@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-sand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-200">+996 (0) 773 174 758</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-sand-400 flex-shrink-0 mt-0.5" />
                <span className="text-sand-200">
                  LLC «Cavalier»
                  <br />
                  233A, rue Ibraimov
                  <br />
                  Bichkek, 720011, Kirghizstan
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-sm text-sand-300">
          <p>
            © {new Date().getFullYear()} Kirghiz Rando Équestre. Tous droits
            réservés.
          </p>
          <p className="mt-2 text-xs text-sand-400">
            Licence d'État Kirghiz : 164566-3301-ЖЧК 29768897 ГРЮ №0036400
          </p>
        </div>
      </div>
    </footer>
  );
}
