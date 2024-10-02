import React, { Component } from 'react'

class Project4 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectImageLeft">
                    <a
                        href="https://github.com/brandonbjs/bjshaf-portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/globe.webp"
                            alt="Screenshot of placeholder globe image."
                            style={{ display: 'block', margin: 'auto' }}
                            width="80%"
                            height="80%"
                        />
                    </a>
                </div>
                <div className="projectContentRight">
                    <div className="projectDescription">
                        <a
                            href="https://github.com/brandonbjs/bjshaf-portfolio"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>My Travels: World Map</h1>
                        </a>

                        <p>
                            I am implementing a new feature within my portfolio
                            website. I am designing a 3D interactive world map,
                            showcasing my travel destinations with pins and
                            images of locations visited.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: HTML, CSS, JavaScript, React,
                            GitHub Pages, Amazon EC2, Git, and{' '}
                            <a
                                href="https://github.com/brandonbjs/bjshaf-portfolio"
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

export default Project4
