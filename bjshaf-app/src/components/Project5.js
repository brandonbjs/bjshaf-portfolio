import React, { Component } from 'react'

class Project5 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectImageLeft">
                    <a
                        href="https://github.com/brandonbjs/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/work_in_progress.png"
                            alt="Screenshot of placeholder work in progress sign."
                            style={{ display: 'block', margin: 'auto' }}
                            width="60%"
                            height="60%"
                        />
                    </a>
                </div>
                <div className="projectContentRight">
                    <div className="projectDescription">
                        <a
                            href="https://github.com/brandonbjs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>LeetCode Tracker</h1>
                        </a>

                        <p>
                            LeetCode Tracker is a tool I will be designing and
                            utilizing to keep track of all the LeetCode
                            questions I have completed while searching for
                            suitable jobs. It will contain solutions for each
                            problem in the multiple programming languages that I
                            am actively practicing.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: HTML, CSS, JavaScript, MySQL,
                            Spring, GitHub Pages, AWS, Git, and{' '}
                            <a
                                href="https://github.com/brandonbjs/"
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

export default Project5
