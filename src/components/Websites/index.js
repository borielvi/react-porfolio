import React from 'react';

const Websites = () => {
    return (
        <div>
            <div className="row">
                <div className="second-column">
                    <section id="projects" className="websites">
                        <h1 id="mywork_h1">My Work</h1>
                        <div className='tic_tac_toe'>
                            <h3>Tic Tac Toe</h3>
                            <img className="responsive" id="tictactoe" alt="tic-tac-toe game" src={require('../../assets/images/tictactoe.png')}/>
                            <p>
                                In this group project we created a tic tac toe game to play with a person you are next too. 
                                <br/>
                                I did the backend work including a database and graphql for queries and mutations along with debugging the game functionality.
                                <br/>
                                React, Graphql, and MongoDB.
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/tic_tac_toe" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                <a href="https://react-game-tictactoe.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        <div className="run-buddy">
                            <h3>Run Buddy</h3>
                            <img className="response" alt="mock website" src={require('../../assets/images/RunBuddy.png')}/>
                            <p>
                                A mock website that allows users to find fitness trainers in there area.
                                <br/>
                                HTML, CSS and Javascript.
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/Run-Buddy" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                <a href="https://borielvi.github.io/Run-Buddy/" target="_blank" rel="noopener noreferrer">Live Website</a>
                            </p>
                        </div>
                        <br/>
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="second-column">
                    <section className="websites">
                        <div className="rv-roadtrip">
                            <h3>RV-Roadtrip</h3>
                            <img className="response" alt="rv roadtrip" src={require('../../assets/images/RVroadtrip.png')}/>
                            <p>
                                A web application that allows users to search for parks and see all RV parks and hiking trails in the area.
                                <br/>
                                I was tasked with connecting the National Park’s API to the user interface and running multiple tests using Jest in order to ensure the functionality of the project.
                                <br/>
                                HTML, CSS, Javascript, Jest and the National Park’s API.
                                <br/>
                                <a href="https://github.com/borielvi/group3p1" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                <a href="https://borielvi.github.io/group3p1/" target="_blank" rel="noopener noreferrer">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        <div className="beetlescope">
                            <h3>Beetle Scope</h3>
                            <img className="response" alt="beetlescope" src={require('../../assets/images/beetlescope.png')}/>
                            <p>
                                This is a full stack web application that allows users to create an account, create projects and tasks. It is designed to be a project management help-desk to simplify your company’s workflow.
                                <br/>
                                I worked on the backend to include APIs and a MySQL database. I also connected the backend to the frontend.
                                <br/>
                                HTML, Bootstrap, MySQL, Sequelize, Insomnia, and Javascript.
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/beetlescope" target="_blank" rel="noopener noreferrer">Github Repository</a>
                                <a href="https://infinite-wildwood-30622.herokuapp.com/" target="_blank" rel="noopener noreferrer">Live Website</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Websites;