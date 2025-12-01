import React, { Component } from 'react'

class ContactMe extends Component {
    render() {
        return (
            <div className="contactMeContainer">
                <div className="contactMe">
                    <h2>
                        Preferred contact is by email at:{' '}
                        <a href="mailto:bjs.swe@gmail.com">bjs397@nau.edu</a>
                    </h2>
                </div>
                <div className="logoContainer">
                    <div className="logo1">
                        <a
                            href="https://www.linkedin.com/in/brandonbjs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="images/LinkedIn_logo.png"
                                alt="LinkedIn Logo"
                                width="40%"
                                height="40%"
                            />
                        </a>
                    </div>
                    <div className="logo2">
                        <a
                            href="https://github.com/brandonbjs/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="images/github2.webp"
                                alt="GitHub Logo"
                                width="23%"
                                height="23%"
                            />
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactMe
