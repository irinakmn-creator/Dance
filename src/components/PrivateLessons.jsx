import React from 'react';

export default function PrivateLessons() {
    return (
        <section className="py-20 bg-primary text-text-light">
            <div className="container text-center">
                <h2 className="text-4xl font-serif mb-12">Exklusiver Unterricht</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-bold mb-4 text-accent">Privatstunden</h3>
                        <p className="opacity-80 mb-6 min-h-[48px]">
                            Individuelles Training mit Melanie oder Lucio. Perfekt für schnellen Fortschritt oder speziellen Fokus.
                        </p>
                        <button className="text-white underline hover:text-accent decoration-accent underline-offset-4">
                            Privatstunde anfragen
                        </button>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-8 rounded-xl hover:bg-white/10 transition-colors">
                        <h3 className="text-2xl font-bold mb-4 text-accent">Specials & Events</h3>
                        <p className="opacity-80 mb-6 min-h-[48px]">
                            Hochzeitstänze, Choreografien für Events oder Workshops in Reggaeton & Kizomba.
                        </p>
                        <button className="text-white underline hover:text-accent decoration-accent underline-offset-4">
                            Mehr erfahren
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
