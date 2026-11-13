import { Info, X, FileText } from 'lucide-react';
import { useState } from 'react';

export default function BookingInfo() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) {
        return (
            <button
                onClick={() => setIsVisible(true)}
                className="fixed bottom-24 right-6 bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-2xl z-[60] transition transform hover:scale-110"
                title="Afficher les conditions de réservation"
            >
                <FileText className="w-6 h-6" />
            </button>
        );
    }

    return (
        <div className="bg-orange-50 border-l-4 border-orange-500 py-4 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-start gap-4">
                    <Info className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                        <h3 className="font-semibold text-forest-800 mb-2">
                            Conditions de réservation
                        </h3>
                        <div className="text-sm text-forest-700 space-y-1">
                            <p>
                                <strong>Réservation :</strong> Acompte de 30% à verser sur notre compte KICB au Kirghizistan. Le solde en liquide avant le début du voyage.
                            </p>
                            <p>
                                <strong>Annulation :</strong> Montants retenus sur l'acompte : 20% si &gt;30 jours, 50% si 7-30 jours, 100% si &lt;7 jours.
                            </p>
                            <button
                                onClick={() => {
                                    const el = document.getElementById('booking-conditions');
                                    el?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="text-orange-600 hover:text-orange-700 font-medium underline mt-1"
                            >
                                Voir les conditions complètes
                            </button>
                        </div>
                    </div>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-orange-100 rounded transition"
                        aria-label="Fermer"
                    >
                        <X className="w-5 h-5 text-forest-600" />
                    </button>
                </div>
            </div>
        </div>
    );
}
