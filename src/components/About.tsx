import { Heart, Mountain, Users, Sparkles } from 'lucide-react';

export default function About() {
    return (
        <section id="about" className="py-20 bg-gradient-to-br from-sand-50 via-white to-orange-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* En-tête avec icône */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                        <Heart className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-forest-800 mb-4">
                        Notre Histoire
                    </h2>
                    <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full"></div>
                </div>

                {/* Contenu principal */}
                <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-sand-100">
                    <div className="prose prose-lg max-w-none">
                        <p className="text-lg text-forest-700 leading-relaxed mb-6">
                            Nous sommes une <strong className="text-forest-800">agence de voyage locale</strong> créée au Kirghizistan en <strong className="text-orange-600">2016</strong>.
                            Avec une expérience de plus de <strong className="text-orange-600">15 ans</strong> dans l'accompagnement de groupes
                            dans tout le pays. Nous sommes spécialisés dans l'organisation de
                            randonnées équestres, treks et voyages en famille.
                        </p>

                        <p className="text-lg text-forest-700 leading-relaxed mb-6">
                            Notre agence vous fera découvrir la vie et les traditions des nomades dans
                            des paysages d'une infinie beauté. Nos montagnes à perte de vue, lacs
                            d'altitude, parcs nationaux riches d'une faune et d'une flore remarquables,
                            steppes sans fin... resteront à jamais gravés dans vos mémoires.
                        </p>

                        <p className="text-lg text-forest-700 leading-relaxed mb-8">
                            <strong className="text-forest-800">Choisissez la durée de votre séjour et la date de votre départ.</strong> Nous nous
                            occupons du reste.
                        </p>

                        {/* Objectifs avec icônes */}
                        <div className="bg-gradient-to-br from-orange-50 to-sand-50 rounded-2xl p-6 md:p-8 mb-8 border border-orange-100">
                            <h3 className="font-serif text-2xl font-bold text-forest-800 mb-6 flex items-center">
                                <Sparkles className="w-6 h-6 text-orange-500 mr-3" />
                                Nos Principaux Objectifs
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <Mountain className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-forest-700 font-medium">Promouvoir l'éco-tourisme</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                                        <Users className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-forest-700 font-medium">Les traditions équestres des nomades</p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3">
                                    <div className="flex-shrink-0 w-10 h-10 bg-forest-600 rounded-full flex items-center justify-center">
                                        <Sparkles className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-forest-700 font-medium">L'artisanat kirghiz</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Citation finale */}
                        <div className="text-center">
                            <p className="text-2xl font-serif font-bold text-forest-800 italic">
                                "Une autre façon de voyager, c'est avec nous !"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
