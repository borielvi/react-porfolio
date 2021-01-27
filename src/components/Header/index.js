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
        <header className="background">
            <nav>
                <div className="center">
                    <img src={require(`../../assets/images/Portfolio-Headshot.png`)} alt="Elvin Boring" className="responsive"/>
                    <div className="center-inline">
                        <div className="mx-1">
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
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;