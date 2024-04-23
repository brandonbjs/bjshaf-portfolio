import './App.css'
import React, { useState } from 'react'
import LandingPage from './components/LandingPage'
//import Footer from './components/Footer'
import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'
import ContactMe from './components/ContactMe'
import StorySlider from './components/StorySlider'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'

const App = () => {
    const [currentSlide, setCurrentSlide] = useState(0)
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
            setCurrentSlide(instance.track.details.rel) // Update the current slide index using the relative index
        },
    })

    // function to send a person to a particular slide upon button press
    // uses built in function moveToIdx from keen-slider
    // can add in the Cool Pics section again once the website is in prod
    const goToSlide = (index) => {
        slider.current?.moveToIdx(index)
    }

    return (
        <>
            <div className="navbar">
                <button
                    className={currentSlide === 0 ? 'active' : ''}
                    onClick={() => goToSlide(0)}
                >
                    HOME
                </button>
                <button
                    className={currentSlide === 1 ? 'active' : ''}
                    onClick={() => goToSlide(1)}
                >
                    ABOUT ME
                </button>
                <button
                    className={
                        currentSlide >= 2 && currentSlide <= 4 ? 'active' : ''
                    }
                    onClick={() => goToSlide(2)}
                >
                    PROJECTS
                </button>
                <button
                    className={currentSlide === 5 ? 'active' : ''}
                    onClick={() => goToSlide(5)}
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
                    <ContactMe />
                </div>
            </div>
        </>
    )
}

export default App
