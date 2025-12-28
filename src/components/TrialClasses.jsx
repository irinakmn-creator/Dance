import React from 'react';

export default function TrialClasses() {
    return (
        <section className="py-20 bg-primary text-text-light text-center relative overflow-hidden">
            {/* Decorative background elements can go here */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <div className="container relative z-10">
                <h2 className="text-4xl md:text-5xl font-serif mb-6 text-accent">Schnupperstunden</h2>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Lerne uns kennen! Der perfekte Einstieg in die Welt des Tanzens.
                </p>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl inline-block max-w-3xl mx-auto mb-10 border border-white/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                        <ul className="space-y-3">
                            <li className="flex items-center gap-3">
                                <span className="text-accent text-xl">✓</span> Immer in der 1. Woche des Monats
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-accent text-xl">✓</span> Einstieg auch in Woche 2 möglich
                            </li>
                            <li className="flex items-center gap-3 opacity-60">
                                <span className="text-red-300 text-xl">x</span> Kein Einstieg in Woche 3 & 4
                            </li>
                        </ul>
                        <div className="flex flex-col justify-center items-center md:items-end border-t md:border-t-0 md:border-l border-white/20 pt-6 md:pt-0 md:pl-8">
                            <p className="text-3xl font-bold text-accent mb-1">10 €</p>
                            <p className="text-sm opacity-70 mb-4">pro Person</p>
                            <div className="bg-accent text-primary font-bold px-4 py-1 rounded text-sm mb-1">
                                Special Deal
                            </div>
                            <p className="font-semibold">Zu zweit: 1 Person gratis!</p>
                        </div>
                    </div>
                </div>

                <div>
                    <button className="bg-accent hover:bg-white text-primary font-bold py-4 px-10 rounded-full text-lg transition-all transform hover:scale-105 shadow-glow">
                        Schnupperstunde buchen
                    </button>
                </div>
            </div>
        </section>
    );
}
