import { Button } from './ui/button';

export default function VideoSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Video Container */}
                <div className="relative w-full aspect-video mb-16 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title="Varsana Eco Aldea Video"
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Call to Action Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-[--color-primary]">
                        ¿Estás interesado en alguno de nuestros programas?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        ¡Estamos a tu servicio! Ponte en contacto con nosotros para recibir información 
                        más detallada acerca de todo lo que Varsana eco aldea tiene para ofrecerte. 
                        Con mucho gusto atenderemos todas tus dudas.
                    </p>
                    <Button 
                        className="bg-[--color-secondary] hover:bg-green-700 text-lg px-8 py-6"
                    >
                        Contáctanos
                    </Button>
                </div>
            </div>
        </section>
    );
} 