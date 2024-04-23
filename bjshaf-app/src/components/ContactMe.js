import React, { Component } from 'react'

class ContactMe extends Component {
    render() {
        return (
            <div className="contactMeContainer">
                <div className="contactMe">
                    <h2>
                        Preferred contact is by email at:{' '}
                        <a href="mailto:bjs.swe@gmail.com">bjs.swe@gmail.com</a>
                    </h2>
                </div>
                <div className="logoContainer">
                    <div className="logo1">
                        <a href="https://www.linkedin.com/in/brandonbjs/">
                            <img
                                src="images/LinkedIn_logo.png"
                                alt="LinkedIn Logo"
                                width="40%"
                                height="40%"
                            />
                        </a>
                    </div>
                    <div className="logo2">
                        <a href="https://github.com/brandonbjs/">
                            <img
                                src="images/GitHub-logo.png"
                                alt="GitHub Logo"
                                width="40%"
                                height="40%"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe
