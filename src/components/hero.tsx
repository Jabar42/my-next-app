import Image from 'next/image';
import VirtualTourButton from './virtualtourbutton';

export default function Hero() {
    return (
        <section className=" relative py-20">
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
                        <VirtualTourButton />
                    </div>
                </div>
            </div>
        </section>
    );
}
