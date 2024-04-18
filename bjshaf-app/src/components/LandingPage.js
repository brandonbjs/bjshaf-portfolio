import React, { Component } from 'react'
import { Element } from 'react-scroll'
import { Link } from 'react-scroll'

class LandingPage extends Component {
    render() {
        return (
            <div className="landingPage">
                <Element name="welcome">
                    <div className="landingPageLogo"></div>
                    <div className="floatingButton">
                        <Link
                            className="button"
                            to="storySliderContainer"
                            smooth={true}
                            offset={50}
                        >
                            Read My Story...
                        </Link>
                    </div>
                </Element>
            </div>
        )
    }
}

export default LandingPage
