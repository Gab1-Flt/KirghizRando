import { Tent, Mountain, Eye, Sun, Users, Activity, Compass } from 'lucide-react';
import { useState } from 'react';
import { getExpeditionsWithCoords } from '../data/expeditionsData';

export default function InteractiveMap() {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const expeditions = getExpeditionsWithCoords();

  // Route path removed to prevent crossing lines

  return (
    <section id="map" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-5xl font-bold text-forest-800 mb-4">Cartographie Interactive</h2>
          <p className="text-xl text-forest-600">Explorez nos itinéraires à travers les Monts Célestes.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-sand-200 relative">

          <div className="relative w-full aspect-[16/9] bg-[#eef0e5]">

            {/* Panneau Latéral Flottant */}
            <div className={`absolute top-8 left-8 z-20 w-80 transition-all duration-500 transform pointer-events-none ${hoveredLocation ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-2xl border border-sand-200">
                {hoveredLocation && (() => {
                  const exp = expeditions.find(e => e.id === hoveredLocation);
                  return exp ? (
                    <>
                      <h3 className="font-serif text-2xl font-bold text-forest-800 mb-2">{exp.title}</h3>
                      <p className="text-forest-600 mb-4 text-sm leading-relaxed">{exp.description}</p>
                      <div className="flex items-center text-orange-600 text-sm font-bold">
                        <Compass className="h-4 w-4 mr-2" />
                        {exp.duration} • {exp.difficulty}
                      </div>
                    </>
                  ) : null;
                })()}
              </div>
            </div>

            <svg viewBox="0 0 100 60" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#2d5f2d', stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: '#4a7c4a', stopOpacity: 0.7 }} />
                </linearGradient>
              </defs>

              {/* Tracé des montagnes */}
              <path
                d="M5,55 L15,20 L25,35 L35,15 L45,25 L55,10 L65,20 L75,15 L85,25 L95,30 L95,55 Z"
                fill="url(#mountainGradient)"
                opacity="0.3"
              />

              {/* Lignes pointillées - Chemins individuels pour éviter les croisements */}
              {expeditions.length > 1 && (
                <>
                  {/* Chemin 1: Point 1 -> Point 2 */}
                  {expeditions[0] && expeditions[1] && (
                    <path
                      d={`M ${expeditions[0].mapX},${expeditions[0].mapY} L ${expeditions[1].mapX},${expeditions[1].mapY}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      className="animate-pulse"
                    />
                  )}
                  {/* Chemin 2: Point 2 -> Point 4 */}
                  {expeditions[1] && expeditions[3] && (
                    <path
                      d={`M ${expeditions[1].mapX},${expeditions[1].mapY} L ${expeditions[3].mapX},${expeditions[3].mapY}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      className="animate-pulse"
                    />
                  )}
                  {/* Chemin 3: Point 1 -> Point 3 */}
                  {expeditions[0] && expeditions[2] && (
                    <path
                      d={`M ${expeditions[0].mapX},${expeditions[0].mapY} L ${expeditions[2].mapX},${expeditions[2].mapY}`}
                      fill="none"
                      stroke="#fbbf24"
                      strokeWidth="0.5"
                      strokeDasharray="2 2"
                      className="animate-pulse"
                    />
                  )}
                </>
              )}

              {expeditions.map((exp) => (
                <g
                  key={exp.id}
                  onMouseEnter={() => setHoveredLocation(exp.id)}
                  onMouseLeave={() => setHoveredLocation(null)}
                  className="cursor-pointer"
                >
                  {/* Zone de détection élargie pour faciliter le survol */}
                  <circle cx={exp.mapX} cy={exp.mapY} r="5" fill="transparent" />

                  {/* Point visible */}
                  <circle
                    cx={exp.mapX}
                    cy={exp.mapY}
                    r="1.8"
                    fill={hoveredLocation === exp.id ? '#f97316' : '#166534'}
                    stroke="white"
                    strokeWidth="0.5"
                    className="transition-colors duration-300"
                  />

                  {/* Effet Pulse */}
                  {hoveredLocation === exp.id && (
                    <circle cx={exp.mapX} cy={exp.mapY} r="1.8" fill="#f97316" opacity="0.6">
                      <animate attributeName="r" from="1.8" to="6" dur="1.5s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                    </circle>
                  )}
                </g>
              ))}
            </svg>
          </div>

          {/* Section Info & Légende */}
          <div className="bg-forest-900 text-white p-8 md:p-12">

            {/* Statistiques */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 pb-10 border-b border-forest-700">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Activity className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sand-300 text-xs uppercase tracking-wider font-bold mb-1">Altitude Moyenne</p>
                  <p className="text-2xl font-bold font-serif">3000m</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Users className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sand-300 text-xs uppercase tracking-wider font-bold mb-1">Population Nomade</p>
                  <p className="text-2xl font-bold font-serif">+ de 20% <span className="text-sm font-sans font-normal text-sand-400">en été</span></p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/10 rounded-xl">
                  <Sun className="h-6 w-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-sand-300 text-xs uppercase tracking-wider font-bold mb-1">Météo</p>
                  <p className="text-2xl font-bold font-serif">300 jours <span className="text-sm font-sans font-normal text-sand-400">de soleil/an</span></p>
                </div>
              </div>
            </div>

            {/* Légende supprimée */}

          </div>
        </div>
      </div>
    </section>
  );
}