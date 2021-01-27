import React from 'react';

const Portfolio = () => {
    return (
        <div>
            <div className="resume_divs">
                <h1 className="resume_h1">Elvin Boring</h1>
                Location: Lake Havasu City, AZ 86403 
                <br/>
                Phone: (928) 302-9074 
                <br/>
                Email: borielvi@isu.edu
                <br/>
                LinkedIn: https://www.linkedin.com/in/elvin-boring-455aa26a 
                <br/>
                Github: https://github.com/borielvi
            </div>

            <div className="resume_divs">
                <h2 className="resume_h2">TECHNICAL SKILLS</h2>
                Languages: HTML, Javascript, CSS
                <br/>
                Frameworks: Bootstrap, React
                <br/>
                Core Concepts: Object oriented programming
            </div>

            <div className="resume_divs">
                <h2 className="resume_h2">PROJECTS</h2>

                <div>
                    Tic Tac Toe | https://github.com/borielvi/tic_tac_toe | react-game-tictactoe.herokuapp.com
                    <br/>
                    In this group project we created a tic tac toe game to play with a person you are next too. 
                    <br/>
                    Backend work including a database and graphql for queries and mutations along with debugging the game functionality.
                    <br/>
                    React, Graphql, and MongoDB.
                </div>

                <div>
                    RV-Roadtrip | https://github.com/borielvi/group3p1 | https://borielvi.github.io/group3p1/
                    <br/>
                    A web application that allows users to search for parks and see all RV parks and hiking trails in the area.
                    <br/>
                    I connected the National Park’s API to the user interface and ran multiple tests using Jest in order to ensure the functionality of the project.
                    <br/>
                    HTML, CSS, Javascript, Jest and the National Park’s API.
                </div>

                <div>
                    Beetle-Scope | https://github.com/borielvi/beetlescope | https://infinite-wildwood-30622.herokuapp.com/	
                    <br/>
                    This is a full stack web application that allows users to create an account, create projects and tasks. It is designed to be a project management help-desk to simplify your company’s workflow.
                    <br/>
                    I worked on the backend to include APIs and a MySQL database. I also connected the backend to the frontend.
                    <br/>
                    HTML, Bootstrap, MySQL, Sequelize, Insomnia, and Javascript.
                </div>
            </div>

            <div className="resume_divs">
                <h2 className="resume_h2">EXPERIENCE</h2>
                <div>
                    Conductor
                    <br/>
                    2017 – present
                    <br/>
                    BNSF Railway
                    <br/>									    		            Lake Havasu City, AZ
                    I would ride on the freight trains from one location to another. If the trains broke down it was my responsibility to fix the problem to get my train moving again. This job takes a lot of critical thinking and trouble shooting to figure out what is wrong with the train then fix it.. I also had to have excellent communication skills to be able to communicate with the engineer, dispatchers, and management.  
                </div>

                <div>
                    Conductor
                    <br/>
                    2014-2017
                    <br/>
                    Union Pacific Railroad
                    <br/>
                    Green River, Wy
                    <br/>
                    I would ride on the freight trains from one location to another. If the trains broke down it was my responsibility to fix the problem to get my train moving again. This job takes a lot of critical thinking and trouble shooting to figure out what is wrong with the train then fix it.. I also had to have excellent communication skills to be able to communicate with the engineer, dispatchers, and management.
                </div>
            </div>

            <div className="resume_divs">
                <h2 className="resume_h2">EDUCATION</h2>
                Certificate in Full Stack Web Development: University of Arizona, Tucson, Arizona 2020
                <br/>
                Education Experience: Idaho State University, Pocatello, ID
            </div>
        </div>
    )
}

export default Portfolio;