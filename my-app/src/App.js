import './App.css'; 
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'animate.css';
import AnimationController from './components/AnimationController';
import Nav from './components/Navigation/Nav';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Features from './components/Features/Features';
import Quests from './components/Quests/Quests';
// import Timeline from './components/Timeline/Timeline';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';

import QuestPage from './components/QuestPages/QuestPage'; 

function App() {
    const [selectedPeriod, setSelectedPeriod] = useState(null);

    return (
        
        <Router>
            <div className="App">
                <Routes>
                    {/* Главная страница */}
                    <Route path="/" element={
                        <>
                            <AnimationController />
                            <Nav />
                            <Hero />
                            <About />
                            <Features />
                            <Quests />
                            <Contacts />
                            <Footer />
                        </>
                    } />
                    {/* Страница одного квеста */}
                    <Route path="/quest/:id" element={<QuestPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
