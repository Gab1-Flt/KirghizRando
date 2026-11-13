import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Structure simple pour ajouter facilement des témoignages
// Pour ajouter un témoignage : ajoutez un objet avec name, location, rating, comment et date
const testimonials = [
    {
        name: 'Alexandre',
        location: 'Paris, France',
        rating: 5,
        comment: 'Vous ne pouvez pas venir au Kirghizistan sans passer par Nurlan et son agence ! Du début à la fin, le séjour a été une merveille ! Nurlan et son équipe nous ont accompagné et fait découvrir ce pays magnifique, en randonnée, à cheval et en minibus ! Des paysages somptueux, une population amicale et généreuse, en bref, un séjour que je n\'oublierai jamais ! Si vous devez voyager au Kirghizistan, c\'est avec Nurlan et son agence qu\'il faut le faire ! Hautement recommandé ! Merci encore Nurlan pour ton accueil et ta gentillesse !',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Pascal Jaillet',
        location: 'France',
        rating: 5,
        comment: 'Bien sûr, pour ses paysages d\'une beauté à couper le souffle, mais aussi, les sympathiques familles que nous avons rencontrées, les délicieux repas qu\'elles nous ont concoctés, les visites et activités prévues au programme. Nurlan nous a fait partager sa connaissance et sa passion du Kirghizstan, nous lui devons de merveilleux souvenirs et un voyage sans aucun problème. Merci, aussi, au chauffeur pour sa conduite assurée et son aide lors des pique-niques.',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Vanessa',
        location: 'France',
        rating: 5,
        comment: 'Nurlan, c\'était un pur bonheur de passer ce moment avec toi, je te remercie du fond du cœur, ce voyage était extraordinaire, et c\'est beaucoup grâce à toi. Ton engagement, ta bienveillance, ton humour, et ta bonté. Mille merci et compte sur moi pour aller dire beaucoup de bien de toi.',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Pascale',
        location: 'France',
        rating: 5,
        comment: 'J\'ai pas mal voyagé, mais vraiment ce séjour est ce que j\'ai vécu de plus extraordinaire, grâce à toi. Je t\'en remercie beaucoup, beaucoup...',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Christine',
        location: 'France',
        rating: 5,
        comment: 'Pays fantastique avec de très belles rencontres et surtout le meilleur guide qu\'on puisse espérer. Merci, mille merci pour cette parenthèse enchantée.',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Marie',
        location: 'France',
        rating: 5,
        comment: 'Merci de nous avoir fait partager tout amour pour ton pays et les amis authentiques. Un voyage inoubliable et délicieux...',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    },
    {
        name: 'Victoire',
        location: 'France',
        rating: 5,
        comment: 'Encore merci Nurlan pour ce voyage fantastique. Merci pour ta bonne humeur, ton attention, ton humour et ton professionnalisme. Découvrir ce magnifique pays proche des habitants était vraiment inoubliable. Bonne continuation à toi...',
        date: 'Janvier 2026',
        circuit: 'Randonnée équestre'
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(testimonials.length / itemsPerPage);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % totalPages);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    };

    const visibleTestimonials = testimonials.slice(
        currentIndex * itemsPerPage,
        currentIndex * itemsPerPage + itemsPerPage
    );

    return (
        <section id="temoignages" className="py-16 sm:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-800 mb-4">
                        Témoignages de nos Cavaliers
                    </h2>
                    <p className="text-lg text-forest-700 max-w-2xl mx-auto">
                        Découvrez les expériences vécues par nos voyageurs au Kirghizistan
                    </p>
                </div>

                <div className="relative">
                    {/* Carousel Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {visibleTestimonials.map((testimonial, index) => (
                            <div
                                key={currentIndex * itemsPerPage + index}
                                className="bg-sand-50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
                            >
                                <Quote className="absolute top-4 right-4 w-12 h-12 text-sand-300 opacity-50" />

                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                                    ))}
                                </div>

                                <p className="text-forest-700 mb-6 leading-relaxed italic">
                                    "{testimonial.comment}"
                                </p>

                                <div className="border-t border-sand-200 pt-4">
                                    <p className="font-semibold text-forest-800">{testimonial.name}</p>
                                    <p className="text-sm text-forest-600">{testimonial.location}</p>
                                    <div className="flex justify-between items-center mt-2">
                                        <p className="text-xs text-orange-600 font-medium">{testimonial.circuit}</p>
                                        <p className="text-xs text-forest-500">{testimonial.date}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows - Only show if more than 3 testimonials */}
                    {testimonials.length > itemsPerPage && (
                        <>
                            <button
                                onClick={prevSlide}
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white hover:bg-sand-50 p-3 rounded-full shadow-lg transition z-10"
                                aria-label="Témoignages précédents"
                            >
                                <ChevronLeft className="w-6 h-6 text-forest-800" />
                            </button>

                            <button
                                onClick={nextSlide}
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white hover:bg-sand-50 p-3 rounded-full shadow-lg transition z-10"
                                aria-label="Témoignages suivants"
                            >
                                <ChevronRight className="w-6 h-6 text-forest-800" />
                            </button>

                            {/* Pagination Dots */}
                            <div className="flex justify-center gap-2 mt-8">
                                {[...Array(totalPages)].map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentIndex(index)}
                                        className={`w-2 h-2 rounded-full transition ${index === currentIndex ? 'bg-orange-500 w-8' : 'bg-sand-300'
                                            }`}
                                        aria-label={`Aller à la page ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="text-center mt-12">
                    <p className="text-forest-600 mb-4">
                        Vous aussi, partagez votre expérience avec nous !
                    </p>
                    <button
                        onClick={() => {
                            const el = document.getElementById('contact');
                            el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition shadow-lg hover:shadow-xl hover:scale-105 transform"
                    >
                        Nous contacter
                    </button>
                </div>
            </div>
        </section>
    );
}
