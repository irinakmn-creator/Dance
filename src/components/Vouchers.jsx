import React from 'react';
import { Gift } from 'lucide-react';

export default function Vouchers({ language }) {
    return (
        <section className="py-20 bg-primary text-text-light relative overflow-hidden">
            <div className="container px-4 text-center relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-6">
                        <Gift className="w-8 h-8 text-accent" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-serif mb-6">
                        {language === 'DE' ? 'Geschenkgutscheine' : 'Gift Vouchers'}
                    </h2>
                    <p className="text-lg opacity-90 mb-8 font-light">
                        {language === 'DE'
                            ? 'Schenke Freude und Leidenschaft! Unsere Gutscheine sind das perfekte Geschenk für Freunde, Familie oder den Partner.'
                            : 'Give the gift of joy and passion! Our vouchers are the perfect gift for friends, family, or your partner.'}
                    </p>
                    <button className="bg-accent text-primary font-bold py-3.5 px-8 rounded-full shadow-glow hover:bg-white hover:text-primary transition-all duration-300">
                        {language === 'DE' ? 'Gutschein bestellen' : 'Order Voucher'}
                    </button>
                </div>
            </div>
            {/* abstract bg decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -ml-20 -mb-20"></div>
        </section>
    );
}
