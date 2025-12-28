import React from 'react';
import partyImg from '../assets/party_social_dance.png';

export default function SocialProof() {
    return (
        <section className="py-20 relative">
            <div className="absolute inset-0 z-0">
                <img src={partyImg} alt="Party Background" className="w-full h-full object-cover opacity-20" />
                <div className="absolute inset-0 bg-white/90"></div>
            </div>

            <div className="container relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img src={partyImg} alt="People dancing at a party" className="rounded-lg shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500" />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6 text-primary">AyDiosMio Partys</h2>
                        <h3 className="text-xl text-accent font-medium mb-4 uppercase tracking-wider">Social Dancing & Community</h3>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            Tanzen ist mehr als nur Schritte lernen – es ist Lebensfreude!
                            Unsere regelmäßigen Latin Social Dance Partys sind das Herzstück unserer Community.
                            Hier triffst du Freunde, übst das Gelernte und genießt die Musik in entspannter Atmosphäre.
                        </p>
                        <div className="flex gap-4 flex-wrap">
                            <span className="bg-bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-gray-600">Salsa</span>
                            <span className="bg-bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-gray-600">Bachata</span>
                            <span className="bg-bg-secondary px-4 py-2 rounded-full text-sm font-semibold text-gray-600">Reggaeton</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
