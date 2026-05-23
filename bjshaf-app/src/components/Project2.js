import React, { Component } from 'react'

class Project2 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectContentLeft">
                    <div className="projectDescription">
                        <a
                            href="https://brandonbjs.github.io/FFDT-gh-pages/"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h1>Fantasy Football Draft Tool Web Application</h1>
                        </a>
                        <p>
                            Developed a React Fantasy Football Draft Tool that allows a 
                            commissioner to host a complete 10-team snake draft from a single dashboard. 
                            Originally built as a university project with a static MongoDB ADP dataset hosted on Amazon EC2, the app was 
                            later migrated to MongoDB Atlas and Render to automate ADP updates via the 
                            Fantasy Football Calculator API and eliminate manual server maintenance.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: React.js, CSS, react-data-table-component; Node.js, 
                            Express.js, Mongoose; MongoDB Atlas; Fantasy Football Calculator API (ADP); 
                            Render (API hosting); GitHub Pages (frontend deployment); Postman; Axios, and{' '}
                            <a
                                href="https://github.com/brandonbjs/FF-Draft-Tool-Build"
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
                <div className="projectImageRight">
                    <a
                        href="https://brandonbjs.github.io/FFDT-gh-pages/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/ffdtPic.PNG"
                            alt="Screenshot of my Fantasy Football Draft Tool Web Application"
                            style={{ display: 'block', margin: 'auto' }}
                            width="120%"
                            height="120%"
                        />
                    </a>
                    <p style={{ fontSize: '1rem', color: '#ffffff', textAlign: 'center', marginTop: '6px' }}>
                        Note: The hosting service may take up to 30 seconds to serve data after 15 minutes of inactivity.
                    </p>
                </div>
            </div>
        )
    }
}

export default Project2
