import React from 'react';
import { MapPin, Mail, Phone, Instagram, Facebook } from 'lucide-react';

export default function LocationContact({ language }) {
    return (
        <section className="py-20 bg-white">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact Info */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-serif mb-8 text-primary">
                            {language === 'DE' ? 'Kontakt & Anfahrt' : 'Contact & Location'}
                        </h2>
                        <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                            {language === 'DE'
                                ? 'Wir freuen uns darauf, dich kennenzulernen! Komm vorbei oder schreib uns eine Nachricht.'
                                : 'We look forward to meeting you! Come by or send us a message.'}
                        </p>

                        <div className="space-y-6 mb-8 text-primary">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-bg-secondary rounded-full">
                                    <MapPin className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{language === 'DE' ? 'Adresse' : 'Address'}</h4>
                                    <p className="opacity-80">
                                        Neusiedlerstraße 26<br />
                                        2340 Mödling<br />
                                        {language === 'DE' ? 'Österreich' : 'Austria'}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-bg-secondary rounded-full">
                                    <Mail className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{language === 'DE' ? 'E-Mail' : 'Email'}</h4>
                                    <a href="mailto:info@aydiosmio.at" className="opacity-80 hover:text-accent transition-colors">
                                        info@aydiosmio.at
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-bg-secondary rounded-full">
                                    <Phone className="w-6 h-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg mb-1">{language === 'DE' ? 'Telefon' : 'Phone'}</h4>
                                    <a href="tel:+43123456789" className="opacity-80 hover:text-accent transition-colors">
                                        +43 123 456 789
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <a href="#" className="p-3 bg-primary text-white rounded-full hover:bg-accent hover:text-primary transition-all shadow-md">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="p-3 bg-primary text-white rounded-full hover:bg-accent hover:text-primary transition-all shadow-md">
                                <Facebook className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className="md:w-1/2 h-96 bg-bg-secondary rounded-2xl overflow-hidden shadow-inner flex items-center justify-center relative">
                        {/* Replace with actual Google Maps Iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2665.679632869408!2d16.2913988768822!3d48.07788915528023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476daf6163351911%3A0xc383c21820421712!2sNeusiedlerstra%C3%9Fe%2026%2C%202340%20M%C3%B6dling!5e0!3m2!1sde!2sat!4v1709405206240!5m2!1sde!2sat"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="video"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0"
                        ></iframe>
                        <div className="absolute pointer-events-none">
                            <span className="text-gray-400 font-medium">Google Maps Embed</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
