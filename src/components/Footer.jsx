import React from 'react';

export default function Footer({ language }) {
    return (
        <footer className="bg-primary text-white pt-16 pb-8">
            <div className="container px-4">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left mb-12">
                    <div className="mb-8 md:mb-0">
                        <span className="font-serif text-3xl font-bold tracking-wider block mb-2">AyDiosMio</span>
                        <p className="opacity-60 text-sm">
                            {language === 'DE' ? 'Tanzschule in Mödling' : 'Dance School in Mödling'}
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        <a href="#about" className="hover:text-accent transition-colors">About</a>
                        <a href="#courses" className="hover:text-accent transition-colors">{language === 'DE' ? 'Kurse' : 'Courses'}</a>
                        <a href="#events" className="hover:text-accent transition-colors">Events</a>
                        <a href="#contact" className="hover:text-accent transition-colors">{language === 'DE' ? 'Kontakt' : 'Contact'}</a>
                        <a href="#imprint" className="hover:text-accent transition-colors opacity-60 hover:opacity-100">{language === 'DE' ? 'Impressum' : 'Imprint'}</a>
                        <a href="#privacy" className="hover:text-accent transition-colors opacity-60 hover:opacity-100">{language === 'DE' ? 'Datenschutz' : 'Privacy'}</a>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-50">
                    <p>&copy; {new Date().getFullYear()} AyDiosMio Dance School. All rights reserved.</p>
                    <p>{language === 'DE' ? 'Made with ❤️ in Mödling' : 'Made with ❤️ in Mödling'}</p>
                </div>
            </div>
        </footer>
    );
}
