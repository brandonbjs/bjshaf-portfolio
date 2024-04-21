import React, { Component } from 'react'
import { Link } from 'react-scroll'

class NavigationBar extends Component {
    render() {
        return (
            <div className="navbar">
                <Link
                    className="button"
                    to="storySliderContainer"
                    smooth={true}
                >
                    ABOUT ME
                </Link>
                <Link className="button" to="projects" smooth={true}>
                    PROJECTS
                </Link>
                <Link className="button" to="contactMe" smooth={true}>
                    CONTACT ME
                </Link>
                <Link className="button" to="pics" smooth={true}>
                    COOL SNOWBOARDING PICS
                </Link>
            </div>
        )
    }
}

export default NavigationBar
