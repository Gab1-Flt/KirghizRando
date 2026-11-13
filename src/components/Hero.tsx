import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const scrollToExpeditions = () => {
    const element = document.getElementById('expeditions');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        role="img"
        aria-label="Paysage montagneux du Kirghizistan"
        style={{
          backgroundImage: 'url(/images/hero-background.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          L'Âme Nomade du Kirghizistan
          <br />
          <span className="text-sand-200">à Cheval</span>
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-sand-100 mb-10 max-w-3xl mx-auto font-light">
          Traversez les hauts plateaux d'Asie centrale, dormez en yourte
          traditionnelle et vivez l'hospitalité légendaire d'un guide nomade kirghize
        </p>
        <button
          onClick={scrollToExpeditions}
          className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition shadow-xl hover:shadow-2xl hover:scale-105 transform"
        >
          Découvrir nos circuits
        </button>
      </div>

      <button
        onClick={scrollToExpeditions}
        className="absolute bottom-8 inset-x-0 flex justify-center"
        aria-label="Défiler vers les expéditions"
      >
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </button>
    </section>
  );
}
