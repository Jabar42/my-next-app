'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function Services() {
    const t = useTranslations('services');
    
    const services = [
        {
            key: 'voluntariado',
            link: "/voluntariado",
        },
        {
            key: 'pasadías',
            link: "/pasadia",
        },
        {
            key: 'hospedaje',
            link: "/hospedaje",
        },
        {
            key: 'eventos',
            link: "/eventos",
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="relative mb-16">
                    <Image
                        src="/devota.webp"
                        alt={t('gardenAlt')}
                        width={1200}
                        height={400}
                        className="w-full h-[400px] object-cover rounded-lg"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-lg flex items-center justify-center">
                        <h2 className="text-4xl text-white font-semibold text-center">
                            {t('title')}
                        </h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Link 
                            href={service.link} 
                            key={index}
                            className="group p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[--color-primary]"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-[--color-primary] group-hover:text-[--color-secondary]">
                                {t(`${service.key}.title`)}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {t(`${service.key}.description`)}
                            </p>
                            <div className="mt-4 text-[--color-secondary] group-hover:translate-x-2 transition-transform duration-300">
                                →
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
} 