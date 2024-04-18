import React, { Component } from 'react'

class Pics extends Component {
    render() {
        return (
            <div className="pics">
                <p>DOPE PICS GO HERE</p>
                <div className="panelImage">
                    <img
                        src="images/sick_tripod.jpg"
                        alt="Headshot of Brandon James Shaffer"
                        style={{ display: 'block', margin: 'auto' }}
                        width="10%"
                        height="10%"
                    />
                </div>
            </div>
        )
    }
}

export default Pics
