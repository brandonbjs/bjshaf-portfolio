import React, { Component } from 'react'
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
                    <a
                        href="https://github.com/brandonbjs/bjshaf-portfolio"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h1>My Travel Globe</h1>
                    </a>
                    <p>
                        I am implementing a new feature within my portfolio
                        website. I am designing a 3D interactive world map,
                        showcasing my travel destinations with pins and images
                        of locations visited.
                    </p>
                </div>
                <div className="projectTechnologies">
                    <b>
                        Technologies Used: HTML, CSS, JavaScript, React, GitHub
                        Pages, Amazon EC2, Git, and{' '}
                        <a
                            href="https://github.com/brandonbjs/bjshaf-portfolio"
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
                    src="images/work_in_progress.png"
                    alt="Screenshot of placeholder work in progress sign."
                    style={{ display: 'block', margin: 'auto' }}
                    width="60%"
                    height="60%"
                    onClick={handleImageClick} // Redirect when the image is clicked
                />
            </div>
        </div>
    )
}

export default Project4
