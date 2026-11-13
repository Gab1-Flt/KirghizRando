import { useState } from 'react';
import { Calendar, Info, Mountain } from 'lucide-react';
import ExpeditionModal from './ExpeditionModal';
import { getExpeditionsWithCoords } from '../data/expeditionsData';

export default function Expeditions() {
  const [selectedExpedition, setSelectedExpedition] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const expeditions = getExpeditionsWithCoords();

  const openDetails = (exp: any) => {
    setSelectedExpedition(exp);
    setIsModalOpen(true);
  };

  return (
    <section id="expeditions" className="py-24 bg-sand-50">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <h2 className="font-serif text-5xl font-bold text-forest-800">Nos Expéditions</h2>
          <div className="text-orange-600 font-bold border-b-2 border-orange-500 pb-1 flex items-center">
            <Mountain className="mr-2 h-5 w-5" /> {expeditions.length} Parcours
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {expeditions.map((circuit) => (
            <div key={circuit.id} className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-sand-200">
              <div className="relative h-64 overflow-hidden">
                <img src={circuit.image} alt={`Randonnée équestre : ${circuit.title}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 transform-gpu" />
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-full z-10">
                  <span className={`font-bold text-xs uppercase tracking-widest ${circuit.difficultyColor}`}>{circuit.difficulty}</span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-3xl font-bold text-forest-800 mb-4">{circuit.title}</h3>
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-sand-100">
                  <div className="flex items-center text-forest-600 font-medium">
                    <Calendar className="h-5 w-5 mr-2 text-orange-500" /> {circuit.duration}
                  </div>
                  {/* Prix masqué - Pour réafficher, décommentez les lignes ci-dessous */}
                  {/* <div className="flex items-center font-bold text-forest-800 text-lg">
                    {circuit.price} <Euro className="h-5 w-5 ml-1 text-forest-400" />
                  </div> */}
                </div>
                <div className="space-y-3">
                  <button onClick={() => openDetails(circuit)} className="w-full bg-forest-800 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center group-hover:bg-orange-500 shadow-lg">
                    <Info className="h-5 w-5 mr-2" /> En savoir plus
                  </button>
                  <a
                    href={circuit.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-bold transition-all flex items-center justify-center shadow-lg"
                  >
                    <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Télécharger le programme (PDF)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <ExpeditionModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} expedition={selectedExpedition} />
    </section>
  );
}