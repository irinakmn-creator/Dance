import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

import logoImg from '../assets/logo_gold.png';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Familie', href: '#family' },
        { name: 'Kurse', href: '#courses' },
        { name: 'Workshops', href: '#workshops' },
        { name: 'Partys', href: '#events' },
        { name: 'Kontakt', href: '#contact' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-header py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container flex justify-between items-center">
                {/* Logo */}
                <a href="#" className={`flex items-center gap-3 font-serif text-2xl font-medium tracking-wide transition-colors ${isScrolled ? 'text-primary' : 'text-text-light'}`}>
                    <img src={logoImg} alt="AyDiosMio Logo" className="h-10 w-auto" />
                    AyDiosMio
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors hover:text-accent ${isScrolled ? 'text-primary' : 'text-text-light/90'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}

                    <button className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-glow hover:scale-105 ${isScrolled
                        ? 'bg-primary text-white hover:bg-black'
                        : 'bg-accent text-primary hover:bg-white'
                        }`}>
                        Schnupperstunde buchen
                    </button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-primary"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {isScrolled ? <Menu className="text-primary" /> : <Menu className="text-text-light" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center space-y-8 animate-fade-in-up md:hidden">
                    <button
                        className="absolute top-6 right-6 p-2 text-primary"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-2xl font-serif font-medium text-primary hover:text-accent"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="bg-accent text-primary px-8 py-3 rounded-full text-lg font-bold shadow-glow">
                        Schnupperstunde buchen
                    </button>
                </div>
            )}
        </header>
    );
}
