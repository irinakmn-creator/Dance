import React from 'react';
import { Calendar, User, Layers } from 'lucide-react';

export default function Courses({ language }) {
    return (
        <section className="py-24 bg-white">
            <div className="container px-4">
                <h2 className="text-3xl md:text-5xl font-serif text-center mb-16">
                    {language === 'DE' ? 'Unsere Kurse' : 'Our Courses'}
                </h2>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Bachata Card - Pastel Pink */}
                    <div className="bg-[#F9EBEB] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fadadd] rounded-bl-[4rem] -mr-8 -mt-8 opacity-50"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold tracking-wider mb-6 shadow-sm">
                                BACHATA
                            </div>
                            <h3 className="text-3xl font-serif mb-4">Bachata Sensual</h3>
                            <p className="text-text/70 mb-8 leading-relaxed">
                                {language === 'DE'
                                    ? 'Entdecke die fließenden Bewegungen und die Verbindung im Bachata. Von den Grundlagen bis zu komplexen Figuren.'
                                    : 'Discover the flowing movements and connection of Bachata. From basics to complex figures.'}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <Layers className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Anfänger & Fortgeschrittene' : 'Beginner & Advanced'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <Calendar className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Dienstags ab 19:00' : 'Tuesdays from 7:00 PM'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <User className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Partner nicht zwingend' : 'Partner not required'}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Lady Styling</span>
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Leading u. Following</span>
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Musicality</span>
                            </div>
                        </div>
                    </div>

                    {/* Salsa Card - Pastel Green */}
                    <div className="bg-[#E9F2EB] rounded-[2rem] p-8 md:p-12 relative overflow-hidden group hover:shadow-lg transition-all duration-300">
                        {/* Decorative Corner */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#dcece0] rounded-bl-[4rem] -mr-8 -mt-8 opacity-50"></div>

                        <div className="relative z-10">
                            <div className="inline-block px-4 py-1.5 bg-white rounded-full text-xs font-bold tracking-wider mb-6 shadow-sm">
                                SALSA
                            </div>
                            <h3 className="text-3xl font-serif mb-4">Salsa Cubana</h3>
                            <p className="text-text/70 mb-8 leading-relaxed">
                                {language === 'DE'
                                    ? 'Spüre die kubanische Lebensfreude! Lerne Rhythmus, Koordination und Spaß am Tanzen in der Rueda.'
                                    : 'Feel the Cuban joy of life! Learn rhythm, coordination, and the fun of dancing in the Rueda.'}
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <Layers className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Alle Levels' : 'All Levels'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <Calendar className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Mittwochs ab 19:00' : 'Wednesdays from 7:00 PM'}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm text-text/80">
                                    <User className="w-5 h-5 text-accent" />
                                    <span>{language === 'DE' ? 'Rueda de Casino' : 'Rueda de Casino'}</span>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Cuban Style</span>
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Rueda</span>
                                <span className="px-3 py-1 bg-white/60 rounded-lg text-xs font-medium">Timba</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
