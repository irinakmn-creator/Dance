import React from 'react';
import { Calendar, User, Layers } from 'lucide-react';

export default function Courses() {
    return (
        <section className="py-20 bg-white">
            <div className="container">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-4 text-primary">
                        Unsere <span className="text-accent">Kurse</span>
                    </h2>
                    <p className="text-gray-500 font-light text-lg">
                        Wähle deinen Tanzstil und starte noch heute
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Bachata Card */}
                    <div className="relative bg-[#F9EBEB] p-8 md:p-10 rounded-[2rem] overflow-hidden">
                        {/* Corner Accent */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#EAD4D4] rounded-full opacity-50" />

                        <h3 className="text-3xl font-serif font-medium mb-8 text-primary relative z-10">Bachata</h3>

                        <div className="space-y-4 mb-8 relative z-10">
                            <div className="flex items-center gap-3 text-primary">
                                <Calendar className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Dienstag</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary">
                                <User className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Melanie & Lucio</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary">
                                <Layers className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Levels 1–3</span>
                            </div>
                        </div>

                        <div className="mb-8 relative z-10">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">SPECIAL WORKSHOPS</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-4 py-1.5 rounded-full text-sm text-gray-700 shadow-sm">Lady Styling</span>
                                <span className="bg-white px-4 py-1.5 rounded-full text-sm text-gray-700 shadow-sm">Men Styling</span>
                            </div>
                        </div>

                        <button className="w-full bg-accent hover:bg-[#C59216] text-primary font-semibold py-3.5 rounded-xl transition-colors shadow-sm relative z-10">
                            Kurs buchen
                        </button>
                    </div>

                    {/* Salsa Card */}
                    <div className="relative bg-[#E9F2EB] p-8 md:p-10 rounded-[2rem] overflow-hidden">
                        {/* Corner Accent */}
                        <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D3E3D8] rounded-full opacity-50" />

                        <h3 className="text-3xl font-serif font-medium mb-8 text-primary relative z-10">Salsa Cubana</h3>

                        <div className="space-y-4 mb-8 relative z-10">
                            <div className="flex items-center gap-3 text-primary">
                                <Calendar className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Mittwoch</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary">
                                <User className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Melanie</span>
                            </div>
                            <div className="flex items-center gap-3 text-primary">
                                <Layers className="w-5 h-5 text-accent" />
                                <span className="font-sans font-medium">Levels 1–3</span>
                            </div>
                        </div>

                        <div className="mb-8 relative z-10">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">SPECIAL WORKSHOPS</p>
                            <div className="flex flex-wrap gap-2">
                                <span className="bg-white px-4 py-1.5 rounded-full text-sm text-gray-700 shadow-sm">Guest Teachers aus Kuba</span>
                                <span className="bg-white px-4 py-1.5 rounded-full text-sm text-gray-700 shadow-sm">Lady Styling Salsa</span>
                            </div>
                        </div>

                        <button className="w-full bg-accent hover:bg-[#C59216] text-primary font-semibold py-3.5 rounded-xl transition-colors shadow-sm relative z-10">
                            Kurs buchen
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
