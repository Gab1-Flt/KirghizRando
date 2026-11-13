import { ShieldCheck, Compass, Mountain, User } from 'lucide-react';

export default function NomadicExperience() {
  const features = [
    {
      icon: Mountain,
      title: 'Paysages Époustouflants',
      description:
        'Traversez des panoramas grandioses, des sommets du Tian Shan aux vallées verdoyantes. Une immersion totale dans une nature sauvage et préservée.',
    },
    {
      icon: ShieldCheck,
      title: 'Cavalerie Locale',
      description:
        'Chevaux robustes et dociles, parfaitement adaptés au terrain montagneux. Chaque monture est soigneusement sélectionnée pour votre sécurité.',
    },
    {
      icon: Compass,
      title: 'Une Aventure Unique',
      description:
        'Sortez des sentiers battus pour vivre une odyssée inoubliable. Chaque jour est une nouvelle exploration, riche en découvertes et en émotions.',
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-6">
              L'Expérience Nomade Authentique
            </h2>
            <p className="text-lg text-forest-600 mb-8 leading-relaxed">
              Au Kirghizistan, chaque randonnée équestre est une immersion totale
              dans un mode de vie millénaire. Nous vous offrons bien plus qu'un
              simple trek : c'est une rencontre profonde avec une culture vivante,
              généreuse et préservée.
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0">
                    <div className="bg-forest-100 rounded-lg p-3">
                      <feature.icon className="h-6 w-6 text-forest-700" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-forest-800 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-forest-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/experience/experience-1.jpg"
                  alt="Yourte traditionnelle blanche dans un paysage de montagne vert"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/experience/experience-2.jpg"
                  alt="Troupeau de chevaux kirghizes pâturant dans une vallée"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="h-48 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/experience/experience-3.jpg"
                  alt="Paysage de lac de montagne avec sommets enneigés et nuages"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="/images/experience/experience-4.jpg"
                  alt="Scène de vie de la culture nomade kirghize"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Section Votre Guide */}
        <div className="bg-gradient-to-br from-orange-50 to-sand-50 rounded-3xl p-8 md:p-12 shadow-xl border border-orange-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-orange-500 p-3 rounded-xl">
              <User className="h-6 w-6 text-white" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-forest-800">
              Votre Guide
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Photo du guide */}
            <div className="lg:col-span-1">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/image-guide.jpg"
                    alt="Nurlan Akparaliev, guide touristique"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white px-6 py-3 rounded-xl shadow-lg">
                  <p className="font-bold text-sm">Guide Certifié</p>
                </div>
              </div>
            </div>

            {/* Biographie */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-forest-800 mb-2">
                NURLAN AKPARALIEV
              </h3>
              <p className="text-orange-600 font-semibold mb-6">
                Organisateur des voyages
              </p>

              <div className="space-y-4 text-forest-700 leading-relaxed">
                <p>
                  De 2008 à 2013, Nurlan a étudié à la faculté des langues étrangères de Bichkek pour devenir professeur de français. Parallèlement à ses études, il a suivi une formation de guide-accompagnateur au Kirghizistan.
                </p>
                <p>
                  De 2013 à 2014, Nurlan a enseigné le français dans une école à Toktogoul.
                </p>
                <p>
                  De 2011 à 2016, il a travaillé pour l'association <strong>« Tengri »</strong> comme guide-interprète. Son excellente maîtrise de l'équitation et sa grande connaissance de son pays lui permettent d'organiser des voyages en dehors des sentiers battus.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-forest-700 shadow">
                  🇫🇷 Français courant
                </span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-forest-700 shadow">
                  🐎 Expert équitation
                </span>
                <span className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-forest-700 shadow">
                  🗺️ Guide certifié
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
