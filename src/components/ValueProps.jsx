import React from 'react';
import { Heart, Music, Users, Smile } from 'lucide-react';

export default function ValueProps() {
    const values = [
        {
            icon: <Users className="w-10 h-10 text-accent" />,
            title: "Mehr als eine Tanzschule",
            description: "Ein Ort der Begegnung und Freundschaft."
        },
        {
            icon: <Music className="w-10 h-10 text-accent" />,
            title: "Gemeinschaft & Social Dancing",
            description: "Regelmäßige Partys und Events für alle."
        },
        {
            icon: <Smile className="w-10 h-10 text-accent" />,
            title: "Lebensfreude & positive Energie",
            description: "Tanzen macht glücklich und frei."
        },
        {
            icon: <Heart className="w-10 h-10 text-accent" />,
            title: "Für jedes Alter & jedes Level",
            description: "Kein Tanzpartner notwendig – komm wie du bist."
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {values.map((value, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-bg-secondary transition-colors duration-300">
                            <div className="mb-4 p-3 bg-bg-secondary rounded-full">
                                {value.icon}
                            </div>
                            <h3 className="font-serif text-xl font-bold mb-2">{value.title}</h3>
                            <p className="text-text opacity-80">{value.description}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <p className="font-serif text-2xl italic text-primary">
                        "Sei Teil der AyDiosMio Family – Tanzen verbindet."
                    </p>
                </div>
            </div>
        </section>
    );
}
