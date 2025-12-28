import React from 'react';
import heroBg from '../assets/hero_dance_background.png';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image / Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="People dancing Salsa and Bachata"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div> {/* Dark overlay for text contrast */}
            </div>

            <div className="container relative z-10 text-center text-text-light px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 leading-tight animate-fade-in-up">
                    AyDiosMio <span className="block text-2xl md:text-3xl font-sans font-light mt-2 opacity-90">– more than dance, it’s a family</span>
                </h1>

                <p className="text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto opacity-90">
                    Latin vibes. Real connection. Tanzworkshops & Community in Mödling.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <button className="bg-accent text-primary font-semibold py-4 px-8 rounded-full shadow-glow hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105 text-lg">
                        Jetzt Schnupperstunde buchen
                    </button>

                    <button className="border-2 border-white text-white font-medium py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-all duration-300">
                        Workshops entdecken
                    </button>
                </div>
            </div>
        </section>
    );
}
