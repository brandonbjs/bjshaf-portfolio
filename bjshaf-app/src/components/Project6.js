import React, { Component } from 'react'

class Project6 extends Component {
    render() {
        // each project will have their own component, complete with an image, description, and technologies used
        return (
            <div className="projectContainer">
                <div className="projectImageRight">
                    <a
                        href="https://aio-stats.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="images/shafJobsScreenGrab.png"
                            alt="Screenshot of the ShafJobs Dashboard"
                            style={{ display: 'block', margin: 'auto' }}
                            width="80%"
                            height="80%"
                        />
                    </a>
                </div>
                <div className="projectContentLeft">
                    <div className="projectDescription">
                        <a
                            href="https://aio-stats.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {' '}
                            <h1>ShafJobs: Job Listing Aggregator</h1>
                        </a>

                        <p>
                            ShafJobs is a full-stack MERN web application built to consolidate entry-level tech job 
                            listings from eight trusted sources into a single, personalized dashboard. The app leverages Node.js 
                            and Express.js on the backend to orchestrate parallel API calls and Playwright-powered web 
                            scrapers, with all listing data stored and cached in MongoDB via Mongoose. On the frontend, 
                            a React and Tailwind CSS interface delivers a minimal, responsive job browsing experience 
                            complete with a multi-filter sidebar, color-coded industry badges, location tags, and a 
                            match scoring engine that ranks listings.
                            
                        </p>
                    </div>
                    <div className="projectTechnologies">
                        <b>
                            Technologies Used: React, Next.js, Tailwind CSS, MongoDB, 
                            Node.js, Git, and{' '}
                            <a
                                href="https://github.com/brandonbjs/shafJobs"
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

export default Project6