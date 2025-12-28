import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const LevelAccordion = ({ title, subtitle, content, isOpen, onClick }) => {
    return (
        <div className="border border-gray-200 rounded-lg overflow-hidden mb-4 bg-white shadow-sm">
            <button
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
                onClick={onClick}
            >
                <div>
                    <h4 className="text-xl font-medium text-primary">{title}</h4>
                    <p className="text-sm text-gray-500 italic">{subtitle}</p>
                </div>
                {isOpen ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-gray-400" />}
            </button>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 pt-0 border-t border-gray-100 mt-2 bg-gray-50/50">
                    <ul className="space-y-2 text-gray-700">
                        {content.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                                <span className="text-accent mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default function Workshops() {
    const [openIndex, setOpenIndex] = useState(0);

    const levels = [
        {
            title: "Level 1 – Beginner (Basics)",
            subtitle: "Grundstein für alle Tänzer",
            content: ["Grundschritte", "Rhythmus & Timing", "Haltung & Führung", "Basis-Technik"]
        },
        {
            title: "Level 2 – Intermediate (Medium)",
            subtitle: "Zentrales Level mit dem meisten Lernfortschritt",
            content: ["Figuren & Variationen", "Kombinationen & Übergänge", "Musicality", "Aufbau & Anwendung der Basics"]
        },
        {
            title: "Level 3 – Advanced",
            subtitle: "Sicherheit im Social Dancing",
            content: ["Komplexe Kombinationen", "Technik & Ausdruck", "Styling & Feinschliff"]
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container max-w-4xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl text-primary mb-6">Workshops & Kurssystem</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Monatliche Workshops (4 Wochen) – Einstieg jeden Monat neu möglich.
                        Teilnahme solo oder als Paar.
                    </p>
                </div>

                <div className="space-y-2">
                    {levels.map((level, index) => (
                        <LevelAccordion
                            key={index}
                            title={level.title}
                            subtitle={level.subtitle}
                            content={level.content}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>

                <div className="text-center mt-12 text-sm text-gray-500 italic">
                    * Kein automatischer Level-Aufstieg – jedes Lerntempo ist willkommen.
                </div>
            </div>
        </section>
    );
}
