import React, { Component } from 'react'
import { Element } from 'react-scroll'

class Projects extends Component {
    render() {
        return (
            <Element name="projects">
                <div className="projectGrid">
                    <div className="project1">
                        <p>FFDT</p>
                    </div>
                    <div className="project2">
                        <p>Dark Souls Character Builder</p>
                    </div>
                    <div className="project3">
                        <p>LMS</p>
                    </div>
                    <div className="project4">
                        <p>Quiz Creator</p>
                    </div>
                </div>
            </Element>
        )
    }
}

export default Projects
