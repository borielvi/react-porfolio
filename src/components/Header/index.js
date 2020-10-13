import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

const Header = (props) => {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
    }, [currentCategory]);

    return (
        <header class="background">
            <nav>
                <div class="center">
                    <img src={require(`../../assets/images/Portfolio-Headshot.png`)} alt="Elvin Boring" className="responsive"/>
                    <div class="center-inline">
                        {/*
                        <a href="#about-me" className='navActive'>About Me</a>
                        {'\u00A0'}
                        {'\u00A0'}
                        {'\u00A0'}
                        <a href="#projects">My Work</a>                            {'\u00A0'}
                        {'\u00A0'}
                        {'\u00A0'}
                        {'\u00A0'}                              
                        <a href="#contact-me">Contact Me</a>
                        {'\u00A0'}
                        {'\u00A0'}
                        {'\u00A0'}
                        <a href={require('../../assets/html/resume.htm')} target="_blank">Resume</a>
                        {'\u00A0'}                            {'\u00A0'}
                        {'\u00A0'}
                        {'\u00A0'}
                        */}
                        <div class="mx-1">
                            {categories.map((category) => (
                                <li
                                    className = {`span-a ${
                                        currentCategory.name === category.name && !contactSelected && `navActive`
                                    }`}
                                    key={category.name}
                                >
                                    <span onClick={() => {
                                        setCurrentCategory(category);
                                        setContactSelected(false);
                                    }}>
                                        {capitalizeFirstLetter(category.name)}
                                    </span>
                                </li>
                            ))}
                            <a href={require('../../assets/html/resume.htm')} target="_blank">Resume</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;