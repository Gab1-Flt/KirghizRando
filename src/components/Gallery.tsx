import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

// Structure simple pour ajouter facilement des photos
// Pour ajouter une photo : ajoutez un objet avec url, title et description dans le tableau ci-dessous
const galleryImages = [
    {
        url: '/images/gallery/gallery-1.jpg',
        title: 'Camp de yourtes d\'hiver',
        description: 'Yourtes traditionnelles sous la neige avec vue sur les montagnes'
    },
    {
        url: '/images/gallery/gallery-2.jpg',
        title: 'Traversée du lac Song Kul',
        description: 'Cavaliers et chevaux se reflétant dans les eaux cristallines'
    },
    {
        url: '/images/gallery/gallery-3.jpg',
        title: 'Randonnée dans le Tian Shan',
        description: 'Cavalcade face aux sommets enneigés des montagnes célestes'
    },
    {
        url: '/images/gallery/gallery-4.jpg',
        title: 'Vallée fleurie de montagne',
        description: 'Fleurs sauvages et panorama sur les sommets verdoyants'
    },
    {
        url: '/images/gallery/gallery-5.jpg',
        title: 'Groupe de cavaliers joyeux',
        description: 'Moment de bonheur partagé lors d\'une randonnée équestre'
    },
    {
        url: '/images/gallery/gallery-6.jpg',
        title: 'Pause au sommet',
        description: 'Halte contemplative avec vue sur le lac immense'
    },
    {
        url: '/images/gallery/gallery-7.jpg',
        title: 'Chevauchée dans les steppes',
        description: 'Traversée des prairies infinies sous un ciel nuageux'
    },
    {
        url: '/images/gallery/gallery-8.jpg',
        title: 'Trek en haute altitude',
        description: 'Caravane équestre serpentant vers les cols de montagne'
    },
    {
        url: '/images/gallery/gallery-9.jpg',
        title: 'Prairie verdoyante',
        description: 'Des prairies vertes à perte de vue'
    }
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

    // Afficher seulement 6 photos en preview
    const previewImages = galleryImages.slice(0, 6);

    const nextImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % galleryImages.length);
        }
    };

    const prevImage = () => {
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + galleryImages.length) % galleryImages.length);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (selectedImage === null) return;
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') setSelectedImage(null);
    };

    // Add keyboard event listener
    useState(() => {
        if (selectedImage !== null) {
            window.addEventListener('keydown', handleKeyDown as any);
            return () => window.removeEventListener('keydown', handleKeyDown as any);
        }
    });

    const openGalleryWithAll = () => {
        setSelectedImage(0);
    };

    return (
        <section id="galerie" className="py-16 sm:py-20 bg-sand-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-forest-800 mb-4">
                        Galerie Photo
                    </h2>
                    <p className="text-lg text-forest-700 max-w-2xl mx-auto">
                        Découvrez en images la beauté sauvage du Kirghizistan et l'authenticité de nos randonnées équestres
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {previewImages.map((image, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer transform transition hover:scale-105 hover:shadow-2xl"
                            onClick={() => setSelectedImage(index)}
                        >
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-72 object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                    <h3 className="font-semibold text-xl mb-1">{image.title}</h3>
                                    <p className="text-sand-200 text-sm">{image.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bouton "Voir toutes les photos" */}
                <div className="text-center mt-10">
                    <button
                        onClick={openGalleryWithAll}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300"
                    >
                        <span>Voir toutes les photos</span>
                        <span className="text-sm bg-white/20 px-2 py-1 rounded-full">{galleryImages.length}</span>
                    </button>
                </div>
            </div>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
                    <button
                        onClick={() => setSelectedImage(null)}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
                        aria-label="Fermer la galerie"
                    >
                        <X className="w-8 h-8 text-white" />
                    </button>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
                        aria-label="Image précédente"
                    >
                        <ChevronLeft className="w-8 h-8 text-white" />
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full transition z-10"
                        aria-label="Image suivante"
                    >
                        <ChevronRight className="w-8 h-8 text-white" />
                    </button>

                    <div className="max-w-6xl w-full">
                        <img
                            src={galleryImages[selectedImage].url}
                            alt={galleryImages[selectedImage].title}
                            className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
                        />
                        <div className="text-center mt-6 text-white">
                            <h3 className="font-serif text-2xl font-bold mb-2">
                                {galleryImages[selectedImage].title}
                            </h3>
                            <p className="text-sand-200 text-lg">
                                {galleryImages[selectedImage].description}
                            </p>
                            <p className="text-sand-400 text-sm mt-2">
                                {selectedImage + 1} / {galleryImages.length}
                            </p>
                        </div>
                    </div>

                    <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedImage(index)}
                                className={`w-2 h-2 rounded-full transition ${index === selectedImage ? 'bg-white w-8' : 'bg-white/50'
                                    }`}
                                aria-label={`Aller à l'image ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
}
