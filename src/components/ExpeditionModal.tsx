import { X, Calendar, TrendingUp, CheckCircle2, MapPin } from 'lucide-react';

interface ExpeditionModalProps {
  isOpen: boolean;
  onClose: () => void;
  expedition: any;
}

export default function ExpeditionModal({ isOpen, onClose, expedition }: ExpeditionModalProps) {
  if (!isOpen || !expedition) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-forest-900/90 backdrop-blur-md">
      <div className="bg-white rounded-[2rem] max-w-5xl w-full max-h-[95vh] overflow-y-auto shadow-2xl animate-fade-in">
        <div className="relative h-80 w-full">
          <img src={expedition.image} alt={expedition.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button onClick={onClose} className="absolute top-6 right-6 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full z-20 transition-all" aria-label="Fermer">
            <X className="h-6 w-6" />
          </button>
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="font-serif text-4xl md:text-5xl font-bold">{expedition.title}</h3>
          </div>
        </div>

        <div className="p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h4 className="text-xl font-bold text-forest-800 mb-4 flex items-center">
                  <MapPin className="mr-2 text-orange-500" /> Présentation
                </h4>
                <p className="text-forest-800 font-semibold text-lg mb-4 italic border-l-4 border-orange-500 pl-4">
                  {expedition.description}
                </p>
                <p className="text-forest-600 leading-relaxed text-lg whitespace-pre-line">
                  {expedition.longDescription}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {expedition.gallery?.map((img: string, i: number) => (
                  <img key={i} src={img} className="w-full aspect-video object-cover rounded-2xl shadow-md" alt={`Vue de l'expédition ${expedition.title} - Image ${i + 1}`} />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-sand-50 rounded-3xl p-6 border border-sand-200">
                {/* Prix masqué - Pour réafficher, décommentez les lignes ci-dessous */}
                {/* <div className="mb-6 text-center lg:text-left">
                  <span className="text-sm uppercase tracking-widest text-forest-500 font-bold">Prix indicatif</span>
                  <div className="flex items-center justify-center lg:justify-start text-3xl font-bold text-forest-800">
                    <Euro className="h-7 w-7 mr-1 text-orange-600" /> {expedition.price}
                  </div>
                </div> */}
                <div className="space-y-4 mb-8">
                  {/* Durée mise en avant */}
                  <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                    <div className="text-center">
                      <span className="text-sm uppercase tracking-widest text-orange-700 font-bold block mb-2">Durée</span>
                      <div className="flex items-center justify-center text-2xl font-bold text-orange-600">
                        <Calendar className="h-6 w-6 mr-2" /> {expedition.duration}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center text-forest-700 font-medium">
                    <TrendingUp className="h-5 w-5 mr-3 text-orange-500" /> Niveau {expedition.difficulty}
                  </div>
                </div>
                <h4 className="font-bold text-forest-800 mb-4 border-t border-sand-200 pt-4">Inclus :</h4>
                <ul className="space-y-3">
                  {['Guide local', 'Chevaux', 'Pension complète'].map(x => (
                    <li key={x} className="flex items-center text-sm text-forest-600">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" /> {x}
                    </li>
                  ))}
                </ul>
              </div>
              <button onClick={onClose} className="w-full bg-forest-800 text-white py-4 rounded-2xl font-bold hover:bg-forest-700 transition">
                Fermer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}