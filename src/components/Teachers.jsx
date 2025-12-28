import React from 'react';
import MelanieImg from '../assets/melanie_teacher_new.jpg';
import LucioImg from '../assets/lucio_teacher_new.jpg';

export default function Teachers({ language }) {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4">
                        {language === 'DE' ? 'Unsere Tanzlehrer' : 'Our Dance Instructors'}
                    </h2>
                    <p className="text-xl text-text/70">
                        {language === 'DE'
                            ? 'Lerne von erfahrenen und leidenschaftlichen Profis.'
                            : 'Learn from experienced and passionate professionals.'}
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Melanie - Left */}
                    <div className="flex flex-col">
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                            <img src={MelanieImg} alt="Melanie Mayerhofer" className="w-full h-auto object-cover" />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-serif mb-2">
                                    {language === 'DE' ? 'Melanie Mayerhofer' : 'Melanie Mayerhofer'}
                                </h3>
                                <p className="text-accent font-medium text-lg">
                                    {language === 'DE' ? 'Gründerin & Tanzlehrerin' : 'Founder & Dance Instructor'}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-3">
                                    {language === 'DE' ? 'Erfahrung' : 'Experience'}
                                </h4>
                                <ul className="space-y-2 text-text/80">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Gründerin von AyDiosMio in Mödling' : 'Founder of AyDiosMio in Mödling'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Über 12 Jahre Salsa-Erfahrung' : 'Over 12 years of Salsa experience'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Regelmäßige Guest Teachers aus Kuba' : 'Regular guest teachers from Cuba'}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-3">
                                    {language === 'DE' ? 'Unterricht' : 'Teaching'}
                                </h4>
                                <ul className="space-y-2 text-text/80">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Dienstag – Bachata' : 'Tuesday – Bachata'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Mittwoch – Salsa Cubana' : 'Wednesday – Salsa Cubana'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Regelmäßige Special Workshops' : 'Regular special workshops'}</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-text/70 italic pt-4">
                                {language === 'DE'
                                    ? '"Eine offene, herzliche Tanz-Community für alle."'
                                    : '"An open, warm dance community for everyone."'}
                            </p>
                        </div>
                    </div>

                    {/* Lucio - Right */}
                    <div className="flex flex-col">
                        <div className="rounded-3xl overflow-hidden shadow-xl mb-6">
                            <img src={LucioImg} alt="Lucio" className="w-full h-auto object-cover" />
                        </div>
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-3xl font-serif mb-2">Lucio</h3>
                                <p className="text-accent font-medium text-lg">
                                    {language === 'DE' ? 'Tanzlehrer' : 'Dance Instructor'}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-3">
                                    {language === 'DE' ? 'Erfahrung' : 'Experience'}
                                </h4>
                                <ul className="space-y-2 text-text/80">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Ursprünglich aus Brasilien' : 'Originally from Brazil'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Internationale Tanzerfahrung' : 'International dance experience'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Stile: Bachata, Kizomba, Reggaeton, Capoeira' : 'Styles: Bachata, Kizomba, Reggaeton, Capoeira'}</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-text/60 uppercase tracking-wider mb-3">
                                    {language === 'DE' ? 'Unterricht' : 'Teaching'}
                                </h4>
                                <ul className="space-y-2 text-text/80">
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Dienstag – Bachata' : 'Tuesday – Bachata'}</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-accent mr-2">▪</span>
                                        <span>{language === 'DE' ? 'Special Workshops: Reggaeton & Kizomba' : 'Special Workshops: Reggaeton & Kizomba'}</span>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-text/70 italic pt-4">
                                {language === 'DE'
                                    ? '"Hohe Energie & Expertise für authentischen Tanzunterricht."'
                                    : '"High energy & expertise for authentic dance instruction."'}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
