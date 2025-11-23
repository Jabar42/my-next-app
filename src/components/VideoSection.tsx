'use client';

import { Button } from './ui/button';
import { useTranslations } from 'next-intl';

export default function VideoSection() {
    const t = useTranslations('video');
    
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Video Container */}
                <div className="relative w-full aspect-video mb-16 rounded-lg overflow-hidden shadow-xl">
                    <iframe
                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                        title={t('videoTitle')}
                        className="absolute top-0 left-0 w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                {/* Call to Action Section */}
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold mb-6 text-[--color-primary]">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {t('description')}
                    </p>
                    <Button 
                        className="bg-[--color-secondary] hover:bg-green-700 text-lg px-8 py-6"
                    >
                        {t('contactButton')}
                    </Button>
                </div>
            </div>
        </section>
    );
} 