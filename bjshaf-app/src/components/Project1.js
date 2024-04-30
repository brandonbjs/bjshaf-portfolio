import React, { Component } from 'react'

class Project1 extends Component {
    render() {
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
                            width="80%"
                            height="80%"
                        />
                    </a>
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
                            A robust character builder for gamers playing the
                            original FromSoft title "Dark Souls". Users are able
                            to theorycraft different character builds by placing
                            stat allocations, selecting weapons, selecting
                            armor, selecting spells, and more!
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: HTML, CSS, JavaScript, MongoDB,
                            Express.js, React, Node.js, GitHub Pages, Amazon
                            EC2, Git, and{' '}
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
