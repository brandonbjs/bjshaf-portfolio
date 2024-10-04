import React, { Component } from 'react'

class LandingPage extends Component {
    render() {
        const { goToSlide } = this.props

        return (
            <div className="landingPage">
                <div className="landingPageLogo">
                    <img
                        src="images/transparentLogo6.png"
                        alt="Brandon James Shaffer Logo"
                    />
                </div>
                <div className="floatingButton">
                    <button
                        className="landingButton"
                        onClick={() => goToSlide(1)}
                    >
                        Read My Story...
                    </button>
                </div>
            </div>
        )
    }
}

export default LandingPage
