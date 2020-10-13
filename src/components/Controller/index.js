import React from 'react';
import About from '../About';
import Contact from '../Contact';
import Websites from '../Websites';

const Controller = ({ currentCategory }) => {
    const { name } = currentCategory;
    var Selection = false;
    if (name == 'about-me') {
        //aboutSelection = true
        Selection = About;
    }
    if (name == 'my-work') {
        //myWorkSelection = true
        Selection = Websites;
    }
    if (name == 'contact') {
        //contactSelecton = true
        Selection = Contact;
    }

    return (
        <section>
            <Selection/>
        </section>
    )
}

export default Controller;