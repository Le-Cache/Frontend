import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <main className="about-page">
            <h2 className="about-header">What is Le Cache?</h2>
            <div className="about-info">
                <p>
                    LeCache is a directory where you can find contact details
                    for Lambda students and alumni.{' '}
                </p>
                <h3>
                    <strong>What students can do: </strong>
                </h3>
                <ul>
                    <li>
                        Be featured on the site: Submit profile picture,
                        location, portfolio, LinkedIn, and GitHub
                    </li>
                    <li>See examples of fellow students' work.</li>
                    <li>
                        Signal if they are willing to relocate for a role,
                        passively open to new opportunities, or actively seeking
                        new opportunities.
                    </li>
                </ul>
                <h3>
                    <strong>For Recruiters and Hiring Managers: </strong>
                </h3>
                <ul>
                    <li>
                        See the best and brightest that Lambda School has to
                        offer.{' '}
                    </li>
                    <li>
                        You can filter to specific tracks so you only see
                        profiles relevant to you.
                    </li>
                </ul>
                <h3>
                    <strong>For Non-Lambda Students: </strong>
                </h3>
                <p>
                    See what Lambda grads and students have built over their
                    time while enrolled within their program.{' '}
                </p>
                <p>
                    Inspired by{' '}
                    <a
                        href="https://www.latinxswhodesign.com"
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Latinxs Who Design
                    </a>{' '}
                    by Pablo Stanley{' '}
                </p>
            </div>
            <div className="about-info about-second-div">
                <h3>
                    <strong>The Team</strong>
                </h3>
                <p>
                    Le Cache was created during a Hackathon hosted by Lambda on
                    January 2, 2020.
                </p>
                <div>
                    <ul>
                        <div>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/eileen-cuevas/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Eileen Cuevas
                                </a>{' '}
                                - Web Developer
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/webdevdaisy/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Daisy Mesa
                                </a>{' '}
                                - Web Developer
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/marcdandoy/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Marc Dandoy
                                </a>{' '}
                                - UX/UI Designer
                            </li>
                        </div>
                        <div>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/rastgoo/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Milo Rastgoo
                                </a>{' '}
                                - Web Developer
                            </li>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/jameakidrick/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Jamea Kidrick
                                </a>{' '}
                                - Web Developer
                            </li>

                            <li>
                                <a
                                    href=" https://www.linkedin.com/in/laurakgiron/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Laura Giron
                                </a>{' '}
                                - UX Designer / Project Manager
                            </li>
                        </div>

                        <div>
                            <li>
                                <a
                                    href="https://www.linkedin.com/in/robpedersendev/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    Robert Pedersen
                                </a>{' '}
                                - Web Developer
                            </li>
                        </div>
                    </ul>
                </div>
                <hr className="divider" />
                <div className="footer">
                    <NavLink exact to="/">
                        <h3>
                            <strong>
                                <span>&larr;</span> Back to Directory
                            </strong>
                        </h3>
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default About;
