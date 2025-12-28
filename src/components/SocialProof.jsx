import React from 'react';
import partyImg from '../assets/hero_dance_background.png'; // Placeholder for party image

export default function SocialProof({ language }) {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl skew-y-2 transform hover:skew-y-0 transition-all duration-500">
                            <img src={partyImg} alt="AyDiosMio Party" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-serif text-2xl italic">"The best place to be on Friday nights!"</p>
                                <p className="text-sm opacity-80 mt-2">— Sarah & Marc</p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif mb-6 text-primary">
                            {language === 'DE' ? 'Community & Events' : 'Community & Events'}
                        </h2>
                        <p className="text-text/80 text-lg mb-6 leading-relaxed">
                            {language === 'DE'
                                ? 'Bei AyDiosMio geht es nicht nur um Tanzschritte, sondern um das Lebensgefühl. Unsere Community ist wie eine große Familie.'
                                : 'At AyDiosMio, it\'s not just about dance steps, but about the feeling of life. Our community is like a big family.'}
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>{language === 'DE' ? 'Monatliche Partys' : 'Monthly Parties'}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>{language === 'DE' ? 'Gemeinsame Ausflüge & Festival-Besuche' : 'Group Trips & Festival Visits'}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="w-2 h-2 bg-accent rounded-full"></span>
                                <span>{language === 'DE' ? 'Weihnachtsfeier & Sommerfest' : 'Christmas Party & Summer Festival'}</span>
                            </li>
                        </ul>
                        <button className="text-accent font-semibold border-b-2 border-accent hover:text-primary hover:border-primary transition-colors pb-1">
                            {language === 'DE' ? 'Zu den Events' : 'Go to Events'}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
