import React, { Component } from 'react'

class Project3 extends Component {
    render() {
        return (
            <div className="projectContainer">
                <div className="projectImage">
                    <a
                        href="https://github.com/adlarson88/WhatsUpDoc"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/adminStudentControlsWindow.PNG"
                            alt="Screenshot of my Admin Student Control Window"
                            style={{ display: 'block', margin: 'auto' }}
                            width="80%"
                            height="80%"
                        />
                    </a>
                </div>
                <div className="projectContent">
                    <div className="projectDescription">
                        <a
                            href="https://github.com/adlarson88/WhatsUpDoc"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>
                                Curriculum and Instruction Doctoral Tracking
                                Tool
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
                            Technologies Used: HTML, CSS, JavaScript, MySQL,
                            Spring, GitHub Pages, AWS, Git, and{' '}
                            <a
                                href="https://github.com/adlarson88/WhatsUpDoc"
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

export default Project3
