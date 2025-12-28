import React from 'react';
import { Gift } from 'lucide-react';

export default function Vouchers() {
    return (
        <section className="py-20 bg-white">
            <div className="container text-center">
                <div className="bg-bg-secondary rounded-2xl p-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 shadow-sm">
                    <div className="md:w-1/3 flex justify-center">
                        <div className="bg-white p-6 rounded-full shadow-md">
                            <Gift className="w-16 h-16 text-accent" />
                        </div>
                    </div>

                    <div className="md:w-2/3 text-left">
                        <h2 className="text-3xl font-serif font-bold mb-4">Geschenk-Gutscheine</h2>
                        <p className="text-gray-700 mb-6">
                            Schenke Freude und Bewegung! Unsere Gutscheine sind jederzeit erhältlich und einlösbar für Workshops, Kurse & Privatstunden.
                            Ideal für Geburtstage, Weihnachten oder einfach so.
                        </p>
                        <button className="bg-primary text-white font-semibold py-3 px-8 rounded-full hover:bg-accent transition-colors duration-300">
                            Gutschein anfragen
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
