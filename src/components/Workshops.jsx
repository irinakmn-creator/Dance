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

export default function Workshops({ language }) {
    const [openIndex, setOpenIndex] = useState(0);

    const levels = [
        {
            level: 'Level 1',
            title: language === 'DE' ? 'Beginner Basics' : 'Beginner Basics', // Assuming 'Beginner Basics' is the same in both languages for the title
            subtitle: language === 'DE' ? 'Grundstein für alle Tänzer' : 'Foundation for all dancers',
            content: language === 'DE'
                ? ['Grundschritte', 'Rhythmus & Timing', 'Haltung & Führung', 'Basis-Technik']
                : ['Basic steps', 'Rhythm & Timing', 'Posture & Leading/Following', 'Basic technique'],
        },
        {
            level: 'Level 2',
            title: language === 'DE' ? 'Improver' : 'Improver', // Assuming 'Improver' is the same
            subtitle: language === 'DE' ? 'Zentrales Level mit dem meisten Lernfortschritt' : 'Central level with most learning progress',
            content: language === 'DE'
                ? ['Figuren & Variationen', 'Kombinationen & Übergänge', 'Musicality', 'Aufbau & Anwendung der Basics']
                : ['Figures & variations', 'Combinations & transitions', 'Musicality', 'Building & applying basics'],
        },
        {
            level: 'Level 3',
            title: language === 'DE' ? 'Intermediate' : 'Intermediate',
            description: language === 'DE'
                ? 'Meistere komplexe Kombinationen und verfeinere deine Technik. Dieser Kurs hilft dir, deinen Ausdruck und dein Styling zu entwickeln und dich im Social Dancing sicher zu fühlen.'
                : 'Master complex combinations and refine your technique. This course helps you develop your expression and styling, and feel confident in social dancing.',
        },
    ];

    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container max-w-3xl px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        {language === 'DE' ? 'Tanzlevels & Workshops' : 'Dance Levels & Workshops'}
                    </h2>
                    <p className="text-lg text-text/80 font-light">
                        {language === 'DE'
                            ? 'Finde das passende Level für dich. Wir bieten Workshops für alle Erfahrungsstufen an.'
                            : 'Find the right level for you. We offer workshops for all experience levels.'}
                    </p>
                </div>

                <div className="space-y-4">
                    {levels.map((item, index) => (
                        <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                            >
                                <div>
                                    <span className="text-accent text-sm font-bold uppercase tracking-wider block mb-1">
                                        {item.level}
                                    </span>
                                    <h3 className="text-xl font-serif font-medium">{item.title}</h3>
                                </div>
                                {openIndex === index ? (
                                    <ChevronUp className="w-6 h-6 text-text/50" />
                                ) : (
                                    <ChevronDown className="w-6 h-6 text-text/50" />
                                )}
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-40 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-text/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

