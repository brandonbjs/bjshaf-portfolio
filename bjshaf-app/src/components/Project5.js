import React, { Component } from 'react'

class Project5 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectImageLeft">
                    <a
                        href="https://github.com/brandonbjs/aio-stats"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/thumbnail0.PNG"
                            alt="Screenshot of placeholder work in progress sign."
                            style={{ display: 'block', margin: 'auto' }}
                            width="80%"
                            height="80%"
                        />
                    </a>
                </div>
                <div className="projectContentRight">
                    <div className="projectDescription">
                        <a
                            href="https://github.com/brandonbjs/aio-stats"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>AIO Stats</h1>
                        </a>

                        <p>
                            AIO Stats is a Next.js application that consolidates
                            NFL game data from multiple external APIs, including
                            real-time sportsbook odds (Rundown), OpenWeather
                            hourly forecasts (One Call 3.0), and team injury
                            reports (Sleeper API). The app uses dynamic server
                            routes, data normalization, and an optimized grid
                            layout to deliver a responsive, high-performance
                            analytics tool.
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: React, Next.js, Tailwind CSS,
                            TheRundownAPI, OpenWeather One Call 3.0, Sleeper
                            API, Node.js, Vercel, Postman, Git, and{' '}
                            <a
                                href="https://github.com/brandonbjs/aio-stats"
                                className="project-link"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                GitHub
                            </a>
                        </b>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project5
