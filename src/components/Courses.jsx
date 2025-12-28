import React from 'react';

export default function Courses() {
    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container">
                <h2 className="text-4xl md:text-5xl text-center mb-12 text-primary">Wöchentliche Kurse</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Bachata */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-accent hover:shadow-xl transition-shadow">
                        <h3 className="text-3xl font-serif font-bold mb-4">Bachata</h3>
                        <div className="space-y-3 mb-6">
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Wann:</span>
                                <span className="text-primary">Dienstag</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Lehrer:</span>
                                <span className="text-primary">Melanie & Lucio</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Levels:</span>
                                <span className="text-primary">1 – 3</span>
                            </p>
                        </div>
                        <p className="text-sm text-gray-500 italic">Special Workshops: Lady Styling & Men Styling</p>
                    </div>

                    {/* Salsa */}
                    <div className="bg-white p-8 rounded-xl shadow-md border-l-4 border-primary hover:shadow-xl transition-shadow">
                        <h3 className="text-3xl font-serif font-bold mb-4">Salsa Cubana</h3>
                        <div className="space-y-3 mb-6">
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Wann:</span>
                                <span className="text-primary">Mittwoch</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Lehrerin:</span>
                                <span className="text-primary">Melanie</span>
                            </p>
                            <p className="flex justify-between border-b pb-2">
                                <span className="font-semibold text-gray-600">Levels:</span>
                                <span className="text-primary">1 – 3</span>
                            </p>
                        </div>
                        <p className="text-sm text-gray-500 italic">Auch mit Guest Teachers aus Kuba!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
