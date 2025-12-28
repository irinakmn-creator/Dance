import React, { useState } from 'react';
import Hero from './components/Hero';
import ValueProps from './components/ValueProps';
import Teachers from './components/Teachers';
import Workshops from './components/Workshops';
import Courses from './components/Courses';
import TrialClasses from './components/TrialClasses';
import SocialProof from './components/SocialProof';
import PrivateLessons from './components/PrivateLessons';
import Vouchers from './components/Vouchers';
import LocationContact from './components/LocationContact';
import Footer from './components/Footer';

import Header from './components/Header';

function App() {
    const [language, setLanguage] = useState('DE');

    return (
        <div className="font-sans text-text antialiased selection:bg-accent selection:text-white">
            <Header language={language} setLanguage={setLanguage} />
            <Hero language={language} />
            <ValueProps language={language} />
            <div id="family">
                <Teachers language={language} />
            </div>
            <div id="courses">
                <Courses language={language} />
            </div>
            <div id="workshops">
                <Workshops language={language} />
            </div>
            <TrialClasses language={language} />
            <div id="events">
                <SocialProof language={language} />
            </div>
            <PrivateLessons language={language} />
            <Vouchers language={language} />
            <div id="contact">
                <LocationContact language={language} />
            </div>
            <Footer language={language} />
        </div>
    );
}

export default App;
