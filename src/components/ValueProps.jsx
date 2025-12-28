import React from 'react';
import { Heart, Music, Users, Sparkles } from 'lucide-react';

export default function ValueProps({ language }) {
    const values = [
        {
            icon: <Heart className="w-8 h-8 text-accent" />,
            title: language === 'DE' ? 'Leidenschaft' : 'Passion',
            description: language === 'DE' ? 'Tanzen ist für uns mehr als Bewegung – es ist ein Gefühl.' : 'For us, dancing is more than movement – it is a feeling.',
        },
        {
            icon: <Users className="w-8 h-8 text-accent" />,
            title: language === 'DE' ? 'Gemeinschaft' : 'Community',
            description: language === 'DE' ? 'Wir sind eine familiäre Tanzschule, in der sich jeder willkommen fühlt.' : 'We are a family-oriented dance school where everyone feels welcome.',
        },
        {
            icon: <Music className="w-8 h-8 text-accent" />,
            title: language === 'DE' ? 'Authentizität' : 'Authenticity',
            description: language === 'DE' ? 'Echte lateinamerikanische Rhythmen und kultureller Hintergrund.' : 'Real Latin American rhythms and cultural background.',
        },
        {
            icon: <Sparkles className="w-8 h-8 text-accent" />,
            title: language === 'DE' ? 'Qualität' : 'Quality',
            description: language === 'DE' ? 'Professioneller Unterricht mit erfahrenen Lehrern.' : 'Professional instruction with experienced teachers.',
        },
    ];

    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center flex flex-col items-center">
                            <div className="mb-4 p-4 bg-accent/10 rounded-full">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-serif font-semibold mb-2">{item.title}</h3>
                            <p className="text-text/70 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
