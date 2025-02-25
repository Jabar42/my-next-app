import Image from 'next/image';
import VirtualTourButton from './virtualtourbutton';

export default function Hero() {
    return (
        <section className=" relative">
            {/* Contenedor de la imagen de fondo */}
            <div className="absolute inset-0 -z-10">
                <Image 
                    src="/Banner2.webp" 
                    alt="Banner de Varsana Ecoaldea" 
                    fill 
                    style={{ objectFit: "cover" }} 
                    priority 
                />
            </div>

            <div className="container mx-auto pb-20 pt-3 px-4 relative">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-full md:w-10/12 lg:w-6/12">
                        <p className="font-medium mb-2 text-[--color-terciary] italic">
                            Primer Yoga Planetario de Colombia.
                        </p>
                        <h1 className="mb-4 text-6xl">
                            Un espacio para reconectar contigo y con la naturaleza.
                        </h1>
                        <p className="font-light mb-6 text-xl">
                            Visítanos como huésped, voluntario o en un pasadía y descubre Varsana, un santuario para el alma. 
                            Más que una ecoaldea, es un espacio donde la meditación, el yoga y la sostenibilidad se fusionan 
                            para brindarte experiencias profundas y transformadoras.
                        </p>
                        <div className="flex">
                            <a href="/contacto" className="bg-[--color-secondary] font-light hover:bg-green-700 inline-block px-5 py-2 rounded-sm text-white uppercase">
                                Contáctanos
                            </a>
                            <VirtualTourButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
