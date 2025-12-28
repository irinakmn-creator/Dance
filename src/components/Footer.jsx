import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-primary text-white py-12 border-t border-white/10">
            <div className="container">
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <div className="mb-6 md:mb-0 text-center md:text-left">
                        <h2 className="text-2xl font-serif font-bold mb-2">AyDiosMio</h2>
                        <p className="text-sm opacity-60">Tanzen. Gemeinschaft. Leidenschaft.</p>
                    </div>

                    <div className="flex gap-6 text-sm opacity-80">
                        <a href="#" className="hover:text-accent transition-colors">Home</a>
                        <a href="#" className="hover:text-accent transition-colors">Kurse</a>
                        <a href="#" className="hover:text-accent transition-colors">Events</a>
                        <a href="#" className="hover:text-accent transition-colors">Kontakt</a>
                    </div>
                </div>

                <div className="text-center mb-12">
                    <h3 className="font-serif text-3xl md:text-4xl italic mb-6">"Come for the dance. Stay for the family."</h3>
                    <button className="bg-accent text-primary font-bold py-3 px-8 rounded-full hover:bg-white transition-colors transform hover:scale-105">
                        Teil der AyDiosMio Family werden
                    </button>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs opacity-40">
                    <p>&copy; {new Date().getFullYear()} AyDiosMio Dance School. All rights reserved.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white">Impressum</a>
                        <a href="#" className="hover:text-white">Datenschutz</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
