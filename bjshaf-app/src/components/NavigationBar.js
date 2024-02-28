import React, { Component } from 'react'

class NavigationBar extends Component {
    constructor(props) {
        super(props)

        // Set the initial state with the default active page
        this.state = {
            activePage: 'home', // Default to 'build', assuming 'build' is the initial page
        }
    }

    // Function to update the active page
    setActivePage = (page) => {
        this.setState({ activePage: page })
    }

    render() {
        const { activePage } = this.state

        return (
            <div className="navbar">
                <div className="navbar-tabs-left">
                    <a
                        href="1"
                        className={activePage === 'home' ? 'active' : ''}
                        onClick={() => this.setActivePage('home')}
                    >
                        WELCOME
                    </a>
                </div>

                <div className="navbar-tabs-right">
                    <a
                        href="2"
                        className={activePage === 'aboutme' ? 'active' : ''}
                        onClick={() => this.setActivePage('aboutme')}
                    >
                        ABOUT ME
                    </a>
                    <a
                        href="3"
                        className={activePage === 'projects' ? 'active' : ''}
                        onClick={() => this.setActivePage('projects')}
                    >
                        PROJECTS
                    </a>
                    <a
                        href="4"
                        className={activePage === 'contact' ? 'active' : ''}
                        onClick={() => this.setActivePage('contact')}
                    >
                        CONTACT ME
                    </a>
                    <a
                        href="5"
                        className={
                            activePage === 'snowboarding' ? 'active' : ''
                        }
                        onClick={() => this.setActivePage('snowboarding')}
                    >
                        COOL SNOWBOARDING PICS
                    </a>
                </div>
            </div>
        )
    }
}

export default NavigationBar
