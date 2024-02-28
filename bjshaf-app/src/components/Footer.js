import React, { Component } from 'react'

class Footer extends Component {
    constructor(props) {
        super(props)

        // Set the initial state with the default active page
        this.state = {}
    }

    render() {
        return (
            <div className="footer">
                <a href="http://www.freepik.com">
                    Background Image Designed by starline / Freepik
                </a>
            </div>
        )
    }
}

export default Footer
