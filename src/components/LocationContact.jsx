import React from 'react';
import { MapPin, Phone, Mail, Instagram } from 'lucide-react';

export default function LocationContact() {
    return (
        <section className="py-20 bg-bg-secondary">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <div>
                        <h2 className="text-4xl font-serif mb-8 text-primary">Kontakt & Location</h2>

                        <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <MapPin className="text-accent" /> Location
                            </h3>
                            <p className="font-medium text-lg mb-2">Indeed Unique</p>
                            <p className="text-gray-600 mb-4">Mödling, Niederösterreich</p>
                            <p className="text-sm text-gray-400 italic">Parkmöglichkeiten in der Nähe vorhanden.</p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                <Phone className="text-accent" /> Kontakt
                            </h3>
                            <div className="space-y-4">
                                <p className="font-medium text-lg">Melanie Mayerhofer</p>
                                <p className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                                    <Phone className="w-5 h-5 opacity-70" />
                                    <a href="tel:06645108736">0664 510 8736</a>
                                </p>
                                <p className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                                    <Mail className="w-5 h-5 opacity-70" />
                                    <a href="mailto:info@aydiosmio.at">info@aydiosmio.at</a>
                                </p>
                                <p className="flex items-center gap-3 text-gray-700 hover:text-accent transition-colors">
                                    <Instagram className="w-5 h-5 opacity-70" />
                                    <a href="#">@aydiosmio_dance</a>
                                </p>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <p className="text-sm text-gray-500 mb-4">
                                    Schreib uns für Workshops, Privatstunden, Gutscheine oder Kooperationen.
                                </p>
                                <button className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-accent transition-colors">
                                    Jetzt Kontakt aufnehmen
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-[500px] rounded-xl overflow-hidden shadow-lg bg-gray-200 relative">
                        <iframe
                            title="Dance School Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2666.9735748286!2d16.2800!3d48.0850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf6412345678%3A0x123456789abcdef!2sM%C3%B6dling%2C%20Austria!5e0!3m2!1sen!2sat!4v1700000000000!5m2!1sen!2sat"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        {/* Fallback Overlay if needed or just pure iframe */}
                    </div>

                </div>
            </div>
        </section>
    );
}
