import React from 'react'
import { useNavigate } from 'react-router-dom' // Import useNavigate for redirection

const Project4 = () => {
    const navigate = useNavigate() // Create a navigate function

    const handleImageClick = () => {
        navigate('/travel-globe') // Redirect to the travel globe page
    }

    return (
        <div className="projectContainer">
            <div className="projectContentLeft">
                <div className="projectDescription">
                    <h1
                        onClick={handleImageClick}
                        style={{
                            textDecoration: 'underline',
                            cursor: 'pointer',
                        }}
                    >
                        My Travel Globe
                    </h1>

                    <p>
                        I am developing an exciting new feature for my portfolio
                        website: a 3D interactive world map. This map will
                        highlight my travel destinations with pins, complemented
                        by images of the places I've visited, creating a dynamic
                        and immersive experience for users. Try it now by
                        clicking the header or the globe!
                    </p>
                </div>
                <div className="projectTechnologies">
                    <b>
                        Technologies Used: HTML, CSS, JavaScript, React, GitHub
                        Pages, Amazon EC2, Git, and{' '}
                        <a
                            href="https://github.com/brandonbjs/bjshaf-portfolio/blob/main/bjshaf-app/src/components/TravelGlobe.js"
                            className="project-link"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                        .
                    </b>
                </div>
            </div>
            <div className="projectImageRight">
                <img
                    src="images/globeSnip-edited.png"
                    alt="Still of the globe being used for my TravelGlobe component."
                    style={{
                        display: 'block',
                        margin: 'auto',
                        cursor: 'pointer',
                    }}
                    width="60%"
                    height="60%"
                    onClick={handleImageClick} // Redirect when the image is clicked
                />
            </div>
        </div>
    )
}

export default Project4
