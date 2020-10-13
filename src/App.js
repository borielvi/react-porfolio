import React, { useState } from 'react';
//import Websites from './components/Websites';
import Header from './components/Header';
import Footer from './components/Footer';
//import About from './components/About';
//import Contact from './components/Contact';
import Controller from './components/Controller';

function App() {
    const [categories] = useState([
        {
            name: 'about-me'
        },
        {
            name: 'my-work'
        },
        {
            name: 'contact'
        }
    ]);

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [contactSelected, setContactSelected] = useState(false);

    return (
        <div>
            <Header
                categories = {categories}
                setCurrentCategory = {setCurrentCategory}
                currentCategory = {currentCategory}
                contactSelected={contactSelected}
                setContactSelected={setContactSelected}
            />
            <main>
                {/*
                <About/>
                {!contactSelected ? (
                    <Websites/>
                ) : (
                    <Contact/>
                )}
                */}
                <Controller 
                    currentCategory = {currentCategory}
                />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
