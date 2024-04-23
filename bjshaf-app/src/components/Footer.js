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
                <p>© 2024 Brandon James Shaffer. All rights reserved.</p>
            </div>
        )
    }
}

export default Footer
