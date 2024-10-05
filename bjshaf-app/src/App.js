import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Project4 from './components/Project4'
import Project5 from './components/Project5'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import TravelGlobe from './components/TravelGlobe'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const buttonStyles = [
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // LandingPage
    { buttonColor: '#264653', textColor: '#FFFFFF' }, // StorySlider
    { buttonColor: '#264653', textColor: '#FFFFFF' }, // Project1
    { buttonColor: '#283618', textColor: '#FFFFFF' }, // Project2
    { buttonColor: '#c1121f', textColor: '#FFFFFF' }, // Project3
    { buttonColor: '#ff006e', textColor: '#FFFFFF' }, // Project4
    { buttonColor: '#00bbf9', textColor: '#FFFFFF' }, // Project5
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // Travel Globe
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // ContactMe
]

const locations = [
    {
        lat: 48.8566,
        lng: 2.3522,
        name: 'Paris, France',
        images: ['paris1.jpg', 'paris2.jpg'],
        description: 'A beautiful city known for the Eiffel Tower.',
    },
    {
        lat: 40.7128,
        lng: -74.006,
        name: 'New York City, USA',
        images: ['nyc1.jpg', 'nyc2.jpg'],
        description: 'The city that never sleeps!',
    },
    // Will add more locations later...
]

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [hoveredButton, setHoveredButton] = useState(null)

    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 1,
        mode: 'snap',
        spacing: 10,
        vertical: true,
        loop: true,
        dragSpeed: 0.8,
        duration: 2000,
        created: (instance) => {
            instance.container.addEventListener('wheel', (event) => {
                event.preventDefault()
                if (event.deltaY > 0) {
                    instance.next()
                } else {
                    instance.prev()
                }
            })
        },
        slideChanged: (instance) => {
            const currentSlideIndex = instance.track.details.rel
            setCurrentSlide(currentSlideIndex)
        },
    })

    const goToSlide = (index) => {
        slider.current?.moveToIdx(index)
    }

    // Get styles for all buttons based on the current active slide
    const getButtonStyle = (isActive, isHovered) => {
        const currentStyle = buttonStyles[currentSlide] // Get current slide style
        if (isActive || isHovered) {
            // Show button color on active or hover
            return {
                backgroundColor: currentStyle.buttonColor,
                color: currentStyle.textColor,
            }
        }
        // Default style (transparent)
        return {
            backgroundColor: 'transparent',
            color: currentStyle.buttonColor, // Text color matches the button color for consistency
        }
    }

    return (
        <Router>
            <Routes>
                {/* Main Portfolio Route */}
                <Route
                    path="/"
                    element={
                        <>
                            {/* Render Navbar only on non-TravelGlobe routes */}
                            <div className="navbar">
                                {/* Home Button */}
                                <button
                                    className={
                                        currentSlide === 0 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(0)}
                                    onMouseEnter={() => setHoveredButton(0)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 0,
                                        hoveredButton === 0
                                    )}
                                >
                                    HOME
                                </button>

                                {/* About Me Button */}
                                <button
                                    className={
                                        currentSlide === 1 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(1)}
                                    onMouseEnter={() => setHoveredButton(1)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 1,
                                        hoveredButton === 1
                                    )}
                                >
                                    ABOUT ME
                                </button>

                                {/* Projects Button */}
                                <button
                                    className={
                                        currentSlide >= 2 && currentSlide <= 6
                                            ? 'active'
                                            : ''
                                    }
                                    onClick={() => goToSlide(2)}
                                    onMouseEnter={() => setHoveredButton(2)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide >= 2 && currentSlide <= 6,
                                        hoveredButton === 2
                                    )}
                                >
                                    PROJECTS
                                </button>

                                {/* Contact Me Button */}
                                <button
                                    className={
                                        currentSlide === 7 ? 'active' : ''
                                    }
                                    onClick={() => goToSlide(7)}
                                    onMouseEnter={() => setHoveredButton(7)}
                                    onMouseLeave={() => setHoveredButton(null)}
                                    style={getButtonStyle(
                                        currentSlide === 7,
                                        hoveredButton === 7
                                    )}
                                >
                                    CONTACT ME
                                </button>
                            </div>

                            {/* The slider with your components */}
                            <div className="keen-slider" ref={sliderRef}>
                                <div className="keen-slider__slide">
                                    <LandingPage />
                                </div>
                                <div className="keen-slider__slide">
                                    <StorySlider />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project1 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project2 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project3 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project4 />
                                </div>
                                <div className="keen-slider__slide">
                                    <Project5 />
                                </div>
                                <div className="keen-slider__slide">
                                    <ContactMe />
                                </div>
                            </div>
                        </>
                    }
                />

                {/* Travel Globe Route */}
                <Route
                    path="/travel-globe"
                    element={<TravelGlobe locations={locations} />}
                />
            </Routes>
        </Router>
    )
}

export default App
