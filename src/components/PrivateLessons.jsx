
import React from 'react';
import { Star, Music, Award } from 'lucide-react';

export default function PrivateLessons({ language }) {
    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        {language === 'DE' ? 'Privatunterricht' : 'Private Lessons'}
                    </h2>
                    <p className="text-lg text-text/80 font-light max-w-2xl mx-auto">
                        {language === 'DE'
                            ? 'Individuelles Training für dich. Perfektioniere deinen Stil oder lerne in deinem eigenen Tempo.'
                            : 'Individual training for you. Perfect your style or learn at your own pace.'}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Wedding Dance */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                        <div className="w-12 h-12 bg-[#F9EBEB] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Star className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif font-medium mb-3">
                            {language === 'DE' ? 'Hochzeitstanz' : 'Wedding Dance'}
                        </h3>
                        <p className="text-text/70 text-sm">
                            {language === 'DE'
                                ? 'Euer Moment. Wir choreografieren euren unvergesslichen ersten Tanz.'
                                : 'Your moment. We choreograph your unforgettable first dance.'}
                        </p>
                    </div>

                    {/* Technique */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                        <div className="w-12 h-12 bg-[#E9F2EB] rounded-full flex items-center justify-center mx-auto mb-6">
                            <Award className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif font-medium mb-3">
                            {language === 'DE' ? 'Technik & Styling' : 'Technique & Styling'}
                        </h3>
                        <p className="text-text/70 text-sm">
                            {language === 'DE'
                                ? 'Intensives Coaching für bessere Körperhaltung, Drehtechnik und Ausdruck.'
                                : 'Intensive coaching for better posture, spinning technique, and expression.'}
                        </p>
                    </div>

                    {/* Show */}
                    <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 text-center">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Music className="w-6 h-6 text-accent" />
                        </div>
                        <h3 className="text-xl font-serif font-medium mb-3">Show & Performance</h3>
                        <p className="text-text/70 text-sm">
                            {language === 'DE'
                                ? 'Vorbereitung für Auftritte, Shows oder Wettbewerbe.'
                                : 'Preparation for performances, shows, or competitions.'}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

