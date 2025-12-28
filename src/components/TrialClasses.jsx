import React from 'react';
import background from '../assets/hero_dance_background.png';

export default function TrialClasses({ language }) {
    return (
        <section className="relative py-24 flex items-center justify-center overflow-hidden">
            {/* Parallax Background */}
            <div className="absolute inset-0 z-0">
                <img src={background} alt="Dance background" className="w-full h-full object-cover opacity-30 blur-[2px]" />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
            </div>

            <div className="container relative z-10 px-4 text-center">
                <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
                    {language === 'DE' ? 'Schnupperstunde' : 'Trial Class'}
                </h2>
                <p className="text-lg md:text-xl text-white/90 font-light mb-10 max-w-2xl mx-auto">
                    {language === 'DE'
                        ? 'Lerne uns kennen! Komm vorbei, spüre die Atmosphäre und tanze erste Schritte.'
                        : 'Get to know us! Come by, feel the atmosphere, and dance your first steps.'}
                    <br />
                    <span className="font-semibold text-accent mt-2 block">
                        {language === 'DE' ? 'Kostenlos & unverbindlich.' : 'Free & without obligation.'}
                    </span>
                </p>

                <button className="bg-accent text-primary font-bold py-4 px-10 rounded-full shadow-glow transform hover:scale-105 transition-all duration-300">
                    {language === 'DE' ? 'Platz reservieren' : 'Reserve Spot'}
                </button>
            </div>
        </section>
    );
}
