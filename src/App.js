import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
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
        },
        {
            name: 'resume'
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
                <Controller 
                    currentCategory = {currentCategory}
                />
            </main>
            <Footer/>
        </div>
    );
}

export default App;
