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
                            <img className="responsive" alt="tic-tac-toe game" scr={require('../../assets/images/tictactoe.png')}/>
                            <p>
                                In this website I made the backend, signup, login, and home pages. 
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/tic_tac_toe" target="_blank">Github Repository</a>
                                <a href="https://react-game-tictactoe.herokuapp.com/" target="_blank">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        <div className="run-buddy">
                            <h3>Run Buddy</h3>
                            <img className="response" alt="mock website" src={require('../../assets/images/RunBuddy.png')}/>
                            <p>
                                I used many skills to build a mock site called Run Buddy. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi ipsum voluptatibus architecto libero temporibus officia velit qui eligendi ipsam sapiente suscipit, est facilis neque fugiat totam unde dolore saepe aspernatur? 
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/Run-Buddy" target="_blank">Github Repository</a>
                                <a href="https://borielvi.github.io/Run-Buddy/" target="_blank">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        {/*
                        <div className="soda-therapy">
                            <h3>Soda Therapy</h3>
                            <img src={require('./assets/images/Soda Therapy Logo.png')}/>
                            <p>
                                This is a business website I designed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id tempora, assumenda dolorem, dicta dolores maxime soluta ipsa et voluptas necessitatibus commodi nam itaque, hic iusto mollitia sit ratione? Quos, atque!
                            </p>
                            <p>
                                <a href="/" target="_blank">Github Repository</a>
                                <a href="/" target="_blank">Live Website</a>
                            </p>
                        </div>
                        */}
                    </section>
                </div>
            </div>
            <div className="row">
                <div className="second-column">
                    <section className="websites">
                        {/*
                        <div className="wildlife-relocation">
                            <h3>Mohave County Wildlife Relocation Services LLC.</h3>
                            <img className="response" src={require('./assets/images/MCWRS LOGO.png')}/>
                            <p>
                                This was the first website I was able to build. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa natus dolorum odio perferendis, voluptatibus officiis. Nesciunt ea maxime animi fuga, doloribus laudantium distinctio, labore repellat consectetur cupiditate quae similique temporibus.
                            </p>
                            <p>
                                <a href="/" target="_blank">Github Repository</a>
                                <a href="/" target="_blank">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        */}
                        <div className="rv-roadtrip">
                            <h3>RV-Roadtrip</h3>
                            <img className="response" alt="rv roadtrip" src={require('../../assets/images/RVroadtrip.png')}/>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores nam nemo sit accusantium corrupti libero sed facere animi blanditiis, pariatur deleniti aperiam voluptatem alias porro cumque doloremque harum, obcaecati at.
                                <br/>
                                <a href="https://github.com/borielvi/group3p1" target="_blank">Github Repository</a>
                                <a href="https://borielvi.github.io/group3p1/" target="_blank">Live Website</a>
                            </p>
                        </div>
                        <br/>
                        <div className="beetlescope">
                            <h3>Beetle Scope</h3>
                            <img className="response" alt="beetlescope" src={require('../../assets/images/beetlescope.png')}/>
                            <p>
                                This is my group 1 project #2 Task management for businesses. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, sed distinctio sapiente minus delectus numquam dolor commodi sequi et dicta eligendi animi ex, harum perspiciatis dignissimos. Odio aspernatur repudiandae veniam.
                            </p>
                            <p>
                                <a href="https://github.com/borielvi/beetlescope" target="_blank">Github Repository</a>
                                <a href="https://infinite-wildwood-30622.herokuapp.com/" target="_blank">Live Website</a>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Websites;