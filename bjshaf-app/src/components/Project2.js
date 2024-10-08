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
                            Full-Stack (MERN) Web App - A fun tool that allows
                            commissioners to virtually host fantasy football
                            drafts! This full stack app enables the user to
                            create teams, populate them, view the remaining
                            players, and track drafted players. The webpage
                            shares vital draft information about each player
                            such as player position, team, bye week, ADP, and
                            other relevant statistics.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: HTML, CSS, JavaScript, MongoDB,
                            Express.js, React, Node.js, GitHub Pages, Amazon
                            EC2, Git, and{' '}
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
                </div>
            </div>
        )
    }
}

export default Project2
