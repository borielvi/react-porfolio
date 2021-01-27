import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Websites from '../Websites';
import Resume from '../Resume';

const Controller = ({ currentCategory }) => {
    const { name } = currentCategory;
    var Selection = false;
    if (name === 'about-me') {
        Selection = About;
    }
    if (name === 'my-work') {
        Selection = Websites;
    }
    if (name === 'contact') {
        Selection = Contact;
    }
    if (name === 'resume') {
        Selection = Resume;
    }

    return (
        <section>
            <Selection/>
        </section>
    )
}

export default Controller;