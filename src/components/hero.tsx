'use client';

import Image from 'next/image';
import { Button } from './ui/button';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';

export default function Hero() {
    const t = useTranslations('hero');
    
    return (
        <section className=" relative py-20">
            {/* Contenedor de la imagen de fondo */}
            <div className="absolute inset-0 -z-10">
                <div className="md:hidden absolute inset-0 bg-white/80 z-10"></div>
                <Image 
                    src="/Banner2.webp" 
                    alt={t('bannerAlt')} 
                    fill 
                    style={{ objectFit: "cover" }} 
                    priority 
                />
            </div>

            <div className="container mx-auto pb-20 pt-3 px-4 relative">
                <div className="flex flex-wrap -mx-4">
                    <div className="px-4 w-full md:w-10/12 lg:w-6/12">
                        <p className="font-medium mb-2 text-[--color-terciary] italic">
                            {t('subtitle')}
                        </p>
                        <h1 className="mb-4 text-4xl md:text-6xl">
                            {t('title')}
                        </h1>
                        <p className="font-light mb-6 text-xl">
                            {t.rich('description', {
                                guest: (chunks) => (
                                    <Link href="/hospedaje" className="font-bold text-[--color-primary] underline hover:text-[--color-secondary]">
                                        {chunks}
                                    </Link>
                                ),
                                volunteer: (chunks) => (
                                    <Link href="/voluntariado" className="font-bold text-[--color-primary] underline hover:text-[--color-secondary]">
                                        {chunks}
                                    </Link>
                                ),
                                dayTrip: (chunks) => (
                                    <Link href="/pasadia" className="font-bold text-[--color-primary] underline hover:text-[--color-secondary]">
                                        {chunks}
                                    </Link>
                                ),
                            })}
                        </p>
                        
                        <div className='flex gap-4'>
                            <Button className='bg-[--color-secondary] hover:bg-green-700'>{t('contactButton')}</Button>
                            <Button className='bg-[--color-secondary] hover:bg-green-700'>
                              <Image 
                                src="/3d.svg"
                                alt="3D Tour Icon"
                                width={26}
                                height={26}
                                className="invert brightness-0"
                              />
                              {t('virtualTour')}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
