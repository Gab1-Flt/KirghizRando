import { MessageCircle, Mail, Clock } from 'lucide-react';

export default function ContactForm() {
  const contactMethods = [
    {
      icon: <MessageCircle className="h-8 w-8 text-white" />,
      title: "WhatsApp",
      value: "+996 (0) 773 174 758",
      description: "Idéal pour une réponse rapide et l'envoi de documents.",
      link: "https://wa.me/996773174758",
      color: "bg-green-500",
      hover: "hover:bg-green-50"
    },
    {
      icon: <Mail className="h-8 w-8 text-white" />,
      title: "Email",
      value: "kirghizrandoequestre@gmail.com",
      description: "Pour vos demandes de devis personnalisés détaillés.",
      link: "mailto:kirghizrandoequestre@gmail.com",
      color: "bg-orange-500",
      hover: "hover:bg-orange-50"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-4">
            Prêt pour l'aventure ?
          </h2>
          <p className="text-lg text-forest-600 max-w-2xl mx-auto">
            Pas de formulaires complexes. Contactez-nous directement pour organiser votre expédition équestre sur mesure au Kirghizistan.
          </p>
        </div>

        {/* Cartes de Contact */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={index}
              href={method.link}
              className={`group p-8 rounded-2xl border border-sand-200 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl ${method.hover}`}
            >
              <div className={`${method.color} w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                {method.icon}
              </div>
              <h3 className="text-2xl font-bold text-forest-800 mb-2">{method.title}</h3>
              <p className="text-xl font-semibold text-forest-700 mb-3">{method.value}</p>
              <p className="text-forest-600 text-sm leading-relaxed">{method.description}</p>
            </a>
          ))}
        </div>

        {/* Google Map */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl h-96 border border-sand-200">
          <iframe
            src="https://maps.google.com/maps?q=233+A+Ibraimov+Bichkek+720011+Kirghizstan&t=&z=12&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="233 A, Ibraimov, Bichkek, Kirghizistan"
          ></iframe>
        </div>

        {/* Panneau d'informations de confiance */}
        <div className="bg-forest-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Conditions de réservation - Pleine largeur */}
          <div className="bg-sand-100 p-8 md:p-12" id="booking-conditions">
            <h3 className="text-2xl font-bold text-forest-800 mb-6">Conditions de réservation</h3>
            <ul className="space-y-4 text-forest-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Acompte de 30% à la réservation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Solde 30 jours avant le départ
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Annulation gratuite jusqu'à 60 jours
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                Assurance rapatriement incluse
              </li>
            </ul>
            <div className="mt-8 pt-8 border-t border-sand-300">
              <p className="text-sm text-forest-600 italic">
                Note : Toutes nos expéditions sont encadrées par un guide certifié et respectent les traditions locales kirghizes.
              </p>
            </div>
          </div>

          {/* Réactivité - Pleine largeur en dessous */}
          <div className="bg-forest-800 p-6 md:p-8">
            <div className="flex items-center justify-center gap-3 text-white">
              <Clock className="h-5 w-5 text-orange-400" />
              <p className="text-sm">
                <span className="font-semibold">Réponse sous 24h</span> - Notre équipe locale et française vous accompagne.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}