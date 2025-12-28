import React from 'react';
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
    return (
        <div className="min-h-screen bg-bg-secondary font-sans text-text overflow-x-hidden">
            <Header />
            {/* 
          Main Application Assembly 
          Each component represents a Section from the prompt.
       */}
            <Hero />
            <ValueProps />
            <Teachers />
            <Workshops />
            <Courses />
            <TrialClasses />
            <SocialProof />
            <PrivateLessons />
            <Vouchers />
            <LocationContact />
            <Footer />
        </div>
    );
}

export default App;
