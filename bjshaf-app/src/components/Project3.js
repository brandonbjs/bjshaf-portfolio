import React, { Component } from 'react'

class Project3 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectImageLeft">
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
                <div className="projectContentRight">
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
                            The C&I Doctoral Tracking Tool is a Learning
                            Management System created for the Curriculum and
                            Instruction Doctoral program at Northern Arizona
                            University; this web app was created for my Senior
                            Capstone Project. The Minimum Viable Product allowed
                            faculty to add/remove students to their program and
                            track their milestone progress, while also allowing
                            students to view their progress in realtime.
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
