import React from 'react';
import melanieImg from '../assets/melanie_teacher_new.jpg';
import lucioImg from '../assets/lucio_teacher_new.jpg';

export default function Teachers() {
    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container">
                <h2 className="text-4xl md:text-5xl text-center mb-16 text-primary">Meet Your Teachers</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Melanie */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row">
                        <div className="md:w-1/2 h-64 md:h-auto">
                            <img src={melanieImg} alt="Melanie" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 md:w-1/2 flex flex-col justify-center">
                            <h3 className="text-2xl font-serif font-bold mb-2">Melanie</h3>
                            <p className="text-accent font-medium mb-4">Gründerin & Tanzlehrerin</p>
                            <ul className="text-sm space-y-2 opacity-80 list-disc list-inside marker:text-accent">
                                <li>Über 12 Jahre Salsa-Erfahrung</li>
                                <li>Dienstag: Bachata</li>
                                <li>Mittwoch: Salsa Cubana</li>
                                <li>Regelmäßige Special Workshops</li>
                            </ul>
                        </div>
                    </div>

                    {/* Lucio */}
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row">
                        <div className="md:w-1/2 h-64 md:h-auto md:order-2">
                            <img src={lucioImg} alt="Lucio" className="w-full h-full object-cover" />
                        </div>
                        <div className="p-8 md:w-1/2 flex flex-col justify-center md:order-1">
                            <h3 className="text-2xl font-serif font-bold mb-2">Lucio</h3>
                            <p className="text-accent font-medium mb-4">Tanzlehrer</p>
                            <ul className="text-sm space-y-2 opacity-80 list-disc list-inside marker:text-accent">
                                <li>Ursprünglich aus Brasilien</li>
                                <li>Bachata, Kizomba, Reggaeton</li>
                                <li>Capoeira Background</li>
                                <li>Hohe Energie & Expertise</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
