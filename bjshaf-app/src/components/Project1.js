import React, { Component } from 'react'

class Project1 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer1">
                <div className="projectImageLeft">
                    <a
                        href="https://brandonbjs.github.io/Dark-Souls-Character-Builder-gh-pages/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/darkSoulsCharBuilder.PNG"
                            alt="Screenshot of my Dark Souls Character Builder Web Application"
                            style={{ display: 'block', margin: 'auto' }}
                        />
                    </a>
                    <p style={{ fontSize: '0.75rem', color: '#ffffff', textAlign: 'center', marginTop: '6px' }}>
                        Note: The hosting service may take up to 30 seconds to serve data after 15 minutes of inactivity.
                    </p>
                </div>
                <div className="projectContentRight">
                    <div className="projectDescription">
                        <a
                            href="https://brandonbjs.github.io/Dark-Souls-Character-Builder-gh-pages/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>
                                Dark Souls Character Builder Web Application
                            </h1>
                        </a>

                        <p>
                            Built a full stack MERN Character Builder for the FromSoftware title Dark Souls, 
                            enabling players to theorycraft complete character builds before committing time 
                            in game. The app features dynamic real-time calculation of HP, Stamina, Poise, 
                            Equip Load, Encumbrance, and all Defense stats as the user allocates soul levels, 
                            equips weapons, armor, rings, and spells across a fully interactive dashboard. 
                            The Express REST API serves eight MongoDB Atlas collections via Mongoose, with 
                            the frontend deployed on GitHub Pages and the backend hosted on Render.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: React.js, CSS; Node.js, Express.js; MongoDB Atlas, 
                            Mongoose; Render (API hosting); GitHub Pages (frontend deployment); REST API and{' '}
                            <a
                                href="https://github.com/brandonbjs/dark-souls-character-builder"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                            .
                        </b>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project1
