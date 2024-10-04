import './App.css'
import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
//import Footer from './components/Footer'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import Project4 from './components/Project4'
import Project5 from './components/Project5'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const buttonStyles = [
    { buttonColor: '#e76f51', textColor: '#FFFFFF' }, // LandingPage
    { buttonColor: '#264653', textColor: '#FFFFFF' }, // StorySlider
    { buttonColor: '#3357FF', textColor: '#FFFFFF' }, // Project1
    { buttonColor: '#FF33A6', textColor: '#000000' }, // Project2
    { buttonColor: '#33FFF9', textColor: '#000000' }, // Project3
    { buttonColor: '#FFEB33', textColor: '#000000' }, // Project4
    { buttonColor: '#8B33FF', textColor: '#FFFFFF' }, // Project5
    { buttonColor: '#FF338F', textColor: '#FFFFFF' }, // ContactMe
]

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [hoveredButton, setHoveredButton] = useState(null) // Track hovered button

    const [sliderRef, slider] = useKeenSlider({
        slidesPerView: 1,
        mode: 'snap',
        spacing: 10,
        vertical: true,
        loop: true,
        dragSpeed: 0.8,
        duration: 2000,
        created: (instance) => {
            // Attach event listener for mousewheel scroll
            // uses keen-slider built in next and prev functions
            instance.container.addEventListener('wheel', (event) => {
                event.preventDefault()
                if (event.deltaY > 0) {
                    instance.next()
                } else {
                    instance.prev()
                }
            })
        },
        destroyed: (instance) => {
            // Remove event listener when the component is unmounted
            instance.container.removeEventListener('wheel', (event) => {})
        },
        slideChanged: (instance) => {
            // Accessing the details directly as a property
            const currentSlideIndex = instance.track.details.rel
            setCurrentSlide(currentSlideIndex)
        },
    })

    // function to send a person to a particular slide upon button press
    // uses built in function moveToIdx from keen-slider
    // can add in the Cool Pics section again once the website is in prod
    const goToSlide = (index) => {
        slider.current?.moveToIdx(index)
    }

    // Function to determine whether the "Projects" button should be active/hovered
    const isProjectsButtonActive = () => currentSlide >= 2 && currentSlide <= 6

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

    // navbar tracks which slide is the "active" slide for styling purposes and uses the
    // goToSlide() function to allow for button functionality
    return (
        <>
            <div className="navbar">
                {/* Home Button */}
                <button
                    className={currentSlide === 0 ? 'active' : ''}
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
                    className={currentSlide === 1 ? 'active' : ''}
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

                {/* Projects Button (for slides 2 to 6) */}
                <button
                    className={isProjectsButtonActive() ? 'active' : ''}
                    onClick={() => goToSlide(2)} // Go to the first project slide when clicked
                    onMouseEnter={() => setHoveredButton(2)}
                    onMouseLeave={() => setHoveredButton(null)}
                    style={getButtonStyle(
                        isProjectsButtonActive(),
                        hoveredButton === 2
                    )}
                >
                    PROJECTS
                </button>

                {/* Contact Me Button */}
                <button
                    className={currentSlide === 7 ? 'active' : ''}
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
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide">
                    <LandingPage goToSlide={goToSlide} />
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
    )
}

export default App
